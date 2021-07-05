
First, your app must initiate a login request to Asgardeo. After redirecting to Asgardeo, user will be prompted with login page if the user does is not authenticated.
```  
https://accounts.asgardeo.io/t/<organization_name>/oauth2/authorize?scope={scope}&response_type=code&redirect_uri={redirect_uri}&client_id={client_id}&code_challenge=<code_challenge>&code_challenge_method=<code_challenge_method>
```

**Authorization endpoint:**

```
https://accounts.asgardeo.io/t/<organization_name>/oauth2/authorize
```

**Sample login request:**

```  
https://accounts.asgardeo.io/t/bifrost/oauth2/authorize?scope=openid&response_type=code&redirect_uri=https://localhost:5000&client_id=fv_LScHaB83PN4VPX1cHufphtHQa&code_challenge_method=S256&code_challenge=IMbNq8j9HZBlbLuZ4nHcYOv1ZkRF5TVNAfVIGyeUsi0
```

<br>

This authorization request takes some parameters. See [Authentication Request with  Authorization code](https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest) and [Authorization request with PKCE](https://datatracker.ietf.org/doc/html/rfc7636#page-9)
<br>

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
    <td>This is where the response is redirected to at the end of the process. This should match the registered callback URL.</td>
  </tr>
  <tr>
    <td>client_id<Badge text="Required" type="mandatory"/></td>
    <td>Client id obtained when registering the application in Asgardeo.</td>
  </tr>
  <tr>
    <td>scope<Badge text="Required" type="mandatory"/></td>
    <td>For the OpenId Connect flow, the scope should contain <code>openid</code> as one of the scopes. There can be additional scopes as well. For OAuth2.0 flows, scope is optional</td>
  </tr>
  <tr>
    <td>code_challenge<Badge text="Required" type="mandatory"/></td>
    <td>The client creates and records a secret cryptographically random string (<code>code_verifier</code>), which is then encoded using URL safe base64 encoding to transform it into the <code>code_challenge</code>. <code>code_challenge</code> is required for authorization code flow with PKCE.  
    You can use some <a href="https://tonyxu-io.github.io/pkce-generator/">tools</a> to generate code_challenge and code_verifier</td>
  </tr>
  <tr>
    <td>code_challenge_method<Badge text="Required" type="mandatory"/></td>
    <td>This is the method used to transform the <code>code_verifier</code> into the <code>code_challenge</code>. Asgardeo supports <code>S256</code> and <code>plain</code>. This is required for authorization code flow with PKCE.</td>
  </tr>
</table>

  <img :src="$withBase('/assets/img/guides/applications/login-page.png')" alt="Login user with Asgardeo">

Once the user authenticated, Asgardeo will redirect to `redirect_uri` with authorization code


**Sample response:**

```
https://localhost:5000/?code=60cb4ba7-b7b2-3f2f-8319-58122f1b2f5d&session_state=a0c3bc89849ba0f236791f7fe76a837b7b4422fdc9aca16db394d19a28724a29.wQc7eSHSRrGNfECJRMhSAw
```

<br>
