**Create a new application in Asgardeo**

1. Select the **Develop** tab out of the two tabs, Develop and Manager in the Console
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
  This is where your app is running and you can change this later also.

**Enable CORS for the authorized URL**

For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts.

[Cross Origin Resource Sharing(CORS)](TODO:link-to-concept) allows your SPA to do cross-origin HTTP requests to complete
the login flow by pre-registering your SPA origin as an allowed one.

6. Click on the **Allow** button with the warning message *“CORS not allowed for origin of this URL."* right after the
   newly added URL to mark the origin of your SPA as an allowed one

<img :src="$withBase('/assets/img/guides/applications/add-cors-spa.png')" alt="add-cors-spa-ui">
