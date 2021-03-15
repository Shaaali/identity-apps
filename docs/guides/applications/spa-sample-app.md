# Try out a Sample Application

This quick start guide will deploy the sample application in your local environment and secure it with Asgadeo using OpenID Connect.

## Before you Begin
1. Create a tenant in Asgardeo
2. Create a consumer user for your organization
3. Install npm and node in your local environment

## Configure the application in Asgardeo

### Create a new application in Asgardeo

1. Select the Develop tab out of the two tabs, Develop and Manager
2. Move to the Application section from the left navigation of the developer console
3. Click on “New Application” button in the applications view to create a new application for the sample

### Configure OIDC for the application

1. Since we are configuring a SPA, choose the application type as “Single Page Application” to use the application creation template for SPAs.
*The template will automatically configure the protocol as OIDC Authorization Code Grant and the Sign-on-method with basic authentication.*
2. Give a suitable name for your application

### ConfigurAuthorized URL

1. Provide the URL where your app will be running as the “Authorized URL”. You can change this later also once the application is up and running.
2. You need to enable Cross Origin Resource Sharing(CORS) for the URLs to allow the accessing the Asgardeo. You can just click on the Allow button that is there with the warning message *“CORS not allowed for origin of this URL.”* right after the newly added URL.

## Configure the sample application

Pick the technology that you want to try out the sample

:::: tabs

<!-- Configuring the react sample -->
::: tab React id="tab-react"

### Download

1. Select the language that you want to try
2. Click the button to download the sample or to view the github source code

[Download React Sample :arrow_down:](https://github.com/asgardeo/asgardeo-auth-react-sdk/releases/latest/download/asgardeo-react-app.zip)

[View source on Github](https://github.com/asgardeo/asgardeo-auth-react-sdk/tree/main/samples/asgardeo-react-app)

### Configure
Change the `config.json` file found in the `asgardeo-react-app/src` sample folder with the relevant values.

- **Client ID** = the client id obtained for the application registered above. _(You can check the client ID of the application in the `Protocol` tab of the application details view)_
- **serverOrigin** = "https://dev.accounts.asgardeo.io/t/<your_tenant_domain>"

``` json{2,3}
{
    "clientID": "<clientID>",
    "serverOrigin": "https://dev.accounts.asgardeo.io/t/<your_tenant_domain>",
    "signInRedirectURL": "https://localhost:5000",
    "signOutRedirectURL": "https://localhost:5000"
}
```
### Run
Run the following command at the root of the project to start up the sample application. The app will be accessible at `https://localhost:5000` 

```
npm install && npm start
```
:::

<!-- Configuring the angular sample -->
::: tab Angular id="tab-angular"

### Download the sample
1. Select the language that you want to try
2. Click the button to download the sample or to view the github source code

[Download Angular Sample :arrow_down:](https://github.com/asgardeo/asgardeo-auth-angular-sdk/releases/latest/download/asgardeo-angular-app.zip)

[View source on Github](https://github.com/asgardeo/asgardeo-auth-angular-sdk/tree/main/samples/asgardeo-angular-app)
 
### Configure
Change the `config.json` file found in the `asgardeo-angular-app/sr` sample folder with the relevant values.

- **Client ID** = the client id obtained for the application registered above. _(You can check the client ID of the application in the `Protocol` tab of the application details view)_
- **serverOrigin** = "https://dev.accounts.asgardeo.io/t/<your_tenant_domain>"

``` json{2,3}
{
    "clientID": "<clientID>",
    "serverOrigin": "https://dev.accounts.asgardeo.io/t/<your_tenant_domain>",
    "signInRedirectURL": "https://localhost:5000",
    "signOutRedirectURL": "https://localhost:5000"
}
```

### Run
Run the following command at the root of the project to start up the sample application. The app will be accessible at `https://localhost:5000` 

```
npm install && npm start
```

:::

<!-- Configuring the javascript sample -->
::: tab Javascript id="tab-javascript"

### Download the sample
1. Select the language that you want to try
2. Click the button to download the sample or to view the github source code

[Download Angular Sample :arrow_down:](https://github.com/asgardeo/asgardeo-auth-spa-sdk/releases/latest/downloadasgardeo-html-js-app.zip)

[View source on Github](https://github.com/asgardeo/asgardeo-auth-spa-sdk/tree/main/samples/asgardeo-html-js-app)

### Configure
1. Open the `index.html` file located at the root of the project 
2. Scroll down to the `<script>` tag at the end of the body tag and find `authConfig` object and change the configurations with the relevant values.

- **Client ID** = the client id obtained for the application registered above. _(You can check the client ID of the application in the `Protocol` tab of the application details view)_
- **serverOrigin** = "https://dev.accounts.asgardeo.io/t/<your_tenant_domain>"

``` html {2,4}
const authConfig = {
    clientID: "<client_id>",
    signInRedirectURL: "https://localhost:5000",
    serverOrigin: "https://dev.accounts.asgardeo.io/<your_tenant_domain>"
};
```

### Run
Run the following command at the root of the project to start up the sample application. The app will be accessible at `https://localhost:5000` 

```
npm install && npm start
```
:::

::::
