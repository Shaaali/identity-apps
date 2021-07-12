---
breadcrumb: false
---

# Add Login To Your JavaScript App

This guide provides steps to authenticate users to your JavaScript SPA with OpenID Connect using the [Asgardeo JavaScript SDK](https://github.com/asgardeo/asgardeo-auth-spa-sdk/blob/main/README.md)

<Button
   buttonType='grey-outlined-icon'
   buttonText='Try out the sample app'
   startIconPath='images/technologies/javascript-logo.svg'
   buttonPath='/quickstarts/qsg-spa-javascript'
/>

## Prerequisites
1. [Install npm and node](https://www.npmjs.com/get-npm) in your local environment.
2. <a href ="/guides/applications/spa/register-app">Register an application</a> in Asgardeo.

## Add Login to your app

This guide provides below information on how to integrate your Javascript SPA with Asgardeo.
1. [Install SDK](#install-sdk)
2. [Initialize SDK](#initialize-sdk)
3. [Add Login](#add-login)
4. [Get access token](#get-access-token)
5. [Get decoded ID token](#get-decoded-id-token)
6. [Get user information](#get-user-information)
7. [Add logout](#add-logout)


### Install SDK

Add the following script to the `index.html` of your application.

``` html
<script src="https://unpkg.com/@asgardeo/auth-spa@latest/dist/asgardeo-spa.production.min.js"></script>
```

<br>

### Initialize SDK

You can use the following code within your root component to initialize `AsgardeoSPAClient` for your application.

To initialize the SDK, use the `getInstance()` function in the SDK and provide the following values to the `auth.initialize()` function to get the SDK to work with your application:
- **clientID** : Client ID of your OIDC app. See <a href="/guides/applications/spa/configure-login/#obtain-client-id-of-the-app">how to obtain client ID</a>.
 - **serverOrigin** : Asgardeo server host name along with your organization name.
 - **signInRedirectURL** : URL to return after login. See <a href="/guides/applications/spa/oidc-settings/#authorized-redirect-urls">Authorized redirect URLs</a>.
 - **signOutRedirectURL** : URL to return after logout. See <a href="/guides/applications/spa/oidc-settings/#authorized-redirect-urls">Authorized redirect URLs</a>.

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

To sign in, simply call the `signIn()` function using the created instance.

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

You can refer [Github documentation](https://github.com/asgardeo/asgardeo-auth-js-sdk#getAccessToken) for further reference.


```
<script>

async function getToken() {
   const accessToken = await auth.getAccessToken();
   console.log(accessToken);
}

</script>
```

**Sample** `accessToken` is given below:
```
61985b0e-26c3-38b7-acff-b18ad934eafc
```

### Get ID token

You can refer [Github documentation](https://github.com/asgardeo/asgardeo-auth-js-sdk#getIDToken) for further reference.

```
<script>

async function getIDToken() {
   const idToken = await auth.getIDToken();
   console.log(idToken);
}

</script>
```

**Sample** `idToken` object is given below:

```
eyJ4NXQiOiJZemM1T1Rnd1pURTNNV1F6TVdFek5ERm1OelZoTTJOaU9UQmxOamN3TlRJNU9HTTBNbVExWWprd1lqZzJNVEl3WldNd056
TTRNemcxWkdJeVpEZzNaQSIsImtpZCI6Ill6YzVPVGd3WlRFM01XUXpNV0V6TkRGbU56VmhNMk5pT1RCbE5qY3dOVEk1T0dNME1tUTFZ
amt3WWpnMk1USXdaV013TnpNNE16ZzFaR0l5WkRnM1pBX1JTMjU2IiwiYWxnIjoiUlMyNTYifQ.eyJpc2siOiJhMjZiZDA3ZDUyOThlM
WE0MjczMzQyNDhjODJiYTgyZDAxYzVkNWJlNTVhYTI3YmJhYmYwNjBmYzg4YTc2YjdjIiwiYXRfaGFzaCI6Ijh2SnNISXhqSXFmd3M5S
WEycjh6S3ciLCJzdWIiOiJhbGljYUBiaWZyb3N0LmNvbSIsImNvdW50cnkiOiJTcmkgTGFua2EiLCJhbXIiOlsiQmFzaWNBdXRoZW50a
WNhdG9yIl0sImlzcyI6Imh0dHBzOlwvXC9hY2NvdW50cy5hc2dhcmRlby5pb1wvdFwvYmlmcm9zdFwvb2F1dGgyXC90b2tlbiIsInNpZ
CI6ImRkMTYyMWE3LWJiM2UtNDhjZi1hZGFlLTg2MWUyNjE0MTBlMSIsImF1ZCI6IlNtTHBQaVJ1YmU2NEpta0FmNG5oWlZEXzZWOGEiL
CJjX2hhc2giOiJQUDA2dWJNaVZxOW9OZzBQenR6dWZBIiwibmJmIjoxNjI1ODA4Njg4LCJhenAiOiJTbUxwUGlSdWJlNjRKbWtBZjRua
FpWRF82VjhhIiwiZXhwIjoxNjI1ODEyMjg4LCJpYXQiOjE2MjU4MDg2ODgsImVtYWlsIjoiYWxpY2FAYmlmcm9zdC5jb20ifQ.PgJuygb
FXsVLz5yk0f7gDpiLy_YfobvHXQHzPqYzsXStI74I9EUnUI26ofjruaHVCnK2T_lnY4WGdVLGgd3jMu9GcrB0T-x-YWGmh51Zviw9nj_Y
uisddfnhNBnj8SQLMEZXqCZxyJNrtUDAmkiVe_DIPc5WkFYazqHcLtMr2Y66hl83-bNFj0TOY8cCghi8CGZyAQcqibUi3eWBcJGLBFJtf
pAF5gIS6XrWr1eT4w2Q5X3NL2t7GlP8WqmquZe98Pp-I_eCpPqMM937ah8kE4uMevxCGhFVfJu0se4AF11rqlr21tqi3FF_AlqwOaGF4Y
1rogRG2iaE22ghRerSSw
```

### Get decoded ID token

You can refer [Github documentation](https://github.com/asgardeo/asgardeo-auth-spa-sdk#getdecodedidtoken) for further reference.

Copy `getDecodedIdToken()` and call it from a button click.
```
<script>
// Use this function in a button to simply get user info.
function getDecodedIdToken(){

   auth.getDecodedIDToken().then((idToken) => {
           var decodedIdToken = idToken;
           // Get claims from the decoded idtoken
           var email = decodedIdToken.email;
       })
}
</script>
```

**Sample** `decodedIdToken` object is given below:

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

From this `decodedIdToken` object, you can get,

**sub**: `decodedIdToken.sub`
**email**: `decodedIdToken.email` 
**country**: `decodedIdToken.country` 

You can loop through the `decodedIdToken` object and get the required claims.

### Get user information

Apart from adding login and logout to your application, you can get the user information from Asgardeo SDK.

There are two ways for you to get user information:
1. Get user information from [decoded ID token](#get-decoded-id-token).
2. Use `getBasicUserInfo()` API and get basic userinfo.

You can refer [Github documentation](https://github.com/asgardeo/asgardeo-auth-spa-sdk#getBasicUserInfo) for further reference.

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

**Sample** `userinfoResponse` object is below:

```
{
 "allowedScopes": "openid",
 "sessionState": "f143343efdd6bcb57fe3d6215d9b740d2b1714df4bee0f506e31a7d75e1c2a8d.sI-dfLfA0yRDiKFvsG89LA",
 "username": "alica@bifrost.com",
 "country": "Sri Lanka",
 "email": "alica@bifrost.com"
}
```

From this `userinfoResponse` object, you can loop through and get required user information,

**email**: `userinfoResponse.email` 
**country**: `userinfoResponse.country` 


### Add logout

Now you have logged in to your application and get some user information of the logged in user. You need a way to log out your application and remove user session from Asgardeo as well. 

By calling `handleSignOut()` in your logout button, user can logout out from the application. 

Check [signout api reference](https://github.com/asgardeo/asgardeo-auth-spa-sdk#signout) for advanced usages:

```
<script>
// Use this function in a logout button to simply sign-out.
function handleLogout() {
   auth.signOut();
</script>
}
```
