---
breadcrumb: false
---

# React SPA Sample

Following this guide, you will be able to deploy a sample React single page application in your local environment and secure it with Asgardeo using OpenID Connect.

## Prerequisites

- You need to have npm with Node.js. If you don't have it, [Install npm and node](https://www.npmjs.com/get-npm) in your local environment.
- You need to have a single-page application registered. If you don't have an app registered, <a :href="$withBase('/guides/applications/register-single-page-app/')">register an application</a> in Asgardeo.
- Only <a :href="$withBase('/guides/users/manage-customers/')">customer</a> users can log in to applications. <a :href="$withBase('/guides/users/manage-customers/#onboard-customer-user')">Create a customer account</a> if you don't already have one.

## Download the sample

Click the **Download sample** button to download the sample. You can also choose to view the source before doing so.

<Button 
    buttonType='grey-outlined-icon'
    displayType='inline-button'
    buttonText='Download sample'
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

## Configure the sample

Change the `config.json` file found in the `asgardeo-react-app/src` sample folder with the relevant values.

- **clientID** - Add the client id of the registered application. Refer <a :href="$withBase('/guides/authentication/oidc/discover-oidc-configs/#obtain-client-id')">how to obtain the client ID</a> from the Asgardeo console.

- **baseUrl** - `https://api.asgardeo.io/t/<organization_name>`

- **scope** - The list of OIDC scopes that are used for requesting user information. The ``openid`` scope is mandatory to get the ID token. You can add other OIDC scopes such as ``profile`` and ``email``.
    ``` json{2,3,6} no-line-numbers
    {
        "clientID": "<client ID>",
        "baseUrl": "https://api.asgardeo.io/t/<organization_name>",
        "signInRedirectURL": "https://localhost:3000",
        "signOutRedirectURL": "https://localhost:3000",
        "scope": [ "profile" ]
    }
    ```

## Run the sample

Run the following command at the root of the project to start up the sample application. The app will be accessible at `https://localhost:3000` 

```bash no-line-numbers
npm install && npm start
```

Log in to Asgardeo using your customer account credentials.


