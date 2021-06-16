# Configure OpenID Connect login

This documents walks you through the steps of configuring OpenID Connect login with Asgardeo.

You can follow this document to obtain needed configurations, if you are trying to:
 - integrate a single-page application supports OpenID Connect <br>
 - have some OpenID Connect SDKs to add login with Asgardeo  <br>

In case, you want to implement login from scratch, see how to <a href = "/guides/applications/integrate-public-client">build OpenID Connect login flow manually</a>.

When configure login, you need to follow below steps:
1. [Obtain client ID](#obtain-client-id)
2. [Discover endpoints of Asgardeo](#discover-endpoints)

## Prerequisite
To get started, you need to have an application registered in Asgardeo. If you don't have an app registered, go to [Asgardeo Console](https://console.asgardeo.io/) to <a href="/guides/applications/spa/register-app">register an application</a>.

## Obtain client ID
When your single-page application login with Asgardeo, application uses client ID as an identifier. To get the client ID, you can follow below steps:
1. In the Asgardeo Console, Select the **Develop > Applications**.
2. Select the application to integrate.
3. Navigate to **protocol** section of the selected application.
4. Copy **Client ID**. 
    <img :src="$withBase('/assets/img/guides/applications/get-client-id.png')" alt="Get client ID of SPA">


## Discover endpoints
You need to know the endpoints of Asgardeo if you want to add OIDC login to your application. 
 
There are two options for an OpenID Connect application to identify the endpoints of Asgardeo:
 1. [Use OpenID Connect discovery endpoint of Asgardeo](#use-openid-connect-discovery-endpoint)
 2. [Get endpoints from Asgardeo Console](#get-endpoints-from-console)
 
### Use OpenID Connect discovery endpoint
 
  <CommonGuide guide='guides/fragments/manage-app/discover-endpoints/discover-from-discovery-endpoint.md'/>
  
<br>

### Get endpoints from Console
Some applications and SDKs do not have the capability to dynamically resolve endpoints from  OpenID Connect discovery. You need to configure endpoints manually to support them.

You can login to [Asgardeo Console](https://console.asgardeo.io/) and get endpoints of Asgardeo. 

  <CommonGuide guide='guides/fragments/manage-app/discover-endpoints/discover-oidc-endpoints-from-console.md'/>

<br>

## What's next?
Now you've added login to your application with Asgardeo. You also can:
- <a href = "/guides/applications/integrate-public-client">Explore OpenID Connect authentication flow in depth</a>
- <a href = "/guides/applications/spa/oidc-settings">Configure advanced OpenID Connect settings</a>
