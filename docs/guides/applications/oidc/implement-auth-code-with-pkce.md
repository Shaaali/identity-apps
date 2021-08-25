# Implement authorization code grant with PKCE in apps

A public client is an application which cannot keep the client credentials securely. <a :href="$withBase('/guides/applications/spa/')">Single-page applications</a>, and native mobile applications are some examples for public clients. 
It is recommended to use authorization code grant type for public clients. In addition to that, [PKCE](https://datatracker.ietf.org/doc/html/rfc7636) should be used along with authorization code flow to mitigate code interception attacks.

By following this guide, you will be able to understand the authorization code flow with PKCE and build on to your application.

The below diagram explains how login using authorization code grant works with Asgardeo.
<img class="borderless-img" :src="$withBase('/assets/img/guides/applications/oidc/auth_code_flow.png')" alt="Authorization code flow">

You need following steps to build login to your app using authorization code grant with PKCE:
1. [Get authorization code](#get-authorization-code)
2. [Get tokens](#get-tokens)

::: info
To get started, you need to have an application registered in Asgardeo. If you don't have an app registered, go to [Asgardeo console](https://console.asgardeo.io/) to <a :href="$withBase('/guides/applications/web-app/register-oidc-web-app/#register-app')">register an application</a>.
:::

## Get authorization code

First, your app must initiate a login request to Asgardeo. After redirecting to Asgardeo, user will be prompted with login page if the user does is not authenticated.
```   no-line-numbers
https://api.asgardeo.io/t/<organization_name>/oauth2/authorize?scope={scope}&response_type=code&redirect_uri={redirect_uri}&client_id={client_id}&code_challenge=<code_challenge>&code_challenge_method=<code_challenge_method>
```

**Authorization endpoint:**

``` no-line-numbers
https://api.asgardeo.io/t/<organization_name>/oauth2/authorize
```

**Sample login request:**

```   no-line-numbers
https://api.asgardeo.io/t/bifrost/oauth2/authorize?scope=openid&response_type=code&redirect_uri=https://localhost:5000&client_id=fv_LScHaB83PN4VPX1cHufphtHQa&code_challenge_method=S256&code_challenge=IMbNq8j9HZBlbLuZ4nHcYOv1ZkRF5TVNAfVIGyeUsi0
```

<br>

This authorization request takes some parameters. See [Authentication Request with  Authorization code](https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest) and [Authorization request with PKCE](https://datatracker.ietf.org/doc/html/rfc7636#page-9)
<br>

<table>
  <tr>
    <th>Request Parameter</th>
    <th>Description</th> 
  </tr>
  <tr>
    <td>response_type<Badge text="Required" type="mandatory"/></td>
    <td>Required grant type. Here, it will be <code>code</code> since we are using authorization code grant type.</td>
  </tr>
  <tr>
    <td>redirect_uri<Badge text="Required" type="mandatory"/></td>
    <td>This is where the response is redirected to at the end of the process. This should match the registered callback URL.</td>
  </tr>
  <tr>
    <td>client_id<Badge text="Required" type="mandatory"/></td>
    <td>Client id obtained when registering the application in Asgardeo.</td>
  </tr>
  <tr>
    <td>scope<Badge text="Required" type="mandatory"/></td>
    <td>For the OpenId Connect flow, the scope should contain <code>openid</code> as one of the scopes. There can be additional scopes as well. For OAuth2.0 flows, scope is optional</td>
  </tr>
  <tr>
    <td>code_challenge<Badge text="Required" type="mandatory"/></td>
    <td>The client creates and records a secret cryptographically random string (<code>code_verifier</code>), which is then encoded using URL safe base64 encoding to transform it into the <code>code_challenge</code>. <code>code_challenge</code> is required for authorization code flow with PKCE.  
    You can use some <a href="https://tonyxu-io.github.io/pkce-generator/">tools</a> to generate code_challenge and code_verifier</td>
  </tr>
  <tr>
    <td>code_challenge_method<Badge text="Required" type="mandatory"/></td>
    <td>This is the method used to transform the <code>code_verifier</code> into the <code>code_challenge</code>. Asgardeo supports <code>S256</code> and <code>plain</code>. This is required for authorization code flow with PKCE.</td>
  </tr>
</table>

Once the user authenticated, Asgardeo will redirect to `redirect_uri` with authorization code.


**Sample response:**

``` no-line-numbers
https://localhost:5000/?code=60cb4ba7-b7b2-3f2f-8319-58122f1b2f5d&session_state=a0c3bc89849ba0f236791f7fe76a837b7b4422fdc9aca16db394d19a28724a29.wQc7eSHSRrGNfECJRMhSAw
```

<br>

<br>

## Get tokens



Once the application obtains authorization code, application has to exchange the authorization code to get below tokens:
- access_token
- refresh_token (only if refresh_token grant type is enabled)
- id_token (only if `openid` scope is used)

**Token endpoint:**

``` no-line-numbers
https://api.asgardeo.io/t/<organization_name>/oauth2/token
```

**Request:**

<CodeGroup>
<CodeGroupItem title="cURL" active>

```
curl --location --request POST 'https://api.asgardeo.io/t/bifrost/oauth2/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'code={authorization_doe}' \
--data-urlencode 'grant_type=authorization_code' \
--data-urlencode 'redirect_uri={redirect_uri}' \
--data-urlencode 'code_verifier={pkce_code_verifier}' \
--data-urlencode 'client_id={client_id}'
```

</CodeGroupItem>

<CodeGroupItem title="JavaScript - jQuery">

```js
var settings = {
    "url": "https://api.asgardeo.io/t/bifrost/oauth2/token",
    "method": "POST",
    "timeout": 0,
    "headers": {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    "data": {
        "code": "{authorization_doe}",
        "grant_type": "authorization_code",
        "redirect_uri": "{redirect_uri}",
        "code_verifier": "{pkce_code_verifier}",
        "client_id": "{client_id}"
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
    'code': '{authorization_doe}',
    'grant_type': 'authorization_code',
    'redirect_uri': '{redirect_uri}',
    'code_verifier': '{pkce_code_verifier}',
    'client_id': '{client_id}'
});
var config = {
    method: 'post',
    url: 'https://api.asgardeo.io/t/bifrost/oauth2/token',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: data
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

**Sample request**

<CodeGroupItem title="cURL" active>

``` no-line-numbers
curl --location --request POST 'https://api.asgardeo.io/t/bifrost/oauth2/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'code=60cb4ba7-b7b2-3f2f-8319-58122f1b2f5d' \
--data-urlencode 'grant_type=authorization_code' \
--data-urlencode 'redirect_uri=https://localhost:5000' \
--data-urlencode 'code_verifier=zYYoWc9LNIahfonUKyKZcpDc0oWV0zGbn-gTkrr4lkw' \
--data-urlencode 'client_id=fv_LScHaB83PN4VPX1cHufphtHQa'
```

</CodeGroupItem>


This token request has some parameters. See [Token request with authorization code](https://openid.net/specs/openid-connect-core-1_0.html#TokenRequest) and [Token request with PKCE](https://datatracker.ietf.org/doc/html/rfc7636#page-10)
<br>
<table>
  <tr>
    <th>Request Parameter</th>
    <th>Description</th> 
  </tr>
  <tr>
    <td>grant_type<Badge text="Required" type="mandatory"/></td>
    <td>The grant type. Here we are using <code>authorization_code</code> grant.</td>
  </tr>
  <tr>
    <td>redirect_uri<Badge text="Required" type="mandatory"/></td>
    <td>This is where the response is redirected to at the end of the process.</td>
  </tr>
  <tr>
    <td>code<Badge text="Required" type="mandatory"/></td>
    <td>The authorization code received from authorization request.</td>
  </tr>
  <tr>
    <td>code_verifier<Badge text="Required" type="mandatory"/></td>
    <td>The plain text cryptographically random string that was used to generate the code_challenge. This is required for authorization code flow with PKCE</td>
  </tr>
  <tr>
    <td>client_id<Badge text="Required" type="mandatory"/></td>
    <td>Client id obtained when registering the application in Asgardeo.</td>
  </tr>
</table>


**Sample response:**

```json no-line-numbers
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

To get refresh token, you need to enable `Refresh Token` grant type for the application. By default, it is enabled for single-page application template.
