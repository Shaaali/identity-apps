# Variables
REPO_DIR=$1
GIT_TOKEN=$2
DOCS_INFO_JSON_PATH=$REPO_DIR/package.json
VERSION=$(jq -r '.version' $DOCS_INFO_JSON_PATH)
ASGARDEO_DOCS_NAME=asgardeo-docs-$VERSION
GIT_USERNAME='wso2-iam-cloud-bot'

# Check relevant packages are available
command -v npm >/dev/null 2>&1 || { echo >&2 "Error: $0 script requires 'npm' for buid.  Aborting as not found."; exit 1; }
command -v jq >/dev/null 2>&1 || { echo >&2 "Error: $0 script requires 'jq' for JSON Processing.  Aborting as not found."; exit 1; }
command -v gh >/dev/null 2>&1 || { echo >&2 "Error: $0 script requires 'gh' to call GitHub APIs.  Aborting as not found."; exit 1; } 

# Build asgardeo docs
echo Building asgardeo-docs
npm ci
npm run build

# Copy built distribution 
cp -r docs/.vuepress/dist out

# Zip the distribution
zip -r $ASGARDEO_DOCS_NAME.zip out

# Release the version
echo $GIT_TOKEN | gh auth login --with-token
gh release create --title "Asgardeo Docs - v$VERSION" v$VERSION $ASGARDEO_DOCS_NAME.zip

# Create new version
incrementPackVersion() {
    old_version=$1

    if [[ $old_version == *"-"* ]]; then
        regex='^[0-9]+$'
        last_digit="${old_version: -1}"

        if ! [[ $last_digit =~ $regex ]] ; then
            echo "$old_version"2
        else
            echo "$(echo $old_version | sed 's/.$//')$((last_digit+1))"
        fi
    else
        echo $(echo $old_version | awk -F. '{print $1"."$2"."$3+1}')
    fi
}

# Update version in package.json
NEW_ASGARDEO_DOCS_VERSION=$(incrementPackVersion $VERSION)
tmp=$(mktemp)
jq --arg variable "$NEW_ASGARDEO_DOCS_VERSION" '.version = $variable' package.json > "$tmp" && mv "$tmp" package.json

git -C $REPO_DIR config user.name "$GIT_USERNAME"
git -C $REPO_DIR config user.email "iam-cloud@wso2.com"

git -C $REPO_DIR add $DOCS_INFO_JSON_PATH
git -C $REPO_DIR commit -m "Updating version in package.json to $NEW_ASGARDEO_PACK_VERSION"
git -C $REPO_DIR push

mkdir asgardeo-deployment-pipeline

git clone https://$GIT_USERNAME:$GIT_TOKEN@github.com/wso2-enterprise/asgardeo-deployment-pipeline.git asgardeo-deployment-pipeline
git -C asgardeo-deployment-pipeline config user.name "$GIT_USERNAME"
git -C asgardeo-deployment-pipeline config user.email "iam-cloud@wso2.com"
git -C asgardeo-deployment-pipeline checkout dev-001

REF_IN_DEV=$(grep 'GITHUB_RELEASE_TAG:' $REPO_DIR/asgardeo-deployment-pipeline/cd-pipelines/docs/dev-setup-variables.yaml)
sed -i 's|'"${REF_IN_DEV}"'|  GITHUB_RELEASE_TAG: v'"${VERSION}"'|' $REPO_DIR/asgardeo-deployment-pipeline/cd-pipelines/docs/dev-setup-variables.yaml

# Push new release version to dev-deploy.yaml.
git -C asgardeo-deployment-pipeline add $REPO_DIR/asgardeo-deployment-pipeline/cd-pipelines/docs/dev-setup-variables.yaml
git -C asgardeo-deployment-pipeline commit -m "[Dev] Update asgardeo-docs release version to - $VERSION"
git -C asgardeo-deployment-pipeline push origin dev

echo "Release builder execution is completed."
