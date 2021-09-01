# Implement OIDC flows

## Discover the OIDC endpoints

This section covers how you can configure OIDC-based login for your single page application by discovering the required OIDC endpoints and configuring them in the Asgardeo console. 

<a :href="$withBase('/guides/applications/oidc/discover-oidc-configs/')">Discover OIDC endpoints</a> has detailed instructions on this. 


## Implement authorization code grant in apps

The guides listed below will help you understand the OIDC login flow using the authorization code flow with and without PKCE.

- <a :href="$withBase('/guides/applications/oidc/implement-auth-code/')">Implement authorization code flow</a>

- <a :href="$withBase('/guides/applications/oidc/implement-auth-code-with-pkce/')">Implement authorization code flow with PKCE</a>

## Validate ID tokens

This section explains how the signature and the claims are verifieed in the ID token that is sent by Asgardeo to an application. 

<a :href="$withBase('/guides/applications/oidc/validate-id-tokens/')">Validate ID tokens</a> has detailed instructions on this. 

## Request user information

When Asgardeo sends the ID token to an application, there is user information encoded within it. This can be obtained using the userinfo endpoint. 

<a :href="$withBase('/guides/applications/oidc/request-user-info/')">Request user information</a> has detailed instructions on this. 

## Token validation by resource servers

Asgardeo provides the '/oauth2/introspect' endpoint to perform token validation. Using this, the resource server can verify the access token before authorizing the access.

<a :href="$withBase('/guides/applications/oidc/introspect-tokens/')">Token validation by resource servers</a> has detailed instructions on this.

## Revoke access tokens

The token revocation endpoint can revoke any access granted to both confidential clients such as web apps and public clients such as the SPAs or mobile apps.

<a :href="$withBase('/guides/applications/oidc/revoke-tokens/')">Revoke access tokens</a> has detailed instructions on this.

## Add logout to application

The logout endpoint is used to terminate the user session at Asgardeo and to log the user out. 

<a :href="$withBase('/guides/applications/oidc/add-logout/')">Add logout to application</a> has detailed instructions on this.