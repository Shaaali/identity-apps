# Single page application

A Single Page Application (SPA) is a web application that loads a single HTML page initially and dynamically update that page as the user interacts with the application. A SPA works inside a browser and does not require page reloading during use. The apps you use on a daily basis including Gmail, Facebook, Google Docs, and Google Maps are SPAs.
https://www.youtube.com/watch?v=tmKD2famPJc&t=129s

## SPA with OIDC

<img :src="$withBase('/assets/img/guides/spa-oidc.png')" alt="spa-with-oidc-diagram">

Describes the diagram 

Callback URL in the app, how Asgardeo provides OIDC security to the application.

## Pick the technology 

SPAs are written in different Javascript frameworks. 

Following guides provide steps to add OIDC authentication to your SPA using Asgardeo SDKs and integrate it with Asgardeo.

::: center
[React](./spa-new-react-app.md)\
[Angular](./spa-angular.md)\
[Javascript](./spa-javascript.md)

:::

**Using a different framework?**

Refer the [Add authentication to SPA](./spa-configure-general.md) guide to check how to add authentication to your SPA written using a different framework or without using the Asgardeo SDKs.

**Want to try out a sample application with Asgardeo?**

Refer the [Single page application sample](./spa-sample-app.md) guide in the quickstart section.
