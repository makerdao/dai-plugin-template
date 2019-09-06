# #!/usr/bin/env bash

set -e

rm -rf dist/*
./node_modules/.bin/babel --no-babelrc -d ./dist ./src
