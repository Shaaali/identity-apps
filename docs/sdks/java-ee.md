---
breadcrumb: false
---

# Web application with OIDC: Java EE

This guide provides steps to authenticate users to your Java EE web application deployed on Tomcat with OpenID Connect 
using the [Asgardeo Tomcat OIDC Agent](https://github.com/asgardeo/asgardeo-tomcat-oidc-agent)

<Button 
    buttonType='grey-outlined-icon'
    buttonText='Try out the sample app'
    startIconPath='images/technologies/java-logo.svg'
    buttonPath='/quickstarts/qsg-oidc-webapp-java-ee'
/>

## Prerequisites
1. Download [Apache tomcat](https://tomcat.apache.org/tomcat-9.0-doc/) 9.x or 8.x in your local environment.
2. [Download](https://maven.apache.org/download.cgi) and [install](https://maven.apache.org/install.html) Apache Maven (3.6.x or higher) as the package manager if you don't have.
3. You should have registered a web application. If you don't have an app registered, <a href ="/guides/applications/web-app/register-app">register an application</a> in Asgardeo.

By following this guide, you will
1. Register your application as an OIDC app in Asgardeo
2. Embed Asgardeo OIDC Agent in your web application project
3. Configure your web application to communicate with Asgardeo
4. Add login and logout functionality in your web application

## Add authentication to your app

To ease development, we have introduced the [Asgardeo Tomcat OIDC Agent](https://github.com/asgardeo/asgardeo-tomcat-oidc-agent)
which enables adding OIDC-based login and logout in the web applications deployed on Tomcat.

Refer the [Asgardeo Tomcat OIDC Agent documentation](https://github.com/asgardeo/asgardeo-tomcat-oidc-agent#how-it-works) for more information on how it works.

### Add dependencies

You can use Asgardeo OIDC Agent in your project by updating the `pom.xml` file with the following dependency.

```xml
<dependency>
    <groupId>io.asgardeo.tomcat.oidc.agent</groupId>
    <artifactId>io.asgardeo.tomcat.oidc.agent</artifactId>
    <version>0.1.8</version>
</dependency>
```

The Agent is hosted at **WSO2 Internal Repository**. To resolve the dependency mentioned above, point to the repository
as follows.

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

<br>

### Configure

We provide the Asgardeo endpoints to the application using a property file, which is read by the Asgardeo OIDC Agent.

Create a file named `oidc-sample-app.properties` inside the _<YOUR_APP>/src/main/resources_ directory, using the content
below.

::: tip Note

The `skipURIs` property defines the web pages in your application that should not be secured, and do not require
authentication.
:::

_Few of the configurations such as `callBackURL` and `skipURIs` depends on the context path of your application._

```
consumerKey=<consumerKey>
consumerSecret=<consumerSecret>
callBackURL=<YOUR_APP_PATH>/oauth2client
scope=openid
logoutURL=logout
authorizeEndpoint=https://accounts.asgardeo.io/t/<organization_name>/oauth2/authorize
logoutEndpoint=https://accounts.asgardeo.io/t/<organization_name>/oidc/logout
tokenEndpoint=https://accounts.asgardeo.io/t/<organization_name>/oauth2/token
issuer=https://accounts.asgardeo.io/t/<organization_name>/oauth2/token
jwksEndpoint=https://accounts.asgardeo.io/t/<organization_name>/oauth2/jwks
skipURIs=<YOUR_APP_PATH>/index.html
```

A comprehensive list of the properties used above can be found in
the [Configuration Catalog](https://github.com/asgardeo/asgardeo-tomcat-oidc-agent/blob/master/io.asgardeo.tomcat.oidc.sample/src/main/resources/configuration-catalog.md)
.

Finally, copy and paste the following configuration to the _<YOUR_APP>/src/main/webapp/WEB-INF/web.xml_ file.

```xml
<filter>
    <filter-name>OIDCAgentFilter</filter-name>
    <filter-class>io.asgardeo.tomcat.oidc.agent.OIDCAgentFilter</filter-class>
</filter>
<filter-mapping>
    <filter-name>OIDCAgentFilter</filter-name>
    <url-pattern>/logout</url-pattern>
</filter-mapping>
<filter-mapping>
    <filter-name>OIDCAgentFilter</filter-name>
    <url-pattern>/oauth2client</url-pattern>
</filter-mapping>
<filter-mapping>
    <filter-name>OIDCAgentFilter</filter-name>
    <url-pattern>*.jsp</url-pattern>
</filter-mapping>
<filter-mapping>
    <filter-name>OIDCAgentFilter</filter-name>
    <url-pattern>*.html</url-pattern>
</filter-mapping>
<listener>
    <listener-class>io.asgardeo.tomcat.oidc.agent.SSOAgentContextEventListener</listener-class>
</listener>
<context-param>
    <param-name>app-property-file</param-name>
    <param-value>oidc-sample-app.properties</param-value>
</context-param>
<listener>
    <listener-class>io.asgardeo.tomcat.oidc.agent.JKSLoader</listener-class>
</listener>
```

<br>

### Add login

In the `index.html` file, add a login button to forward the user to secure pages upon successful login.

Once the user clicks on the button, the request will be intercepted by the OIDC agent and will initiate the OIDC Login
flow if it does not find an authenticated application session.

```html
<form action="<HOME_PAGE>" method="post">
    <input type="submit" value="Log In">
</form>
```

<br>

### Add logout

Add the following snippet to enable logout.

When the user initiates the logout, the local authenticated application session is cleared and the session in Asgardeo
is terminated.

```html
<form action="logout" method="get">
    <input type="submit" value="Log Out">
</form>
```

## Related Links

* [Tryout JAVA EE OIDC Webapp Sample](/quickstarts/qsg-oidc-webapp-java-ee.md)