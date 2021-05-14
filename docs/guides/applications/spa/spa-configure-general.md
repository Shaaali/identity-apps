# Add authentication to SPA 

If you have your own single page application, you can refer this guide to learn how to authenticate users to the application using Asgardeo with OpenID Connect.

## Configure your application in Asgardeo

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

<CommonGuide guide='guides/fragments/discover-oidc-endpoints-for-apps.md'/>

### Configure the client id

SPAs are considered as OAuth 2.0 public client since they cannot maintain a secret. Therefore, the usual client id and client secret based authentication to the token endpoint does not make sense.

Even though the client secret is not validated, client id is required to be sent as a POST body parameter in the token request to identify the application making the request. 

::: tip Find app information

Information required to configure OIDC in the SPA can be found in the **Protocol** tab of the application details view.

<img :src="$withBase('/assets/img/guides/applications/spa-protocol-tab.png')" alt="spa-protocol-tab-view">

:::

### Login to the application

It is recommended to use authorization code grant with PKCE to secure SPAs. This section describes the endpoints that are used to obtain an access token for your SPA from Asgardeo using authorization code grant.

**Requesting an authorization code**

First, call authorize endpoint of Asgardeo to generate the authorization code. Since this uses browser redirection, this will be a simple HTTP GET request.

Once the authorization request is validated from Asgradeo, the browser will be redirected to the Asgardeo login page. When the user is successfully authenticated, the authorization code is returned to the browser.

_Authorization endpoint:_

`https://accounts.asgardeo.io/t/<yourTenantDomain>/oauth2/authorize`

_Sample url:_

```  
https://accounts.asgardeo.io/t/bifrost/oauth2/authorize?scope=openid&response_type=code&redirect_uri=<redirect_uri>&client_id=<client_id>&code_challenge=<code_challenge>&code_challenge_method=<code_challenge_method>
```
<br>

_Request parameters:_

<table>
  <tr>
    <th>Parameter</th>
    <th>Description</th> 
    <th>Mandatory</th>
  </tr>
  <tr>
    <td>response_type</td>
    <td>required grant type. Here, it will be <code>code</code> since we are using authorization code grant type.</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>redirect_uri</td>
    <td>This is where the response is redirected to at the end of the process. This should match the registered callback URL.</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>client_id</td>
    <td>Client id obtained when registering the application in Asgardeo.</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>scope</td>
    <td>For the OpenId Connect flow, the scope should contain <code>openid</code> as one of the scopes. There can be additional scopes as well.</td>
    <td>No</td>
  </tr>
  <tr>
    <td>code_challenge</td>
    <td>The client creates and records a secret cryptographically random string (<code>code_verifier</code>), which is then encoded using URL safe base64 encoding to transform it into the <code>code_challenge</code>.</td>
    <td>Yes, since PKCE is mandatory</td>
  </tr>
  <tr>
    <td>code_challenge_method</td>
    <td>This is the method used to transform the <code>code_verifier</code> into the <code>code_challenge</code>. It is sent as the hash algorithm name that was used for the hashing. When the authorization code is being issued, this method is used by the token endpoint to verify the <code>code_verifier</code> value.</td>
    <td>Yes, since PKCE is mandatory</td>
  </tr>
</table>

_Sample response:_

```
https://localhost:5000/?code=210a4f11-4928-3d91-9c97-00d45d71eb3a&session_state=a0c3bc89849ba0f236791f7fe76a837b7b4422fdc9aca16db394d19a28724a29.wQc7eSHSRrGNfECJRMhSAw
```
<br>

**Requesting an access token**

To obtain the access token, you need to do a POST request to the token endpoint of Asgardeo with the authorization code retrieved in the above step. 

_Token endpoint:_

`https://accounts.asgardeo.io/t/<yourTenantDomain>/oauth2/token`

_Request parameters_

<table>
  <tr>
    <th>Parameter</th>
    <th>Description</th> 
    <th>Mandatory</th>
  </tr>
  <tr>
    <td>grant_type</td>
    <td>the grant type. Here we are using <code>authorization_code</code> grant.</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>redirect_uri</td>
    <td>where the response is redirected to at the end of the process.</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>code</td>
    <td>the code received from authorization request.</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>code_verifier</td>
    <td>the plain text cryptographically random string that was used to generate the code_challenge.</td>
    <td>Yes, since PKCE is mandatory</td>
  </tr>
  <tr>
    <td>client_id</td>
    <td>client id obtained when registering the application in Asgardeo.</td>
    <td>Yes</td>
  </tr>
</table>

_Sample request:_

<CodeGroup>
<CodeGroupItem title="cURL" active>

``` 
curl --location --request POST 'https://accounts.asgardeo.io/t/bifrost/oauth2/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'code=60cb4ba7-b7b2-3f2f-8319-58122f1b2f5d' \
--data-urlencode 'grant_type=authorization_code' \
--data-urlencode 'redirect_uri=https://localhost:5000' \
--data-urlencode 'code_verifier=WAOqjmxMpCnjME0mRpd8pDZNT8bEIpCdHgMKFqxoAVtEb4LhJ0KSg8Rl0z0O3pySx4HGp53R87bckxOxrXk2oNav0fgWzFdOyBRrvA8ZTgCG7MlQcY9mfamCM8SWnGgO' \
--data-urlencode 'client_id=fv_LScHaB83PN4VPX1cHufphtHQa'
```
</CodeGroupItem>

<CodeGroupItem title="JavaScript - jQuery">

```js
var settings = {
    "url": "https://accounts.asgardeo.io/t/bifrost/oauth2/token",
    "method": "POST",
    "timeout": 0,
    "headers": {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    "data": {
        "code": "60cb4ba7-b7b2-3f2f-8319-58122f1b2f5d",
        "grant_type": "authorization_code",
        "redirect_uri": "https://localhost:5000",
        "code_verifier": "WAOqjmxMpCnjME0mRpd8pDZNT8bEIpCdHgMKFqxoAVtEb4LhJ0KSg8Rl0z0O3pySx4HGp53R87bckxOxrXk2oNav0fgWzFdOyBRrvA8ZTgCG7MlQcY9mfamCM8SWnGgO",
        "client_id": "fv_LScHaB83PN4VPX1cHufphtHQa"
    }
};

$.ajax(settings).done(function (response) {
    console.log(response);
});
```
</CodeGroupItem>

<CodeGroupItem title="Nodejs - Axios">

```js
var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({
 'code': '60cb4ba7-b7b2-3f2f-8319-58122f1b2f5d',
'grant_type': 'authorization_code',
'redirect_uri': 'https://localhost:5000',
'code_verifier': 'WAOqjmxMpCnjME0mRpd8pDZNT8bEIpCdHgMKFqxoAVtEb4LhJ0KSg8Rl0z0O3pySx4HGp53R87bckxOxrXk2oNav0fgWzFdOyBRrvA8ZTgCG7MlQcY9mfamCM8SWnGgO',
'client_id': 'fv_LScHaB83PN4VPX1cHufphtHQa' 
});
var config = {
  method: 'post',
  url: 'https://accounts.asgardeo.io/t/bifrost/oauth2/token',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data : data
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

_Sample response:_

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

<CommonGuide guide='guides/fragments/validate-id-token-jwks-for-apps.md'/>

<br/>

### Retrieve user details

<CommonGuide guide='guides/fragments/retrieve-user-info-for-apps.md'/>

<br/>

### Logout the application

<CommonGuide guide='guides/fragments/oidc-logout-for-apps.md'/>

<br/>
