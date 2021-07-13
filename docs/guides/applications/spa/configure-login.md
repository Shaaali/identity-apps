# Configure OpenID Connect login

You can follow this document to obtain required information and the configurations to:
 - Integrate a single-page application that supports OpenID Connect <br>
 - Build login with Asgardeo using an OpenID Connect supported SDK  <br>

In case, you want to implement login from scratch, see how to <a href = "/guides/applications/integrate-public-client">build OpenID Connect login flow manually</a>.

When configuring OpenID Connect based sign In, you need to know two things:
1. [Client ID of the application](#obtain-client-id-of-the-app)
2. [OpenID Connect endpoints of Asgardeo](#discover-openid-connect-endpoints-of-asgardeo)

  <img :src="$withBase('/assets/img/guides/applications/oidc-app/oidc-intg.png')" alt="Integrate SPA">

## Prerequisite
To get started, you need to have an application registered in Asgardeo. If you don't have an app registered, go to [Asgardeo Console](https://console.asgardeo.io/) to <a href="/guides/applications/spa/register-app">register an application</a>.

## Obtain Client ID of the app
When your single-page application login with Asgardeo, application uses client ID as an identifier. To get the client ID, you can follow below steps:
1. In the Asgardeo Console, Select the **Develop > Applications**.
2. Select the application to integrate.
3. Navigate to **protocol** section of the selected application.
4. Copy **Client ID**. 
    <img :src="$withBase('/assets/img/guides/applications/get-client-id.png')" alt="Get client ID of SPA">


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

You can login to [Asgardeo Console](https://console.asgardeo.io/) and get endpoints of Asgardeo. 

  <CommonGuide guide='guides/fragments/manage-app/discover-endpoints/discover-oidc-endpoints-from-console.md'/>

<br>

## What's next?
Now you've added login to your application with Asgardeo. You also can:
- <a href = "/guides/applications/integrate-public-client">Explore OpenID Connect authentication flow in depth</a>
- <a href = "/guides/applications/spa/oidc-settings">Configure advanced OpenID Connect settings</a>
