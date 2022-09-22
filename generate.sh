#!/bin/sh

cd ..
dotnet build
cd docs
docfx metadata
find ./api/*.yml -type f -exec sed -i "s|git@github.com:ServiceStack/ServiceStack.git|https://github.com/ServiceStack/ServiceStack|g" {} \;
dfmg