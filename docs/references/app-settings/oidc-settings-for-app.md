# OIDC settings for apps

You can find the OpenID Connect protocol related settings under **protocol** section of the selected application. 
  <img :src="$withBase('/assets/img/guides/applications/app-protocol-settings.png')" alt="OIDC settings">
 
## Basic Settings

### Client credentials

When your application is registered in Asgardeo, a client ID is generated as the identifier of the application. If you register a traditional web application, a client secret is generated in addition to the client ID as shown below.

<img :src="$withBase('/assets/img/guides/applications/get-client-id-and-secret.png')" alt="Get client ID and secret of webapp">

### Allowed grant types
This will determine how the application communicates with the token service. Web application template supports following grant types:
 - Code
 - Client Credentials
 - Refresh Token
 - Implicit
 - Password   

It is recommended to use code grant for public clients. For single-page application templates, code grant is enabled by default. 
You can enable refresh token grant to get refresh tokens. 
However, [implicit grant](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-security-topics-14#section-2.1.2) and [password](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-security-topics-14#section-2.4) grants are not recommended due to security reasons.

### Public client

<CommonGuide guide='guides/fragments/manage-app/oidc-settings/public-client.md'/>

### Authorized redirect URLs
Authorized redirect URLs are not required for `Client Credentials` and `Password` grant type.

<CommonGuide guide='guides/fragments/manage-app/oidc-settings/authorized-urls.md'/>

The `redirect_uri` sent in the <a :href="$withBase('/guides/authentication/oidc/implement-auth-code/#get-authorization-code')">login</a> request and the `post_logout_redirect_uri` sent in the <a :href="$withBase('/guides/authentication/oidc/add-logout')">logout request</a> should match with one of the registered authorized redirect URLs.


### Allowed origins
 <CommonGuide guide='guides/fragments/manage-app/oidc-settings/allowed-origin.md'/>
 
## Advanced Settings
### Proof Key for Code Exchange(PKCE)

#### Mandatory 
 <CommonGuide guide='guides/fragments/manage-app/oidc-settings/pkce-mandatory.md'/>

#### Support Plain Transform Algorithm
 <CommonGuide guide='guides/fragments/manage-app/oidc-settings/pkce-plain-text.md'/>

### Access Token
  <CommonGuide guide='guides/fragments/manage-app/oidc-settings/access-token.md'/>

### ID Token
 <CommonGuide guide='guides/fragments/manage-app/oidc-settings/id-token.md'/>

### Refresh Token
 <CommonGuide guide='guides/fragments/manage-app/oidc-settings/refresh-token.md'/>

### Certificate
The certificate is used to validate signatures of signed requests from the application to Asgardeo and to encrypt requests from Asgardeo to the application. 
<br><br>
You can either <b>Provide Certificate</b> or <b>Use JWKS endpoint</b> to add a certificate.
<br>
Follow the steps given below to Provide Certificate.

1. Select <b>Provide Certificate</b> and click <b>New Certificate</b>.
<img :src="$withBase('/assets/img/guides/applications/oidc/upload-certificate-of-app.png')" alt="Upload app certificate">

2. Upload the certificate file or copy the certificate contents.
<br>

::: details If you have certificate in other formats such as `.crt`, `.cer` or `.der`, expand here to convert your certs to PEM format using <a href="https://www.openssl.org/" target="_blank">OpenSSL</a>
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

<br>
