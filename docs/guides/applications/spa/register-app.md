# Register OpenID Connect single-page app
To enable sign in to you single page application with Asgardeo, the first step would be to to register your single-page application using the Asgardeo console. 

You can register your single page app as an OpenID Connect SPA and obtain client credentials. 

Since single-page applications are public clients, Asgardeo will issue only a client ID (no client secrets will be issued) for your single-page application.

This guide will guide you how to [register an application](#register-app) and [obtain client ID](#obtain-client-id). 

## Register app
You need to login to your [Asgardeo Console](https://console.asgardeo.io/login) to register your OpenID Connect single-page application.
<CommonGuide guide='guides/fragments/manage-app/register-app/configure-spa-in-asgardeo.md'/>

## Obtain client ID
When your application wants to communicate to Asgardeo, it needs client ID to use as an identifier. 

After registering your application, you can obtain client ID. By navigating to the **protocol** section of the application, you can get the **Client ID**.
<img :src="$withBase('/assets/img/guides/applications/get-client-id.png')" alt="Get client ID of SPA">

## What's next?
Now you've registered your single-page application. Now you can:
- <a href = "/guides/applications/spa/configure-login">Configure OpenID Connect login to your single-page app</a>
- <a href="/quickstarts/">Try out samples</a>
- <a href="/sdks/">Try out single page applications SDKs</a>
- <a href="/guides/applications/integrate-public-client/">Explore authentication flow in depth</a>
