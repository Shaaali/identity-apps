
1. In the Asgardeo Console, Select the **Develop > Applications**.
2. Select **Use Predefined** and select **Single-Page Application** type.
   <img :src="$withBase('/assets/img/guides/applications/select-app-type.png')" alt="Select app type in Asgardeo">
3. Provide the following details.
  - **Name:** A unique name to identify your application.
  - **Authorized Redirect URLs:** The authorized redirect URLs determine where the authorization code is sent to once the user is authenticated.<br>
    <img :src="$withBase('/assets/img/guides/applications/create-new-spa.png')" alt="Create a new SPA">
4. When application makes cross origin request from browser scripts, it will be blocked by Asgardeo. [Cross Origin Resource Sharing(CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) allows applications to access cross origin APIs from browser scripts. Once you added a redirect URL, a warning message will be prompted to enable **CORS** for the application origin of the redirect URL. Click on **Allow** to add that URL as **Allowed origin**. This will allow that origin to make cross origin HTTP requests to Asgardeo.  
    
    For more information, see <a href="guides/applications/spa/oidc-settings/#allowed-origins">allowed origins</a>.
    <img :src="$withBase('/assets/img/guides/applications/add-cors-spa.png')" alt="Enable CORS">
5. Click **Register**.

This template configures the [OpenID Connect Authorization Code Grant](https://openid.net/specs/openid-connect-core-1_0.html#CodeFlowAuth) with **username and password** authentication.
