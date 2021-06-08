# Google Login

Follow this guide to enable Google login to your applications.

::: tip Before you begin
You should have an application registered in Asgardeo. If you don't have, [create application](../../applications/) in Asgardeo to enable Google login.
:::
 
**Steps**<br>
In order to add Google identity provider, you have to follow below steps in Asgardeo after completing the above prerequisites:
 1. [Register app in Google](#register-app-in-google)
 2. [Create Google Identity Provider](#create-google-identity-provider)
 3. [Enable Google login](#enable-google-login)

## Register app in Google
You need to register Asgardeo as a OAuth2.0 application in Google. Follow the [Google documentation](https://support.google.com/googleapi/answer/6158849) to create an OAuth2.0 application.
 
1. Go to [Google Developer console](https://console.developers.google.com/apis/credentials)
2. Create a new project or select an existing project.
3. Click **Create Credentials**  and select **OAuth client ID**.
4. Select application type as **Web application**.
5. Provide following URL as the Authorized Redirect URI of the application.
    ```
    https://accounts.asgardeo.io/t/<organization_name>/commonauth
    ```
6. Obtain your **Client ID** & **Client Secret**.  
    
## Create Google identity provider
1. In the Asgardeo Console, Click **Develop > Identity Providers**.
2. Select **Google**.
    <!--img :src="$withBase('/assets/img/guides/idp/list_of_idps.png')" alt="List of IDPs in Asgardeo"-->
3. Enter the following details of the Google identity provider and click **Finish**:
    - **Name**: A unique name for this Google identity provider.
    - **Client ID**: client_id obtained from Google.
    - **Client Secret**: client_secret obtained from Google.   
    <img :src="$withBase('/assets/img/guides/idp/google-idp/add-google-idp.png')" alt="Add Google IDP in Asgardeo">
4. You can find more additional configurations once you created Google identity provider.
    - **Scopes**: This is the list of scopes that are requested from Google. Asgardeo needs these scopes to get user information and sends this to application based on the attribute configurations in the application. Refer [Google documentation](https://developers.google.com/identity/protocols/oauth2/openid-connect#scope-param) on OpenID Connect scope param.
 
##  Enable Google login
1. In the Asgardeo Console, Click **Develop > Applications**.
2. Select an application from the application list that appears and navigate to the **Sign-on Method** tab of your application.
3. Select the Google identity provider you added the above, click **Add Authentication** on the step and click **Update** .
    <img :src="$withBase('/assets/img/guides/idp/google-idp/add-google-federation.png')" alt="Add OIDC enterprise login in Asgardeo">
