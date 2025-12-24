#!/usr/bin/env sh
# abort on errors
set -e
# build
npm run build
# navigate into the build output directory
cd dist
# if you are deploying to a custom domain, write it into CNAME
echo 'valerieremaker.com' > CNAME

# Initialize a git repo, commit the built files, and push to gh-pages branch
git init
# ensure the remote points to the correct repository (change if needed)
git remote add origin git@github.com:vremaker/portfolio.git || true
git add -A
git commit -m 'deploy' || true
# create or switch to gh-pages branch and force-push to origin
git branch -M gh-pages
git push -f origin gh-pages
cd -
