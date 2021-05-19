---
sidebar: false
---

# Angular SPA Sample

This quick start guide will deploy a sample Angular single page application in your local environment and secure it with Asgadeo using OpenID Connect.

::: tip Before you begin

1. Create an organization in Asgardeo
2. Create a consumer user for your organization
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

[Download Angular Sample :arrow_down:](https://github.com/asgardeo/asgardeo-auth-angular-sdk/releases/latest/download/asgardeo-angular-app.zip)

[View source on Github](https://github.com/asgardeo/asgardeo-auth-angular-sdk/tree/main/samples/asgardeo-angular-app)

### Configure the sample

Change the `config.json` file found in the `asgardeo-angular-app/sr` sample folder with the relevant values.

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

**Run the sample locally**

Run the following command at the root of the project to start up the sample application. The app will be accessible at `https://localhost:5000` 

```bash
npm install && npm start
```
