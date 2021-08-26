# Implement authorization code grant in apps

By following this guide, you will be able to understand the OpenID connect login using authorization code flow and build on to your application.

The below diagram explains how login using authorization code grant works with Asgardeo.
<img class="borderless-img" :src="$withBase('/assets/img/guides/applications/oidc/auth_code_flow.png')" alt="Authorization code flow">

You need following steps to build login to your app using authorization code grant:
1. [Get authorization code](#get-authorization-code)
2. [Get tokens](#get-tokens)

::: info Before you start
To get started, you need to have an application registered in Asgardeo. If you don't have an app registered, go to [Asgardeo console](https://console.asgardeo.io/) to <a :href="$withBase('/guides/applications/web-app/register-oidc-web-app/#register-app')">register an application</a>.
:::

## Get authorization code
First, your app must initiate a login request to authorization endpoint of Asgardeo. After redirecting to Asgardeo, user will be prompted with login page if the user does is not authenticated.

**Authorization endpoint:**

``` no-line-numbers
https://api.asgardeo.io/t/<organization_name>/oauth2/authorize
```

**Authorization request**

```  no-line-numbers
https://api.asgardeo.io/t/<organization_name>/oauth2/authorize?scope={scope}&response_type=code&redirect_uri={redirect_uri}&client_id={client_id}
```

**Sample request**

``` no-line-numbers
https://api.asgardeo.io/t/bifrost/oauth2/authorize?response_type=code&client_id=z8RB6ysdDZhe4QO0zJAQzKbi6P4a&scope=openid&redirect_uri=http%3A%2F%2Flocalhost%3A5000
```


See [Authentication Request with  Authorization code](https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest)

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
    <td>This is where the response is redirected to at the end of the process. This must be the same as the original login request.</td>
  </tr>
  <tr>
    <td>client_id<Badge text="Required" type="mandatory"/></td>
    <td>Client id obtained when registering the application in Asgardeo.</td>
  </tr>
  <tr>
    <td>scope<Badge text="Optional" type="optional"/></td>
    <td>For the OpenId Connect flow, the scope should contain <code>openid</code> as one of the scopes. There can be additional scopes as well. Scopes should be space separated. e.g, `openid email profile`</td>
  </tr>
</table>

Once the user is successfully authenticated, Asgardeo will redirect the user to `redirect_uri` with authorization code.
**Sample response**:

``` no-line-numbers
https://localhost:5000/?code=97c85a59-a758-3a56-95cd-e71a505b493d&session_state=a0c3bc89849ba0f236791f7fe76a837b7b4422fdc9aca16db394d19a28724a29.wQc7eSHSRrGNfECJRMhSAw
```

<br>

## Get tokens


Once the application obtains authorization code, application has to exchange the authorization code to get below tokens:
- access_token
- refresh_token (only if refresh_token grant type is enabled)
- id_token (only if `openid` scope is used)

Application has to provide it's credentials and get tokens.

**Token endpoint:**

``` no-line-numbers
https://api.asgardeo.io/t/<organization_name>/oauth2/token
```


<CodeGroup>

<CodeGroupItem title="cURL" active>

``` 
curl --location --request POST 'https://api.asgardeo.io/t/<organization_name>/oauth2/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'code={authorization_code}' \
--data-urlencode 'grant_type=authorization_code' \
--data-urlencode 'client_id={client_id}' \
--data-urlencode 'client_secret={client_secret}' \
--data-urlencode 'redirect_uri={redirect_uri}'
```
</CodeGroupItem>

<CodeGroupItem title="JavaScript - jQuery">

```js
var settings = {
    "url": "https://api.asgardeo.io/t/<organization_name>/oauth2/token",
    "method": "POST",
    "timeout": 0,
    "headers": {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    "data": {
        "code": "{authorization_code}",
        "grant_type": "authorization_code",
        "client_id": "{client_id}",
        "client_secret": "{client_secret}",
        "redirect_uri": "{redirect_uri}"
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
    'code': '{authorization_code}',
    'grant_type': 'authorization_code',
    'client_id': '{client_id}',
    'client_secret': '{client_secret}',
    'redirect_uri': '{redirect_uri}'
});
var config = {
    method: 'post',
    url: 'https://api.asgardeo.io/t/<orgaization_name>/oauth2/token',
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

This token request has some parameters. See [Token request with authorization code](https://openid.net/specs/openid-connect-core-1_0.html#TokenRequest).
<br>
<table>
  <tr>
    <th>Request Parameter</th>
    <th>Description</th> 
  </tr>
   <tr>
      <td>code<Badge text="Required" type="mandatory"/></td>
      <td>The authorization code received from authorization request.</td>
    </tr>
  <tr>
    <td>grant_type<Badge text="Required" type="mandatory"/></td>
    <td>The grant type. Here we are using 'authorization_code' grant.</td>
  </tr>
  <tr>
    <td>redirect_uri<Badge text="Required" type="mandatory"/></td>
    <td>This is where the response is redirected to at the end of the process.</td>
  </tr>
</table>
<br>

Token endpoint requires client  authentication for confidential clients. Asgardeo supports both:
 - **client_secret_post**: You can either send `client_id` and `client_secret` as body parameters in the POST message
 - **client_secret_basic**: You can send it as Authorization header in the request  as `Authorization: Basic BASE46_ENCODING<client_id:client_secret>`


1. Sample token request using **client_secret_post**
 
 <CodeGroupItem title="cURL" active>
  ``` 
  curl --location --request POST 'https://api.asgardeo.io/t/bifrost/oauth2/token' \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --data-urlencode 'code=97c85a59-a758-3a56-95cd-e71a505b493d' \
  --data-urlencode 'grant_type=authorization_code' \
  --data-urlencode 'client_id=z8RB6ysdDZhe4QO0zJAQzKbi6P4a' \
  --data-urlencode 'client_secret=z0C79zlopx8i7ByOw8K15A9dplYa' \
  --data-urlencode 'redirect_uri=https://myfirstwebapp.io/login'
  ```
</CodeGroupItem>

 
<br>

2. Sample token request using **client_secret_basic** 

<CodeGroupItem title="cURL" active>

``` 
curl --location --request POST 'https://api.asgardeo.io/t/bifrost/oauth2/token' \
--header 'Authorization: Basic ejhSQjZ5c2REWmhlNFFPMHpKQVF6S2JpNlA0YTp6MEM3OXpsb3B4OGk3QnlPdzhLMTVBOWRwbFlh' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'code=97c85a59-a758-3a56-95cd-e71a505b493d' \
--data-urlencode 'grant_type=authorization_code' \
--data-urlencode 'redirect_uri=https://myfirstwebapp.io/login'
```

</CodeGroupItem>

Sample response will be,

```json no-line-numbers
{
  "access_token": "54bd024f-5080-3db5-9422-785f5d610605",
  "scope": "openid",
  "id_token": "eyJ4NXQiOiJZemM1T1Rnd1pURTNNV1F6TVdFek5ERm1OelZoTTJOaU9UQmxOamN3TlRJNU9HTTBNbVExWWprd1lqZzJNVEl3WldNd056TTRNemcxWkdJeVpEZzNaQSIsImtpZCI6Ill6YzVPVGd3WlRFM01XUXpNV0V6TkRGbU56VmhNMk5pT1RCbE5qY3dOVEk1T0dNME1tUTFZamt3WWpnMk1USXdaV013TnpNNE16ZzFaR0l5WkRnM1pBX1JTMjU2IiwiYWxnIjoiUlMyNTYifQ.eyJpc2siOiI4ZTQyYjgzOTQzYWViYTkwMGU3MjJkMWI5NzU3Nzc3OTAyOGRhM2NiZWJmZjhhZTQxMDVhZTA5OTRiZjU5ZDYxIiwiYXRfaGFzaCI6IlZETXZUaWFsbjRRWEk4VUlJUjVlbnciLCJhdWQiOiJ6OFJCNnlzZERaaGU0UU8wekpBUXpLYmk2UDRhIiwiY19oYXNoIjoiOXRMaHJvQnV6Z0I4aDlIWWV6cTBpZyIsInN1YiI6InVzZXIxQGJpZnJvc3QuY29tIiwibmJmIjoxNjIwNzAzODA5LCJhenAiOiJ6OFJCNnlzZERaaGU0UU8wekpBUXpLYmk2UDRhIiwiYW1yIjpbIkJhc2ljQXV0aGVudGljYXRvciJdLCJpc3MiOiJodHRwczpcL1wvYWNjb3VudHMuYXNnYXJkZW8uaW9cL3RcL2JpZnJvc3RcL29hdXRoMlwvdG9rZW4iLCJleHAiOjE2MjA3MDc0MDksImlhdCI6MTYyMDcwMzgwOSwic2lkIjoiYWQ3M2NlZGMtMzM3Ny00NDU3LWExYjUtNTZjODgyMTg1MzZmIn0.RSSL3InOFlvt_xQWFDKZY4FjKFFxh8rqGAlm1vKxleP6dKVlDAT4E0sudCJV5paJ-HdxVMd8MveWwpxrIL5NJw9XCa_sCEfso2fsMgRzQyEn1gjKLmr6Fj8Up3BoPnzPzn1cqVd-pKeXomzciM_ZDwsLr8qAEgVp663D4fg_F6pjVdDr17JRCUgO96yyjHRC5Eiqd7MP20Xhb-ZCMe0OhAlJlCmXB0FZV3nOTbza-jGvG8e_k80g3KVPFO7USek2Px3dCYfcbcA3k3cVzbTN8r8PIY3CEIIHtu5RyO_m1v3A0fjKvSaatfN0K2sndnlRpXFtOosIKQDYsy94wGnWkQ",
  "token_type": "Bearer",
  "expires_in": 3600
}
```

<br>

To get refresh token, you need to enable Refresh Token grant type for the application. By default, it is enabled for traditional web application templates.
