**Create a new application in Asgardeo**

1. Select the **Develop** tab out of the two tabs, Develop and Manager in the Console
2. Move to the **Application** section from the left navigation
3. Click on “New Application” button 

<img :src="$withBase('/assets/img/guides/applications/new-app-view.png')" alt="new-application-select-ui">

**Configure OIDC for the application**

4. Choose the application type as “Single Page Application” to use the application creation template for SPAs
:::tip Note
By default, this template configures the protocol as OIDC Authorization Code Grant and the Sign-on-method with basic authentication.
:::

<img :src="$withBase('/assets/img/guides/applications/spa-app-type.png')" alt="spa-app-type-selection-ui">
   
5. Provide the following details.

<img :src="$withBase('/assets/img/guides/applications/spa-app-create.png')" alt="spa-app-create-ui">

- **Name:** A unique name to identify your application.
- **Authorized Redirect URLs:** The authorized redirect URLs determine where the authorization code is sent to once the user is authenticated, and where the user is redirected to once the logout is complete. 
<br>
This is where your app will be running as the “Authorized URL”. You can change this later also once the application is up and running.

**Enable CORS for the authorized URL**

To avoid possible security attacks, Asgardeo restricts the cross-origin HTTP requests. Therefore [Cross Origin Resource Sharing(CORS)](TODO:link-to-concept) should be enabled to allow the JavaScripts of your application to access Asgardeo. 

6. Click on the **Allow** button with the warning message *“CORS not allowed for origin of this URL."* right after the newly added URL to enable CORS to that URL

<img :src="$withBase('/assets/img/guides/applications/add-spa-cors-ui.png')" alt="spa-add-cors-ui">
