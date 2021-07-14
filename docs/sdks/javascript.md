---
breadcrumb: false
---

# SPA with OIDC: Javascript

This guide provides steps to authenticate users to your JavaScript SPA with OpenID Connect using the [Asgardeo JavaScript SDK](https://github.com/asgardeo/asgardeo-auth-spa-sdk/blob/main/README.md)

<Button 
    buttonType='grey-outlined-icon'
    buttonText='Try out the sample app'
    startIconPath='images/technologies/javascript-logo.svg'
    buttonPath='/quickstarts/qsg-spa-javascript'
/>

## Prerequisites
1. You need to have npm with Node.js. If you don't have it, [Install npm and node](https://www.npmjs.com/get-npm) in your local environment.
2. You should have registered a single-page application. If you don't have an app registered, <a href ="/guides/applications/spa/register-app">register an application</a> in Asgardeo.

## Add authentication to your app

### Install SDK

Add the following script to the `index.html` of your application.

``` html
<script src="https://unpkg.com/@asgardeo/auth-spa@latest/dist/asgardeo-spa.production.min.js"></script>
```

<br>

### Configure AsgardeoSPAClient

Copy and use the following code within your root component to configure `AsgardeoSPAClient` for your application.

To initialize the SDK, use the `getInstance()` function in the SDK and pass in the required `clientID`, `serverOrigin`
, `signInRedirectURL` & `signOutRedirectURL` to the `auth.initialize()` function.

::: tip Find app information

These details can be found in the **Protocol** tab of the application details view.
:::

```
<script>
// This client is a class and can be instantiated as follows.
var auth = AsgardeoAuth.AsgardeoSPAClient.getInstance();

// Once instantiated, the  client can be initialized by passing the relevant parameters such as the server origin, redirect URL, client ID, etc.
auth.initialize({
    signInRedirectURL: "https://localhost:5000",
    signOutRedirectURL: "https://localhost:5000",
    clientID: "<client ID>",
    serverOrigin: "https://accounts.asgardeo.io/t/<organization_name>"
});
</script>
```

<br>

### Add login

The `sign-in` hook is used to fire a callback function after successful sign-in.

To sign in, simply call the `signIn()` function using the created instance. Similarly, call the `signOut()` function for
application sign-out.

```
<script>
// The `sign-in` hook is used to fire a callback function after signing in is successful.
auth.on("sign-in", (response) => {
    sessionStorage.setItem("initSignIn", "false");
    alert("You have successfully signed in!");
});

// Use this function in a login button to simply sign-in.
function handleLogin() {
    sessionStorage.setItem("initSignIn", "true");
    // To sign in, simply call the `signIn()` method.
    auth.signIn();
}

// Use this function in a logout button to simply sign-out.
function handleLogout() {
    auth.signOut();
}

if(JSON.parse(sessionStorage.getItem("initSignIn"))){
    auth.signIn();
}

</script>
```
