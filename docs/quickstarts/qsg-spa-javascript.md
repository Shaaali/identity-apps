---
sidebar: false
---

# JavaScript SPA Sample

This quick start guide will deploy a sample JavaScript single page application in your local environment and secure it with Asgadeo using OpenID Connect.

::: tip Before you begin

1. Create an organization in Asgardeo
2. Create a customer account in your organization
3. Install npm and node in your local environment

:::

## Configure an application in Asgardeo

You need to first create an application in Asgardeo that represents your single page application.

1. On the Asgardeo console, click **Develop > Applications**.

2. Click **New Application**.

3. Select **Single Page Application**.

4. Fill in the following details.

    - Name: A unique name to identify your application.

    - Authorized Redirect URLs: The authorized redirect URLs determine where the authorization code is sent to once the user is authenticated, and where the user is redirected to once the logout is complete.

   ::: tip
   Click **Add Now** to use the authorized redirect URL for the sample app.
   :::

5. Click **Register**.

## Configure the sample application

### Download the sample

[Download Javascript Sample :arrow_down:](https://github.com/asgardeo/asgardeo-auth-spa-sdk/releases/download/v0.1.2/asgardeo-html-js-app.zip)

[View source on Github](https://github.com/asgardeo/asgardeo-auth-spa-sdk/tree/main/samples/asgardeo-html-js-app)

### Configure the sample

1. Open the `index.html` file located at the root of the project 
2. Scroll down to the `<script>` tag at the end of the body tag and find `authConfig` object and change the configurations with the relevant values.

- **clientID** = the client id obtained for the application registered above. _(You can check the client ID of the application in the `Protocol` tab of the application details view)_
- **serverOrigin** = "https://dev.accounts.asgardeo.io/t/<your_tenant_domain>"

``` HTML{2,4}
const authConfig = {
    clientID: "<client_id>",
    signInRedirectURL: "https://localhost:5000",
    serverOrigin: "https://dev.accounts.asgardeo.io/<your_tenant_domain>"
};
```

### Run the sample locally

Run the following command at the root of the project to start up the sample application. The app will be accessible at `https://localhost:5000` 

```bash
npm install && npm start
```
