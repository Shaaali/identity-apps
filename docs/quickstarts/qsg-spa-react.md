---
breadcrumb: false
---

# React SPA Sample

Following this guide, you will be able to deploy a sample React single page application in your local environment and secure it with Asgardeo using OpenID Connect.

## Prerequisites
1. You need to have npm with Node.js. If you don't have it, [Install npm and node](https://www.npmjs.com/get-npm) in your local environment.
2. You should have registered a single-page application. If you don't have an app registered, <a :href="$withBase('/guides/applications/spa/register-app')">register an application</a> in Asgardeo.
3. Only <a :href="$withBase('/guides/user-management/manage-users/user-accounts/customer/')">customer</a> users can log in to applications. <a :href="$withBase('/guides/user-management/manage-users/user-accounts/customer/#onboard-customer-user')">Create customer account</a> if you don't already have one.

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
    startIconPath='images/technologies/react-logo.svg'
    endIconPath='icons/downloadIcon.svg'
    externalLink='https://github.com/asgardeo/asgardeo-auth-react-sdk/releases/latest/download/asgardeo-react-app.zip'
    v-bind:openInNewTab='true'
/>
<Button 
    buttonType='grey-outlined-icon'
    displayType='inline-button'
    buttonText='View source'
    endIconPath='images/technologies/github-logo.svg'
    externalLink='https://github.com/asgardeo/asgardeo-auth-react-sdk/tree/main/samples/asgardeo-react-app'
    v-bind:openInNewTab='true'
/>

<br>

### Configure the sample

Change the `config.json` file found in the `asgardeo-react-app/src` sample folder with the relevant values.
 - **clientID** - You should add the client id of the registered application. Refer <a :href="$withBase('/guides/applications/spa/configure-login/#obtain-client-id')">how to obtain client ID</a> from Asgardeo console.
 - **serverOrigin** - "https://api.asgardeo.io/t/<organization_name>"
    ``` json{2,3}
    {
        "clientID": "<client ID>",
        "serverOrigin": "https://api.asgardeo.io/t/<organization_name>",
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
Log in to Asgardeo using your <a :href="$withBase('/guides/user-management/manage-users/user-accounts/customer/')">customer</a> account credentials.

