#!/bin/sh

docfx.exe metadata
# Fix repo values to link correctly to GitHub.
find ./api/*.yml -type f -exec sed -i "s|git@github.com:ServiceStack/ServiceStack.git|https://github.com/ServiceStack/ServiceStack|g" {} \;
# Pull down custom DocFxMarkdownGen to generate MarkDown
if [ ! -d ./DocFxMarkdownGen ]; then
  git clone git@github.com:Layoric/DocFxMarkdownGen.git
fi
unameOut="$(uname -s)"

case "${unameOut}" in
    Linux*)     machine=linux-x64;;
    CYGWIN*)    machine=win-x86;;
    MINGW*)     machine=win-x86;;
    *)          machine=linux-x64
esac
echo ${machine}
cd DocFxMarkdownGen
dotnet publish -r ${machine} -p:PublishSingleFile=true --self-contained false -o ../out
cd ..
cp ./out/DocFxMarkdownGen ./dfmg
chmod +x ./dfmg
./dfmg
yarn install
npm run build
