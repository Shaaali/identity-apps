# OpenID Connect settings

You can find the OpenID Connect settings protocol related settings under **protocol** section of the selected application. 
 <img :src="$withBase('/assets/img/guides/applications/app-protocol-settings.png')" alt="OIDC settings">

## Basic Settings
### Allowed grant type
This will determine how the application communicates with the Asgardeo token endpoint and obtain access token. Asgardeo supports following grant-types:
 - Code
 - Refresh Token
 - Implicit

By default, Code(authorization code) is enabled for OIDC single-page applications. In order to get Refresh tokens, you need to enable `Refresh Token` as well.

`Implicit` grant is [not recommended](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-security-topics-14#section-2.1.2) due to security reasons.

### Authorized redirect URLs
<CommonGuide guide='guides/fragments/manage-app/oidc-settings/authorized-urls.md'/>

The `redirect_uri` sent with the <a href="/guides/applications/integrate-public-client/#get-authorization-code">authorization request</a> and the `post_logout_redirect_uri` sent in the <a href="/guides/applications/integrate-public-client/#logout-the-application">logout request</a> by the application, are validated against these set of URLs.    
You can add multiple redirect URLs.

### Allowed origins
 <CommonGuide guide='guides/fragments/manage-app/oidc-settings/allowed-origin.md'/>

## Advanced Settings

### Proof Key for Code Exchange(PKCE)
#### Mandatory
It is recommended to use [PKCE](https://datatracker.ietf.org/doc/html/rfc7636) with authorization code grant to mitigate the code interception attacks in public clients. For single-page applications, this setting is enabled dy default. 
 
 <CommonGuide guide='guides/fragments/manage-app/oidc-settings/pkce-mandatory.md'/>
 
 In case, if your app does not support PKCE, you can disable it.

### Access Token
  <CommonGuide guide='guides/fragments/manage-app/oidc-settings/access-token.md'/>

### ID Token
 <CommonGuide guide='guides/fragments/manage-app/oidc-settings/id-token.md'/>

### Refresh Token
 <CommonGuide guide='guides/fragments/manage-app/oidc-settings/refresh-token.md'/>
