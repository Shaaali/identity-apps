# Single page application: React

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

Run the following command to install the React SDK and the necessary dependencies from the npm registry.

```
npm install @asgardeo/auth-react react-router-dom --save
```

<br>

**2. Configure AuthProvider**

Copy and use the following code within your root component to configure `AuthProvider` for your application.

::: tip Note
Make sure to replace `HomePage` component with your own component tree.
:::

Asagrdeo uses [React Context API](https://reactjs.org/docs/context.html) under the hood to manage state. You can easily integrate Asgardeo to your application by wrapping your application with the `AuthProvider`.\
`AuthProvider` takes a config object as a prop that can be used to initialize the SDK instance. Pass the relevant `clientID`, `serverOrigin`,`signInRedirectURL` & `signOutRedirectURL` to the config to get the SDK to work with your application.

::: tip Find app information
These details can be found in the **Protocol** tab of the application details view.
:::

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
            clientID: "<clientId>",
            serverOrigin: "https://accounts.asgardeo.io/t/<yourTenantDomain>"
        } }
    >
        { /* Use your own component tree here instead of HomePage.  */ }
        <HomePage />
    </AuthProvider>
);

render((<App />), document.getElementById("root"));
```

<br>

**3. Add login**

The Asgardeo React SDK provides React Hooks to easily authenticate your React application. Implement a **Login button** using the `signIn()` function in the `useAuthContext` hook. Similarly, you can also implement a **Logout button** using the `signOut()` function.\
If you wish to access the authenticated user's details, use the `state` object from the `useAuthContext` hook.

```
import { useAuthContext } from "@asgardeo/auth-react";
import React from "react";

const LandingPage = () => {

    // Use useAuthContext() custom react hook to access auth state and function.
    const { state, signIn, signOut } = useAuthContext();

    return (
        <div>
            <h3>The basic details retrieved from the server upon successful login.</h3>
            <div>
                <ul className="details">
                    <li><b>Name:</b> { state.displayName }</li>
                    <li><b>Username:</b> { state.username }</li>
                    <li><b>Email:</b> { state.email }</li>
                </ul>
            </div>
            <button onClick={ () => signIn() }>Login</button>
            <button onClick={ () => signOut() }>Logout</button>
        </div>
    );
};

export default LandingPage;
```
