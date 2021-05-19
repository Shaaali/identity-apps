---
sidebar: auto
---

# JavaScript SPA Sample

Following this guide your will be able to deploy a sample JavaScript single page application in your local environment and secure it with Asgadeo using OpenID Connect.

::: tip Before you begin

1. Create an organization in Asgardeo
2. Create a customer account in your organization
3. Install npm and node in your local environment

:::

## Configure an application in Asgardeo

You need to first create an application in Asgardeo that represents your single page application.

<CommonGuide guide='guides/fragments/configure-spa-in-asgardeo-for-sample.md'/>

## Configure the sample application

### Download the sample

Click on the button below to download the sample.

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

### Run the sample

Run the following command at the root of the project to start up the sample application. The app will be accessible at `https://localhost:5000` 

```bash
npm install && npm start
```
