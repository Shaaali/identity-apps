# Discover OpenID Connect endpoints of Asgardeo

When you build OpenID Connect login in your application using Asgardeo as your identity provider, you need to get the OpenID Connect endpoints and configurations from Asgardeo.

You can do this by invoking the discovery endpoint API or by using the Asgardeo console as explained below.

## Prerequisite

To get started, you need to have an application registered in Asgardeo:

-   Register a <a :href="$withBase('/guides/applications/spa/register-single-page-app/')">single-page app with OIDC</a>.
-   Register a <a :href="$withBase('/guides/applications/web-app/register-oidc-web-app/')">web app with OIDC</a>.
 
## Use the discovery endpoint

[OpenID Connect Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html) allows you to discover the metadata such as endpoints, scopes, response types, claims, and supported client authentication methods of identity providers such as Asgardeo.

Applications can dynamically discover the OpenID Connect identity provider metadata by calling the [OpenID Connect discovery](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfigurationRequest) endpoint. The structure of the request URL is as follows: `<issuer>/.well-known/openid-configuration`.  

**Issuer of Asgardeo**
```bash no-line-numbers
api.asgardeo.io
```

**Discovery endpoint of Asgardeo**
```bash no-line-numbers
https://api.asgardeo.io/t/<organization_name>/oauth2/token/.well-known/openid-configuration
```

**Sample request**

<CodeGroup>

<CodeGroupItem title="cURL">

```bash  no-line-numbers
curl --location --request GET 'https://api.asgardeo.io/t/bifrost/oauth2/token/.well-known/openid-configuration'
```

</CodeGroupItem>

<CodeGroupItem title="JavaScript - jQuery" active>

```js no-line-numbers
var settings = {
    "url": "https://api.asgardeo.io/t/bifrost/oauth2/token/.well-known/openid-configuration",
    "method": "GET",
    "timeout": 0,
};

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

</CodeGroupItem>

<CodeGroupItem title="Nodejs - Axios" active>

```js no-line-numbers
var axios = require('axios');

var config = {
    method: 'get',
    url: 'https://api.asgardeo.io/t/bifrost/oauth2/token/.well-known/openid-configuration',
    headers: {}
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
```

</CodeGroupItem>

</CodeGroup>

<br>

**Sample response**
```json no-line-numbers
{
    .
    .
   "introspection_endpoint" : "https://api.asgardeo.io/t/bifrost/oauth2/introspect",
   "end_session_endpoint" : "https://api.asgardeo.io/t/bifrost/oidc/logout",
   "registration_endpoint" : "https://api.asgardeo.io/t/bifrost/api/identity/oauth2/dcr/v1.0/register",
   "token_endpoint" : "https://api.asgardeo.io/t/bifrost/oauth2/token",
   "jwks_uri" : "https://api.asgardeo.io/t/bifrost/oauth2/jwks",
   "revocation_endpoint" : "https://api.asgardeo.io/t/bifrost/oauth2/revoke",
   "authorization_endpoint" : "https://api.asgardeo.io/t/bifrost/oauth2/authorize",
   "issuer" : "https://api.asgardeo.io/t/bifrost/oauth2/token"
    .
    .
}
```

## Get endpoints from the console

Some applications and SDKs are not capable of dynamically resolving endpoints from OpenID Connect discovery. For such applications, you need to configure endpoints manually.

You can get the endpoints from the console as follows:

1. On the [Asgardeo console](https://console.asgardeo.io/), go to **Develop > Application**.
2. Select an OIDC application from the list.
3. Go to the **Info** tab of the application and find the server endpoints to your organization.
   <img :src="$withBase('/assets/img/guides/applications/app-endpoint-help.png')" alt="app-help-panel-for-endpoints">

## What's next?

Explore how OpenID Connect endpoints are used when you implement login to your applications:

- Implement login for single-page applications <a :href="$withBase('/guides/applications/oidc/implement-auth-code-with-pkce')">using the authorization code flow with PKCE</a>.
- Implement login for traditional web applications <a :href="$withBase('/guides/applications/oidc/implement-auth-code')">using the authorization code flow</a>.