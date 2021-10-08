---
breadcrumb: false
---

# Add login to your Angular app

This guide provides steps to authenticate users to your Angular SPA with OpenID Connect using the [Asgardeo Angular SDK](https://github.com/asgardeo/asgardeo-auth-angular-sdk/blob/main/README.md).

<Button 
    buttonType='grey-outlined-icon'
    buttonText='Try out the sample app'
    startIconPath='images/technologies/angular-logo.svg'
    buttonPath='/get-started/try-samples/qsg-spa-angular'
/>
<br>

## Prerequisites
1. [Install npm and node](https://www.npmjs.com/get-npm) in your local environment.
2. <a :href="$withBase('/guides/applications/register-single-page-app/')">Register an application</a> in Asgardeo.
<br>

## Install the SDK

Run the following command to install the Angular SDK and the necessary dependencies from the npm registry.

``` no-line-numbers
npm install @asgardeo/auth-angular --save
```
<br>

## Configure `AsgardeoAuthModule`

Use the following code within your root component to initialize `AsgardeoAuthModule` for your application by providing the configurations. This module will help you to easily integrate Asgardeo to your application.

``` no-line-numbers
import { AsgardeoAuthModule } from "@asgardeo/auth-angular";
```

Provide the following values to the `forRoot()` function of `AsgardeoAuthModule` to get the SDK to work with your application:

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
    <td>This is the URL the app redirects to after logging in. See <a :href="$withBase('/references/app-settings/oidc-settings-for-app/#authorized-redirect-urls')">Authorized redirect URLs</a>.</td>
  </tr>
  <tr>
    <td><code>signOutRedirectURL</code></td>
    <td>This is the URL the app redirects to after logging out. See <a :href="$withBase('/references/app-settings/oidc-settings-for-app/#authorized-redirect-urls')">Authorized redirect URLs</a>.</td>
  </tr>
</table>

Copy and use the following code within your root component to configure `AuthProvider` for your application.

```
//app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AsgardeoAuthModule } from "@asgardeo/auth-angular";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AsgardeoAuthModule.forRoot({
            signInRedirectURL: "https://localhost:4200",
            signOutRedirectURL: "https://localhost:4200",
            clientID: "<Client ID>",
            serverOrigin: "https://dev.api.asgardeo.io/t/<organization_name>"
        })
    ],
    providers: [
        // Add your providers here.
    ],
    bootstrap: [ AppComponent ]
}) 
export class AppModule { }
```
<br>

## Use API

Inject `AsgardeoAuthService` to your components to access the session state which contains information such as the email address of the authenticated user and the methods that are required for implementing authentication. 

Initially import the `AsgardeoAuthService` module from `@asgardeo/auth-angular` to your component.

``` no-line-numbers
import { AsgardeoAuthService } from "@asgardeo/auth-angular";
```

The `AsgardeoAuthService` should be injected inside the constructor as shown below: 

``` no-line-numbers
constructor(public auth: AsgardeoAuthService) { }
```
### Add login
The ```signIn()``` method from `AsgardeoAuthService` can be used to easily implement a login button in your application.

``` no-line-numbers
<button (click)="auth.signIn()">Login</button>
```

### Get access token

Once the user is logged in with Asgardeo, the application can get the access token issued by Asgardeo.

Refer [getAccessToken](https://github.com/asgardeo/asgardeo-auth-angular-sdk#getaccesstoken) for more information.
 
```
getAccessToken() {
    this.auth.getAccessToken().then((accessToken) => console.log(accessToken));
  }
```

**Sample** `accessToken`:
 
``` no-line-numbers
61985b0e-26c3-38b7-acff-b18ad934eafc 
```

### Get decoded ID token

Once the user is logged in with Asgardeo, the application can get the ID token issued by Asgardeo.

The SDK provides the capability to decode this token and provide the claims. 

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

``` no-line-numbers
{
  "isk": "a26bd07d5298e1a427334248c82ba82d01c5d5be55aa27bbabf060fc88a76b7c",
  "at_hash": "8vJsHIxjIqfws9Ia2r8zKw",
  "sub": "alica@bifrost.com",
  "country": "Sri Lanka",
  "amr": [
    "BasicAuthenticator"
  ],
  "iss": "https://api.asgardeo.io/t/bifrost/oauth2/token",
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

### Get user information

Apart from adding login and logout to your application, you can also get the user information from the Asgardeo SDK. 

There are two ways for you to get user information:
1. Get user information from [decoded ID token](#get-decoded-id-token).
2. Use `getBasicUserInfo()` API and get basic userinfo.
 
Refer [Github documentation](https://github.com/asgardeo/asgardeo-auth-angular-sdk#basicuserinfo) for more information. 

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

``` no-line-numbers
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

### Add logout
Now you have logged in to your application and obtained some user information. You need a way to log out of your application and remove the user session from Asgardeo as well.

Logout can easily be implemented by calling the ```signOut()``` method from `AsgardeoAuthService`.

``` no-line-numbers
<button (click)="auth.signOut()">Logout</button>
```


### Sample code 
The following code snippet demonstrates the usage of the ``state$`` observable together with other APIs exposed via ``AsgardeoAuthService``.
```
//app.component.ts

import { Component } from '@angular/core';
import { AsgardeoAuthService } from "@asgardeo/auth-angular";

@Component({
  selector: 'app-root',
  template: `
    <div>
      <ng-container *ngIf="(auth.state$ | async)?.isAuthenticated; else unauthenticatedView">
        <ul>
          <li>{{ (auth.state$ | async)?.username }}</li>
        </ul>

        <button button (click)="auth.signOut()">Logout</button>
      </ng-container>

      <ng-template #unauthenticatedView>
        <button (click)="auth.signIn()">Login</button>
      </ng-template>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public auth: AsgardeoAuthService) { }
}
```

## Add Routing
If your application needs routing, the SDK also provides a router guard called `AsgardeoAuthGuard` which is implemented with ```CanActivate``` interface from ```@angular/router```.