# Configure OpenID Connect login

This documents walks you through the steps of configuring OpenID Connect login with Asgardeo.

You can follow this document to obtain needed configurations, if you are trying to:
 - integrate a web application supports OpenID Connect <br>
 - have some OpenID Connect SDKs to add login with Asgardeo  <br>

In case, you want to implement login from scratch, see how to <a href = "/guides/applications/integrate-confidential-client">build OpenID Connect login flow manually</a>.

When configure login, you need to follow below steps:
1. [Obtain client ID and client secret](#obtain-client-id-and-client-secret)
2. [Discover endpoints of Asgardeo](#discover-endpoints)

## Prerequisite
To get started, you need to have an application registered in Asgardeo. If you don't have an app registered, go to [Asgardeo console](https://console.asgardeo.io/) to <a href="../register-app">register an application</a>.

## Obtain client ID and client secret
When your web application login with Asgardeo, application requires client ID and client secret for authentication. To get the client ID, you can follow below steps:
1. In the Asgardeo Console, Select the **Develop > Applications**.
2. Select the application to integrate.
3. Navigate to **protocol** section of the selected application.
4. Copy **Client ID** and **Client Secret**. 
    <img :src="$withBase('/assets/img/guides/applications/get-client-id-and-secret.png')" alt="Get client ID and secret of webapp">

## Discover endpoints
You need to know the endpoints of Asgardeo if you want to add OIDC login to your application. 

There are two options for an OpenID Connect application to identify the endpoints of Asgardeo:
 1. [Use OpenID Connect discovery endpoint](#use-openid-connect-discovery-endpoint)
 2. [Get the endpoints from Asgardeo Console](#get-endpoints-from-console)

### Use OpenID Connect discovery endpoint

 <CommonGuide guide='guides/fragments/manage-app/discover-endpoints/discover-from-discovery-endpoint.md'/>

<br>

### Get endpoints from Console

Some applications and SDKs do not have the capability to dynamically resolve endpoints from  OpenID Connect discovery. You need to configure endpoints manually to support them.

You can login to [Asgardeo Console](https://console.asgardeo.io/) and get endpoints of Asgardeo. 

 <CommonGuide guide='guides/fragments/manage-app/discover-endpoints/discover-oidc-endpoints-from-console.md'/>

<br>

## What's next?
Now you've integrated your OIDC web application. You also can:
- <a href = "/guides/applications/integrate-confidential-client">Explore OpenID Connect authentication flow in depth</a>
- <a href = "/guides/applications/web-app/oidc-settings">Configure advanced OpenID Connect settings</a>
