#!/usr/bin/env bash
# deploy.sh
# Builds the combined site:
#   dist/index.html        ← new Aerial Vision Science landing page
#   dist/portfolio/        ← older React biographical portfolio
# Then deploys dist/ to the gh-pages branch.

set -e

echo "==> Building React portfolio app..."
PUBLIC_URL=/portfolio npx react-scripts build

echo "==> Assembling dist/..."
rm -rf dist
mkdir -p dist/portfolio

# Landing page and any top-level static assets
cp index.html dist/index.html
[ -f bicycle.jpg ] && cp bicycle.jpg dist/bicycle.jpg
[ -f AerialVisionScienceIcon.png ] && cp AerialVisionScienceIcon.png dist/AerialVisionScienceIcon.png

# Tern project images for the landing page case study
[ -d tern_project ] && cp -r tern_project dist/tern_project

# React build output into portfolio/
cp -r build/. dist/portfolio/

echo "==> Deploying to gh-pages branch..."
npx gh-pages -d dist

echo "==> Done. Site will be live at https://russelljjarvis.github.io/home/"
