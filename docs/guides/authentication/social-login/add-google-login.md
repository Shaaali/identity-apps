# Add Google Login

You can add Google login to your applications using Asgardeo and enable users to log in with their Google account.  

Follow this guide for instructions.

## Register Asgardeo on Google
You need to register Asgardeo as an OAuth2.0 application on Google.

::: info
You can follow the [Google documentation](https://support.google.com/googleapi/answer/6158849) for detailed instructions.
:::

1. Go to the [Google Developer console](https://console.developers.google.com/apis/credentials).
2. Create a new project or select an existing project.

    ::: info
    If the **APIs & services** page isn't already open, expand the left panel and select **APIs & services**.
    :::

4. Click **Credentials** and select **OAuth client ID**.
    ::: info
    At this point, you can choose to configure your consent screen by clicking **Consent Screen**. For more information, see [User Consent](https://support.google.com/googleapi/answer/6158849#userconsent&zippy=%2Cuser-consent).
    :::
6. Select the application type as **Web application**.
7. Provide the following URL as the **Authorized Redirect URI** of the application.
    ```bash no-line-numbers
    https://api.asgardeo.io/t/<organization_name>/commonauth
    ```
8. Get the **Client ID** and **Client Secret** generated for the application.
    
## Register the Google IdP

Now, let's register the Google IdP in Asgardeo.

1. On the Asgardeo console, go to **Develop > Connections**.
2. Click **New Connections** and select **Google**.
3. Enter the following details of the Google identity provider and click **Finish**:

    <img :src="$withBase('/assets/img/guides/idp/google-idp/add-google-idp.png')" alt="Add Google IDP in Asgardeo">

    <table>
      <tr>
        <th>Parameter</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>Name</td>
        <td>A unique name for this Google identity provider.</td>
      </tr>
      <tr>
          <td>Client ID</td>
          <td>The client ID obtained from Google.</td>
      </tr>
      <tr>
          <td>Client secret</td>
          <td>The client secret obtained from Google.</td>
      </tr>
    </table>    

After the Google identity provider is created, go to the **Settings** tab and see the list of **scopes** to which Google has granted permissions.

- **email**: Allows to view the user's email address.
- **openid**: Allows authentication using OpenID Connect and to obtain the ID token.
- **profile**: Allows to view the user's basic profile data. 

::: info
Asgardeo needs these scopes to get user information. Asgardeo sends these to applications based on the attribute configurations in the application. You can read the [Google documentation](https://developers.google.com/identity/protocols/oauth2/openid-connect#scope-param) to learn more.
::: 
 
##  Enable Google login
::: info Before you begin
You need to have an application registered in Asgardeo. If you don't already have one, register one of the following application types:

-   <a :href="$withBase('/guides/applications/register-single-page-app/')">Single-page app</a>
-   <a :href="$withBase('/guides/applications/register-oidc-web-app/')">Web app with OIDC</a>
-   <a :href="$withBase('/guides/applications/register-saml-web-app/')">web app with SAML</a>
:::

1. On the Asgardeo console, go to **Develop > Applications**.
2. Open your application from the list and go to the **Sign-in Method** tab.
3. If you haven't already defined a sign-in flow, click **Start with Default configuration** to get started.
4. Click **Add Authentication** on the step, select your Google identity provider, and click **Add**.

    <img :src="$withBase('/assets/img/guides/idp/google-idp/add-google-federation-with-basic.png')" alt="Add Google login in Asgardeo">
