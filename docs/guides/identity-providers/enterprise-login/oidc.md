# OpenID Connect Enterprise Login

Follow this guide to add login to your applications with any external OpenID Connect(OIDC) Identity provider. For an application, the login flow works as follows:
<img :src="$withBase('/assets/img/guides/idp/oidc-enterprise-idp/oidc-enterprise-login-flow.png')" alt="Add OIDC enterprise login in Asgardeo">

::: tip Before you begin
You should have an application registered in Asgardeo. If you don't have, [create application](../../applications/) in Asgardeo to enable login.
:::

**Steps**<br>
In order to add external identity provider, you have to follow below steps in Asgardeo after completing the above prerequisites:
 1. [Register app in the external OIDC identity provider](#register-app-in-the-identity-provider)
 2. [Create OIDC Identity Provider](#create-oidc-identity-provider)
 3. [Enable OIDC login for application](#enable-oidc-login-for-application)

## Register app in the identity provider
You need to register an OpenID Connect application in the external identity provider. Follow the identity provider's documentation to know how to register a OIDC application.

You can use the following URL as the **callbackURL** of the application. 
```
https://accounts.asgardeo.io/t/<organization_name>/commonauth
```
Once you register an application, obtain:
- **client_id**(also known as app_id or  application_id)
- **client_secret**.    

Check the documentation of the OIDC Identity provider and get the following endpoints:
1. Authorization Endpoint URL
2. Token Endpoint URL
3. User Info endpoint (optional)
4. Logout endpoint (optional)

## Create OIDC identity provider
1. In the Asgardeo Console, Click **Develop > Identity Providers**.
2. Select **Enterprise**  Identity Provider type.
3. Provide a unique **Identity provider name** and select **OpenID Connect**.
4. Enter the following details of the external OIDC identity provider and click **Next**:
     - **Name**: A unique name for this enterprise IDP.
     - **Client ID**: client_id obtained from the external identity provider. 
     - **Client secret**: client_secret obtained from the external identity provider. 
     - **Authorization endpoint URL**: The authorization endpoint of the external identity provider.
     - **Token endpoint URL** : The token endpoint of the external identity provider.
     <img :src="$withBase('/assets/img/guides/idp/oidc-enterprise-idp/create-oidc-enterprise-idp-wizard.png')" alt="Create OIDC Enterprise IDP in Asgardeo">     
5. Provide the mode of certificate configuration.
    You can either configure JWKS endpoint or upload a certificate of the external party. This will help to validate the signature of the assertions sent by the external identity provider.
    -  **JWKS endpoint**: The JWKS endpoint of the external identity provider.
    -  **Use PEM certificate** : Upload or paste the public certificate of the external identity provider. The certificate should be in PEM format.  
        ::: details If you have certificate in other formats such as `.crt`, `.cer` or `.der`, expand here to see how you can convert them to PEM format using <a href ="https://www.openssl.org/" target="_blank">OpenSSL</a>
         **Convert CRT to PEM**
         ```
         openssl x509 -in cert.crt -out cert.pem
         ``` 
        **Convert CER to PEM:**
         ```
         openssl x509 -in cert.cer -out cert.pem
         ```  
        **Convert DER to PEM:**
          ```
          openssl x509 -in cert.der -out cert.pem
         ```
        :::     
6. After providing certificate details, click **Finish**.
7. You can find more additional configurations once you have created OIDC identity provider.
    - **Authorized redirect URL**: It is a readonly configuration which  denotes the authorization redirect URL of Asgardeo.
    - **User info endpoint URL**: The OIDC userinfo endpoint of the external identity provider. 
    - **Logout URL**: The OIDC logout endpoint of the external identity provider.
    - **Additional query parameters**: If you need to pass any additional query parameters to the external identity provider. For more information, see <a href="../configure-additional-queries">Configure additional query params</a>.
  
## Enable OIDC login for application
1. In the Asgardeo Console, Click **Develop > Applications**.
2. Select an application from the application list that appears and navigate to the **Sign-on Method** tab of your application.
3. Select the enterprise OIDC identity provider you added the above, click **Add Authentication** on the step and click **Update** .
    <img :src="$withBase('/assets/img/guides/idp/oidc-enterprise-idp/enable-oidc-enterprise-login.png')" alt="Add OIDC enterprise login in Asgardeo">
