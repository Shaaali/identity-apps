## Configure the application in Asgardeo

You need to first create an application in Asgardeo that represents your single-page application.

### Create a new application in Asgardeo

1. Select the Develop tab out of the two tabs, Develop and Manager
2. Move to the Application section from the left navigation of the developer console
3. Click on “New Application” button in the applications view to create a new application for the sample

### Configure OIDC for the application

1. Since we are configuring a SPA, choose the application type as “Single Page Application” to use the application creation template for SPAs.
:::tip
The template will automatically configure the protocol as OIDC Authorization Code Grant and the Sign-on-method with basic authentication.
:::
2. Give a suitable name for your application

### Define the Authorized URL

The authorized redirect URLs determine where the authorization code is sent to once the user is authenticated, and where the user is redirected to once the logout is complete.

Provide the URL where your app will be running as the “Authorized URL”. You can change this later also once the application is up and running.
::: tip

If you want to use a sample application to try out the flow, click **Add Now** to use the authorized redirect URL for the sample app.

:::

### Enable CORS for the Authorized URL

You need to enable Cross Origin Resource Sharing(CORS) for the URLs to allow the accessing the Asgardeo. CORS is a mechanism that allows the web services to control the access to its resources from different origins.
> For more information, see [Cross Origin Resource Sharing](TODO:link-to-concept).

You can click on the Allow button that is there with the warning message *“CORS not allowed for origin of this URL.”* right after the newly added URL to enable CORS to the added URL
