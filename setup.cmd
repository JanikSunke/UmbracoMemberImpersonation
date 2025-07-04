@ECHO OFF
:: This file can now be deleted!
:: It was used when setting up the package solution (using https://github.com/LottePitcher/opinionated-package-starter)

:: set up git
git init
git branch -M main
git remote add origin https://github.com/JanikSunke/UmbracoMemberImpersonation.git

:: ensure latest Umbraco templates used
dotnet new install Umbraco.Templates --force

:: use the umbraco-extension dotnet template to add the package project
cd src
dotnet new umbraco-extension -n "UmbracoMemberImpersonation" --site-domain "https://localhost:44312" --include-example

:: replace package .csproj with the one from the template so has nuget info
cd UmbracoMemberImpersonation
del UmbracoMemberImpersonation.csproj
ren UmbracoMemberImpersonation_nuget.csproj UmbracoMemberImpersonation.csproj

:: add project to solution
cd..
dotnet sln add "UmbracoMemberImpersonation"

:: add reference to project from test site
dotnet add "UmbracoMemberImpersonation.TestSite/UmbracoMemberImpersonation.TestSite.csproj" reference "UmbracoMemberImpersonation/UmbracoMemberImpersonation.csproj"
