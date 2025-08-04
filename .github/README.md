# Umbraco Member Impersonation

[![Downloads](https://img.shields.io/nuget/dt/Umbraco.Community.MemberImpersonation?color=cc9900)](https://www.nuget.org/packages/Umbraco.Community.MemberImpersonation/)
[![NuGet](https://img.shields.io/nuget/vpre/Umbraco.Community.MemberImpersonation?color=0273B3)](https://www.nuget.org/packages/Umbraco.Community.MemberImpersonation)
[![GitHub license](https://img.shields.io/github/license/JanikSunke/UmbracoMemberImpersonation?color=8AB803)](../LICENSE)

## Overview
Umbraco Member Impersonation allows backoffice users to impersonate members directly from the Umbraco backoffice. This is a useful feature for administrators who need to perform tasks on behalf of a member who is not logged in.
- Quickly switch to any member account
- Easily return to your admin session

<p align="center">
  <img src="/docs/assets/impersonation-demo.gif" alt="Video">
</p>

## Features
- Impersonate any member from the Members section
- Modal confirmation and destination selection
- Context-aware actions (only available for authorized users)
- Only available for backoffice users with access to sensitive data
- Built with Umbraco's management APIs

## Installation

Add the package to an existing Umbraco website (v15+) from nuget:

`dotnet add package Umbraco.Community.MemberImpersonation`

## Contributing

Contributions to this package are most welcome! Please read the [Contributing Guidelines](CONTRIBUTING.md).

## Acknowledgments

Created by [Janik Sunke](https://github.com/JanikSunke).
