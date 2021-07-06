---
breadcrumb: false
---

# Angular SPA Sample

Following this guide, you will be able to deploy a sample Angular single page application in your local environment and secure it with Asgadeo using OpenID Connect.

## Prerequisites
1. You need to have npm with Node.js. If you don't have it, [Install npm and node](https://www.npmjs.com/get-npm) in your local environment.
2. You should have registered a single-page application. If you don't have an app registered, <a href ="/guides/applications/spa/register-app">register an application</a> in Asgardeo.
3. Only <a href="/guides/user-management/">customer</a> users can login to applications. <a href ="/guides/user-management/manage-customer-accounts/#create-customer-user">Create customer account</a> if you don't have.

## Configure the sample application
In order to try out the sample application:
1. [Download the sample](#download-the-sample)
2. [Configure the sample](#configure-the-sample)
3. [Run the sample](#run-the-sample)

### Download the sample

Click on the button below to download the sample.

<Button 
    buttonType='grey-outlined-icon'
    displayType='inline-button'
    buttonText='Download Sample'
    startIconPath='images/technologies/angular-logo.svg'
    endIconPath='icons/downloadIcon.svg'
    externalLink='https://github.com/asgardeo/asgardeo-auth-angular-sdk/releases/latest/download/asgardeo-angular-app.zip'
    v-bind:openInNewTab='true'
/>
<Button 
    buttonType='grey-outlined-icon'
    displayType='inline-button'
    buttonText='View source'
    endIconPath='images/technologies/github-logo.svg'
    externalLink='https://github.com/asgardeo/asgardeo-auth-angular-sdk/tree/main/samples/asgardeo-angular-app'
    v-bind:openInNewTab='true'
/>

<br>

### Configure the sample

Change the `config.json` file found in the `asgardeo-angular-app/src` sample folder with the relevant values.

 - **clientID** - You should add the client id of the registered application. Refer <a href = "/guides/applications/spa/configure-login/#obtain-client-id">how to obtain client ID</a> from Asgardeo console.
 - **serverOrigin** - "https://dev.accounts.asgardeo.io/t/<organization_name>"

    ``` json{2,3}
    {
        "clientID": "clientID>",
        "serverOrigin": "https://dev.accounts.asgardeo.io/t/<organization_name>",
        "signInRedirectURL": "https://localhost:5000",
        "signOutRedirectURL": "https://localhost:5000"
    }
    ```

<br>

### Run the sample

Run the following command at the root of the project to start up the sample application. The app will be accessible at `https://localhost:5000` 

```bash
npm install && npm start
```

Try login to Asgardeo using <a href="/guides/user-management/">customer</a> account credentials.
