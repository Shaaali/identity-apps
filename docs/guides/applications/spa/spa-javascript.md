# Single page application: Javascript

This guide provides steps to authenticate users to your React SPA with OIDC protocol by using the Asgardeo Auth React SDK

<ToggleButton buttonText='Try out the sample app' buttonPath='/quickstarts/qsg-spa-sample'/>

::: tip Before you begin

1. Create a tenant in Asgardeo
2. Create a consumer user for your organization
3. Install npm and node in your local environment

:::

## Configure your application in Asgardeo

You need to first create an application in Asgardeo that represents your SPA.

<CommonGuide guide='guides/fragments/configure-spa-in-asgardeo.md'/>

## Add authentication to your app

**1. Install SDK**

Add the following script to the `index.html` of your application.

``` html
<script src="https://unpkg.com/@asgardeo/auth-spa@latest/dist/asgardeo-spa.production.min.js"></script>
```

<br>

**2. Configure AsgardeoSPAClient**

Copy and use the following code within your root component to configure `AsgardeoSPAClient` for your application.


To initialize the SDK, use the `getInstance()` function in the SDK and pass in the required `clientID`, `serverOrigin`, `signInRedirectURL` & `signOutRedirectURL` to the `auth.initialize()` function.

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
    clientID: "<clientId>",
    serverOrigin: "https://accounts.asgardeo.io/t/<yourTenantDomain>"
});
</script>
```

<br>

**3. Add login**

The `sign-in` hook is used to fire a callback function after successful sign-in.

To sign in, simply call the `signIn()` function using the created instance. Similarly, call the `signOut()` function for application sign-out.

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
