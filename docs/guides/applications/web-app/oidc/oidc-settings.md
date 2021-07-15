# OpenID Connect settings

You can find the OpenID Connect protocol related settings under **protocol** section of the selected application. 
  <img :src="$withBase('/assets/img/guides/applications/app-protocol-settings.png')" alt="OIDC settings">
 
## Basic Settings
### Allowed grant type
This will determine how the application communicates with the token service. Web application template supports following grant types:
 - Code
 - Client Credentials
 - Refresh Token
 - Implicit
 - Password   

It is recommended to use code grant for public clients. For single-page application templates, code grant is enabled by default. 
You can enable refresh token grant to get refresh tokens. 
But [implicit grant](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-security-topics-14#section-2.1.2) and [password](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-security-topics-14#section-2.4) grants are not recommended due to security reasons.

### Public client
<CommonGuide guide='guides/fragments/manage-app/oidc-settings/public-client.md'/>

### Authorized redirect URLs
Authorized redirect URLs are not required for `Client Credentials` and `Password` grant type.

<CommonGuide guide='guides/fragments/manage-app/oidc-settings/authorized-urls.md'/>

The `redirect_uri` sent in <a href="/guides/applications/integrate-confidential-client/#get-authorization-code">login</a> request and the `post_logout_redirect_uri` sent in <a href="/guides/applications/integrate-confidential-client/#logout-the-application">logout request</a> should match with one of the registered authorized redirect URLs.


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
