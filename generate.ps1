if(Test-Path -Path './docfx') {
    ./docfx/docfx.exe metadata
} else {
    docfx metadata
}
Get-ChildItem './api/*.yml' | ForEach {
    (Get-Content $_) | ForEach {$_ -Replace 'git@github.com:ServiceStack/ServiceStack.git', 'https://github.com/ServiceStack/ServiceStack'} | Set-Content $_
}
if (Test-Path -Path './DocFxMarkdownGen') {
    echo "Already exists, skipping DocFXMarkdownGen clone"
} else {
    git clone git@github.com:Layoric/DocFxMarkdownGen.git
}
cd DocFxMarkdownGen
dotnet publish -r win-x86 -p:PublishSingleFile=true --self-contained false -o ../out
cd ..
Copy-Item "./out/DocFxMarkdownGen.exe" -Destination "./dfmg.exe"
./dfmg.exe
yarn install
npm run build