# Write a custom authentication script

Follow this guide to write a conditional authentication script from scratch and to understand its internals.

## Scenario

Let's consider the following simplified set of requirements for your business application:

- User tries to log in to an application with **username and password** authentication.
- If the user belongs to the **manager** or **employee** group, they can access the application. Other users should not be allowed to access the application.                                                           

<img class="borderless-img" :src="$withBase('/assets/img/guides/conditional-auth/conditional-auth-flow-diagram-condition-flow.png')" alt="Authentication flow with Group based Access control">

## Prerequisites

-  You need an application registered in Asgardeo. If you don't already have one, register one of the following application types:
   -   <a :href="$withBase('/guides/applications/spa/register-single-page-app/')">Single-page app</a>
   -   <a :href="$withBase('/guides/applications/web-app/register-oidc-web-app/')">Web app with OIDC</a>
   -   <a :href="$withBase('/guides/applications/web-app/register-saml-web-app/')">Web app with SAML</a>

-  Customize the login flow in your application and enable `Username and Password` authentication.

-  Create two user groups named `manager` and `employee` and assign customer accounts to them. For instructions, see the following:
   -  <a :href="$withBase('/guides/users/manage-groups/')">Managing groups</a>
   -  <a :href="$withBase('/guides/users/manage-groups/')">Managing customers</a>

## Start with the default script

To start off, <a :href="$withBase('/references/conditional-auth/api-reference/')">configure conditional authentication</a> for your application and check the default script once you enable the two steps authentication.

```js
var onLoginRequest = function(context) {
    executeStep(1);
};
```
The above scripts do not have any conditional authentication. It allows all users to access the application after successful authentication through `username and password`.

## Implement onSuccess callback

Now, let's implement what happens when **username and password** authentication is successful. You can use the <a :href="$withBase('/references/conditional-auth/api-reference/')">onSuccess</a> eventCallback.

```js
var onLoginRequest = function (context) {
    executeStep(1, {
        onSuccess: function (context) {
            // Implement what to do when Step 1 authentication is success.
        }
    });
};
```

## Get user object

If **username and password** authentication is successful, let's get the <a :href="$withBase('/references/conditional-auth/api-reference/#user')">user</a> from the <a :href="$withBase('/references/conditional-auth/api-reference/#context')">context</a>. You can use `context.currentKnownSubject`.

```js
var groups = ['employee', 'manager'];

var onLoginRequest = function (context) {
    executeStep(1, {
        onSuccess: function (context) {
            // Extracting authenticated user from the first step.
            var user = context.currentKnownSubject;
        }
    });
};
```

## Check membership of the user

Now, let's check whether the user is a member of `manager` or `employee`. You can use the <a :href="$withBase('/references/conditional-auth/api-reference/#check-group-membership')">isMemberOfAnyOfGroups(user, groups) utility function</a>. 

Refer the <a :href="$withBase('/references/conditional-auth/api-reference/#utility-functions')">inbuilt functions</a> to get to know more existing functions.

```js
var groups = ['employee', 'manager'];

var onLoginRequest = function (context) {
    executeStep(1, {
        onSuccess: function (context) {
            // Extracting authenticated user from the first step.
            var user = context.currentKnownSubject;
            // Checking if the user is assigned to one of the given groups.
            var isMember = isMemberOfAnyOfGroups(user, groups);           
        }
    });
};
```

## Fail authentication

If the user is not a member, fail the authentication and redirect the user to the application with some error code.

```js
var groups = ['employee', 'manager'];
var errorCode = 'access_denied';
var errorMessage = 'You do not have access to login to this app';

var onLoginRequest = function (context) {
    executeStep(1, {
        onSuccess: function (context) {
            // Extracting authenticated user from the first step.
            var user = context.currentKnownSubject;
            // Checking if the user is assigned to one of the given groups.
            var isMember = isMemberOfAnyOfGroups(user, groups);
            if (!isMember) {
               fail({'errorCode': errorCode, 'errorMessage': errorMessage});
            }  
        }
    });
};
```

You have now written a conditional authentication script for the group-based access control scenario.

Similarly, you can build your own scripts to handle many scenarios using the <a :href="$withBase('/references/conditional-auth/api-reference/')">API references</a>.