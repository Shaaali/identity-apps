
First, your app must initiate a login request to Asgardeo. After redirecting to Asgardeo, user will be prompted with login page if the user does is not authenticated.

```  
https://accounts.asgardeo.io/t/<organization_name>/oauth2/authorize?scope={scope}&response_type=code&redirect_uri={redirect_uri}&client_id={client_id}
```

**Authorization endpoint:**

```
https://accounts.asgardeo.io/t/<organization_name>/oauth2/authorize
```

**Sample request**

```
https://accounts.asgardeo.io/t/bifrost/oauth2/authorize?response_type=code&client_id=z8RB6ysdDZhe4QO0zJAQzKbi6P4a&scope=openid&redirect_uri=http%3A%2F%2Flocalhost%3A5000
```

<br>
  <img :src="$withBase('/assets/img/guides/applications/login-page.png')" alt="Login user with Asgardeo">

See [Authentication Request with  Authorization code](https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest)

<table>
  <tr>
    <th>Request Parameter</th>
    <th>Description</th> 
  </tr>
  <tr>
    <td>response_type<Badge text="Required" type="mandatory"/></td>
    <td>required grant type. Here, it will be <code>code</code> since we are using authorization code grant type.</td>
  </tr>
  <tr>
    <td>redirect_uri<Badge text="Required" type="mandatory"/></td>
    <td>This is where the response is redirected to at the end of the process. This must be the same as the original login request.</td>
  </tr>
  <tr>
    <td>client_id<Badge text="Required" type="mandatory"/></td>
    <td>Client id obtained when registering the application in Asgardeo.</td>
  </tr>
  <tr>
    <td>scope<Badge text="Optional" type="optional"/></td>
    <td>For the OpenId Connect flow, the scope should contain <code>openid</code> as one of the scopes. There can be additional scopes as well. Scopes should be space separated. e.g, `openid email profile`</td>
  </tr>
</table>

Once the user is successfully authenticated, Asgardeo will redirect the user to `redirect_uri` with authorization code.
**Sample response**:

```
https://localhost:5000/?code=97c85a59-a758-3a56-95cd-e71a505b493d&session_state=a0c3bc89849ba0f236791f7fe76a837b7b4422fdc9aca16db394d19a28724a29.wQc7eSHSRrGNfECJRMhSAw
```

<br>
