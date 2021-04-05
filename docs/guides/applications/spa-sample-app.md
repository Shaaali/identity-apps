# Try out a Sample Application

This quick start guide will deploy the sample application in your local environment and secure it with Asgadeo using OpenID Connect.

::: tip Before you begin

1. Create a tenant in Asgardeo
2. Create a consumer user for your organization
3. Install npm and node in your local environment

:::

## Configure an application in Asgardeo

You need to first create an application in Asgardeo that represents your single-page application.

<CommonGuide guide='guides/fragments/configure-spa-in-asgardeo.md'/>

## Configure the sample application

Pick the technology that you want to try out the sample and follow the given steps.

### Download the sample

:::: tabs

::: tab React id="tab-react"

Click the button to download the sample or to view the github source code

[Download React Sample :arrow_down:](https://github.com/asgardeo/asgardeo-auth-react-sdk/releases/latest/download/asgardeo-react-app.zip)

[View source on Github](https://github.com/asgardeo/asgardeo-auth-react-sdk/tree/main/samples/asgardeo-react-app)

:::

::: tab Angular id="tab-angular"

Click the button to download the sample or to view the github source code

[Download Angular Sample :arrow_down:](https://github.com/asgardeo/asgardeo-auth-angular-sdk/releases/latest/download/asgardeo-angular-app.zip)

[View source on Github](https://github.com/asgardeo/asgardeo-auth-angular-sdk/tree/main/samples/asgardeo-angular-app)
 
:::

::: tab Javascript id="tab-javascript"

Click the button to download the sample or to view the github source code

[Download Javascript Sample :arrow_down:](https://github.com/asgardeo/asgardeo-auth-spa-sdk/releases/download/v0.1.2/asgardeo-html-js-app.zip)

[View source on Github](https://github.com/asgardeo/asgardeo-auth-spa-sdk/tree/main/samples/asgardeo-html-js-app)

:::

::::


### Configure the sample

:::: tabs

::: tab React id="tab-react"
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
:::

::: tab Angular id="tab-angular"
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
:::

::: tab Javascript id="tab-javascript"
1. Open the `index.html` file located at the root of the project 
2. Scroll down to the `<script>` tag at the end of the body tag and find `authConfig` object and change the configurations with the relevant values.

- **clientID** = the client id obtained for the application registered above. _(You can check the client ID of the application in the `Protocol` tab of the application details view)_
- **serverOrigin** = "https://dev.accounts.asgardeo.io/t/<your_tenant_domain>"

``` html {2,4}
const authConfig = {
    clientID: "<client_id>",
    signInRedirectURL: "https://localhost:5000",
    serverOrigin: "https://dev.accounts.asgardeo.io/<your_tenant_domain>"
};
```
:::

::::

### Run the sample locally

Run the following command at the root of the project to start up the sample application. The app will be accessible at `https://localhost:5000` 

```
npm install && npm start
```
