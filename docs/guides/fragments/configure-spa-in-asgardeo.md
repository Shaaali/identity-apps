**Create a new application in Asgardeo**

1. Select the **Develop** tab out of the two tabs, Develop and Manager in the Console
2. Move to the **Application** section from the left navigation
3. Click on “New Application” button to create a new application for the SPA

**Configure OIDC for the application**

1. Choose the application type as “Single Page Application” to use the application creation template for SPAs
:::tip Note
The template will automatically configure the protocol as OIDC Authorization Code Grant and the Sign-on-method with basic authentication.
:::
2. Give a suitable name for your application

**Define the authorized URL**

The authorized redirect URLs determine where the authorization code is sent to once the user is authenticated, and where the user is redirected to once the logout is complete.

Provide the URL where your app will be running as the “Authorized URL”. You can change this later also once the application is up and running.

::: tip

If you want to use a sample application to try out the flow, click **Add Now** to use the authorized redirect URL for the sample app.

:::

**Enable CORS for the authorized URL**

Cross Origin Resource Sharing(CORS) should be enabled for the URLs to allow accessing Asgardeo. CORS is a mechanism that allows the web services to control the access to its resources from different origins.
> For more information, see [Cross Origin Resource Sharing](TODO:link-to-concept).

  Click on the **Allow** button with the warning message *“CORS not allowed for origin of this URL."* right after the newly added URL to enable CORS to that URL
