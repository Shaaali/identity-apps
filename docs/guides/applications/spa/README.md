# Single page applications

Single-page applications(SPAs) are apps that run on the browser and do not require a page reload with change 
in content. 

The main advantage of single-page application is its speed. Since content is dynamically updated as the user interacts with it, user does not need to wait for page reloads. User can experience a seamless flow with high responsiveness from application. 

JavaScript frameworks and libraries, such as AngularJS, React, Vue.js, are some popular technologies adopted to build SPAs.

## Secure your SPA with Asgardeo

SPAs by design run with the source code exposed in the browser. So they become incapable of maintaining any secrets. These kind of applications are called as public clients.

Based on the [OAuth 2.0 best practices for browser-based apps](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-browser-based-apps-08), Asgardeo recommends securing your SPAs using the OpenID Connect Authorization Code Flow for public clients 
with the PKCE ([Proof Key for Code Exchange](https://datatracker.ietf.org/doc/html/rfc7636)) extension.

The following guides provide the detailed steps needed to secure your SPAs with Asgradeo using the OpenID Connect 
Authorization Code Flow for public clients with the PKCE. 

## What's next
- [Configure OpenID Connect login to your Single page application ](./configure-login/)
- [Explore OpenID Connect flow for Single page apps in depth](../integrate-public-client/)

### Try out samples
- [React SPA Sample](/quickstarts/qsg-spa-react.md)
- [Angular SPA Sample](/quickstarts/qsg-spa-angular.md)
- [JavaScript SPA Sample](/quickstarts/qsg-spa-javascript.md)

### Use an SDK to enable sign in to your app
- [React SDK](/sdks/react.md)
- [Angular SDK](/sdks/angular.md)
- [Javascript SDK](/sdks/javascript.md)
