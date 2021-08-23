# Build login for confidential clients with OpenID Connect

A confidential client is an application which can keep the client credentials securely. For example, <a :href="$withBase('/guides/applications/web-app')">Web applications</a> is a confidential client where it can store the client secret in backend database, or some configuration store securely without exposing to third parties. 

By following this guide, you will be able to understand the OpenID connect login step by step and build on to your application.

The below diagram explains how login using authorization code grant works with Asgardeo.
<img class="borderless-img" :src="$withBase('/assets/img/guides/applications/oidc/auth_code_flow.png')" alt="Authorization code flow">

## Prerequisite
To get started, you need to have an application registered in Asgardeo. If you don't have an app registered, go to [Asgardeo console](https://console.asgardeo.io/) to <a :href="$withBase('/guides/applications/web-app/oidc/register-app/#register-app')">register an application</a>.

## Steps to build login
You need following steps to integrate to build login to your app with Asgardeo:
1. [Get authorization code](#get-authorization-code)
2. [Get tokens](#get-tokens)
3. [Validate signature of ID tokens](#validate-signature-of-id-tokens)
4. [Retrieve the user information](#retrieve-user-details)
5. [Logout user](#logout-the-application)
6. [Revoke tokens](#revoke-tokens)

----

### Get authorization code
<CommonGuide guide='guides/fragments/manage-app/build-manual-login/authorize-request-for-confidential-client.md'/>

<br>

----

### Get tokens

<CommonGuide guide='guides/fragments/manage-app/build-manual-login/get-token-confidential-client.md'/>

<br>

----

### Validate signature of ID tokens

<CommonGuide guide='guides/fragments/manage-app/build-manual-login/validate-id-token-jwks-for-apps.md'/>

<br/>

----

### Retrieve user details

<CommonGuide guide='guides/fragments/manage-app/build-manual-login/retrieve-user-info-for-apps.md'/>

<br/>

----

### Logout the application

<CommonGuide guide='guides/fragments/manage-app/build-manual-login/oidc-logout-for-apps.md'/>

<br/>

----

### Revoke tokens

<CommonGuide guide='guides/fragments/manage-app/build-manual-login/revoke-tokens-for-confidential-client.md'/>

----
