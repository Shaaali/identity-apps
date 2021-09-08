# Token validation by resource servers

A resource server is responsible for protecting resources such as APIs via OAuth2 access tokens. Access tokens are intended for authorizing the access of a resource. 
The resource server should be able to verify the access token sent by the application. If the application sends a <a :href="$withBase('/references/app-settings/oidc-settings-for-app/#access-token')">self-contained JWT access token</a>, then resource server can validate the access token without interacting with the IdP. OAuth2.0 supports [token introspection](https://datatracker.ietf.org/doc/html/rfc7662) to inspect the **access tokens** and **refresh tokens** using IdPs. 

Asgardeo provides the `/oauth2/introspect` endpoint to perform token validation. A resource server can inspect tokens using Asgardeo and know the information related to the tokens. In Asgardeo, the resource server has to use client secret basic authentication to authenticate with the token introspection endpoint. You have to send it as the authorization header in the request: `Authorization: Basic BASE46_ENCODING<client_id:client_secret>`

**Token introspection endpoint:**

``` no-line-numbers
https://api.asgardeo.io/t/<organization_name>/oauth2/introspect
```

:::tip Tips
To perform base64 encoding for the client ID and client secret, you can use a tool, or you can run the below command.

`
echo -n '<client_id:client_secret>' | base64
`
:::

**Sample request:**

```
curl --location --request POST 'https://api.asgardeo.io/t/{organization}/oauth2/introspect' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'Authorization: Basic V3NvcTh0NG5IVzgwZ1NuUGZ5RHZSYmlDX19FYTp6MEM3OXpsb3B4OGk3QnlPdzhLMTVBOWRwbFlh' \
--data-urlencode 'token={access_token}'
```


This introspection request has some parameters. See the [OAuth2.0 introspection request](https://datatracker.ietf.org/doc/html/rfc7662#section-2.1) for details..
<table>
  <tr>
    <th>Request Parameter</th>
    <th>Description</th> 
  </tr>
   <tr>
      <td>token <Badge text="Required" type="mandatory"/></td>
      <td>The token(access token or refresh token) you want to inspect.</td>
    </tr>
</table>
<br>

For example, consider the following token introspection request:


<CodeGroupItem title="cURL" active>
```
curl --location --request POST 'https://api.asgardeo.io/t/{organization}/oauth2/introspect' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'Cookie: atbv=646b0ed2-c501-4b17-9251-94112013a718' \
--header 'Authorization: Bearer 54bd024f-5080-3db5-9422-785f5d610605' \
--data-urlencode 'token=94e325b7-77c8-32c2-a6ff-d7be430bf785'
```
</CodeGroupItem>

<br>

The following response will be returned for the provided access token:
```json
{
  "aut": "APPLICATION_USER",
  "nbf": 1629961093,
  "scope": "openid profile",
  "active": true,
  "token_type": "Bearer",
  "exp": 1629968693,
  "iat": 1629961093,
  "client_id": "Wsoq8t4nHW80gSnPfyDvRbiC__Eb",
  "username": "CUSTOMER-DEFAULT/Alica@gmail.com@bifrost"
}
```

The following response will be returned for the provided refresh token:

```json
{
  "nbf": 1629961093,
  "scope": "openid profile",
  "active": true,
  "token_type": "Refresh",
  "exp": 1630047493,
  "iat": 1629961093,
  "client_id": "Wsoq8t4nHW80gSnPfyDvRbiC__Ea",
  "username": "CUSTOMER-DEFAULT/Alica@bifrost.com@bifrost"
}
```

If the token you used is invalid, you will get the following response.

```json
{'active':false}
```

<br>
