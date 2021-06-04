---
sidebar: auto
breadcrumb: false
---

# SPA with OIDC: Angular

This guide provides steps to authenticate users to your Angular SPA with OpenID Connect using the [Asgardeo Angular SDK](https://github.com/asgardeo/asgardeo-auth-angular-sdk/blob/main/README.md)

<Button buttonType='primary' buttonText='Try out the sample app' buttonPath='/quickstarts/qsg-spa-angular'/>

::: tip Before you begin

1. Create an organization in Asgardeo
2. Create a customer account in your organization
3. Install npm and node in your local environment

:::

## Configure your application in Asgardeo

You need to first create an application in Asgardeo that represents your SPA.

<CommonGuide guide='guides/fragments/configure-spa-in-asgardeo.md'/>

## Add authentication to your app

**1. Install SDK**

Run the following command to install the Angular SDK and the necessary dependencies from the npm registry.

```
npm install @asgardeo/auth-angular --save
```

<br>

**2. Configure AsgardeoAuthModule**

Copy and use the following code within your root component to configure `AsgardeoAuthModule` for your application.

Pass the relevant `clientID`, `serverOrigin`, `signInRedirectURL` & `signOutRedirectURL` to the `forRoot()` function
of `AsgardeoAuthModule` to get the SDK to work with your application.

::: tip Find app information

These details can be found in the **Protocol** tab of the application details view.
:::

```
// Import AsgardeoAuthModule and Provide Configuration Parameters.

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

// Import Auth Module
import { AsgardeoAuthModule } from "@asgardeo/auth-angular";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,

        // Add the module as an import providing the configs (See API Docs)
        AsgardeoAuthModule.forRoot({
            signInRedirectURL: "https://localhost:5000",
            signOutRedirectURL: "https://localhost:5000",
            clientID: "<clientId>",
            serverOrigin: "https://accounts.asgardeo.io/t/<organization_name>"
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})      
export class AppModule { }
```

<br>

**3. Add login**

Inject `AsgardeoAuthService` to your components to access the authenticated state and sign-in and sign-out
functionalities.

```
import { Component } from "@angular/core";
import { AsgardeoAuthService } from "@asgardeo/auth-angular";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    constructor(private auth: AsgardeoAuthService) { }

    /*
    * Use this function in a login button to simply sign-in.
    */
    handleSignIn(): void {
        this.auth.signIn();
    }

    /*
    * Use this function in a logout button to simply sign-out.
    */
    handleSignOut(): void {
        this.auth.signOut();
    }
}
```
