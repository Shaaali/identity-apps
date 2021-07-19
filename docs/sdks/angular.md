---
breadcrumb: false
---

# Add Login To Your Angular App

This guide provides steps to authenticate users to your Angular SPA with OpenID Connect using the [Asgardeo Angular SDK](https://github.com/asgardeo/asgardeo-auth-angular-sdk/blob/main/README.md)

<Button 
    buttonType='grey-outlined-icon'
    buttonText='Try out the sample app'
    startIconPath='images/technologies/angular-logo.svg'
    buttonPath='/quickstarts/qsg-spa-angular'
/>
<br>

## Prerequisites
1. [Install npm and node](https://www.npmjs.com/get-npm) in your local environment.
2. <a href ="/guides/applications/spa/register-app">Register an application</a> in Asgardeo.
<br>

## Integrate your app with Asgardeo
This guide provides below information on how to integrate your Angular app with Asgardeo:
1. [Install SDK](#install-sdk)
2. [Initialize SDK](#initialize-sdk)
3. [Add Login](#add-login)
4. [Get access token](#get-access-token)
5. [Get decoded ID token](#get-decoded-id-token)
6. [Get user information](#get-user-information)
7. [Add logout](#add-logout)


### Install SDK

Run the following command to install the Angular SDK and the necessary dependencies from the npm registry.

```
npm install @asgardeo/auth-angular --save
```
<br>

### Initialize SDK

Use the following code within your root component to initialize `AsgardeoAuthModule` for your application by providing the configurations.

Provide the following values to the `forRoot()` function of `AsgardeoAuthModule` to get the SDK to work with your application:
 - **clientID** : Client ID of your  OIDC app. See <a href="/guides/applications/spa/configure-login/#obtain-client-id-of-the-app">how to obtain client ID</a>.
 - **serverOrigin** : Asgardeo server host name along with your organization name.
 - **signInRedirectURL** : URL to return after login. See <a href="/guides/applications/spa/oidc-settings/#authorized-redirect-urls">Authorized redirect URLs</a>.
 - **signOutRedirectURL** : URL to return after logout. See <a href="/guides/applications/spa/oidc-settings/#authorized-redirect-urls">Authorized redirect URLs</a>.

```
// app.module.ts
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
            clientID: "<client ID>",
            serverOrigin: "https://accounts.asgardeo.io/t/<organization_name>"
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})      
export class AppModule { }
```
<br>

### Add login

Inject `AsgardeoAuthService` to your components to add login to your application. 
Copy the below code to your component and then call `handleSignIn()` two times from your login button. The first call will handle the authorization code flow and the second call will do the token flow.

Check [SignIn api reference](https://github.com/asgardeo/asgardeo-auth-angular-sdk#signin) for the advanced usages.
```
// app.component.ts
import { Component } from "@angular/core";
import { AsgardeoAuthService } from "@asgardeo/auth-angular";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

    private isInitLogin: boolean;
    
    /*
    * Use this function in a login button to simply sign-in.
    */
    handleSignIn() {
        this.auth.signIn();
    }
    
}
```
<br>

### Get access token

Once the user is logged in with Asgardeo, the application can get the access token issued by Asgardeo.

Refer [getAccessToken](https://github.com/asgardeo/asgardeo-auth-angular-sdk#getaccesstoken) from Github documentation.
 
 ```
getAccessToken() {
    this.auth.getAccessToken().then((accessToken) => console.log(accessToken));
  }
```

**Sample** `accessToken` is given below:

```
61985b0e-26c3-38b7-acff-b18ad934eafc 
```

<br>

### Get decoded ID token

Once the user is logged in with Asgardeo, the application can get the ID token issued by Asgardeo.

SDK provides the capability to decode the token from you can provide the claims. 

Copy `getDecodedIdToken()` and call it from a button click.

```
getDecodedIdToken() {
    this.auth.getDecodedIDToken().then((decodedIdToken) => {
      console.log(decodedIdToken);
      console.log(decodedIdToken.email);
      console.log(decodedIdToken.country);
    });
  }
```

**Sample** `decodedIdToken` object is given below:

```
{
  "isk": "a26bd07d5298e1a427334248c82ba82d01c5d5be55aa27bbabf060fc88a76b7c",
  "at_hash": "8vJsHIxjIqfws9Ia2r8zKw",
  "sub": "alica@bifrost.com",
  "country": "Sri Lanka",
  "amr": [
    "BasicAuthenticator"
  ],
  "iss": "https://accounts.asgardeo.io/t/bifrost/oauth2/token",
  "sid": "dd1621a7-bb3e-48cf-adae-861e261410e1",
  "aud": "SmLpPiRube64JmkAf4nhZVD_6V8a",
  "c_hash": "PP06ubMiVq9oNg0PztzufA",
  "nbf": 1625808688,
  "azp": "SmLpPiRube64JmkAf4nhZVD_6V8a",
  "exp": 1625812288,
  "iat": 1625808688,
  "email": "alica@bifrost.com"
}
```

From this `decodedIdToken` object, you can get, 

<table>
   <tbody>
      <tr>
         <td>sub</td>
         <td><code>decodedIdToken.sub</code></td>
      </tr>
      <tr>
           <td>email</td>
           <td><code>decodedIdToken.email</code></td>
      </tr>
      <tr>
         <td>country</td>
         <td><code>decodedIdToken.country</code></td>
    </tr>
   </tbody>
</table>  

You can loop through the `decodedIdToken` object and get the other claims as well.

<br>

### Get user information

Apart from adding login and logout to your application, you can get the user information from Asgardeo SDK. 

There are two ways for you to get user information:
1. Get user information from [decoded id token](#get-decoded-id-token).
2. Use `getBasicUserInfo()` API and get basic userinfo.

Instead, you can get basic user information using `getBasicUserInfo()` API. This will give you basic user information. 
 
You can refer [Github documentation](https://github.com/asgardeo/asgardeo-auth-angular-sdk#basicuserinfo) for further reference. 

```
getUserInfo(){
    this.auth.getBasicUserInfo().then((userinfoResponse) => {
      console.log(userinfoResponse);
      console.log(userinfoResponse.username);
      console.log(userinfoResponse.email);
    });
  }
```

**Sample** `userinfoResponse` object is below:

```
{
  "allowedScopes": "openid",
  "sessionState": "977a152b3dc3584de549f150aed85d8e1a5bb62bc1e73d0c6f3516a69b608a1d.hsMArR21vaiMKvTRNgZ1Bw",
  "username": "alica@bifrost.com",
  "country": "Sri Lanka",
  "email": "alica@bifrost.com"
}
```

From this `userinfoResponse` object, you can loop through and get the required user information:

<table>
   <tbody>
      <tr>
         <td>username</td>
         <td><code>userinfoResponse.username</code></td>
      </tr>
      <tr>
           <td>email</td>
           <td><code>userinfoResponse.email</code></td>
      </tr>
      <tr>
         <td>country</td>
         <td><code>userinfoResponse.country</code></td>
    </tr>
   </tbody>
</table>

<br>

### Add logout

Now you have logged in to your application and get some user information of the logged in user. You need a way to log out your application and remove user session from Asgardeo as well. 

By calling `handleSignOut()` in your logout button, user can logout out from the application. 

Check [signout api reference](https://github.com/asgardeo/asgardeo-auth-angular-sdk#signout) for advanced usages:
```angular2
// Use this function in a logout button to simply sign-out.
  handleSignOut(): void {
    this.auth.signOut();
  }
```
<br>
