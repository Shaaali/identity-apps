# Google Login

You can add Google login to your applications using Asgardeo and enable users to log into applications with their Google account.  

This guide provides the instructions on how to enable the Google login to your applications. 

## Prerequisite

To get started, you need to have an application registered in Asgardeo. If you don't already have, register one of the following application types.

-   <a :href="$withBase('/guides/applications/spa/register-single-page-app/')">Single-page app</a>
-   <a :href="$withBase('/guides/applications/web-app/register-oidc-web-app/')">Web app with OIDC</a>
-   <a :href="$withBase('/guides/applications/web-app/register-saml-web-app/')">web app with SAML</a>

## Register app in Google
You need to register Asgardeo as a OAuth2.0 application in Google. Follow the [Google documentation](https://support.google.com/googleapi/answer/6158849) to create an OAuth2.0 application.

1. Go to [Google Developer console](https://console.developers.google.com/apis/credentials)
2. Create a new project or select an existing project.
3. If the **APIs & services** page isn't already open, open the console left side menu and select **APIs & services**.
4. On the left, click **Credentials**.
5. Click **Create Credentials**  and select **OAuth client ID**.
    ::: info
    At this point, you can choose to configure your consent screen by clicking **Consent Screen**. For more information, see [User Consent](https://support.google.com/googleapi/answer/6158849#userconsent&zippy=%2Cuser-consent).
    :::
6. Select application type as **Web application**.
7. Provide following URL as the Authorized Redirect URI of the application.
    ``` no-line-numbers
    https://api.asgardeo.io/t/<organization_name>/commonauth
    ```
8. Obtain your **Client ID** & **Client Secret**.  
    
## Create Google identity provider
1. On the Asgardeo Console, click **Develop > Connections**.
2. Click **New Connections**.
3. Select **Google**.
    <!--img :src="$withBase('/assets/img/guides/idp/list_of_idps.png')" alt="List of IDPs in Asgardeo"-->
4. Enter the following details of the Google identity provider and click **Finish**:
    - **Name**: A unique name for this Google identity provider.
    - **Client ID**: client_id obtained from Google.
    - **Client Secret**: client_secret obtained from Google.   
    <img :src="$withBase('/assets/img/guides/idp/google-idp/add-google-idp.png')" alt="Add Google IDP in Asgardeo">
5. You can find additional configurations once you create the Google identity provider.
    - **Scopes**: Asgardeo requests below scopes from Google:
        - **email**: Allows viewing user's email address.
        - **openid**: Allows authenticating using OpenID Connect and obtain ID token.
        - **profile**: Allows viewing user's basic profile data.          
    
      Asgardeo needs these scopes to get user information and sends this to application based on the attribute configurations in the application. Refer [Google documentation](https://developers.google.com/identity/protocols/oauth2/openid-connect#scope-param) on OpenID Connect scope param.
 
##  Enable Google login
1. On the Asgardeo Console, click **Develop > Applications**.
2. Select an application from the application list that appears and navigate to the **Sign-in Method** tab of your application.
3. Click **Start with Default configuration**(If you have not modified the default sign in flow).
4. Click **Add Authentication** on the step, and select the Google identity provider you added the above.
5. Click **Update**.
    <img :src="$withBase('/assets/img/guides/idp/google-idp/add-google-federation-with-basic.png')" alt="Add Google login in Asgardeo">
