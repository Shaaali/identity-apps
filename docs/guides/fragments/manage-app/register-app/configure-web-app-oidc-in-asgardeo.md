
1. In the Asgardeo Console, Select the **Develop > Applications**.
2. Select **Use Predefined** and select **Traditional Web Application** type.
   <img :src="$withBase('/assets/img/guides/applications/select-app-type.png')" alt="Select app type in Asgardeo">
3. Provide the following details. 
  - **Name:** A unique name to identify your application.
  - **Protocol:** The access configuration protocol which will be used to log in to the application using SSO. Select **OpenID Connect** since we need to secure the app with OIDC.
  - **Authorized Redirect URLs:** The authorized redirect URLs determine where the authorization code is sent to once the user is authenticated.
     <img :src="$withBase('/assets/img/guides/applications/create-new-web-app.png')" alt="Create a new web app">
4. Click **Register** .
