#!/bin/sh

docfx.exe metadata
cat ./api/ServiceStack.Blazor.BlazorClient.yml
find ./api/*.yml -type f -exec sed -i "s|git@github.com:ServiceStack/ServiceStack.git|https://github.com/ServiceStack/ServiceStack|g" {} \;
DocFxMarkdownGen
yarn install
npm run build
