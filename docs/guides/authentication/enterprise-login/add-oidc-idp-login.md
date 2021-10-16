# Add login with an OpenID Connect identity provider

You can add standard [OpenID Connect login](https://openid.net/specs/openid-connect-core-1_0.html#) to your applications using an external OpenID Connect (OIDC) identity provider (IdP) and enable users to log in to your applications while maintaining their accounts in the external identity providers.

Follow this guide to register a OIDC IdP in Asgardeo and add it to the login flow of your application.

## Register Asgardeo in the IdP

You need to register an OpenID Connect application with the external identity provider. Follow the identity provider's documentation to know how to register an OIDC application.

You can use the following URL as the **callbackURL** of the application. 

```bash no-line-numbers
https://api.asgardeo.io/t/<organization_name>/commonauth
```
Once you register an application, you will receive the following:

- **client_id** (also known as `app_id` or `application_id`)
- **client_secret** (also known as app_secret)

Check the documentation of the OIDC identity provider and get the following endpoints:

- Authorization Endpoint URL
- Token Endpoint URL
- User Info endpoint (optional)
- Logout endpoint (optional)

## Register the OIDC IdP

Now, let's register the OIDC IdP in Asgardeo.

1. On the Asgardeo console, click **Develop > Connections**.
2. Click **New Connections**.
3. Select **Standard-Based IdP**.
4. Provide a unique **identity provider name**, select **OpenID Connect**, and click **Next**.

   <img :src="$withBase('/assets/img/guides/idp/oidc-enterprise-idp/create-oidc-enterprise-idp-wizard.png')" alt="Create OIDC Enterprise IDP in Asgardeo"> 

5. Enter the following details of the external OIDC identity provider and click **Next**:    

    <table>
        <tr>
            <th>Parameter</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>Client ID</td>
            <td>The client ID obtained from the external identity provider.</td>
        </tr>
        <tr>
            <td>Client secret</td>
            <td>The client secret obtained from the external identity provider.</td>
        </tr>
        <tr>
            <td>Authorization endpoint URL</td>
            <td>The authorization endpoint of the external identity provider.</td>
        </tr>
        <tr>
            <td>Token endpoint URL</td>
            <td>The token endpoint of the external identity provider.</td>
        </tr>
    </table>

6. Provide the mode of certificate configuration.
    
    ::: info
    You can either configure a JWKS endpoint or upload a certificate of the external party. This helps to validate the signature of the assertions sent by the external identity provider.
    :::

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

7. After providing the endpoint or certificate details, click **Finish**.
8. You can find <a :href="$withBase('/references/idp-settings/oidc-settings-for-idp/#additional-settings')">additional configurations</a> under **Settings** once you create the OIDC identity provider.

Asgardeo requests for the **openid** scope from the external identity provider. If you need more attributes from the external identity provider, you can configure `scope` as an <a :href="$withBase('/references/idp-settings/oidc-settings-for-idp/#additional-query-parameters')">additional query param</a>.   For example, you can configure the key as `scope` and the value as `openid profile` (i.e, `scope=openid profile`).
      
## Enable the OIDC IdP for login

::: info Before you begin
You need to have an application registered in Asgardeo. If you don't already have one, register one of the following application types:

-   <a :href="$withBase('/guides/applications/register-single-page-app/')">Single-page app</a>
-   <a :href="$withBase('/guides/applications/register-oidc-web-app/')">Web app with OIDC</a>
-   <a :href="$withBase('/guides/applications/register-saml-web-app/')">web app with SAML</a>
:::

1. On the Asgardeo console, click **Develop > Applications**.
2. Open your application from the list and go to the **Sign-in Method** tab.
3. If you haven't already defined a sign-in flow, click **Start with Default configuration** to get started.
4. Click **Add Authentication** on the step, select your OIDC identity provider, and click **Add**.

    <img :src="$withBase('/assets/img/guides/idp/oidc-enterprise-idp/enable-oidc-enterprise-login-with-basic.png')" alt="Add OIDC identity provider login in Asgardeo">

## How it works

To provide this login capability, Asgardeo uses the standard [OpenID Connect with authorization code flow](https://openid.net/specs/openid-connect-core-1_0.html#CodeFlowSteps) underneath. For an application, this flow works as follows:

<img class="borderless-img" :src="$withBase('/assets/img/guides/idp/oidc-enterprise-idp/oidc-enterprise-login-flow.png')" alt="Add OIDC enterprise login in Asgardeo">

## Related links

- <a :href="$withBase('/references/idp-settings/oidc-settings-for-idp/')">Configure OIDC IdP settings</a>
