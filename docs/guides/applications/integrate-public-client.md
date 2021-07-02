# Build login for public clients with OpenID Connect

A public client is an application which cannot keep the client credentials in secure way. <a href="/guides/applications/spa/">Single-page applications</a>, and native mobile applications are some examples for public clients. 

By following this guide, you will be able to manually build OpenID Connect login to your application with Asgardeo using authorization code grant.

It is recommended to use authorization code grant type for public clients. In addition to that, [PKCE](https://datatracker.ietf.org/doc/html/rfc7636) should be used along with authorization code to mitigate code interception attacks.

## Prerequisite
To get started, you need to have an application registered in Asgardeo. If you don't have an app registered, go to [Asgardeo console](https://console.asgardeo.io/) to <a href="../register-app">register an application</a>.

## Steps to build login
You need following steps to build login to your app with Asgardeo:
1. [Get authorization code](#get-authorization-code)
2. [Get tokens](#get-tokens)
3. [Validate signature of ID token](#validate-signature-of-id-token)
4. [Retrieve the user information](#retrieve-user-details)
5. [Logout user](#logout-the-application)
6. [Revoke tokens](#revoke-tokens)

----

### Get authorization code

<CommonGuide guide='guides/fragments/manage-app/build-manual-login/authorization-request-for-public-client.md'/>

<br>

----

### Get tokens

<CommonGuide guide='guides/fragments/manage-app/build-manual-login/get-token-for-public-client.md'/>

<br>

To get refresh token, you need to enable `Refresh Token` grant type for the application. By default, it is enabled for **Single-page application**.

<br>

----

### Validate signature of ID token

<CommonGuide guide='guides/fragments/manage-app/build-manual-login/validate-id-token-jwks-for-apps.md'/>

<br/>

----

### Retrieve user details

<CommonGuide guide='guides/fragments/manage-app/build-manual-login/retrieve-user-info-for-apps.md'/>

<br>

----

### Logout the application

<CommonGuide guide='guides/fragments/manage-app/build-manual-login/oidc-logout-for-apps.md'/>

<br/>

----

### Revoke tokens

<CommonGuide guide='guides/fragments/manage-app/build-manual-login/revoke-tokens-for-public-client.md'/>

----
