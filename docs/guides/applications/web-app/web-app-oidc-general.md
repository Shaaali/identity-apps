# Web application with OIDC

If you have your own traditional web application, you can refer this guide to learn how to authenticate users to the
application using Asgardeo with OpenID Connect.

## Configure your application in Asgardeo

Create an application in Asgardeo that represents your web application.

<CommonGuide guide='guides/fragments/configure-web-app-oidc-in-asgardeo.md'/>

## Implement authentication in web application

The web application needs to communicate with Asgardeo to authenticate the users who access the application.
Authenticating a user to the application requires the following steps.

1. Discover the OAuth 2.0 endpoints
2. Make an authorization request to obtain a code
3. Do a token request to obtain an ID token
4. Validate the ID token
5. Retrieve the user information

### Discover the endpoints

<CommonGuide guide='guides/fragments/discover-oidc-endpoints-for-apps.md'/>

### Login to the application

**Requesting an authorization code**

First, call authorize endpoint of Asgardeo to generate the authorization code. Since this uses browser redirection, this
will be a simple HTTP GET request.

Once the authorization request is validated from Asgradeo, the browser will be redirected to the Asgardeo login page.
When the user is successfully authenticated, the authorization code is returned to the browser.

_Authorization endpoint:_

`https://accounts.asgardeo.io/t/<yourTenantDomain>/oauth2/authorize`

_Sample url:_

```  
https://accounts.asgardeo.io/t/bifrost/oauth2/authorize?scope=openid&response_type=code&redirect_uri=<redirect_uri>&client_id=<client_id>
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
</table>

_Sample response:_

```
https://localhost:5000/?code=210a4f11-4928-3d91-9c97-00d45d71eb3a&session_state=a0c3bc89849ba0f236791f7fe76a837b7b4422fdc9aca16db394d19a28724a29.wQc7eSHSRrGNfECJRMhSAw
```

::: tip Find app information

Information required to configure OIDC in the web application can be found in the **Protocol** tab of the application
details view.

<img :src="$withBase('/assets/img/guides/applications/web-app-protocol-tab.png')" alt="web-app-protocol-tab-view">

:::

<br>

**Requesting an access token**

To obtain the access token, you need to do a POST request to the token endpoint of Asgardeo with the authorization code
retrieved in the above step and the `client id` and `client secret` obtained when registering the application in the
authorization header.

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
</table>

_Sample request:_

<CodeGroup>
<CodeGroupItem title="cURL" active>

``` 
curl --location --request POST 'https://accounts.asgardeo.io/t/bifrost/oauth2/token' \
--header 'Authorization: Basic ejhSQjZ5c2REWmhlNFFPMHpKQVF6S2JpNlA0YTp4VVNkcGpmM09lQkhxNHBLemFaeDkzQmw5V1Vh' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'code=97c85a59-a758-3a56-95cd-e71a505b493d' \
--data-urlencode 'grant_type=authorization_code' \
--data-urlencode 'redirect_uri=https://myfirstwebapp.io/login'
```

</CodeGroupItem>

<CodeGroupItem title="JavaScript - jQuery">

```js
var settings = {
    "url": "https://accounts.asgardeo.io/t/bifrost/oauth2/token",
    "method": "POST",
    "timeout": 0,
    "headers": {
        "Authorization": "Basic ejhSQjZ5c2REWmhlNFFPMHpKQVF6S2JpNlA0YTp4VVNkcGpmM09lQkhxNHBLemFaeDkzQmw5V1Vh",
        "Content-Type": "application/x-www-form-urlencoded"
    },
    "data": {
        "code": "97c85a59-a758-3a56-95cd-e71a505b493d",
        "grant_type": "authorization_code",
        "redirect_uri": "https://myfirstwebapp.io/login"
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
    'code': '97c85a59-a758-3a56-95cd-e71a505b493d',
    'grant_type': 'authorization_code',
    'redirect_uri': 'https://myfirstwebapp.io/login'
});
var config = {
    method: 'post',
    url: 'https://accounts.asgardeo.io/t/bifrost/oauth2/token',
    headers: {
        'Authorization': 'Basic ejhSQjZ5c2REWmhlNFFPMHpKQVF6S2JpNlA0YTp4VVNkcGpmM09lQkhxNHBLemFaeDkzQmw5V1Vh',
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
  "access_token": "3c2c5b2c-1354-3f02-bb86-95df777f3ec4",
  "scope": "openid",
  "id_token": "eyJ4NXQiOiJZemM1T1Rnd1pURTNNV1F6TVdFek5ERm1OelZoTTJOaU9UQmxOamN3TlRJNU9HTTBNbVExWWprd1lqZzJNVEl3WldNd056TTRNemcxWkdJeVpEZzNaQSIsImtpZCI6Ill6YzVPVGd3WlRFM01XUXpNV0V6TkRGbU56VmhNMk5pT1RCbE5qY3dOVEk1T0dNME1tUTFZamt3WWpnMk1USXdaV013TnpNNE16ZzFaR0l5WkRnM1pBX1JTMjU2IiwiYWxnIjoiUlMyNTYifQ.eyJpc2siOiI4ZTQyYjgzOTQzYWViYTkwMGU3MjJkMWI5NzU3Nzc3OTAyOGRhM2NiZWJmZjhhZTQxMDVhZTA5OTRiZjU5ZDYxIiwiYXRfaGFzaCI6IlZETXZUaWFsbjRRWEk4VUlJUjVlbnciLCJhdWQiOiJ6OFJCNnlzZERaaGU0UU8wekpBUXpLYmk2UDRhIiwiY19oYXNoIjoiOXRMaHJvQnV6Z0I4aDlIWWV6cTBpZyIsInN1YiI6InVzZXIxQGJpZnJvc3QuY29tIiwibmJmIjoxNjIwNzAzODA5LCJhenAiOiJ6OFJCNnlzZERaaGU0UU8wekpBUXpLYmk2UDRhIiwiYW1yIjpbIkJhc2ljQXV0aGVudGljYXRvciJdLCJpc3MiOiJodHRwczpcL1wvYWNjb3VudHMuYXNnYXJkZW8uaW9cL3RcL2JpZnJvc3RcL29hdXRoMlwvdG9rZW4iLCJleHAiOjE2MjA3MDc0MDksImlhdCI6MTYyMDcwMzgwOSwic2lkIjoiYWQ3M2NlZGMtMzM3Ny00NDU3LWExYjUtNTZjODgyMTg1MzZmIn0.RSSL3InOFlvt_xQWFDKZY4FjKFFxh8rqGAlm1vKxleP6dKVlDAT4E0sudCJV5paJ-HdxVMd8MveWwpxrIL5NJw9XCa_sCEfso2fsMgRzQyEn1gjKLmr6Fj8Up3BoPnzPzn1cqVd-pKeXomzciM_ZDwsLr8qAEgVp663D4fg_F6pjVdDr17JRCUgO96yyjHRC5Eiqd7MP20Xhb-ZCMe0OhAlJlCmXB0FZV3nOTbza-jGvG8e_k80g3KVPFO7USek2Px3dCYfcbcA3k3cVzbTN8r8PIY3CEIIHtu5RyO_m1v3A0fjKvSaatfN0K2sndnlRpXFtOosIKQDYsy94wGnWkQ",
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
