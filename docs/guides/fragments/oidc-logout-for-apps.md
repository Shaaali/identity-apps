The logout endpoint is used to terminate the user session at Asgardeo and log the user out. When the user is successfully logged out, he will be redirected to the registered authorized redirect URL.

_Logout endpoint:_

`https://accounts.asgardeo.io/t/<yourTenantDomain>/oidc/logout`

_Sample url:_

`https://accounts.asgardeo.io/t/bifrost/oidc/logout?id_token_hint=<id_token>&post_logout_redirect_uri=<redirect URI>&state=<state>`

_Request parameters:_

<table>
  <tr>
    <th>Parameter</th>
    <th>Description</th> 
    <th>Mandatory</th>
  </tr>
  <tr>
    <td>id_token_hint</td>
    <td>The id_token returned by the identity provider.</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>post_logout_redirect_uri</td>
    <td>The URL to be redirected to when logging out. The value defined here should be the same as the callbackURI of the client application.</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>state</td>
    <td>The parameter passed from the application to the identity provider to maintain any state information. This is used to correlate the logout requests and responses.</td>
    <td>No</td>
  </tr>
</table>