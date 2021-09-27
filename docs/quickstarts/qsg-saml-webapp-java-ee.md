---
breadcrumb: false
---

# SAML Java EE web app sample

Follow the steps given below to deploy a sample Java EE web application in your local environment and secure it with Asgadeo using SAML.

## Prerequisites
- [Download](https://tomcat.apache.org/tomcat-9.0-doc/) Apache Tomcat 9.x or 8.x in your local environment.
- You need to have a web application registered. If you don't, <a :href="$withBase('/guides/applications/register-saml-web-app')">register a SAML application</a> in Asgardeo.
- Only <a :href="$withBase('/guides/users/manage-customers/')">customers</a> can log in to applications. <a :href="$withBase('/guides/users/manage-customers/#onboard-customer-user')">Create a customer account</a> if you don't already have one.

## Download the sample

Click the **Download sample** button to download the sample. You can also choose to view the source before doing so.

<Button 
    buttonType='grey-outlined-icon'
    displayType='inline-button'
    buttonText='Download sample'
    startIconPath='images/technologies/java-logo.svg'
    endIconPath='icons/downloadIcon.svg'
    externalLink='https://github.com/asgardeo/asgardeo-tomcat-saml-agent/releases/latest/download/sample-app.war'
    v-bind:openInNewTab='true'
/>
<Button 
    buttonType='grey-outlined-icon'
    displayType='inline-button'
    buttonText='View source'
    endIconPath='images/technologies/github-logo.svg'
    externalLink='https://github.com/asgardeo/asgardeo-tomcat-saml-agent/tree/master/io.asgardeo.tomcat.saml.agent.sample'
    v-bind:openInNewTab='true'
/>

## Configure the sample

1. Copy the **war** file downloaded in the [previous step](#download-the-sample) to the deployment location in your Tomcat server (i.e, referred as <TOMCAT_HOME>).
2. Run the webapp from the `<TOMCAT_HOME>/bin` folder to explode it and edit the configurations. If your Tomcat server is set to auto-deploy applications by default, then the war file copied into the deployment location will be extracted automatically. If not, go ahead and restart the server to get the extracted sample.
    ```shell script no-line-numbers
    sh catalina.sh start
    ```
3. Update the `sample-app.properties` file located in `<TOMCAT_HOME>/webapps/sample-app/WEB-INF/classes` with the relevant values.    
     <br>
     <table>
     <thead>
      <tr>
         <th>Configuration</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
          <td>SAML2.AssertionConsumerURL</td>
          <td>You need to add `http://localhost:8080/sample-app/home.jsp` to Assertion consumer URLs. If you are running tomcat on a different port than 8080, change the port in the ACS URL. See <a :href="$withBase('/references/app-settings/saml-settings-for-app/#default-assertion-consumer-service-url-default-acs-url')">See ACS URLs</a> for more information.</td>
      </tr>
      <tr>
        <td>SAML2.SPEntityId</td>
        <td>You need to add `http://localhost.com:8080/spring-security-saml2-sample/saml/metadata` as the issuer of the application when registering it. See <a :href="$withBase('/guides/applications/register-saml-web-app/#register-app-using-manual-configurations')">how to register a SAML app manually</a> via Asgardeo console.</td>
      </tr>
      <tr>
        <td>SAML2.IdPEntityId</td>
        <td>Issuer of Asgardeo. This is always <code>accounts.asgardeo.io</code>.</td>
      </tr>
      <tr>
        <td>SAML2.IdPURL</td>
        <td>Specifies the endpoint of Asgardeo to which login and logout requests should be sent. Note that the name of the organization needs to be replaced with the appropriate value. This should be `https://accounts.asgardeo.io/t/<organization_name>/samlsso`. </td>
      </tr>
      <tr>
          <td>IdPPublicCert</td>
          <td>Specifies the public certificate of Asgardeo. You can obtain the public certificate from the Asgardeo console. See <a :href="$withBase('/guides/authentication/saml/discover-saml-configs/#discover-saml-configurations-of-asgardeo')">how to get SAML configurations from the console</a></td>
      </tr>
      <tr>
          <td>EnableSAML2SSOLogin</td>
          <td>Specifies whether sign-on is enabled for this application</td>
      </tr>
      <tr>
        <td>SAML2.EnableSLO</td>
        <td>Specifies whether logout is enabled for this application</td>
      </tr>
      <tr>
        <td>SAML2.EnableResponseSigning</td>
        <td>If this configuration is set to <code>true</code>, the application validates the signature in the SAML response. If this configuration is set to <code>true</code>, then <a :href="$withBase('/references/app-settings/saml-settings-for-app/#response-signing')">enable response signing from Asgardeo</a>. If this configuration is set to <code>false</code>, the application does not mandate response signing from Asgardeo.</td>
    </tr>
    <tr>
      <td>SAML2.EnableAssertionSigning</td>
      <td>If this configuration is set to <code>true</code>, the application validates the signature in the SAML assertion. If this configuration is set to <code>true</code>, then <a :href="$withBase('/references/app-settings/saml-settings-for-app/#response-signing')">enable response signing from Asgardeo</a>. If this configuration is set to <code>false</code>, the application does not mandate response signing from Asgardeo.</td>
    </tr>
    <tr>
      <td>SAML2.EnableAssertionEncryption</td>
      <td>If this configuration is set to <code>true</code>, the application expects an encrypted SAML assertion. If this configuration is set to <code>true</code>, then <a :href="$withBase('/references/app-settings/saml-settings-for-app')">enable encryption for SAML assertion</a> from Asgardeo.</td>
    </tr>
    <tr>
      <td>SAML2.EnableRequestSigning</td>
      <td>If this configuration is set to <code>true</code>, Asgardeo validates the SAML authentication request and logout request. If this configuration is set to <code>true</code>, then <a :href="$withBase('/references/app-settings/saml-settings-for-app')">enable request signing</a> from Asgardeo.</td>
    </tr>
    <tr>
      <td>SAML2.IsPassiveAuthn</td>
      <td>Specifies whether to enable passive authentication</td>
    </tr>
    </tbody>
    </table>
     
     <br>
     
      ```  no-line-numbers
      SAML2.AssertionConsumerURL=http://localhost:8080/sample-app/home.jsp
      SAML2.SPEntityId=http://localhost.com:8080/spring-security-saml2-sample/saml/metadata
      
      #Asgardeo related configs
      SAML2.IdPEntityId=accounts.asgardeo.io
      SAML2.IdPURL=https://accounts.asgardeo.io/t/<orgaization_name>/samlsso 
      IdPPublicCert=MIIC/jCCAeagAwIBAgIECXIstjANBgkqhkiG9w0BAQQFADBBMRAwDgYDVQQDDAdiaWZyb3N0MQ0wCwYDVQQLDAROb25lMQ8wDQYDVQQKDAZOb25lIEwxDTALBgNVBAYTBE5vbmUwHhcNMjEwMzIwMDYzNTU5WhcNMzEwNDE3MDYzNTU5WjBBMRAwDgYDVQQDDAdiaWZyb3N0MQ0wCwYDVQQLDAROb25lMQ8wDQYDVQQKDAZOb25lIEwxDTALBgNVBAYTBE5vbmUwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCL+LfgKAXwhl3x7buxjeUmRfozJbt7aggfR/86WfB+1N1L5ICaYgybTpB3KEOvR/JxO41H2GOwSFKb15xLmRmH2qy598tvU3TjUyXftUTqp44o/gChy9iavSu2kfRNSCped0N4UAAXegtWFROiTD0iT5PbdwQ8MDyAwKZB/s2N7t82xDpoK7PO99R6Re9GcOX/tkAeBvD/SDK6MgnXU2UqI1uYJ0owBOfrxPBDhTlEkP34hPTOLNabVyJX5k5zXYvwCxQj5AWMudSUzhLjZfWiPRNqjWgv1XxAYBIccgYqon1jG++e7Fod3jY0UUclzAHiguWKuM7Ijkd8plEUTgXNAgMBAAEwDQYJKoZIhvcNAQEEBQADggEBAEIeJ9o5QYlRV2KJN5bLL7s6GV3hkYMIrzDoxHFgSvEt2XJULHWj3yvKe1hk/HzEII79fYYKS6xJv7MORegQP/zFCD8oAHt/3lnhrG1yM/SQDe60Kd5emWqLqMxNQBmmaYQDTY7F5PIdC9KJ/EeKIoz2P2QlT5TNOcj9chtRHtsohNNv6Nkew6HZ49Xlm4BsFxhP6J5YPExV4bBw+RsHeiNdcxXNGaNtD5n2L4KOHbmKddsL1x/KZ4Q67xzaS50IhNnfC84pOFxmYT2FsB02ZuVv97UsNF+8xv+GIN3qc+pIJEWdHFY29KP4da//BDdQrftzYCATe37Um09id/0KMGs=
      IdPPublicCertAlias=wso2carbon
  
      #Config properties
      EnableSAML2SSOLogin=true
      SAML2.EnableSLO=true
      SAML2.EnableResponseSigning=false
      SAML2.EnableAssertionSigning=false
      SAML2.EnableAssertionEncryption=false
      SAML2.EnableRequestSigning=false
      SAML2.IsPassiveAuthn=false      
      
      SAML2.SLOURL=logout
      SkipURIs=/sample-app/index.html
      IndexPage=index.html
      ErrorPage=/error.jsp
      SAML2SSOURL=samlsso
      
      # App keystore related configs
      KeyStorePassword=wso2carbon
      PrivateKeyAlias=wso2carbon
      PrivateKeyPassword=wso2carbon
      ```

## Run the sample

Now you have added the relevant configurations in your sample application.

Stop and restart the Tomcat server with the default port `8080` for the newly added changes to be applied.

```shell script no-line-numbers
sh catalina.sh stop
sh catalina.sh start
```

The app will be accessible at `https://localhost:8080/sample-app/index.html`.

Log in to Asgardeo using your customer account credentials.
