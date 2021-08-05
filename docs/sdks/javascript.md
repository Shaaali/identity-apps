---
breadcrumb: false
---

# Add login to your JavaScript app

Follow the steps given below to authenticate users to your JavaScript SPA with OpenID Connect using the [Asgardeo JavaScript SDK](https://github.com/asgardeo/asgardeo-auth-spa-sdk/blob/main/README.md).

<Button
   buttonType='grey-outlined-icon'
   buttonText='Try out the sample app'
   startIconPath='images/technologies/javascript-logo.svg'
   buttonPath='/quickstarts/qsg-spa-javascript'
/>

## Prerequisites
- [Install npm and node](https://www.npmjs.com/get-npm) in your local environment.
- <a href ="/guides/applications/spa/register-app">Register an application</a> in Asgardeo.

## Add Login to your app

This guide provides below information on how to integrate your Javascript SPA with Asgardeo.
1. [Install the SDK](#install-the-sdk)
2. [Initialize the SDK](#initialize-the-sdk)
3. [Add login](#add-login)
4. [Get access token](#get-access-token)
5. [Get decoded ID token](#get-decoded-id-token)
6. [Get user information](#get-user-information)
7. [Add logout](#add-logout)


### Install the SDK

Add the following script to the `index.html` of your application.

``` html
<script src="https://unpkg.com/@asgardeo/auth-spa@latest/dist/asgardeo-spa.production.min.js"></script>
```

<br>

### Initialize the SDK

You can use the following code within your root component to initialize `AsgardeoSPAClient` for your application.

To initialize the SDK, use the `getInstance()` function in the SDK and provide the following values to the `auth.initialize()` function to get the SDK to work with your application:
- **clientID** : Client ID of your OIDC app. See <a href="/guides/applications/spa/configure-login/#obtain-client-id-of-the-app">how to obtain client ID</a>.
 - **serverOrigin** : Asgardeo server host name along with your organization name.
 - **signInRedirectURL** : The URL to which users should be redirected after login. See <a href="/guides/applications/spa/oidc-settings/#authorized-redirect-urls">Authorized redirect URLs</a>.
 - **signOutRedirectURL** : The URL to which users should be redirected after logout. See <a href="/guides/applications/spa/oidc-settings/#authorized-redirect-urls">Authorized redirect URLs</a>.

```
<script>
// This client is a class and can be instantiated as follows.
var auth = AsgardeoAuth.AsgardeoSPAClient.getInstance();

// Once instantiated, the  client can be initialized by passing the relevant parameters such as the server origin, redirect URL, client ID, etc.
auth.initialize({
   signInRedirectURL: "https://localhost:5000",
   signOutRedirectURL: "https://localhost:5000",
   clientID: "<clientId>",
   serverOrigin: "https://accounts.asgardeo.io/t/<organization_name>"
});
</script>
```

<br>

### Add login

The `sign-in` hook is used to fire a callback function after successful sign-in.

To sign in, simply call the `signIn()` function using the created instance. Add the following script in your html file and call it twice from login button.

This method is used authenticate the users and get  authorization code and access token.

```
<script>

// Use this function in a login button to simply sign-in.
function handleLogin() {
   // To sign in, simply call the `signIn()` method.
   auth.signIn();
}

</script>
```

### Get access token

Add the following script to a html file and call it from a button. This is used to get the access token from the SDK. 

See the [SDK reference](https://github.com/asgardeo/asgardeo-auth-js-sdk#getAccessToken) for details.


```
<script>

async function getToken() {
   const accessToken = await auth.getAccessToken();
   console.log(accessToken);
}

</script>
```

**Sample access token** is given below:
```
61985b0e-26c3-38b7-acff-b18ad934eafc
```

### Get decoded ID token

To get the decoded token, call `getDecodedIdToken()` from a button click as shown below. Decoded ID token is useful to get the user attributes in the form of claims.

See the [SDK reference](https://github.com/asgardeo/asgardeo-auth-spa-sdk#getdecodedidtoken) for details.

```
<script>
// Use this function in a button to simply get decoded ID token.
function getDecodedIdToken(){

   auth.getDecodedIDToken().then((idToken) => {
           var decodedIdToken = idToken;
           // Get claims from the decoded idtoken
           var email = decodedIdToken.email;
       })
}
</script>
```

**Sample decoded ID Token** object is given below:

```
{
 "isk": "3af75bf6579a88cfb37ee85bd96c34524899857a91989be722e4ba53d392e3f7",
 "at_hash": "3gTKEUwxlPyxc1FPDmlxMw",
 "sub": "alica@bifrost.com",
 "country": "Sri Lanka",
 "amr": [
   "BasicAuthenticator"
 ],
 "iss": "https://accounts.asgardeo.io/t/bifrost/oauth2/token",
 "sid": "dd1621a7-bb3e-48cf-adae-861e261410e1",
 "aud": "SmLpPiRube64JmkAf4nhZVD_6V8a",
 "c_hash": "b15Dl_wI3rkoK0vukXYJew",
 "nbf": 1625805110,
 "azp": "SmLpPiRube64JmkAf4nhZVD_6V8a",
 "exp": 1625808710,
 "iat": 1625805110,
 "email": "alica@bifrost.com"
}
```

You can loop through the  decoded ID token, and get the following values:

<table>
   <tbody>
      <tr>
         <td><b>sub</b></td>
         <td><code>decodedIdToken.sub</code></td>
      </tr>
      <tr>
           <td><b>email</b></td>
           <td><code>decodedIdToken.email</code></td>
      </tr>
      <tr>
         <td><b>country</b></td>
         <td><code>decodedIdToken.country</code></td>
    </tr>
   </tbody>
</table>  

### Get user information

In addition to implementing login and logout, your application can use the SDK to get user information.

There are two ways for you to get user information:
- Get user information from the [decoded ID token](#get-decoded-id-token).
- Use the `getBasicUserInfo()` API and get basic user information.

To get the basic user information from SDK, copy the following script and call the `getBasicUserInfo()` from a button. 
See the [SDK reference](https://github.com/asgardeo/asgardeo-auth-spa-sdk#getBasicUserInfo) for details.

```
<script>
// Use this function in a button to simply get user info.
function getBasicUserInfo(){
   auth.getBasicUserInfo().then((userinfoResponse) => {
       console.log(userinfoResponse); // check userinfo response
       console.log(userinfoResponse.email);  // check email

   }).catch((error) => {
       console.error(error);
   });
}
</script>
```

**Sample user info response**(`userinfoResponse`) object is below:

```
{
 "allowedScopes": "openid",
 "sessionState": "f143343efdd6bcb57fe3d6215d9b740d2b1714df4bee0f506e31a7d75e1c2a8d.sI-dfLfA0yRDiKFvsG89LA",
 "username": "alica@bifrost.com",
 "country": "Sri Lanka",
 "email": "alica@bifrost.com"
}
```

You can loop through the user info response(`userinfoResponse`), and get the following values:

<table>
   <tbody>
      <tr>
           <td><b>email</b></td>
           <td><code>userinfoResponse.email</code></td>
      </tr>
      <tr>
         <td><b>country</b></td>
         <td><code>userinfoResponse.country</code></td>
    </tr>
   </tbody>
</table>


### Add logout

In the previous steps, you implemented login for your app and enabled your app to get some information about the user that is logged in. Now you need a way to log users out of your application and remove the user sessions from Asgardeo. 

Call `handleSignOut()` from your logout button to enable app users to log out as shown below.

See the [signOut API reference](https://github.com/asgardeo/asgardeo-auth-spa-sdk#signout) for advanced usages.

```
<script>
// Use this function in a logout button to simply sign-out.
function handleLogout() {
   auth.signOut();
</script>
}
```

