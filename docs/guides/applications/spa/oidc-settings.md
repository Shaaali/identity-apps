# OpenID Connect settings

You can find the OpenID Connect settings protocol related settings under **protocol** section of the selected application. 
 <img :src="$withBase('/assets/img/guides/applications/app-protocol-settings.png')" alt="OIDC settings">

## Basic Settings
### Allowed grant types
This will determine how the application communicates with the Asgardeo token endpoint and obtain access token. Single page application template supports following grant types:
 - Code
 - Refresh Token
 - Implicit

It is recommended to use code grant for public clients. For single-page application templates, code grant is enabled by default. 
You can enable refresh token grant to get refresh tokens. 
But implicit grant is [not recommended](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-security-topics-14#section-2.1.2) due to security reasons

### Authorized redirect URLs
<CommonGuide guide='guides/fragments/manage-app/oidc-settings/authorized-urls.md'/>

The `redirect_uri` sent in <a href="/guides/applications/integrate-public-client/#get-authorization-code">login</a> request and the `post_logout_redirect_uri` sent in <a href="/guides/applications/integrate-public-client/#logout-the-application">logout request</a> should match with one of the registered authorized redirect URLs.

### Allowed origins
 <CommonGuide guide='guides/fragments/manage-app/oidc-settings/allowed-origin.md'/>

## Advanced Settings

### Proof Key for Code Exchange(PKCE)
#### Mandatory
It is recommended to use [PKCE](https://datatracker.ietf.org/doc/html/rfc7636) with authorization code grant to mitigate the code interception attacks in public clients. For single-page applications, this setting is enabled dy default. 
 
 <CommonGuide guide='guides/fragments/manage-app/oidc-settings/pkce-mandatory.md'/>
 
 In case, if your app **does not support PKCE**, you can **disable** it.

### Access Token
  <CommonGuide guide='guides/fragments/manage-app/oidc-settings/access-token.md'/>

### ID Token
 <CommonGuide guide='guides/fragments/manage-app/oidc-settings/id-token.md'/>

### Refresh Token
 <CommonGuide guide='guides/fragments/manage-app/oidc-settings/refresh-token.md'/>
