OpenID Connect provides [OpenID Connect RP-Initiated Logout](https://openid.net/specs/openid-connect-rpinitiated-1_0.html) to terminate user session. The logout endpoint is used to terminate the user session at Asgardeo and log the user out. When a user is
successfully logged out, he will be redirected to the registered authorized redirect URL.

**Logout endpoint:**

```
https://accounts.asgardeo.io/t/<organization_name>/oidc/logout
```

**Sample url:**

```
https://accounts.asgardeo.io/t/bifrost/oidc/logout?id_token_hint=<id_token>&post_logout_redirect_uri=<redirect URI>&state=<state>
```

The logout request has some parameters. See [RP-initiated logout request](https://openid.net/specs/openid-connect-rpinitiated-1_0.html#RPLogout).
<br>
<table>
  <tr>
    <th>Request parameters</th>
    <th>Description</th> 
  </tr>
  <tr>
    <td>id_token_hint<Badge text="Optional" type="optional"/></td>
    <td>The id_token returned by the Asgardeo. This should be passed along with post_logout_redirect_uri</td>
  </tr>
  <tr>
    <td>post_logout_redirect_uri<Badge text="Optional" type="optional"/></td>
    <td>The URL to be redirected to when logging out. The value defined here should be the same as the callbackURI of the client application. If it is not passed, user will be ended up in Asgardeo common page. </td>
  </tr>
  <tr>
    <td>state<Badge text="Optional" type="optional"/></td>
    <td>The parameter passed from the application to the Asgardeo to maintain any state information. If an application sends this, Asgardeo will return this in response.</td>
  </tr>
</table>

**Sample response:**

```
http://myapp.com?state=state-param
```

<br>
