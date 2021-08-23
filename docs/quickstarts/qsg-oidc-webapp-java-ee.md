---
breadcrumb: false
---

# OIDC Java EE web app sample

Following this guide, you will be able to deploy a sample Java EE web application in your local environment and secure it with Asgardeo using OpenID Connect.

## Prerequisites
- Download [Apache tomcat](https://tomcat.apache.org/tomcat-9.0-doc/) 9.x or 8.x in your local environment.
- You should have registered a web application. If you don't have an app registered, <a href ="/guides/applications/web-app/oidc/register-app">register an application</a> in Asgardeo.
- Only <a :href="$withBase=('/guides/user-management/manage-users/user-accounts/customer/')">customer</a> users can log in to applications. <a :href="('/guides/user-management/manage-users/user-accounts/customer/#onboard-customer-user')">Create customer account</a> if you don't already have one.

## Download the sample

Click the **Download sample** button to download the sample. You can also choose to view the source before doing so.

<Button 
    buttonType='grey-outlined-icon'
    displayType='inline-button'
    buttonText='Download sample'
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

## Configure the sample

1. Copy the **war** file downloaded in the [previous step](#download-the-sample) to the deployment location in your Tomcat server(i.e, referred as <TOMCAT_HOME>).
2. Run the webapp from `<TOMCAT_HOME>/bin` folder to explode the webapp to edit configurations. 
    ```shell script
   sh catalina.sh start
   ```
3. Update the `oidc-sample-app.properties` file located in `<TOMCAT_HOME>/webapps/oidc-sample-app/WEB-INF/classes` with the relevant values.    
     <br>
     <table>
      <tr>
          <td>consumerKey</td>
          <td>Add the client id of the registered application. Refer <a href = "/guides/applications/web-app/oidc/configure-login/#obtain-client-id-and-client-secret">how to obtain client ID</a> from Asgardeo console.</td>
      </tr>
      <tr>
        <td>consumerSecret</td>
        <td>Add the client secret of the registered application. Refer <a href = "/guides/applications/web-app/oidc/configure-login/#obtain-client-id-and-client-secret">how to obtain client secret</a> from Asgardeo console.</td>
      </tr>
      <tr>
        <td>scope</td>
        <td>For the OpenId Connect flow, the scope should contain <code>openid</code> as one of the scopes. You can add additional scopes as well. By default,  openid and internal_application_mgt_view scopes are added. If required, add the additional scopes here.</td>
      </tr>
      <tr>
        <td>authorizeEndpoint</td>
        <td>`https://api.asgardeo.io/t/<organization_name>/oauth2/authorize` is the authorization endpoint of Asgardeo. Change the organization name here.</td>
      </tr>
      <tr>
          <td>logoutEndpoint</td>
          <td>`https://api.asgardeo.io/t/<organization_name>/oidc/logout` is the logout endpoint of Asgardeo. Change the organization name here.</td>
      </tr>
      <tr>
          <td>tokenEndpoint</td>
          <td>`https://api.asgardeo.io/t/<organization_name>/oauth2/token` is the token endpoint of Asgardeo. Change the organization name here.</td>
      </tr>
      <tr>
        <td>issuer</td>
        <td>`https://api.asgardeo.io/t/<organization_name>/oauth2/token` is the issuer Asgardeo. Change the organization name here. It is used for id token validation.</td>
      </tr>
      <tr>
        <td>jwksEndpoint</td>
        <td>`https://api.asgardeo.io/t/<organization_name>/oauth2/jwks` is the jwks endpoint of Asgardeo. Change the organization name here.</td>
    </tr>
    </table>
     
     <br>
     
      ``` 
      consumerKey=<client ID>
      consumerSecret=<client secret>
      scope=openid,internal_application_mgt_view
   
      callBackURL=http://localhost:8080/oidc-sample-app/oauth2client
      postLogoutRedirectURI=http://localhost:8080/oidc-sample-app/index.html
      trustedAudience=http://localhost:8080/oidc-sample-app  
      skipURIs=/oidc-sample-app/index.html
      indexPage=index.html
      logoutURL=logout     
   
      # Asgardeo Endpoints
      authorizeEndpoint=https://api.asgardeo.io/t/<organization_name>/oauth2/authorize
      logoutEndpoint=https://api.asgardeo.io/t/<organization_name>/oidc/logout
      tokenEndpoint=https://api.asgardeo.io/t/<organization_name>/oauth2/token
      issuer=https://api.asgardeo.io/t/<organization_name>/oauth2/token
      jwksEndpoint=https://api.asgardeo.io/t/<organization_name>/oauth2/jwks
      ```

## Run the sample

Now you have added the relevant configurations.

Stop and restart the tomcat server with the default port `8080` for the newly added changes to be applied to the application.

```shell script
sh catalina.sh stop
sh catalina.sh start
```

The app will be accessible at `https://localhost:8080/oidc-sample-app/index.html`.

Log in to Asgardeo using your customer account credentials.

