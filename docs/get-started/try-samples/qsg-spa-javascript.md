---
breadcrumb: false
---

# JavaScript SPA Sample

Following this guide, you will be able to deploy a sample JavaScript single page application in your local environment and secure it with Asgardeo using OpenID Connect.

## Prerequisites

- You need to have npm with Node.js. If you don't have it, [Install npm and node](https://www.npmjs.com/get-npm) in your local environment.
- You need to have a single-page application registered. If you don't have an app registered, <a :href="$withBase('/guides/applications/register-single-page-app/')">register an application</a> in Asgardeo.
- Only <a :href="$withBase('/guides/users/manage-customers/')">customer</a> users can log in to applications. <a :href="$withBase('/guides/users/manage-customers/#onboard-customer-user')">Create a customer account</a> if you don't already have one.

Follow the steps given below in order to try out the sample application.

## Download the sample

Click the **Download sample** button to download the sample. You can also choose to view the source before doing so.

<Button 
    buttonType='grey-outlined-icon'
    displayType='inline-button'
    buttonText='Download sample'
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

## Configure the sample

1. Open the `index.html` file located at the root of the project 
2. Scroll down to the `<script>` tag at the end of the body tag and find `authConfig` object and change the configurations with the relevant values.
  - **clientID** - You should add the client id of the registered application. Refer <a :href="$withBase('/guides/authentication/oidc/discover-oidc-configs/#obtain-client-id')">how to obtain the client ID</a> from the Asgardeo console.
  - **serverOrigin** - `https://api.asgardeo.io/t/<organization_name>`
  - **scope** - The list of OIDC scopes that are used for requesting user information. The ``openid`` scope is mandatory to get the ID token. You can add other OIDC scopes such as ``profile`` and ``email``.

    ``` HTML{2,4,5} no-line-numbers
    const authConfig = {
        clientID: "<client ID>",
        signInRedirectURL: "https://localhost:5000",
        serverOrigin: "https://api.asgardeo.io/t/<organization_name>",
        scope: [ "profile" ]
    };
    ```

## Run the sample

Run the following command at the root of the project to start up the sample application. The app will be accessible at `https://localhost:5000`. 

```bash no-line-numbers
npm install && npm start
```

Log in to Asgardeo using your customer account credentials.

