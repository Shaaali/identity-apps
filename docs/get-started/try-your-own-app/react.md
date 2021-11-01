---
breadcrumb: false
---

# Add login to your React app

Follow the steps given below to authenticate users to your React SPA with OpenID Connect using the [Asgardeo React SDK](https://github.com/asgardeo/asgardeo-auth-react-sdk/blob/main/README.md).

<Button 
    buttonType='grey-outlined-icon'
    buttonText='Try out the sample app'
    startIconPath='images/technologies/react-logo.svg'
    buttonPath='/get-started/try-samples/qsg-spa-react'
/>

## Prerequisites
- [Install npm and node](https://www.npmjs.com/get-npm) in your local environment.
- <a :href="$withBase('/guides/applications/register-single-page-app/')">Register an application</a> in Asgardeo.

## Install the SDK

Run the following command to install the React SDK and the necessary dependencies from the npm registry.

```
npm install @asgardeo/auth-react react-router-dom --save
```

## Configure `AuthProvider`

SDK uses [React Context API](https://reactjs.org/docs/context.html) under the hood to share the data between components. 
You can easily integrate Asgardeo in your application by using `AuthProvider` as the wrapper element to inject configurations.

``` no-line-number
import { AuthProvider } from "@asgardeo/auth-react";
```
`AuthProvider` takes a config object as a [prop](https://reactjs.org/docs/components-and-props.html) which is an arbitrary input that can be used to initialize the SDK instance. Provide the configurations below to get the SDK to work with your application. 
<table>
  <tr>
    <th>Parameter</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>clientID</code></td>
    <td>This is the Client ID of your OIDC app. See <a :href="$withBase('/guides/authentication/oidc/discover-oidc-configs/#obtain-client-id-of-the-app')">how to obtain client ID</a>.</td>
  </tr>
  <tr>
    <td><code>serverOrigin</code></td>
    <td>This is the Asgardeo server's host name along with your organization name.</td>
  </tr>
  <tr>
    <td><code>signInRedirectURL</code></td>
    <td>This is the URL the app redirects to after user login. See <a :href="$withBase('/references/app-settings/oidc-settings-for-app/#authorized-redirect-urls')">Authorized redirect URLs</a>.</td>
  </tr>
  <tr>
    <td><code>signOutRedirectURL</code></td>
    <td>This is the URL the app redirects to after user logout. See <a :href="$withBase('/references/app-settings/oidc-settings-for-app/#authorized-redirect-urls')">Authorized redirect URLs</a>.</td>
  </tr>
</table>

Copy and use the following code within your root component to configure `AuthProvider` for your application.

```
import React from "react";
import { render } from "react-dom";
import { AuthProvider } from "@asgardeo/auth-react";

const Index = () => (
    <AuthProvider
        config={ {
            signInRedirectURL: "http://localhost:5000",
            signOutRedirectURL: "http://localhost:5000",
            clientID: "<Client_ID>",
            serverOrigin: "https://dev.api.asgardeo.io/t/<Organization_name>"
        } }
    >
        { /* Rest of your application.  */ }
    </AuthProvider>
);

render((<Index />), document.getElementById("root"));
```
## Use `useAuthContext`
The ```useAuthContext()``` hook provided by the SDK could be used to access the session state that contains information such as the email address of the authenticated user and the methods that are required for implementing authentication.
Use the below code segment to import the ```useAuthContext()``` hook from ```@asgardeo/auth-react```.

``` no-line-numbers
import { useAuthContext } from "@asgardeo/auth-react";
```
And then inside your components, you can access the context as follows.  

``` no-line-numbers
const { isLoading, state, signIn, signOut } = useAuthContext();
```
The above code segment shows a sample scenario where the react app uses the ```isLoading```, ```state```, ```signIn``` and ```signOut``` functions. This section should be changed accordingly based on the functions that your react app uses.

## Use the API

You can now start using the SDK's API to implement the required authentication logic. Follow the instructions given below to implement each use case.

### Add Login
The Asgardeo React SDK provides React Hooks to easily authenticate your React application. Implement a **Login button** using the `signIn()` function in the `useContext` hook. 

This `signIn()` method is used authenticate the users and get authorization code and access token.
``` no-line-numbers
<button onClick={ () => signIn() }>Login</button>
```

### Get access token

Add the following code to your application. This enables the application to get the access token issued by Asgardeo.

``` 
const { getAccessToken } = useAuthContext();

const obtainAccessToken = () => {
     getAccessToken().then((accessToken) => {
        console.log(accessToken);
    }
}
```

**Sample access token** :

``` no-line-numbers
61985b0e-26c3-38b7-acff-b18ad934eafc 
```

### Get decoded ID token

Once the user is logged in with Asgardeo, the application can get the ID token issued by Asgardeo.

SDK provides the capability to decode the token, and you can obtain claims from this decoded ID token. 

Copy `obtainDecodedIDtoken` and call it from a button click as shown below.

```
const { getDecodedIDToken } = useAuthContext();

function obtainDecodedIDtoken() {
    getDecodedIDToken().then((decodedIDToken) => {
        console.log(decodedIDToken);
    })
}
```

**Sample decoded ID token** object is given below:

``` no-line-numbers
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

### Get user information

In addition to implementing login and logout, your application can also use the SDK to get user information.
 
 There are two ways for you to get user information:
 - Get user information from the [decoded ID token](#get-decoded-id-token).
 - Use the `getBasicUserInfo()` API and get basic user information.

To get the basic user information from SDK, copy the following script and call the `obtainUserInfo()` from a button as shown below. 

```
const { getBasicUserInfo } = useAuthContext();
  
const obtainUserInfo() => {
    console.log("Decoded ID token");
    getBasicUserInfo().then((basicUserDetails) => {
        console.log(basicUserDetails);
        console.log(basicUserDetails.username);
    })
}
```

**Sample basic user details**(`basicUserDetails`) object is below:

```no-line-numbers
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

### Add logout

In the previous steps, you implemented login for your app and enabled your app to get some information about the user that is logged in. Now you need a way to log users out of your application and remove the user sessions from Asgardeo. 

``` no-line-numbers
<button onClick={ () => signOut() }>Logout</button>
```

### Sample Code
The following code snippet demonstrates the usage of the ``state`` object together with other methods from the context.

``` 
import React from "react";
import { useAuthContext } from "@asgardeo/auth-react";

function App() {

  const { state, signIn, signOut } = useAuthContext();

  return (
    <div className="App">
      {
        state.isAuthenticated
          ? (
            <div>
              <ul>
                <li>{state.username}</li>
              </ul>

              <button onClick={() => signOut()}>Logout</button>
            </div>
          )
          : <button onClick={() => signIn()}>Login</button>
      }
    </div>
  );
}

export default App;
```

## Add Routing
If your application needs routing, the SDK provides a component called ``SecureRoute`` which is implemented with ``react-router-dom``. This component allows you to easily secure your routes with Asgardeo.