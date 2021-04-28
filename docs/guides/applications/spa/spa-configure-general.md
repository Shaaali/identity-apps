# Add authentication to SPA 

If you have your own single page application, you can refer this guide to learn how to authenticate users to the application using Asgardeo with OpenID Connect.

## Configure an application in Asgardeo

You need to first create an application in Asgardeo that represents your SPA.

<CommonGuide guide='guides/fragments/configure-spa-in-asgardeo.md'/>

## Implement authentication in SPA

The SPA should communicate with Asgardeo to authenticate the users who access the application. Authenticating a user to the SPA requires the following steps.

1. Discover the OAuth 2.0 endpoints
2. Make an authorization request to obtain a code
3. Do a token request to obtain an ID token
4. Validate the ID token
5. Retrieve the user information

### Discover the endpoints

SPA can know of the endpoints of Asgardeo that it should call by using two methods
1. By using the discovery endpoint of Asgardeo
2. By manually defining the required endpoints.

**1. Use the discovery endpoint of Asgardeo**

SPA can dynamically discover the OAuth 2.0 endpoints of Asgardeo by calling the discovery endpoint under `<issuer>/.well-known/openid-configuration`. It contains the issuer name, endpoint URLs and information such as supported scopes or response types as a JSON document.

_Issuer name of Asgardeo:_
`https://accounts.asgardeo.io/t/<yourTenantDomain>/oauth2/token`

_Discovery endpoint:_

`https://accounts.asgardeo.io/t/<yourTenantDomain>/oauth2/token/.well-known/openid-configuration`

**2. Configure the endpoints manually**

You can also find the server endpoints corresponding to your tenant domain from the **Help** panel of the application view in the Console.


### Configure the client id

SPAs are considered as OAuth 2.0 public client since they cannot maintain a secret. Therefore, the usual client id and client secret based authentication to the token endpoint does not make sense.

Even though the client secret is not validated, client id is required to be sent as a POST body parameter in the token request to identify the application making the request. 

### Login to the application

It is recommended to use authorization code grant with PKCE to secure SPAs. This section describes the endpoints that are used to obtain an access token for your SPA from Asgardeo using authorization code grant.

**Requesting an authorization code**

First, call authorize endpoint of Asgardeo to generate the authorization code. Since this uses browser redirection, this will be a simple HTTP GET request.

Once the authorization request is validated from Asgradeo, the browser will be redirected to the Asgardeo login page. When the user is successfully authenticated, the authorization code is returned to the browser.

_Authorization endpoint_

`https://accounts.asgardeo.io/t/<yourTenantDomain>/oauth2/authorize`

_Sample url_

```  
https://accounts.asgardeo.io/t/bifrost/oauth2/authorize?scope=openid&response_type=code&redirect_uri=https://localhost:5000&client_id=KLGA7L8vzjuF_TTkn2hLL1V6ARoa&code_challenge=LCxMdKmPoz-HfEnl21-Mjgsay_iy6AmFbwo0qivPZK0&code_challenge_method=S256
```
_Request parameters_

* response_type: the required grant type. Here, it will be **code** since we are using authorization code grant type
* redirect_uri: where the response is redirected to at the end of the process. This should match the registered callback URL.
* client_id: client id obtained when registering the application in Asgardeo.
* scope:optional parameter to define the scope of the access token. For the OpenId Connect flow, the scope is **openid**.
* code_challenge: PKCE code challenge.
* code_challenge_method: PKCE code challenge method.

_Sample response_
```
https://localhost:5000/?code=210a4f11-4928-3d91-9c97-00d45d71eb3a&session_state=a0c3bc89849ba0f236791f7fe76a837b7b4422fdc9aca16db394d19a28724a29.wQc7eSHSRrGNfECJRMhSAw
```
<br>

**Requesting an access token**

To obtain the access token, you need to do a POST request to the token endpoint of Asgardeo with the authorization code retrieved in the above step. 

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

### Validate ID token based on JWKS

In order to validate the signature on the obtained ID token, you need the public key of Asgardeo. Asgardeo exposes the public key information through the standard JWKS endpoint.

By using a signature validation library, you can validate the signature of the ID token using the JWKS endpoint.

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
`https://accounts.asgardeo.io/t/<yourTenantDomain>/oidc/logout`
