# Add Facebook Login

You can add Facebook login to your applications using Asgardeo and enable users to log in with their Facebook account.

Follow this guide for instructions.

## Register Asgardeo on Facebook
You need to register Asgardeo as an app on Facebook.

::: info
You can follow the [Facebook Documentation](https://developers.facebook.com/docs/development/create-an-app) for detailed instructions.
:::

To register an app on Facebook:
1. Go to [Facebook developer portal](https://developers.facebook.com/apps) and click **Create App**.
2. Select **Consumer** as the app type and click **Next**.
3. Provide **Display Name** and click **Create App** to create an application.
4. To add [Facebook login](https://developers.facebook.com/docs/facebook-login/), click **Set Up** on the **Facebook Login** card.
5. Select **Web** type and provide the following **Site URL**:
    ```bash no-line-numbers
    https://api.asgardeo.io/t/<organization_name>
    ```
6. Save the changes and click **Continue**.
7. On the left panel, go to **Settings** under **Facebook Login**, and add the following as the **Valid OAuth Redirect URIs**:
   ```bash no-line-numbers
   https://api.asgardeo.io/t/<organization_name>/commonauth
   ```
9. Enable **Client OAuth Login** and **Web OAuth Login**.

    ::: info
    These configs are enabled by default.
    :::

8. Save the changes.
9. Go to **Settings > Basic** and get the **App ID** and **App Secret**.
      <img :src="$withBase('/assets/img/guides/idp/facebook-idp/app-id-secret-from-facebook.png')" alt="Get AppID and Secret from Facebook">

## Register the Facebook IdP

Now, let's register the Facebook IdP in Asgardeo.

1. On the Asgardeo console, go to **Develop > Connections**.
2. Click **New Connections** and select **Facebook**.
3. Enter the following details of the Facebook identity provider and click **Finish**:

    <img :src="$withBase('/assets/img/guides/idp/facebook-idp/add-facebook-idp.png')" alt="Add Facebook IDP in Asgardeo">

    <table>
        <tr>
            <th>Parameter</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>Name</td>
            <td>A unique name for this Facebook identity provider.</td>
        </tr>
        <tr>
            <td>App ID</td>
            <td>App ID obtained from Facebook.</td>
        </tr>
        <tr>
            <td>App Secret</td>
            <td>The app secret obtained from Facebook.</td>
        </tr>
    </table>

After the Facebook identity provider is created, go to the **Settings** tab and see the list of permissions granted by Facebook to Asgardeo.

- **email**: Grants read access to a user's primary email address.
- **public_profile**: Grants read access to a user's default public profile details.  

::: info
Asgardeo needs these permissions to get user information. Asgardeo sends these to applications based on the attribute configurations in the application. You can read the [Facebook documentation](https://developers.facebook.com/docs/permissions/reference) to learn more.
:::

##  Enable Facebook login

::: info Before you begin
You need to have an application registered in Asgardeo. If you don't already have one, register one of the following application types:

-   <a :href="$withBase('/guides/applications/register-single-page-app/')">Single-page app</a>
-   <a :href="$withBase('/guides/applications/register-oidc-web-app/')">Web app with OIDC</a>
-   <a :href="$withBase('/guides/applications/register-saml-web-app/')">web app with SAML</a>
:::

1. On the Asgardeo console, go to **Develop > Applications**.
2. Open your application from the list and go to the **Sign-in Method** tab.
3. If you haven't already defined a sign-in flow, click **Start with Default configuration** to get started.
4. Click **Add Authentication** on the step, select your Facebook identity provider, and click **Add**.

    <img :src="$withBase('/assets/img/guides/idp/facebook-idp/add-facebook-federation-with-basic.png')" alt="Add Facebook login in Asgardeo">
