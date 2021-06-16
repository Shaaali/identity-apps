---
breadcrumb: false
---

# OIDC Java EE web app sample

Following this guide, you will be able to deploy a sample Java EE web application in your local environment and secure it with Asgadeo using OpenID Connect.

# Prerequisites
1. Download [Apache tomcat](https://tomcat.apache.org/tomcat-9.0-doc/) 9.x or 8.x in your local environment.
2. You should have registered a web application. If you don't have an app registered, <a href ="/guides/applications/web-app/register-app">register an application</a> in Asgardeo.
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
    startIconPath='images/technologies/java-logo.svg'
    endIconPath='icons/downloadIcon.svg'
    externalLink='https://github.com/asgardeo/asgardeo-tomcat-oidc-agent/releases/latest/download/oidc-sample-app.war'
    v-bind:openInNewTab='true'
/>
<Button 
    buttonType='grey-outlined-icon'
    displayType='inline-button'
    buttonText='View source'
    endIconPath='images/technologies/github-logo.svg'
    externalLink='https://github.com/asgardeo/asgardeo-tomcat-oidc-agent/tree/master/io.asgardeo.tomcat.oidc.sample'
    v-bind:openInNewTab='true'
/>

<br>

### Configure the sample

1. Copy the **war** file downloaded in the [previous step](#download-the-sample) to the deployment location in your Tomcat server(i.e, referred as <TOMCAT_HOME>).
2. Run the webapp from `<TOMCAT_HOME>/bin` folder to explode the webapp to edit configurations. 
    ```shell script
   sh catalinna.sh start
   ```
3. Update the `oidc-sample-app.properties` file located in `<TOMCAT_HOME>/webapps/oidc-sample-app/WEB-INF/classes` with the relevant values.
 - **consumerKey** - You should add the client id of the registered application. Refer <a href = "/guides/applications/web-app/configure-login/#obtain-client-id-and-client-secret">how to obtain client ID</a> from Asgardeo console.
 - **consumerSecret** - You should add the client secret of the registered application. Refer <a href = "/guides/applications/web-app/configure-login/#obtain-client-id-and-client-secret">how to obtain client secret</a> from Asgardeo console. 
 - **authorizeEndpoint** - "https://accounts.asgardeo.io/t/<organization_name>/oauth2/authorize"
 - **logoutEndpoint** - "https://accounts.asgardeo.io/t/<organization_name>/oidc/logout"
 - **tokenEndpoint** - "https://accounts.asgardeo.io/t/<organization_name>/oauth2/token"
 - **issuer** - "https://accounts.asgardeo.io/t/<organization_name>/oauth2/token
 - **jwksEndpoint** - "https://accounts.asgardeo.io/t/<organization_name>/oauth2/jwks"
      ``` 
       consumerKey=<clientID>
       consumerSecret=<clientSecret>
       skipURIs=/oidc-sample-app/index.html
       indexPage=index.html
       logoutURL=logout
       callBackURL=http://localhost:8080/oidc-sample-app/oauth2client
       scope=openid,internal_application_mgt_view
       authorizeEndpoint=https://accounts.asgardeo.io/t/<organization_name>/oauth2/authorize
       logoutEndpoint=https://accounts.asgardeo.io/t/<organization_name>/oidc/logout
       #sessionIFrameEndpoint=https://accounts.asgardeo.io/t/<organization_name>/oidc/checksession
       tokenEndpoint=https://accounts.asgardeo.io/t/<organization_name>/oauth2/token
       issuer=https://accounts.asgardeo.io/t/<organization_name>/oauth2/token
       jwksEndpoint=https://accounts.asgardeo.io/t/<organization_name>/oauth2/jwks
       postLogoutRedirectURI=http://localhost:8080/oidc-sample-app/index.html
       trustedAudience=http://localhost:8080/oidc-sample-app
      ```

<br>

### Run the sample

Now you have added the relevant configurations.

Stop and restart the [tomcat server](https://tomcat.apache.org/tomcat-9.0-doc/setup.html) with default port `8080`, for the newly added changes to be applied to the application.

  ```shell script
   sh catalina.sh stop
   sh catalina.sh start
   ```

The app will be accessible at `https://localhost:8080/oidc-sample-app/index.html`.

Try login to Asgardeo using <a href="/guides/user-management/">customer</a> account credentials.
