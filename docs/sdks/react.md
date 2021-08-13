---
breadcrumb: false
---

# Add login to your React app

Follow the steps given below to authenticate users to your React SPA with OpenID Connect using the [Asgardeo React SDK](https://github.com/asgardeo/asgardeo-auth-react-sdk/blob/main/README.md).

<Button 
    buttonType='grey-outlined-icon'
    buttonText='Try out the sample app'
    startIconPath='images/technologies/react-logo.svg'
    buttonPath='/quickstarts/qsg-spa-react'
/>

## Prerequisites
- [Install npm and node](https://www.npmjs.com/get-npm) in your local environment.
- <a :href="$withBase('/guides/applications/spa/register-app')">Register an application</a> in Asgardeo.

## Install the SDK

Run the following command to install the React SDK and the necessary dependencies from the npm registry.

```
npm install @asgardeo/auth-react react-router-dom --save
```

## Initialize the SDK

SDK uses [React Context API](https://reactjs.org/docs/context.html) under the hood to share the data between components. 
You can easily integrate Asgardeo in your application by using `AuthProvider` as the wrapper element to inject configurations.

`AuthProvider` takes a config object as a [prop](https://reactjs.org/docs/components-and-props.html) which is an arbitary input that can be used to initialize the SDK instance. Provide the configurations below to get the SDK to work with your application. 
 - **clientID** : This is the Client ID of your OIDC app. See <a :href="$withBase('/guides/applications/spa/configure-login/#obtain-client-id-of-the-app')">how to obtain client ID</a>.
 - **serverOrigin** : Asgardeo server host name along with your organization name
 - **signInRedirectURL** : This is the URL to which users should be redirected after login. See <a :href="$withBase('/guides/applications/spa/oidc-settings/#authorized-redirect-urls')">Authorized redirect URLs</a>.
 - **signOutRedirectURL** : This is the URL to which users should be redirected after logout. See <a :href="$withBase('/guides/applications/spa/oidc-settings/#authorized-redirect-urls')">Authorized redirect URLs</a>.

Copy and use the following code within your root component to configure `AuthProvider` for your application.

```
import { AuthProvider } from "@asgardeo/auth-react";
import React from "react";
import { render } from "react-dom";
import HomePage from "./pages/home";

const App = () => (
    <AuthProvider
        config={ {
            signInRedirectURL: "https://localhost:5000",
            signOutRedirectURL: "https://localhost:5000",
            clientID: "<client ID>",
            serverOrigin: "https://api.asgardeo.io/t/<organization_name>"
        } }
    >
        { /* Use your own component tree here instead of HomePage.  */ }
        <HomePage />
    </AuthProvider>
);

render((<App />), document.getElementById("root"));
```

## Add login

The Asgardeo React SDK provides React Hooks to easily authenticate your React application. Implement a **Login button**
using the `signIn()` function in the `useAuthContext` hook. Call this `signIn` method twice from your login button.

This `signIn()` method is used authenticate the users and get authorization code and access token.


```
import { useAuthContext } from "@asgardeo/auth-react";
import React from "react";

const LandingPage = () => {

    // Use useAuthContext() custom react hook to access auth state and function.
    const { signIn} = useAuthContext();

    // Function for handling signin.
    function handleSignIn(){
        signIn();
    }

    return (
        <div>
            // Call handleSignIn method from a button click.
            <button onClick={ () => handleSignIn() }>Login</button>
        </div>

    );
};

export default LandingPage;
```

## Get access token

Add the following code in your application. This enables the application to get the access token issued by Asgardeo.

```
import { useAuthContext } from "@asgardeo/auth-react";
import React from "react";

const LandingPage = () => {

    // Use useAuthContext() custom react hook to access auth state and function.
    const { signIn, getAccessToken} = useAuthContext();

    // Function for handling signin.
    function handleSignIn(){
            signIn();
    }
      
    // Function for obtaining access token.  
    function obtainAccessToken(){
        getAccessToken().then((accessToken) => {
            console.log(accessToken);
        });
    }

    return (
        <div>
            <button onClick={ () => handleSignIn() }>Login</button>
            <button onClick={ () => obtainAccessToken() }>Get token</button>
        </div>

    );
};
```

**Sample access token** :

```
61985b0e-26c3-38b7-acff-b18ad934eafc 
```

## Get decoded ID token

Once the user is logged in with Asgardeo, the application can get the ID token issued by Asgardeo.

SDK provides the capability to decode the token, and you can obtain claims from this decoded ID token. 

Copy `obtainDecodedIDtoken` and call it from a button click as shown below.

```
import { useAuthContext } from "@asgardeo/auth-react";
import React from "react";

const LandingPage = () => {

    // Use useAuthContext() custom react hook to access auth state and function.
    const { signIn, getDecodedIDToken } = useAuthContext();

    // Function for handling signin.
    function handleSignIn(){
            signIn();
    }
    
    // Function for obtaining decoded ID token.
    function obtainDecodedIDtoken() {
        getDecodedIDToken().then((decodedIDToken) => {
            console.log(decodedIDToken);
        })
     }
 
    return (
        <div>
            <button onClick={ () => handleSignIn() }>Login</button>
            <button onClick={ () => obtainDecodedIDtoken() }>Get Decoded token</button>
        </div>

    );
};
```

**Sample decoded ID token** object is given below:

```
{
    "isk": "329d5bf5732791509edabb093d78a4a2665dbc65d99119f45f1d4db1a2459cf1",
    "at_hash": "TN1HIyOnt_8shS2DalrdfQ",
    "sub": "alica@bifrost.com",
    "country": "Sri Lanka",
    "amr": [
        "BasicAuthenticator"
    ],
    "iss": "https://api.asgardeo.io/t/bifrost/oauth2/token",
    "sid": "81a61d37-9a6d-487a-8f5f-c7a313c44c31",
    "aud": "SmLpPiRube64JmkAf4nhZVD_6V8a",
    "c_hash": "1pWTMQ7ZTxCWSapucJF-bw",
    "nbf": 1627966715,
    "azp": "SmLpPiRube64JmkAf4nhZVD_6V8a",
    "exp": 1627970315,
    "iat": 1627966715,
    "email": "alica@bifrost.com"
}
```

From this decoded ID Token(`decodedIDToken`) object, you can get, 

<table>
   <tbody>
      <tr>
         <td><b>sub</b></td>
         <td><code>decodedIDToken.sub</code></td>
      </tr>
      <tr>
           <td><b>email</b></td>
           <td><code>decodedIDToken.email</code></td>
      </tr>
      <tr>
         <td><b>country</b></td>
         <td><code>decodedIDToken.country</code></td>
    </tr>
   </tbody>
</table>  

You can loop through the `decodedIDToken` object and get the other claims as well.

<br>

## Get user information

In addition to implementing login and logout, your application can also use the SDK to get user information.
 
 There are two ways for you to get user information:
 - Get user information from the [decoded ID token](#get-decoded-id-token).
 - Use the `getBasicUserInfo()` API and get basic user information.

To get the basic user information from SDK, copy the following script and call the `obtainUserInfo()` from a button as shown below. 

```
import { useAuthContext } from "@asgardeo/auth-react";
import React from "react";

const LandingPage = () => {

    // Use useAuthContext() custom react hook to access auth state and function.
    const {signIn, getBasicUserInfo } = useAuthContext();

    // Function for handling signin.
    function handleSignIn(){
            signIn();
    }

    // Function for obtaining basic user information.  
    function obtainUserInfo() {
        console.log("Decoded ID token");
        getBasicUserInfo().then((basicUserDetails) => {
            console.log(basicUserDetails);
            console.log(basicUserDetails.username);
        })
    }

    return (
        <div>
            <button onClick={ () => handleSignIn() }>Login</button>
            <button onClick={ () => obtainUserInfo() }>Get User info</button>
        </div>

    );
};
```

**Sample basic user details**(`basicUserDetails`) object is below:

```json
{
    "allowedScopes": "openid",
    "sessionState": "eb0e12f9a113f49ffef887a464c7980d84bb5b11dfeb1774309aee9b88c83c21.8-LXzzHCUSOOa2GeH-LFfA",
    "username": "alica@bifrost.com",
    "country": "Sri Lanka",
    "email": "alica@bifrost.com"
}
```

You can loop through the user info response(`basicUserDetails`), and get the following values:

<table>
   <tbody>
      <tr>
         <td><b>username</b></td>
         <td><code>basicUserDetails.username</code></td>
      </tr>
      <tr>
           <td><b>email</b></td>
           <td><code>basicUserDetails.email</code></td>
      </tr>
      <tr>
         <td><b>country</b></td>
         <td><code>basicUserDetails.country</code></td>
    </tr>
   </tbody>
</table>

<br>

## Add logout

In the previous steps, you implemented login for your app and enabled your app to get some information about the user that is logged in. Now you need a way to log users out of your application and remove the user sessions from Asgardeo. 

Call `handleSignOut()` from your logout button to enable app users to log out as shown below.

```
import { useAuthContext } from "@asgardeo/auth-react";
import React from "react";

const LandingPage = () => {

    // Use useAuthContext() custom react hook to access auth state and function.
    const { signIn, signOut } = useAuthContext();

    // Function for handling signin.
    function handleSignIn(){
            signIn();
    }
      
    // Function for handling signout.
    function handleSignOut() {
        console.log("Signing out the user");
        signOut()
    }

    return (
        <div>       
            <button onClick={ () => handleSignIn() }>Login</button>
            <button onClick={ () => handleSignOut() }>Logout</button>
        </div>

    );
};
```
