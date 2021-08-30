# OpenID Connect Identity Provider Login

You can add standard [OpenID Connect login](https://openid.net/specs/openid-connect-core-1_0.html#) to your applications using an external OpenID Connect(OIDC) Identity Provider(IdP) and enable users to log into applications with their accounts in the external identity providers.

## How it works

To provides this login capability, Asgardeo uses standard [OpenID Connect with authorization code flow](https://openid.net/specs/openid-connect-core-1_0.html#CodeFlowSteps) underneath. For an application, the OpenID Connect login flow with external identity provider works as follows:
 <img class="borderless-img" :src="$withBase('/assets/img/guides/idp/oidc-enterprise-idp/oidc-enterprise-login-flow.png')" alt="Add OIDC enterprise login in Asgardeo">

This guide provides the instructions on how to enable the login to your applications. 

## Prerequisite

To get started, you need to have an application registered in Asgardeo. If you don't have an app registered, <a :href="$withBase('/guides/applications/web-app/register-oidc-web-app/')">register an application</a> in Asgardeo to enable OpenID Connect enterprise login.

## Register app in the identity provider

You need to register an OpenID Connect application in the external identity provider. Follow the identity provider's documentation to know how to register an OIDC application.

You can use the following URL as the **callbackURL** of the application. 
``` no-line-numbers
https://api.asgardeo.io/t/<organization_name>/commonauth
```
Once you register an application, obtain:
- **client_id**(also known as app_id or application_id)
- **client_secret**(also known as app_secret)

Check the documentation of the OIDC Identity provider and get the following endpoints:
- Authorization Endpoint URL
- Token Endpoint URL
- User Info endpoint (optional)
- Logout endpoint (optional)

## Create OIDC identity provider

1. On the Asgardeo Console, click **Develop > Connections**.
2. Click **New Connections**.
3. Select **Enterprise** .
4. Provide a unique **identity provider name** and select **OpenID Connect**.
5. Enter the following details of the external OIDC identity provider and click **Next**:
     - **Name**: A unique name for this enterprise IdP.
     - **Client ID**: client_id obtained from the external identity provider. 
     - **Client secret**: client_secret obtained from the external identity provider. 
     - **Authorization endpoint URL**: The authorization endpoint of the external identity provider.
     - **Token endpoint URL** : The token endpoint of the external identity provider.
     <img :src="$withBase('/assets/img/guides/idp/oidc-enterprise-idp/create-oidc-enterprise-idp-wizard.png')" alt="Create OIDC Enterprise IDP in Asgardeo">     
6. Provide the mode of certificate configuration.
    You can either configure JWKS endpoint or upload a certificate of the external party. This will help to validate the signature of the assertions sent by the external identity provider.
    -  **JWKS endpoint**: The JWKS endpoint of the external identity provider.
    -  **Use PEM certificate** : Upload or paste the public certificate of the external identity provider. The certificate should be in PEM format.  
        ::: details If you have certificate in other formats such as `.crt`, `.cer` or `.der`, expand here to see how you can convert them to PEM format using <a href="https://www.openssl.org/" target="_blank">OpenSSL</a>
         **Convert CRT to PEM**
         ``` no-line-numbers
         openssl x509 -in cert.crt -out cert.pem
         ``` 
        **Convert CER to PEM:**
         ``` no-line-numbers
         openssl x509 -in cert.cer -out cert.pem
         ```  
        **Convert DER to PEM:**
          ``` no-line-numbers
          openssl x509 -in cert.der -out cert.pem
         ```
        :::     
7. After providing certificate details, click **Finish**.
8. You can find <a :href="$withBase('/references/idp-settings/oidc-settings-for-idp/#additional-settings')">additional configurations</a> under **Settings** once you create the OIDC identity provider.
9. Asgardeo requests for the **openid** scope from the external identity provider. If you need more attributes from external identity provider, you can configure `scope` as an <a :href="$withBase('/references/idp-settings/oidc-settings-for-idp/#additional-query-parameters')">additional query param</a>.  
    For example, you can configure the key as `scope` and the value as `openid profile` (i.e, `scope=openid profile`).
      
## Enable OIDC login for application

1. On the Asgardeo Console, click **Develop > Applications**.
2. Select an application from the application list that appears and navigate to the **Sign-in Method** tab of your application.
3. Click **Start with Default configuration**(If you have not modified the default sign in flow).
4. Click **Add Authentication** on the step, and select the OIDC identity provider you added the above.
5. Select **Update**.
    <img :src="$withBase('/assets/img/guides/idp/oidc-enterprise-idp/enable-oidc-enterprise-login-with-basic.png')" alt="Add OIDC identity provider login in Asgardeo">

## Related links
- <a :href="$withBase('/references/idp-settings/oidc-settings-for-idp/')">Configure additional query params</a>
