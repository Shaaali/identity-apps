# Revoke tokens by apps

OAuth2.0 supports [token revocation](https://datatracker.ietf.org/doc/html/rfc7009) to revoke any access granted to them. This token endpoint can revoke **access tokens** and **refresh tokens**. 

Confidential clients such as  web apps can keep the client credentials securely. Those clients need to prove their identity when they access revocation endpoint to revoke access tokens. 

Public clients such as SPAs, mobile apps can't store credentials securely. Those apps need to submit only their client ID to identify the apps during token revocation.  


::: info Info
- Revoking a refresh token via revocation endpoint will not revoke the respective access token.
- Revoking access token revocation endpoint will not revoke the refresh token.
::: 

**Token revocation endpoint:**

``` no-line-numbers
https://api.asgardeo.io/t/<organization_name>/oauth2/revoke
```

## Token revocation by confidential clients

Token endpoint requires client authentication for confidential clients. Asgardeo supports both:
 - **client_secret_post**: You can either send client_id and client_secret as body parameters in the POST message
 - **client_secret_basic**: You can send it as Authorization header in the request  as `'Authorization: Basic BASE64_ENCODED_CLIENT_ID_AND_CLIENT_SECRET'`

Apart from client authentication, the revocation request has some other parameters as well.

<br>
<table>
  <tr>
    <th>Request Parameter</th>
    <th>Description</th> 
  </tr>
   <tr>
      <td>token<Badge text="Required" type="mandatory"/></td>
      <td>The token you want to inspect.</td>
    </tr>
  <tr>
    <td>token_type_hint<Badge text="Optional" type="optional"/></td>
    <td>The type of the token. If the token is access token, the type should be <b>access_token</b>. For refresh token, the type should be <b>refresh_token</b></td>
  </tr>
</table>
<br>

### Client secret post based authentication

In client secret post based authentication, apps cann send the `client_id` and `client_secret` as body params in the revocation request. 

Sample request is given below.

<CodeGroup>

<CodeGroupItem title="cURL" active>
```
curl --location --request POST 'https://api.asgardeo.io/t/bifrost/oauth2/revoke' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'token={token}' \
--data-urlencode 'token_type_hint={token_type}' \
--data-urlencode 'client_id={client_id}' \
--data-urlencode 'client_secret={client_secret}'
```
</CodeGroupItem>

<br>

<CodeGroupItem title="JavaScript - jQuery">

```js
var settings = {
    "url": "https://api.asgardeo.io/t/<organization_name>/oauth2/revoke",
    "method": "POST",
    "timeout": 0,
    "headers": {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    "data": {
        "token": "{token}",
        "token_type": "{token_type}",
        "client_id": "{client_id}",
        "client_secret": "{client_secret}"
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
    'token': '{token}',
    'token_type_hint': '{token_type}',
    'client_id': '{client_id}',
    'client_secret': '{client_secret}',
});
var config = {
    method: 'post',
    url: 'https://api.asgardeo.io/t/<orgaization_name>/oauth2/revoke',
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

### Client secret basic authentication

In client secret basic authentication, application has to do base64 encoding on the client ID and client secret and pass that as basic authorization header in the revocation request.

The authorization header should look like below:

`Basic BASE46_ENCODING<your_client_id:your_client_secret>`   

:::tip Tips
To perform base 64 encoding of client ID and secret, you can use some tools, or you can run below command.

`
echo -n '<your_client_id:your_client_secret>' | base64
`

:::

**Sample request:** 

<CodeGroupItem title="cURL" active>
```
curl --location --request POST 'https://api.asgardeo.io/t/bifrost/oauth2/revoke' \
--header 'Authorization: Basic ejhSQjZ5c2REWmhlNFFPMHpKQVF6S2JpNlA0YTp6MEM3OXpsb3B4OGk3QnlPdzhLMTVBOWRwbFlh' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'token_type_hint=access_token' \
--data-urlencode 'token=292896cf-5525-3551-b9e2-1787f1114924'
```
</CodeGroupItem>


Once the token is revoked, you will get 200 OK.


## Token revocation by public clients

Since public clients can't store credentials securly, they don't  need to do  authentication when invoking token revocation. But they need to submit their client ID.

**Sample request:**

<CodeGroup>

<CodeGroupItem title="cURL" active>
```
curl --location --request POST 'https://api.asgardeo.io/t/bifrost/oauth2/revoke' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'token={token}' \
--data-urlencode 'token_type_hint={token_type}' \
--data-urlencode 'client_id={client_id}'
```
</CodeGroupItem>

<br>

<CodeGroupItem title="JavaScript - jQuery">

```js
var settings = {
    "url": "https://api.asgardeo.io/t/<organization_name>/oauth2/revoke",
    "method": "POST",
    "timeout": 0,
    "headers": {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    "data": {
        "token": "{token}",
        "token_type": "{token_type}",
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
    'token': '{token}',
    'token_type_hint': '{token_type}',
    'client_id': '{client_id}'
});
var config = {
    method: 'post',
    url: 'https://api.asgardeo.io/t/<orgaization_name>/oauth2/revoke',
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


This token revocation request for public clients has some parameters:
<br>
<table>
  <tr>
    <th>Request Parameter</th>
    <th>Description</th> 
  </tr>
   <tr>
      <td>token<Badge text="Required" type="mandatory"/></td>
      <td>The token(access token or refresh token) you want to inspect.</td>
    </tr>
  <tr>
    <td>token_type_hint<Badge text="Optional" type="optional"/></td>
    <td>The type of the token. If the token is access token, the type should be _access_token_. For refresh token, the type should be _refresh_token_</td>
  </tr>
  <tr>
    <td>client_id<Badge text="Required" type="mandatory"/></td>
    <td>Client ID of the application</td>
  </tr>
</table>

Once the token is revoked, you will get 200 OK.

::: info  Info
You will always get 200 OK response when you try to revoke a token that is invalid, expired, or already revoked. This will help to prevent any information leaks.
:::
