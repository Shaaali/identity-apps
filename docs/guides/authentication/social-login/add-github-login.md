# Add Github Login

You can add Github login to your applications using Asgardeo and enable users to log in with their Github account.

Follow this guide for instructions.

## Register Asgardeo on Github

You need to register Asgardeo as an [OAuth app on Github](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app).

::: info
You can follow the [Github documentation](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app) for detailed instructions.
:::

1. Go to [Github](https://github.com/) and create an OAuth App.
2. Provide the following URLs while configuring the app:
    - **Homepage URL**
      ```bash no-line-numbers
       https://api.asgardeo.io/t/<organization_name>
      ```
   - **Authorization callback URL**
      ```bash no-line-numbers
      https://api.asgardeo.io/t/<organization_name>/commonauth
      ```
3. Get the **Client ID** and **Client secret** generated for the application.

## Register the Github IdP

Now, let's register the Github IdP in Asgardeo.

1. On the Asgardeo console, go to **Develop > Connections**.
2. Click **New Connections** and select **Github**.
3. Enter the following details and click **Finish**:

    <img :src="$withBase('/assets/img/guides/idp/github-idp/add-github-idp.png')" alt="Add Github IDP in Asgardeo">

    <table>
      <tr>
        <th>Parameter</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>Name</td>
        <td>A unique name for this Github identity provider.</td>
      </tr>
      <tr>
          <td>Client ID</td>
          <td>The client ID obtained from Github.</td>
      </tr>
      <tr>
          <td>Client secret</td>
          <td>The client secret obtained from Github.</td>
      </tr>
    </table>

After the Github identity provider is created, go to the **Settings** tab and see the list of **scopes** to which Github has granted permissions.

- **email**: Grants read access to a user's primary email address.
- **public_profile**: Grants read access to a user's default public profile details.  

::: info
Asgardeo needs these scopes to get user information. Asgardeo sends these to applications based on the attribute configurations in the application. You can read the [Github Documentation](https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps) to learn more.
::: 

##  Enable Github login

::: info Before you begin
You need to have an application registered in Asgardeo. If you don't already have one, register one of the following application types:

-   <a :href="$withBase('/guides/applications/register-single-page-app/')">Single-page app</a>
-   <a :href="$withBase('/guides/applications/register-oidc-web-app/')">Web app with OIDC</a>
-   <a :href="$withBase('/guides/applications/register-saml-web-app/')">web app with SAML</a>
:::

1. On the Asgardeo console, go to **Develop > Applications**.
2. Open your application from the list and go to the **Sign-in Method** tab.
3. If you haven't already defined a sign-in flow, click **Start with Default configuration** to get started.
4. Click **Add Authentication** on the step, select your Github identity provider, and click **Add**.

   <img :src="$withBase('/assets/img/guides/idp/github-idp/add-github-federation-with-basic.png')" alt="Add Github login in Asgardeo">
