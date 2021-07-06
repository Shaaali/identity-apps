
1. In the Asgardeo Console, Select the **Develop > Applications**.
2. Select **New Application** and select **Single-Page Application** type.
   <img :src="$withBase('/assets/img/guides/applications/select-app-type.png')" alt="Select app type in Asgardeo">
3. Provide the following details.
  - **Name:** A unique name to identify your application.
  - **Authorized Redirect URLs:** The authorized redirect URLs determine where the authorization code is sent to once the user is authenticated.<br>
    <img :src="$withBase('/assets/img/guides/applications/create-new-spa.png')" alt="Create a new SPA">
4. Click on **Allow** to add that URL as **Allowed origin**. This will allow your applications to do cross origin HTTP requests to Asgardeo during login flow.        
    For more information, see <a href="/guides/applications/spa/oidc-settings/#allowed-origins">allowed origins</a>.
    <img :src="$withBase('/assets/img/guides/applications/add-cors-spa.png')" alt="Enable CORS">
5. Click **Register**.

This template configures the [OpenID Connect Authorization Code Grant](https://openid.net/specs/openid-connect-core-1_0.html#CodeFlowAuth) with **username and password** authentication.
