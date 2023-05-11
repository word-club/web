#!/usr/bin/env sh

DIST_BRANCH="dist"
BASE_DIR="/home/runner/work/word-club/web"

echo "Building Started...."
yarn build
ls -la
echo "Building Completed."


echo "Deploying Started...."
mkdir -p "${BASE_DIR}""/temp"
mv dist "${BASE_DIR}""/temp"

git fetch origin ${DIST_BRANCH}
git checkout ${DIST_BRANCH}

rm -rf dist
mv "${BASE_DIR}"/temp/dist/* .

if [ -n "$(git status --porcelain)" ]; then
  git add .
  git -c user.name="Github Bot" -c user.email="kiranparajuli589@gmail.com" commit -m "Update the build code"
  git push origin ${DIST_BRANCH}
fi

rm -rf "${BASE_DIR}""/temp"
echo "Deploying Completed"
