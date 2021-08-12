
OAuth2.0 supports [token revocation](https://datatracker.ietf.org/doc/html/rfc7009) support to revoke the obtained tokens. You can revoke the access tokens and refresh tokens.

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

**Sample request:**

<CodeGroupItem title="cURL" active>
```
curl --location --request POST 'https://api.asgardeo.io/t/bifrost/oauth2/revoke' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'token_type_hint=access_token' \
--data-urlencode 'token=292896cf-5525-3551-b9e2-1787f1114924' \
--data-urlencode 'client_id=Wsoq8t4nHW80gSnPfyDvRbiC__Ea'
```
</CodeGroupItem>

This token request has some parameters
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
