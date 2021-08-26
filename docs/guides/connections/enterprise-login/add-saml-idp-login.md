# SAML Identity Provider Login
You can add standard [SAML login](https://docs.oasis-open.org/security/saml/v2.0/saml-core-2.0-os.pdf) to your applications using an external SAML Identity Provider(IdP) and enable users to log into applications with their accounts in the external identity providers.
<img class="borderless-img" :src="$withBase('/assets/img/guides/idp/saml-enterprise-idp/configure-login.png')" alt="Configure SAML Enterprise IDP login in Asgardeo">

There are two ways you can use to provide your SAML IdP configurations to Asgardeo
    - Use SAML IdP metadata
    - Provide SAML IdP configurations manually

This guide will show you how to register a SAML IdP in Asgardeo and enable SAML external IdP login to an application.

## Prerequisite

To get started, you need to have an application registered in Asgardeo. If you don't already have, register one of the following application types.

-   <a :href="$withBase('/guides/applications/spa/register-single-page-app/')">Single-page app</a>
-   <a :href="$withBase('/guides/applications/web-app/register-oidc-web-app/')">Web app with OIDC</a>
-   <a :href="$withBase('/guides/applications/web-app/register-saml-web-app/')">web app with SAML</a>

## Register app in the identity provider
You need to register Asgardeo as a SAML application in the external identity provider. Follow the identity provider's documentation to know how to register a SAML application.

You can use the following URL as the **Assertion Consumer Service URL**(also known as callback URL/ redirect URL/ ACS URL) of the application which represents Asgardeo. 
``` no-line-numbers
https://api.asgardeo.io/t/<organization_name>/commonauth
```

After you register the app, you should obtain some configurations. You can either obtain some manual configuration of the identity provider, or the metadata file of the identity provider.
1. Manual configuration 
    - **Issuer**(also known as entityId)
    - **Single sign on URL** of the identity provider (also known as login URL)
    - **Identity Provider Certificate**

2. Metadata file configuration
    - **SAML IdP metadata file** of the identity provider
    - **Identity Provider Certificate**

### Create SAML identity provider
1. On the Asgardeo Console, click **Develop > Connections**.
2. Click **New Connections**.
3. Select **Enterprise**  connection.
4. Provide a unique **identity provider name** and select **SAML**.
   <img :src="$withBase('/assets/img/guides/idp/saml-enterprise-idp/register-saml-idp.png')" alt="Create SAML Enterprise IDP in Asgardeo">
5. Asgardeo provides two ways to register a SAML identity provider.
     - [File Based Configuration](#create-idp-using-saml-idp-metadata-file): Provide the SAML metadata file to register the IdP.
     - [Manual Configuration](#create-idp-using-manual-configurations): You need to provide the configurations of SAML IdP to register.
       
### Create IdP using SAML IdP metadata file

SAML IdP metadata is a popular way of integrating a SAML IdP.

The SAML IdP metadata document contains:  
   - IdP identifiers (entityID or sometimes called Issuer)
   - Endpoints (single sign-on URLs, single logout URLs, etc)
   - Supported bindings
    
1. Click **File Based Configuration**.
   <img :src="$withBase('/assets/img/guides/idp/saml-enterprise-idp/register-saml-idp-with-metafile.png')" alt="Create SAML Enterprise IDP with Metadata file">
2. Upload the IdP metadata file.
3. Click **Next**.
4. Upload the public certificate of the identity provider.
5. Click **Finish**.

### Create IdP using manual configurations
1. Click **Manual Configuration**.
      <img :src="$withBase('/assets/img/guides/idp/saml-enterprise-idp/register-saml-idp-with-manual-config.png')" alt="Create SAML Enterprise IDP with manual configurations">
2. Enter the following details and click **Next**:
     - **Service provider entity ID**: A unique name for this enterprise IdP. This value will be used as the `<saml2:Issuer>` in the SAML requests initiated from Asgardeo to external Identity Provider (IdP).
     - **Name ID format**: Name ID defines the name identifier formats supported by the external IdP. Name identifier is how Asgardeo communicates with external IdP regarding a user. 
     - **Single sign on URL**: Specifies the Single sign-on URL of the external IdP. This is where Asgardeo will send its authentication requests. You need to obtain this from the external IdP.
     - **Identity provider entity ID**: This is the `<saml2:Issuer>` value specified in the SAML responses issued by the external IdP. You need to obtain this from the external IdP.
     - **SAML 2.0 protocol binding**: Bindings define how SAML assertions and request-response protocol messages can be exchanged between the external SAML IdP and Asgardeo.
3. Click **Next**.
4. Upload the public certificate of the identity provider.
5. Click **Finish**.

You can find more additional configurations once you create SAML identity provider. See <a :href="$withBase('/references/idp-settings/saml-settings-for-idp')">SAML IdP settings</a>.
  
## Enable SAML login for application
1. On the Asgardeo Console, click **Develop > Applications**.
2. Select an application from the application list that appears and navigate to the **Sign-in Method** of your application.
3. Click **Start with Default configuration**(If you have not modified the default sign in flow).
4. Click **Add Authentication** on the step, and select the SAML identity provider you added the above.
5. Select **Update**.
    <img :src="$withBase('/assets/img/guides/idp/saml-enterprise-idp/enable-saml-enterprise-login-with-basic.png')" alt="Add SAML IdP login in Asgardeo">

## Related links
- <a :href="$withBase('/references/idp-settings/saml-settings-for-idp/')">Configure SAML IdP settings</a>
