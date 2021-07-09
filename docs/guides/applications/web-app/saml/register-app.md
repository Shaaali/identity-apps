# Register SAML web app
To integrate your web application with Asgardeo using [SAML](https://docs.oasis-open.org/security/saml/v2.0/saml-core-2.0-os.pdf), 
first you need to register your application as a SAML application using the [Asgardeo console](console.asgardeo.io/). 

SAML metadata is an XML document which contains SAML configurations necessary for integration.

There are two ways you can use to provide your SAML application configurations to Asgardeo
- Use SAML SP metadata
- Provide SAML SP configurations manually

This guide will show you how to [register a SAML application](#register-app) in Asgardeo. 

## Register app
Login to the [Asgardeo Console](https://console.asgardeo.io/login).
1. In the Asgardeo Console, Select the **Develop > Applications**.
2. Select **New Application** and select **Traditional Web Application** type.
    <img :src="$withBase('/assets/img/guides/applications/select-app-type.png')" alt="Select app type in Asgardeo">
3. Select the **SAML** protocol.
4. Asgardeo provides three ways to register a SAML application. 
    - [Manual](#register-app-using-manual-configurations): You need to provide the configurations of SAML app to register.
    - [File Based](#register-app-using-metadata-file): Provide the SAML metadata file to register the app
    - [URL Based](#register-app-using-meta-url): Upload SAML metadata URL to register the app 
5. Pick one of the above options and proceed.       

### Register app using manual configurations
1. Click **Manual**
2. Provide the following details and click **Register**. 
   - **Name:** A unique name to identify your application.
   - **Issuer:** The unique identifier of the application. The value added here should be specified in the SAML authentication request as `saml:Issuer` element sent from the client application. You can't change this `issuer` configuration once you registered the app
   - **Assertion consumer service URLs:** The URLs to which the browser is redirected to upon successful authentication and recives SAML response.
    <img :src="$withBase('/assets/img/guides/applications/saml-app/register-saml-app.png')" alt="Register SAML app"> 
3. Click **Register**.

### Register app using metadata.

SAML SP metadata is a popular way of integrating a SAML application.
 
A SP metadata XML file contains:
- SP certificate
- The entity ID
- The Assertion Consumer Service URL (ACS URL)
- log out URL

Asgardeo provides two options to get the metadata to register a SAML application:
1. [File Based metadata](#register-app-using-metadata-file)
2. [URL Based metadata](#register-app-using-meta-url)

#### Register app using metadata file
Asgardeo provides the support to register a SAML app using its metadata file. 
1. Click **File Based** and **upload** the metadata file which contains SAML configuration of the application.
 <img :src="$withBase('/assets/img/guides/applications/saml-app/register-saml-app-using-metadata-file.png')" alt="Register SAML app using metadata file"> 
2. Click **Register**.

#### Register app using meta URL
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
