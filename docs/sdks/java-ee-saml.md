---
breadcrumb: false
---

# Add Login to your Java EE webapp with SAML

Follow the steps given below to authenticate users to your Java EE web application deployed on Tomcat with SAML 
using the [Asgardeo Tomcat SAML Agent](https://github.com/asgardeo/asgardeo-tomcat-saml-agent) which enables SAML-based login and logout.

<Button 
    buttonType='grey-outlined-icon'
    buttonText='Try out the sample app'
    startIconPath='images/technologies/java-logo.svg'
    buttonPath='/quickstarts/qsg-saml-webapp-java-ee'
/>

## Prerequisites
- Download [Apache tomcat](https://tomcat.apache.org/tomcat-9.0-doc/) 9.x or 8.x in your local environment.
- [Download](https://maven.apache.org/download.cgi) and [install](https://maven.apache.org/install.html) Apache Maven (3.6.x or higher) as the package manager if you don't have.
- To get started, you need to have an application registered in Asgardeo. If you don't already have one, see the instructions on <a href ="/guides/applications/web-app/saml/register-app">registering a SAML application</a>.

## Add Login to your app

This guide provides below information on how to integrate your web app with Asgardeo:
1. [Install the SDK](#install-the-sdk)
2. [Initialize the SDK](#initialize-the-sdk)
3. [Add login](#add-login)
4. [Add logout](#add-logout)


### Install the SDK

Follow the steps given below to install SAML agent.

1. Add the relevant dependencies.  

      To get started, you need to enable the SAML agent in your application's project by adding the relevant dependencies to the `pom.xml` file.
    
      ```xml
        <dependency>
            <groupId>io.asgardeo.tomcat.saml.agent</groupId>
            <artifactId>io.asgardeo.tomcat.saml.agent</artifactId>
            <version>0.1.31</version>
        </dependency>
      ```

2. Add the nexus repository.   

      The agent is hosted at **WSO2 Internal Repository**. Point to this nexus repository to resolve the dependency given above.

    ```xml
    <repositories>
        <repository>
            <id>wso2.releases</id>
            <name>WSO2 internal Repository</name>
            <url>http://maven.wso2.org/nexus/content/repositories/releases/</url>
            <releases>
                <enabled>true</enabled>
                <updatePolicy>daily</updatePolicy>
                <checksumPolicy>ignore</checksumPolicy>
            </releases>
        </repository>
    </repositories>
    ```

See the [reference documentation](https://github.com/asgardeo/asgardeo-tomcat-saml-agent/blob/master/README.md) to learn more.

<br>

### Initialize the SDK

Follow the steps given below to initialize the SAML agent.

#### 1. Provide configurations 

To initialize the SAML agent, you need a property file with the configurations (Asgardeo endpoints, etc.). The Asgardeo SAML agent reads the configurations from this file.

Create a file named **sample-app.properties** inside the **<YOUR_APP>/src/main/resources** directory, using the content below.


``` 
    SAML2.AssertionConsumerURL=<acs_url>
    SAML2.SPEntityId=<entity_id>
    
    #Asgardeo related configs
    SAML2.IdPEntityId=accounts.asgardeo.io
    SAML2.IdPURL=https://accounts.asgardeo.io/t/<orgaization_name>/samlsso 
    IdPPublicCert=<public_cert_of_asgardeo_organization>
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
    SkipURIs=<YOUR_APP_PATH>/index.html
    IndexPage=index.html
    ErrorPage=/error.jsp
    SAML2SSOURL=samlsso
    
    # App keystore related configs
    KeyStorePassword=<app_keystore_password>
    PrivateKeyAlias=<app_private_key_alias>
    PrivateKeyPassword=<app_private_key_password>
```

For advanced use cases such as SAML response signing, the Asgardeo SAML Agent uses a keystore with your private key. If your application doesn't have a keystore already, generate a keystore file and copy it to the **<APP_HOME>/src/main/resources** directory. Make sure to update KeyStorePassword, PrivateKeyAlias, and PrivateKeyPassword with relevant values.
  
Find the configuration information below: 

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
         <td>Specifies the URL to redirect after login and logout. See <a href = "/guides/applications/web-app/saml/saml-settings/#default-assertion-consumer-service-url-default-acs-url">See ACS URLs</a></td>
      </tr>
      <tr>
         <td>SAML2.SPEntityId</td>
         <td>This is the unique name of the application. This is used when registering your application with Asgardeo. See <a href = "/guides/applications/web-app/saml/register-app/#register-app-using-manual-configurations">how to register SAML app manually</a> via the Asgardeo Console.</td>
      </tr>
      <tr>
         <td>SAML2.IdPEntityId</td>
         <td>Issuer of Asgardeo. This is always <code>accounts.asgardeo.io</code>.</td>
      </tr>
     <tr>
          <td>SAML2.IdPURL</td>
          <td>Specifies the endpoint of Asgardeo to which login and logout request should be sent. This should be <code>https://accounts.asgardeo.io/t/{organization_name}/samlsso</code>. Change the organization name here.</td>
     </tr>
     <tr>
           <td>IdPPublicCert</td>
           <td>Specifies the public certificate of Asgardeo. You can obtain public certificate from Asgardeo Console. See <a href="/guides/applications/web-app/saml/configure-login/#get-saml-configurations-of-asgardeo-from-console">how to get SAML configuration of Asgardeo</a></td>
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
         <td>If this configuration is set to true, the application will validate the signature in the SAML response. If this configuration is set to true, then <a href="/guides/applications/web-app/saml/saml-settings/#response-signing">enable response signing from Asgardeo</a>. If this configuration is set to false,  application will not mandate  response signing from Asgardeo</td>
     </tr>
     <tr>
       <td>SAML2.EnableAssertionSigning</td>
       <td>If this configuration is set to true, the application will validate the signature in the SAML assertion. If this configuration is set to true, then <a href="/guides/applications/web-app/saml/saml-settings/#response-signing">Enable response signing from Asgardeo</a>. If this configuration is set to false,  application will not mandate  response signing from Asgardeo</td>
     </tr>
     <tr>
       <td>SAML2.EnableAssertionEncryption</td>
       <td>If this configuration is set to true,the application will expect an encrypted SAML assertion. If this configuration is set to true, then <a href="/guides/applications/web-app/saml/saml-settings/#enable-encryption">Enable encryption for SAML assertion</a> from Asgardeo.</td>
     </tr>
     <tr>
       <td>SAML2.EnableRequestSigning</td>
       <td>If this configuration is set to true, Asgardeo will validate the SAML authentication request and logout request. If this configuration is set to true, then <a href="/guides/applications/web-app/saml/saml-settings/#request-validation">Enable request signing</a> from Asgardeo.</td>
     </tr>
     <tr>
       <td>SAML2.IsPassiveAuthn</td>
       <td>Specifies whether to enable passive authentication.</td>
     </tr>
     <tr>
       <td>skipURIs</td>
       <td>Defines the web pages in your application that should not be secured, and do not require authentication.</td>
     </tr>
     <tr>
        <td>KeyStorePassword</td>
        <td>Keystore password of your application.</td>
      </tr>
      <tr>
        <td>PrivateKeyAlias</td>
        <td>Private key alias of your application.</td>
      </tr>
      <tr>
        <td>PrivateKeyPassword</td>
        <td>Password of the private key of your application.</td>
      </tr>
     
   </tbody>
</table>
    
See the complete list of [configuration properties](https://github.com/asgardeo/asgardeo-tomcat-saml-agent/blob/master/io.asgardeo.tomcat.saml.sample/src/main/resources/configuration-catalog.md).

#### 2. Configure the keystore of the app

Copy the following configurations to the **<APP_HOME>/WEB-INF/web.xml** file and change the **certificate-file** parameter to the name of **your keystore file**.

```xml
<filter>
    <filter-name>SAML2SSOAgentFilter</filter-name>
    <filter-class>io.asgardeo.tomcat.saml.agent.SAML2SSOAgentFilter</filter-class>
</filter>
<filter-mapping>
    <filter-name>SAML2SSOAgentFilter</filter-name>
    <url-pattern>*.jsp</url-pattern>
</filter-mapping>
<filter-mapping>
    <filter-name>SAML2SSOAgentFilter</filter-name>
    <url-pattern>*.html</url-pattern>
</filter-mapping>
<filter-mapping>
    <filter-name>SAML2SSOAgentFilter</filter-name>
    <url-pattern>/samlsso</url-pattern>
</filter-mapping>
<filter-mapping>
    <filter-name>SAML2SSOAgentFilter</filter-name>
    <url-pattern>/logout</url-pattern>
</filter-mapping>

<listener>
    <listener-class>io.asgardeo.tomcat.saml.agent.SSOAgentContextEventListener</listener-class>
</listener>
<context-param>
    <param-name>property-file</param-name>
    <param-value>sample-app.properties</param-value>
</context-param>
<context-param>
    <param-name>certificate-file</param-name>
    <param-value>KEYSTORE_FILE_NAME</param-value>
</context-param>
```

<br>

### Add login

In the `index.html` file, add a login button to be used to forward users to secured pages.

When the user clicks the button, the SAML agent intercepts the request and initiates the SAML login flow if an authenticated session does not already exist.

```html
<form action="<HOME_PAGE>" method="post">
    <input type="submit" value="log in">
</form>
```

<br>

### Add logout

In the previous steps, you implemented login for your app. Now you need a way to log users out of your application and remove the user sessions from Asgardeo. 

When the user initiates the logout, the local authenticated application session is cleared and the session in Asgardeo is terminated.

Add the following snippet to enable logout.
```html
<form action="logout?SAML2.HTTPBinding=HTTP-POST" method="get">
    <input type="submit" value="Log Out">
</form>
```

See the [Asgardeo Tomcat SAML Agent documentation](https://github.com/asgardeo/asgardeo-tomcat-saml-agent#how-it-works) for more information.
