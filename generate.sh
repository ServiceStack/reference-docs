#!/bin/sh

docfx.exe metadata
find ./api/*.yml -type f -exec sed -i "s|git@github.com:ServiceStack/ServiceStack.git|https://github.com/ServiceStack/ServiceStack|g" {} \;
dfmg
yarn install
npm run build
