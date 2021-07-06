# Register SAML web app
To integrate your web application with Asgardeo using SAML, first you need to register your web application as an SAML web application in Asgardeo console.  

SAML metadata  file is an XML document which contains SAML configurations necessary for integration. 

There are two types of SAML metadata:
1. SP metadata
2. IdP metadata

The SP metadata XML file contains:
- SP certificate
- The entity ID
- The Assertion Consumer Service URL (ACS URL)
- log out URL

IDP metadata contains information related to SAML identity provider.

Asgardeo provides the capability to register saml app using:
 - SAML SP metadata
 - Manual configurations

This guide will show you how to [register a SAML application](#register-app) in Asgardeo. 

## Register app
You need to login to your [Asgardeo Console](https://console.asgardeo.io/login) to register your SAML web application.
1. In the Asgardeo Console, Select the **Develop > Applications**.
2. Select **New Application** and select **Traditional Web Application** type.
    <img :src="$withBase('/assets/img/guides/applications/select-app-type.png')" alt="Select app type in Asgardeo">
3. Select the **SAML** protocol.
4. Asgardeo provides three ways to register a SAML application.
    - **Manual:** You need to provide the configurations of SAML app to register.
    - **File Based:** Provide the SAML metadata file to register the app
    - **URL Based:** Upload SAML metadata URL to register the app       

### Register app using manual configurations
1. Click **Manual**
2. Provide the following details and click **Register**. 
   - **Name:** A unique name to identify your application.
   - **Issuer:** The unique identifier of the application. The value added here should be specified in the SAML authentication request as `saml:Issuer` element sent from the client application. You can't change this `issuer` configuration once you registered the app
   - **Assertion consumer service URLs:** The URLs to which the browser is redirected to upon successful authentication and recives SAML response.
    <img :src="$withBase('/assets/img/guides/applications/saml-app/register-saml-app.png')" alt="Register SAML app"> 
3. Click **Register**.

### Register app using metadata file
Asgardeo provides the support to register a SAML app using its metadata file. 
1. Click **File Based** and **upload** the metadata file which contains SAML configuration of the application.
 <img :src="$withBase('/assets/img/guides/applications/saml-app/register-saml-app-using-metadata-file.png')" alt="Register SAML app using metadata file"> 
2. Click **Register**.

### Register app using meta URL
SAML meta URL is the endpoint which is hosted with SAML metadata file. Asgardeo provides the support to register a SAML app using its SAML meta URL. 
1. Click **URL Based** and upload the metadata file.
2. Provide the following details.
    - **Meta URL** : URL from which SAML configuration of the application can be fetched
  <img :src="$withBase('/assets/img/guides/applications/saml-app/register-saml-app-using-meta-url.png')" alt="Register SAML app using meta url"> 
3. Click **Register**.

## What's next?
Now you've registered your single-page application. Now you can:
- <a href = "/guides/applications/web-app/saml/configure-login/">Configure SAML login to your web app</a>
- <a href="/guides/applications/web-app/saml/saml-settings">Configure advanced SAML settings</a>
