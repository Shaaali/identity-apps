---
breadcrumb: false
---

# JavaScript SPA Sample

Following this guide, you will be able to deploy a sample JavaScript single page application in your local environment and secure it with Asgadeo using OpenID Connect.

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
    startIconPath='images/technologies/javascript-logo.svg'
    endIconPath='icons/downloadIcon.svg'
    externalLink='https://github.com/asgardeo/asgardeo-auth-spa-sdk/releases/latest/download/asgardeo-html-js-app.zip'
    v-bind:openInNewTab='true'
/>
<Button 
    buttonType='grey-outlined-icon'
    displayType='inline-button'
    buttonText='View source'
    endIconPath='images/technologies/github-logo.svg'
    externalLink='https://github.com/asgardeo/asgardeo-auth-spa-sdk/tree/main/samples/asgardeo-html-js-app'
    v-bind:openInNewTab='true'
/>

<br>

### Configure the sample

1. Open the `index.html` file located at the root of the project 
2. Scroll down to the `<script>` tag at the end of the body tag and find `authConfig` object and change the configurations with the relevant values.
  - **clientID** - You should add the client id of the registered application. Refer <a href = "/guides/applications/spa/configure-login/#obtain-client-id">how to obtain client ID</a> from Asgardeo console.
  - **serverOrigin** - "https://dev.accounts.asgardeo.io/t/<organization_name>"
    ``` HTML{2,4}
    const authConfig = {
        clientID: "<client ID>",
        signInRedirectURL: "https://localhost:5000",
        serverOrigin: "https://dev.accounts.asgardeo.io/<organization_name>"
    };
    ```

<br>

### Run the sample

Run the following command at the root of the project to start up the sample application. The app will be accessible at `https://localhost:5000` 

```bash
npm install && npm start
```

Try login to Asgardeo using <a href="/guides/user-management/">customer</a> account credentials.
