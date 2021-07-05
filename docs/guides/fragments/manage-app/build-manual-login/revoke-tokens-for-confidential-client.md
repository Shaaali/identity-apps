
OAuth2.0 supports [token revocation](https://datatracker.ietf.org/doc/html/rfc7009) to revoke any access granted to them. This token endpoint can revoke access token and refresh token. 

Revoking a refresh token via revocation endpoint will not revoke the respective access token and revoking access token revocation endpoint will not revoke the refresh token.

<CodeGroup>

<CodeGroupItem title="cURL" active>
```
curl --location --request POST 'https://accounts.asgardeo.io/t/bifrost/oauth2/revoke' \
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
    "url": "https://accounts.asgardeo.io/t/<organization_name>/oauth2/revoke",
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
    url: 'https://accounts.asgardeo.io/t/<orgaization_name>/oauth2/revoke',
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
</table>

<br>


Token endpoint requires client  authentication for confidential clients. Asgardeo supports both:
 - **client_secret_post**: You can either send client_id and client_secret as body parameters in the POST message
 - **client_secret_basic**: You can send it as Authorization header in the request  as `'Authorization: Basic BASE64_ENCODED_CLIENT_ID_AND_CLIENT_SECRET'`

For example, if your token request looks like:

<CodeGroupItem title="cURL" active>
```
curl --location --request POST 'https://accounts.asgardeo.io/t/bifrost/oauth2/revoke' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'token_type_hint=access_token' \
--data-urlencode 'token=292896cf-5525-3551-b9e2-1787f1114924' \
--data-urlencode 'client_id=Wsoq8t4nHW80gSnPfyDvRbiC__Ea' \
--data-urlencode 'client_secret=z0C79zlopx8i7ByOw8K15A9dplYa'
```
</CodeGroupItem>

Once the token is revoked, you will get 200 OK.
