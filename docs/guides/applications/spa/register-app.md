# Register OpenID Connect single-page app
To integrate your single page application with Asgardeo, first you need to register your single-page application as an OpenID Connect single-page application in Asgardeo console and obtain client credentials. Since single-page applications are public clients, Asgardeo will issue only client ID for single-page applications. 

This guide will guide you how to [register an application](#register-app) and [obtain client ID](#obtain-client-id). 

## Register app
You need to login to your [Asgardeo Console](https://console.asgardeo.io/login) to register your OpenID Connect single-page application.
<CommonGuide guide='guides/fragments/manage-app/register-app/configure-spa-in-asgardeo.md'/>

## Obtain client ID
When your application wants to communicate to Asgardeo, it needs client ID to use as an identifier. Typically, client ID and client secret are issued for OAuth applications. Since SPA is a public client, it can't store client secret in secure way. So Asgardeo does not issue client id for single-page applications.

After registering your application, you can obtain client ID. By navigating to the **protocol** section of the application, you can obtain **Client ID**.
<img :src="$withBase('/assets/img/guides/applications/get-client-id.png')" alt="Get client ID of SPA">

## What's next?
Now you've registered your single-page application. Now you can:
- <a href = "/guides/applications/spa/configure-login">Configure OpenID Connect login to your single-page app</a>
- <a href="/quickstarts/">Try out samples</a>
- <a href="/sdks/">Try out single page applications SDKs</a>
- <a href="/guides/applications/integrate-public-client/">Explore authentication flow in depth</a>
