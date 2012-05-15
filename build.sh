#!/bin/sh

jekyll
rm _site/build.sh
mv _site/ _temp/
mkdir _site
mkdir _site/weaponry
mv _temp/* _site/weaponry/
rm -d _temp