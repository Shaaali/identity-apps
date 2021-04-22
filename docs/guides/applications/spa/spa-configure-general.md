# Add authentication to SPA 

This guide provides steps to authenticate users with OIDC protocol to a SPA written using any framework in general.

## Configure an application in Asgardeo

You need to first create an application in Asgardeo that represents your SPA.

<CommonGuide guide='guides/fragments/configure-spa-in-asgardeo.md'/>

## Configure the SPA

The following server endpoints will be useful when implementing authentication in your application.

### Discover the endpoints

Asgardeo supports OpenID Connect Discovery to obtain information required to interact with, including its OAuth 2.0 endpoint locations. 

The discovery endpoint offers a JSON document under `/.well-known/openid-configuration` which contains the issuer name, endpoint URLs and information such as supported scopes or response types.

**Discovery endpoint:**

`https://accounts.asgardeo.io/t/<yourTenantDomain>/oauth2/token/.well-known/openid-configuration`

**Sample response:**
```json
{
  "request_parameter_supported": true,
  "claims_parameter_supported": true,
  "introspection_endpoint": "https://accounts.asgardeo.io/t/bifrost/oauth2/introspect",
  "Response_modes_supported": [
    "query",
    "fragment",
    "form_post"
  ],
  "scopes_supported": [
    "openid",
    "email",
    "profile",
    "phone",
    "address"
  ],
  "check_session_iframe": "https://accounts.asgardeo.io/t/bifrost/oidc/checksession",
  "backchannel_logout_supported": true,
  "issuer": "https://accounts.asgardeo.io/t/bifrost/oauth2/token",
  "authorization_endpoint": "https://accounts.asgardeo.io/t/bifrost/oauth2/authorize",
  "introspection_endpoint_auth_methods_supported": [
    "client_secret_basic",
    "client_secret_post"
  ],
  "claims_supported": [
    "postal_code",
    "groups",
    "name",
    "address",
    "locale",
    "preferred_username",
    "middle_name",
    "country",
    "street_address",
    "website",
    "gender",
    "phone_number",
    "formatted",
    "sub",
    "nickname",
    "email",
    "upn",
    "birthdate",
    "given_name",
    "locality",
    "updated_at",
    "email_verified",
    "region",
    "family_name",
    "zoneinfo",
    "profile",
    "phone_number_verified",
    "picture",
    "iss",
    "acr"
  ],
  "userinfo_signing_alg_values_supported": [
    "RS256"
  ],
  "token_endpoint_auth_methods_supported": [
    "client_secret_basic",
    "client_secret_post"
  ],
  "response_modes_supported": [
    "query",
    "fragment",
    "form_post"
  ],
  "backchannel_logout_session_supported": true,
  "token_endpoint": "https://accounts.asgardeo.io/t/bifrost/oauth2/token",
  "response_types_supported": [
    "id_token token",
    "code",
    "code id_token token",
    "code id_token",
    "id_token",
    "code token",
    "none",
    "token"
  ],
  "revocation_endpoint_auth_methods_supported": [
    "client_secret_basic",
    "client_secret_post"
  ],
  "grant_types_supported": [
    "refresh_token",
    "urn:ietf:params:oauth:grant-type:saml2-bearer",
    "asg_api",
    "password",
    "client_credentials",
    "iwa:ntlm",
    "authorization_code",
    "urn:ietf:params:oauth:grant-type:uma-ticket",
    "account_switch",
    "urn:ietf:params:oauth:grant-type:jwt-bearer"
  ],
  "end_session_endpoint": "https://accounts.asgardeo.io/t/bifrost/oidc/logout",
  "revocation_endpoint": "https://accounts.asgardeo.io/t/bifrost/oauth2/revoke",
  "userinfo_endpoint": "https://accounts.asgardeo.io/t/bifrost/oauth2/userinfo",
  "code_challenge_methods_supported": [
    "S256",
    "plain"
  ],
  "jwks_uri": "https://accounts.asgardeo.io/t/bifrost/oauth2/jwks",
  "subject_types_supported": [
    "public"
  ],
  "id_token_signing_alg_values_supported": [
    "RS256"
  ],
  "registration_endpoint": "https://accounts.asgardeo.io/t/bifrost/api/identity/oauth2/dcr/v1.0/register",
  "request_object_signing_alg_values_supported": [
    "RS256",
    "RS384",
    "RS512",
    "PS256",
    "none"
  ]
}
```

