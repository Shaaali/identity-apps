---
sidebar: auto
breadcrumb: false
---

# OIDC Java EE webapp sample

This quick start guide will deploy the sample application in your local environment and secure it with Asgadeo using OpenID Connect.

::: tip Before you begin

1. Create an organization in Asgardeo
2. Create a customer account in your organization
3. Download [Apache tomcat](https://tomcat.apache.org/tomcat-9.0-doc/) 9.x or 8.x

:::

## Configure an application in Asgardeo


Let's start with creating an application in Asgardeo that represents your web application.

<CommonGuide guide='guides/fragments/configure-web-app-oidc-in-asgardeo.md'/>


## Configure the sample application

### Download the sample

Click on the button below to download the sample.

[Download Tomcat webapplication :arrow_down:](https://github.com/asgardeo/asgardeo-tomcat-oidc-agent/releases/latest/download/oidc-sample-app.war)

[View source on Github](https://github.com/asgardeo/asgardeo-tomcat-oidc-agent/tree/master/io.asgardeo.tomcat.oidc.sample)

### Configure the sample

Copy the **war** file downloaded in the previous step to the deployment location in your Tomcat server.

Update the `oidc-sample-app.properties` file located in `<TOMCAT_HOME>/webapps/oidc-sample-app/WEB-INF/classes` with the relevant values.

- **consumerKey** = the client id obtained for the application registered above. _(You can check the client ID of the application in the `Protocol` tab of the application details view)_
- **consumerSecret** = the client secret obtained for the application registered above. _(You can check the client Secret of the application in the `Protocol` tab of the application details view)_
- **authorizeEndpoint** = "https://dev.accounts.asgardeo.io/t/<organization_name>/oauth2/authorize"
- **logoutEndpoint** = "https://dev.accounts.asgardeo.io/t/<organization_name>/oidc/logout"
- **tokenEndpoint** = "https://dev.accounts.asgardeo.io/t/<organization_name>/oauth2/token"
- **issuer** = "https://dev.accounts.asgardeo.io/t/<organization_name>/oauth2/token
- **jwksEndpoint** = "https://dev.accounts.asgardeo.io/t/<organization_name>/oauth2/jwks"


``` 
   consumerKey=<clientID>
   consumerSecret=<clientSecret>
   skipURIs=/oidc-sample-app/index.html
   indexPage=index.html
   logoutURL=logout
   callBackURL=http://localhost:8080/oidc-sample-app/oauth2client
   scope=openid,internal_application_mgt_view
   authorizeEndpoint=https://dev.accounts.asgardeo.io/t/<organization_name>/oauth2/authorize
   logoutEndpoint=https://dev.accounts.asgardeo.io/t/<organization_name>/oidc/logout
   #sessionIFrameEndpoint=https://dev.accounts.asgardeo.io/t/<organization_name>/oidc/checksession
   tokenEndpoint=https://dev.accounts.asgardeo.io/t/<organization_name>/oauth2/token
   issuer=https://dev.accounts.asgardeo.io/t/<organization_name>/oauth2/token
   jwksEndpoint=https://dev.accounts.asgardeo.io/t/<organization_name>/oauth2/jwks
   postLogoutRedirectURI=http://localhost:8080/oidc-sample-app/index.html
   trustedAudience=http://localhost:8080/oidc-sample-app
```

### Run the sample

Now you have added the relevant configurations.

Restart the [tomcat server](https://tomcat.apache.org/tomcat-9.0-doc/setup.html) with default port `8080`, for the newly added changes to be applied to the application.

The app will be accessible at `https://localhost:8080/oidc-sample-app/index.html`.
