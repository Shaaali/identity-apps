# Variables
REPO_DIR=$1
GIT_TOKEN=$2
DOCS_INFO_JSON_PATH=$REPO_DIR/package.json
VERSION=$(jq -r '.version' $DOCS_INFO_JSON_PATH)
ASGARDEO_DOCS_NAME=asgardeo-docs-$VERSION

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
gh release create v$VERSION $ASGARDEO_DOCS_NAME.zip

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
sed -ie "s/$VERSION/$NEW_ASGARDEO_DOCS_VERSION/g" $DOCS_INFO_JSON_PATH

git -C $REPO_DIR config user.name "wso2-iam-cloud-bot"
git -C $REPO_DIR config user.email "iam-cloud@wso2.com"

git -C $REPO_DIR add $DOCS_INFO_JSON_PATH
git -C $REPO_DIR commit -m "Updating version in package.json to $NEW_ASGARDEO_PACK_VERSION"
git -C $REPO_DIR push
