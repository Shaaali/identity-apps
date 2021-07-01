# Single page applications

Single-page applications (SPAs) are apps that run on the browser and do not require a page reload with change 
in content. SPAs load a single HTML page initially and dynamically update the content as a user interacts with it. 
They fetch content by doing API calls to a web server directly from the browser.

Since SPAs run their logic entirely on the browser they are also known as browser-based apps. The apps you use on a 
daily basis including Gmail, Facebook, Google Docs, and Google Maps are SPAs.

## Secure your SPA with Asgardeo

SPAs by design run with the source code exposed in the browser. So they become incapable of maintaining any secrets.

Based on the [OAuth 2.0 best practices for browser-based apps](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-browser-based-apps-08)
Asgardeo recommends securing your SPAs using the OpenID Connect Authorization Code Flow for public clients 
with the PKCE ([Proof Key for Code Exchange](https://datatracker.ietf.org/doc/html/rfc7636)) extension.

The following guides provide the detailed steps needed to secure your SPAs with Asgradeo using the OpenID Connect 
Authorization Code Flow for public clients with the PKCE. 


## Related Links
* [Configure OpenID Connect login to your Single page application ](./configure-login/)
* [Tryout React SPA Sample](/quickstarts/qsg-spa-react.md)
* [Tryout Angular SPA Sample](/quickstarts/qsg-spa-angular.md)
* [Tryout JavaScript SPA Sample](/quickstarts/qsg-spa-javascript.md)
* [Explore OpenID Connect flow in depth](../integrate-public-client/)
* [Try React SDK](/sdks/react.md)
* [Try Angular SDK](/sdks/angular.md)
* [Try Javascript SDK](/sdks/javascript.md)
