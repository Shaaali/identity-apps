#!/usr/bin/env bash

### Detects any broken links in the generated HTML site
### Script based on the idea in https://matthewsetter.com/writing-tools/npm-broken-link-checker/
### Broken Link Checker NPM library: https://github.com/stevenvachon/broken-link-checker

# For the broken link checker to work, we need to serve the docs locally. We are using npm serve command for this
PORT=4567

# Kill any running serves we used to host the docs
lsof -ti:$PORT | xargs kill
rm -rf tmp

# Make a temporary directory to host asgardeo docs in asgardeo/docs/ path
rm -rf tmp
mkdir tmp
mkdir tmp/asgardeo
mkdir tmp/asgardeo/docs
cp -r docs/.vuepress/dist/* tmp/asgardeo/docs/

cd tmp || exit
# https://www.npmjs.com/package/serve
serve -p $PORT &
sleep 5

# https://www.npmjs.com/package/broken-link-checker
if blc --input http://localhost:$PORT/asgardeo/docs/ -grf; then
  echo "No broken links found."
  exit 0
else
  echo "Broken links found."
  exit 1
fi