<br>

You can also find the server endpoints corresponding to your tenant domain from the **Help** panel of the application view in the Console.

### Obtain a token for the app

It is recommended to use authorization code grant with PKCE to secure SPAs. This section describes the endpoints that are used to obtain an access token for your SPA from Asgardeo using authorization code grant.

**Requesting an authorization code**

First, generate the authorization code to get an access token. Since this uses browser redirection, this will be a simple browser call.

Once the authorization request is validated from Asgradeo, the browser will be redirected to the Asgardeo login page. When the user is successfully authenticated, the authorization code is returned to the browser.

_Authorization endpoint_

`https://accounts.asgardeo.io/t/<yourTenantDomain>/oauth2/authorize`

_Sample url_

```  
https://dev.accounts.asgardeo.io/t/pamz.com/oauth2/authorize?scope=openid&response_type=code&redirect_uri=https://localhost:5000&client_id=KLGA7L8vzjuF_TTkn2hLL1V6ARoa&code_challenge=LCxMdKmPoz-HfEnl21-Mjgsay_iy6AmFbwo0qivPZK0&code_challenge_method=S256
```
_Request parameters_

* response_type: the required grant type.
* redirect_uri: where the response is redirected to at the end of the process. This should match the registered callback URL.
* client_id: client id obtained when registering the application in Asgardeo.
* scope:optional parameter to define the scope of the access token.
* code_challenge: PKCE code challenge.
* &code_challenge_method: PKCE code challenge method.

_Sample response_
```
https://localhost:5000/?code=210a4f11-4928-3d91-9c97-00d45d71eb3a&session_state=a0c3bc89849ba0f236791f7fe76a837b7b4422fdc9aca16db394d19a28724a29.wQc7eSHSRrGNfECJRMhSAw
```
<br>

**Requesting an access token**

To obtain the access token, you need to send token request to the token endpoint of Asgardeo with the authorization code retrieved in the above step.  For the PKCE validation, you are required to send the code_verifier along with the request.

_Token endpoint_

`https://dev.accounts.asgardeo.io/t/<yourTenantDomain>/oauth2/token`

_Request parameters_
* grant_type: the grant type. Here we are using *authorization_code* grant.
* redirect_uri: where the response is redirected to at the end of the process.
* code: the code received from authorization request
* code_verifier: PKCE code verifier
* client_id: client id obtained when registering the application in Asgardeo.

_Sample response_

