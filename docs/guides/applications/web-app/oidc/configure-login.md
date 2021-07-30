# Configure OpenID Connect login

You can follow this document to obtain required information and the configurations to:
 - Integrate sign in with Asgardeo for your OpenID Connect web application
 - Build login with Asgardeo using an OpenID Connect supported SDK

In case, you want to implement login from scratch, see how to <a href = "/guides/applications/integrate-confidential-client">build OpenID Connect login flow manually</a>.

When configuring OpenID Connect based sign In, you need to know two things:
1. [Client ID and client secret of the application](#obtain-client-id-and-client-secret-of-the-app)
2. [OpenID Connect endpoints of Asgardeo](#discover-openid-connect-endpoints-of-asgardeo)

## Prerequisite
To get started, you need to have an application registered in Asgardeo. If you don't have an app registered, go to [Asgardeo console](https://console.asgardeo.io/) to <a href="../register-app">register an application</a>.

## Obtain client ID and client secret of the app
When your web application login with Asgardeo, application requires client ID and client secret for authentication. To get the client ID, you can follow below steps:
1. In the Asgardeo Console, Select the **Develop > Applications**.
2. Select the application to integrate.
3. Navigate to **protocol** section of the selected application.
4. Copy **Client ID** and **Client Secret**. 
    <img :src="$withBase('/assets/img/guides/applications/get-client-id-and-secret.png')" alt="Get client ID and secret of webapp">

## Discover OpenID Connect endpoints of Asgardeo
You need to know the endpoints of Asgardeo if you want to add OIDC login to your application. 

There are two options for an OpenID Connect application to identify the endpoints of Asgardeo:

1. [Use OpenID Connect discovery](#use-openid-connect-discovery)
2. [Get endpoint information from Asgardeo Console](#get-endpoint-information-from-console)

### Use OpenID Connect discovery

 <CommonGuide guide='guides/fragments/manage-app/discover-endpoints/discover-from-discovery-endpoint.md'/>

<br>

### Get endpoint information from Console

Some applications and SDKs do not have the capability to dynamically resolve endpoints from  OpenID Connect discovery. You need to configure endpoints manually to support them.

You can log in to [Asgardeo Console](https://console.asgardeo.io/) and get endpoints of Asgardeo. 

 <CommonGuide guide='guides/fragments/manage-app/discover-endpoints/discover-oidc-endpoints-from-console.md'/>

<br>

## What's next?
Now you've integrated your OIDC web application. You also can:
- <a href = "/guides/applications/integrate-confidential-client">Explore OpenID Connect authentication flow in depth</a>
- <a href = "/guides/applications/web-app/oidc/oidc-settings">Configure advanced OpenID Connect settings</a>
