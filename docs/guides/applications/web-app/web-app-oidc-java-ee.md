# Web application with OIDC: Java EE

This guide provides steps to authenticate users to your own Java application with OIDC protocol by using Apache Maven (3.6.x or higher) as the package manager and Apache Tomcat (8.x or 9.x) as the deployment engine.

<ToggleButton buttonText='Try out the sample app' buttonPath='/quickstarts/qsg-web-app-sample'/>

::: tip Before you begin

1. Create a tenant in Asgardeo
2. Create a consumer user for your organization
3. Install Apache Maven (3.6.x or higher)
4. Install Apache Tomcat (8.x or 9.x)

:::

## Configure an application in Asgardeo

You need to first create an application in Asgardeo that represents your web application.

<CommonGuide guide='guides/fragments/configure-web-app-oidc-in-asgardeo.md'/>


## Add authentication to your app

**1. Add dependencies**

To ease development, we've introduced the **Asgardeo OIDC Agent**. You can use this Agent in your project by updating your `pom.xml` file with the following dependency.

```xml
<dependency>
    <groupId>io.asgardeo.tomcat.oidc.agent</groupId>
    <artifactId>io.asgardeo.tomcat.oidc.agent</artifactId>
    <version>0.1.8</version>
</dependency>
```

The Agent is hosted at **WSO2 Internal Repository**. To resolve the dependency mentioned above, point to the repository as follows.

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

**2. Configure**

We provide the Asgardeo endpoints to the application using a property file, which is read by the Asgardeo OIDC Agent.

Create a file named `oidc-sample-app.properties` inside the _<YOUR_APP>/src/main/resources_ directory, using the content below.

::: tip Note
The `skipURIs` property defines the web pages in your application that should not be secured, and do not require authentication.
:::

_Few of the configurations such as `callBackURL` and `skipURIs` depends on your App context path._


```
consumerKey=<consumerKey>
consumerSecret=<consumerSecret>
callBackURL=<YOUR_APP_PATH>/oauth2client
scope=openid
logoutURL=logout
authorizeEndpoint=https://accounts.asgardeo.io/t/<yourTenantDomain>/oauth2/authorize
logoutEndpoint=https://accounts.asgardeo.io/t/<yourTenantDomain>/oidc/logout
tokenEndpoint=https://accounts.asgardeo.io/t/<yourTenantDomain>/oauth2/token
issuer=https://accounts.asgardeo.io/t/<yourTenantDomain>/oauth2/token
jwksEndpoint=https://accounts.asgardeo.io/t/<yourTenantDomain>/oauth2/jwks
skipURIs=<YOUR_APP_PATH>/index.html
```

A comprehensive list of the properties used above, can be found in the [Configuration Catalog](https://github.com/asgardeo/asgardeo-tomcat-oidc-agent/blob/master/io.asgardeo.tomcat.oidc.sample/src/main/resources/configuration-catalog.md).

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

**3. Add login**

In the `index.html` file, add a login button to forward the user to secure pages upon successful login.

```html
<form action="<HOME_PAGE>" method="post">
    <input type="submit" value="Log In">
</form>
```
<br>

**4. Add logout**

Add the following snippet to enable logout.

```html
<form action="logout" method="get">
    <input type="submit" value="Log Out">
</form>
```