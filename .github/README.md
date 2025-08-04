# Umbraco Member Impersonation

[![Downloads](https://img.shields.io/nuget/dt/Umbraco.Community.UmbracoMemberImpersonation?color=cc9900)](https://www.nuget.org/packages/Umbraco.Community.UmbracoMemberImpersonation/)
[![NuGet](https://img.shields.io/nuget/vpre/Umbraco.Community.UmbracoMemberImpersonation?color=0273B3)](https://www.nuget.org/packages/Umbraco.Community.UmbracoMemberImpersonation)
[![GitHub license](https://img.shields.io/github/license/JanikSunke/UmbracoMemberImpersonation?color=8AB803)](../LICENSE)

## Overview
Umbraco Member Impersonation allows backoffice users to impersonate members directly from the Umbraco backoffice. This is a useful feature for administrators who need to perform tasks on behalf of a member who is not logged in.
- Quickly switch to any member account
- Easily return to your admin session

<p align="center">
  <img src="/docs/assets/member-impersonation-demo.mp4" alt="Video">
</p>

## Features
- Impersonate any member from the Members section
- Modal confirmation and destination selection
- Context-aware actions (only available for authorized users)
- Built with Umbraco's management APIs

## Installation

Add the package to an existing Umbraco website (v15+) from nuget:

`dotnet add package Umbraco.Community.UmbracoMemberImpersonation`

## Contributing

Contributions to this package are most welcome! Please read the [Contributing Guidelines](CONTRIBUTING.md).

## Acknowledgments

Created by [Janik Sunke](https://github.com/JanikSunke).
