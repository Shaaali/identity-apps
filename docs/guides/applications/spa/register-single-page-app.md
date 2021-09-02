# Register OpenID Connect single-page app
To enable sign in to you single page application with Asgardeo, first you need to register your single-page application using the Asgardeo Console. 

You can register your single page app as an OpenID Connect SPA and obtain client credentials. 

Since single-page applications are public clients, Asgardeo will issue only a client ID (no client secrets will be issued) for your single-page application.

## Register app
You need to login to your [Asgardeo Console](https://console.asgardeo.io/login) to register your OpenID Connect single-page application.
<CommonGuide guide='guides/fragments/manage-app/register-app/configure-spa-in-asgardeo.md'/>

## Disable PKCE 
This single-page application template configures the [OpenID Connect Authorization Code Grant](https://openid.net/specs/openid-connect-core-1_0.html#CodeFlowAuth) with [PKCE](https://datatracker.ietf.org/doc/html/rfc7636). 
In case , if your app does not support PKCE, you can disable it by <a :href="$withBase('/references/app-settings/oidc-settings-for-app/#proof-key-for-code-exchange-pkce')">unselecting the PKCE **Mandatory** </a> setting under **protocol** section.


## Obtain client ID
When your application wants to communicate to Asgardeo, it needs client ID to use as an identifier. 

After registering your application, you can navigate to the **protocol** section of the application to get the **Client ID**.
<img :src="$withBase('/assets/img/guides/applications/get-client-id.png')" alt="Get client ID of SPA">

## What's next?
Now you've registered your single-page application. Now you can:
- <a :href="$withBase('/guides/applications/spa/add-login-to-single-page-app/')">Add login to your single-page app</a>
- <a :href="$withBase('/quickstarts/')">Try out samples</a>
- <a :href="$withBase('/sdks/')">Add login to your app using SDKs</a>