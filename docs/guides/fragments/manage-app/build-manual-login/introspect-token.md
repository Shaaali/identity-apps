
OAuth2.0 support [token introspection](https://datatracker.ietf.org/doc/html/rfc7662) to inspect the token using Asgardeo. Once you receive tokens(access token, refresh token), you can inspect and know the information related to tokens.

<CodeGroup>

<CodeGroupItem title="cURL" active>
```
curl --location --request POST 'https://accounts.asgardeo.io/t/<organization_name>/oauth2/introspect' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'Cookie: atbv={atbv_cookie_value}' \
--header 'Authorization: Bearer {access_token}' \
--data-urlencode 'token={token_to_inspect}' \
--data-urlencode 'token_type_hint={token_type}'
```
</CodeGroupItem>

<CodeGroupItem title="JavaScript - jQuery">

```js
var settings = {
    "url": "https://accounts.asgardeo.io/t/<organization_name>/oauth2/introspect",
    "method": "POST",
    "timeout": 0,
    "headers": {
        "Authorization": "Bearer {access_token}",
        "Cookie": "atbv={atbv_cookie_value}",
        "Content-Type": "application/x-www-form-urlencoded"
    },
    "data": {
        "token": "{token_to_inspect}",
        "token_type": "{token_type}"
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
    'token': '{token_to_inspect}',
    'token_type': '{token_type}'
});
var config = {
    method: 'post',
    url: 'https://accounts.asgardeo.io/t/<organinzation_name>/oauth2/token',
    headers: {
        'Authorization': 'Bearer {access_token}',
        'Cookie': 'atbv={atbv_cookie_value}',
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

This introspection request has some parameters. See [OAuth2.0 introspection request](https://datatracker.ietf.org/doc/html/rfc7662#section-2.1).
<table>
  <tr>
    <th>Request Parameter</th>
    <th>Description</th> 
    <th>Mandatory</th>
  </tr>
   <tr>
      <td>token</td>
      <td>The token(access token or refresh token) you want to inspect.</td>
      <td>Yes</td>
    </tr>
  <tr>
    <td>token_type_hint</td>
    <td>The type of the token. If the token is access token, the type should be _bearer_. For refresh token, the type should be _refresh_</td>
    <td>No</td>
  </tr>
</table>
<br>

For example, if your token introspection request looks like,


<CodeGroupItem title="cURL" active>
```
curl --location --request POST 'https://accounts.asgardeo.io/t/bifrost/oauth2/introspect' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'Cookie: atbv=646b0ed2-c501-4b17-9251-94112013a718' \
--header 'Authorization: Bearer 54bd024f-5080-3db5-9422-785f5d610605' \
--data-urlencode 'token=94e325b7-77c8-32c2-a6ff-d7be430bf785'
```
</CodeGroupItem>

<br>

response will look below for an access token,
```json
{
    "aut": "APPLICATION_USER",
    "nbf": 1624252162,
    "scope": "openid",
    "active": true,
    "token_type": "Bearer",
    "exp": 1624255762,
    "iat": 1624252162,
    "client_id": "SmLpPiRube64JmkAf4nhZVD_6V8a",
    "username": "CONSUMER/Alica@bifrost.com@bifrost"
}
```
response will look below for a refresh token,
```json
{
    "nbf": 1624252162,
    "scope": "openid",
    "active": true,
    "token_type": "Refresh",
    "exp": 1624338562,
    "iat": 1624252162,
    "client_id": "SmLpPiRube64JmkAf4nhZVD_6V8a",
    "username": "CONSUMER/Alica@bifrost.com@bifrost"
}
```

If the token you used is invalid,

```json
{'active':false}
```

<br>