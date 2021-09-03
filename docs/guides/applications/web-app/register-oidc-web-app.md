# Register OpenID Connect web app
To integrate your web application with Asgardeo using OpenID Connect, first you need to register your web application as an OpenID Connect web application in Asgardeo console and obtain client credentials.  
Follow the instructions given below.

## Register app
You need to login to your [Asgardeo Console](https://console.asgardeo.io/login) to register your OpenID Connect web application.
<CommonGuide guide='guides/fragments/manage-app/register-app/configure-web-app-oidc-in-asgardeo.md'/>

## Obtain client ID and client secret
Application needs client id and client secret to authenticate to APIs of Asgardeo.  

After registering your application, you can obtain client ID and client secret by navigating to the **protocol** section of the application.
<img :src="$withBase('/assets/img/guides/applications/get-client-id-and-secret.png')" alt="Get client ID and secret of webapp">

## What's next?
Now you've registered your web application. Now you can:
- <a :href="$withBase('/guides/applications/web-app/add-login-to-web-app/')">Add login to your web app</a>
- <a :href="$withBase('/quickstarts/')">Try out samples</a>
- <a :href="$withBase('/sdks/')">Add login to your app using SDKs</a>
