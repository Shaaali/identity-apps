# Add logout to application

OpenID Connect provides [OpenID Connect RP-Initiated Logout](https://openid.net/specs/openid-connect-rpinitiated-1_0.html) to terminate user session. The logout endpoint is used to terminate the user session at Asgardeo and log the user out. When a user is
successfully logged out, the user will be redirected to the `post_logout_redirect_uri` sent in the logout request.

**Logout endpoint:**

``` no-line-numbers
https://api.asgardeo.io/t/<organization_name>/oidc/logout
```

**Sample url:**

``` no-line-numbers
https://api.asgardeo.io/t/bifrost/oidc/logout?id_token_hint=<id_token>&post_logout_redirect_uri=<redirect URI>&state=<state>
```

The logout request has some parameters. See [RP-initiated logout request](https://openid.net/specs/openid-connect-rpinitiated-1_0.html#RPLogout).
<br>
<table>
  <tr>
    <th>Request Parameter</th>
    <th>Description</th> 
  </tr>
  <tr>
    <td>id_token_hint<Badge text="Recommended" type="recommended"/></td>
    <td>The ID token returned by the Asgardeo during token request is passed to the logout endpoint a hint about the End-User's current authenticated session with the Client.</td>
  </tr>
  <tr>
    <td>post_logout_redirect_uri<Badge text="Optional" type="optional"/></td>
    <td>The URL to be redirected to when the user is logging out. The value defined here should be added as one of the <a :href="$withBase('/references/app-settings/oidc-settings-for-app/#authorized-redirect-urls')">authorized redirect URLs</a>. This should be passed along with 'id_token_hint'. If 'post_logout_redirect_uri' parameter is not passed, user will be ended up in Asgardeo common page after logout.</td>
  </tr>
  <tr>
    <td>state<Badge text="Optional" type="optional"/></td>
    <td>The parameter passed from the application to the Asgardeo to maintain any state information. If an application sends this, Asgardeo will return this in response.</td>
  </tr>
</table>

**Sample response:**

``` no-line-numbers
http://myapp.com?state=state-param
```

<br>
