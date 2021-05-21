---
sidebar: auto
breadcrumb: false
---

# React SPA Sample

Following this guide, you will be able to deploy a sample React single page application in your local environment and secure it with Asgadeo using OpenID Connect.

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

[Download React Sample :arrow_down:](https://github.com/asgardeo/asgardeo-auth-react-sdk/releases/latest/download/asgardeo-react-app.zip)

[View source on Github](https://github.com/asgardeo/asgardeo-auth-react-sdk/tree/main/samples/asgardeo-react-app)


### Configure the sample

Change the `config.json` file found in the `asgardeo-react-app/src` sample folder with the relevant values.

- **clientID** = the client id obtained for the application registered above. _(You can check the client ID of the application in the `Protocol` tab of the application details view)_
- **serverOrigin** = "https://dev.accounts.asgardeo.io/t/<your_tenant_domain>"

``` json{2,3}
{
    "clientID": "<clientID>",
    "serverOrigin": "https://dev.accounts.asgardeo.io/t/<your_tenant_domain>",
    "signInRedirectURL": "https://localhost:5000",
    "signOutRedirectURL": "https://localhost:5000"
}
```

### Run the sample

Run the following command at the root of the project to start up the sample application. The app will be accessible at `https://localhost:5000` 

```bash
npm install && npm start
```