```json
{
    "access_token": "54bd024f-5080-3db5-9422-785f5d610605",
    "refresh_token": "7024af0f-9216-3b8f-a249-edf6db7f72ab",
    "scope": "openid",
    "id_token": "eyJ4NXQiOiJZemM1T1Rnd1pURTNNV1F6TVdFek5ERm1OelZoTTJOaU9UQmxOamN3TlRJNU9HTTBNbVExWWprd1lqZzJNVEl3WldNd056TTRNemcxWkdJeVpEZzNaQSIsImtpZCI6Ill6YzVPVGd3WlRFM01XUXpNV0V6TkRGbU56VmhNMk5pT1RCbE5qY3dOVEk1T0dNME1tUTFZamt3WWpnMk1USXdaV013TnpNNE16ZzFaR0l5WkRnM1pBX1JTMjU2IiwiYWxnIjoiUlMyNTYifQ.eyJpc2siOiJlYzU2N2M1YmE4NmM3NmJiYjY2ZGNiZTM5YzYzNGFlNTNhNTNiNzgwNjM1OGQwY2ZjMzE4YWNiYmFlZWIyOTRmIiwiYXRfaGFzaCI6IkpvV0hGOEExemYxcG9pUlB3aTU0TWciLCJhdWQiOiJmdl9MU2NIYUI4M1BONFZQWDFjSHVmcGh0SFFhIiwiY19oYXNoIjoiaVRqd0NIblM5aTNTOHhPdTFzbFBidyIsInN1YiI6InVzZXIxQGJpZnJvc3QuY29tIiwibmJmIjoxNjE4ODE2NzI1LCJhenAiOiJmdl9MU2NIYUI4M1BONFZQWDFjSHVmcGh0SFFhIiwiYW1yIjpbIkJhc2ljQXV0aGVudGljYXRvciJdLCJpc3MiOiJodHRwczpcL1wvYWNjb3VudHMuYXNnYXJkZW8uaW9cL3RcL2JpZnJvc3RcL29hdXRoMlwvdG9rZW4iLCJleHAiOjE2MTg4MjAzMjUsImlhdCI6MTYxODgxNjcyNSwic2lkIjoiMGI2ZjE5M2MtNWEyOS00OGYxLThmYzAtYWNkOWU5NGQ3ODQ1In0.aWin4g0qi-KuE3UGInKun5z-0R2mEP3S-lrWhAijylNJocTgYpStgrm2nH_mI6WR4PN_e9ClVjx40EGUOdSqNlJq4OvWdGT9N6x9ei6D0IkFNcd-ad5ZKgWbJNjejcTfBgRJCa_XbCpntFvwYbrOiCm9ivdUTafMx1lL8ihl-5c04UOsZe7iwb44xTWtFj1WfrVCXiCdcu5NyNn5SKICCUeO9p1sqjLXsbGRwN6TN0H7oVBoK7Q6o9R6gYPWR_hBk9uxpt3CyKej1uCVsmxcoGGqPXMQugIz5sU2wwo685XNAv6Q9TlTEqFBWpbSpYZ0g73YjnhTvaaaHdasgE1VCw",
    "token_type": "Bearer",
    "expires_in": 3600
}
```
<br>

### Validate JWT based on JWKS

The JSON Web Key Set (JWKS) endpoint is a read-only endpoint that returns the Asgardeo's public key set in the JWKS format. This contains the signing key(s) that the Relying Party (RP) uses to validate signatures from Asgardeo. 

_JWKS endpoint_

`https://accounts.asgardeo.io/t/<yourTenantDomain>/oauth2/jwks`

_Sample response_
```json
{
    "keys": [
        {
            "kty": "RSA",
            "e": "AQAB",
            "use": "sig",
            "kid": "Yzc5OTgwZTE3MWQzMWEzNDFmNzVhM2NiOTBlNjcwNTI5OGM0MmQ1YjkwYjg2MTIwZWMwNzM4Mzg1ZGIyZDg3ZA_RS256",
            "alg": "RS256",
            "n": "i_i34CgF8IZd8e27sY3lJkX6MyW7e2oIH0f_OlnwftTdS-SAmmIMm06QdyhDr0fycTuNR9hjsEhSm9ecS5kZh9qsuffLb1N041Ml37VE6qeOKP4AocvYmr0rtpH0TUgqXndDeFAAF3oLVhUTokw9Ik-T23cEPDA8gMCmQf7Nje7fNsQ6aCuzzvfUekXvRnDl_7ZAHgbw_0gyujIJ11NlKiNbmCdKMATn68TwQ4U5RJD9-IT0zizWm1ciV-ZOc12L8AsUI-QFjLnUlM4S42X1oj0Tao1oL9V8QGASHHIGKqJ9YxvvnuxaHd42NFFHJcwB4oLlirjOyI5HfKZRFE4FzQ"
        }
    ]
}
```
<br>

### Retrieve user details

User information is encoded inside the ID token returned along with the access token. You can also obtain user information as a payload by invoking the userinfo endpoint with the access token obtained.

_Userinfo endpoint_

`https://accounts.asgardeo.io/t/bifrost/oauth2/userinfo`

_Default sample response_

```json
{
    "sub": "user1@bifrost.com"
}
```

By default, only the username (sub) information will be available in the response. You can customize the user information returned by configuring the user attributes of the application registered in the Asgardeo console.

More details on configuring the user attributes can be found in the [User attributes](../application-settings/configure-user-attribute.md) section in application settings. 

<br>

### Logout the application

The logout endpoint is used to terminate the user session at Asgardeo and log the user out. When the user is successfully logged out, he will be redirected to the registered authorized redirect URL.

_Logout endpoint_
`https://dev.accounts.asgardeo.io/t/<yourTenantDomain>/oidc/logout`
