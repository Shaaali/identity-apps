**Create a new application in Asgardeo**

1. Select the **Develop** tab out of the two tabs, Develop and Manager in the Console
2. Move to the **Application** section from the left navigation
3. Click on “New Application” button

<img :src="$withBase('/assets/img/guides/applications/create-new-app.png')" alt="new-application-create-ui">

**Configure OIDC for the application**

4. Choose the application type as “Traditional Web Application” to use the application creation template for web apps.

<img :src="$withBase('/assets/img/guides/applications/select-app-type.png')" alt="spa-app-type-select-ui">

5. Provide the following details.

<img :src="$withBase('/assets/img/guides/applications/create-new-web-app.png')" alt="create-new-web-app-form">

- **Name:** A unique name to identify your application.
- **Protocol:** The access configuration protocol which will be used to log in to the application using SSO.
- **Authorized Redirect URLs:** The authorized redirect URLs determine where the authorization code is sent to once the user is authenticated, and where the user is redirected to once the logout is complete.
  <br>
  This is where your app is running and you can change this later also.

6. Select OpenID Connect as the protocol to enable since we need to secure the app with OIDC.
