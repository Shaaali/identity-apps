1. Select the **Develop** tab in the Console
2. Move to the **Application** section from the left navigation
3. Click on “New Application” button

<img :src="$withBase('/assets/img/guides/applications/create-new-app.png')" alt="new-application-create-ui">

**Configure OIDC for the application**

4. Choose the application type as “Single Page Application” to use the application creation template for SPAs

   :::tip Note

   By default, this template configures the protocol as OIDC Authorization Code Grant and the Sign-on-method with basic
   authentication.
   :::

<img :src="$withBase('/assets/img/guides/applications/select-app-type.png')" alt="spa-app-type-select-ui">

5. Provide the following details.

<img :src="$withBase('/assets/img/guides/applications/create-new-spa.png')" alt="create-new-spa-form">

- **Name:** A unique name to identify your application.
- **Authorized Redirect URLs:** The authorized redirect URLs determine where the authorization code is sent to once the
  user is authenticated, and where the user is redirected to once the logout is complete.
  <br>

  Click **Add Now** to use add the default authorized redirect url (https://localhost:5000) of the sample.

6. Click **Register**.

