# Add authentication to SPA 

This guide provides steps to authenticate users to any SPA with OIDC protocol.

## Configure an application in Asgardeo

You need to first create an application in Asgardeo that represents your SPA.

<CommonGuide guide='guides/fragments/configure-spa-in-asgardeo.md'/>

## Configure the SPA

The following server endpoints will be useful when implementing authentication in your application.

**Authorize**

`https://dev.accounts.asgardeo.io/t/<yourTenantDomain>/oauth2/authorize`

**Token**

`https://dev.accounts.asgardeo.io/t/<yourTenantDomain>/oauth2/token`

**UserInfo**

`https://dev.accounts.asgardeo.io/t/<yourTenantDomain>/oauth2/userinfo`

**JWKS**

`https://dev.accounts.asgardeo.io/t/<yourTenantDomain>/oauth2/jwks`

**Introspection**

`https://dev.accounts.asgardeo.io/t/<yourTenantDomain>/oauth2/introspect`

**Discovery**

`https://dev.accounts.asgardeo.io/t/<yourTenantDomain>/oauth2/token/.well-known/openid-configuration`

**Logout**

`https://dev.accounts.asgardeo.io/t/<yourTenantDomain>/oidc/logout`
