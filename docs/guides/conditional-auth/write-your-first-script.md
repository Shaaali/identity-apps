# Write your first authentication script

By following this guide, you will be able to write your own conditional authentication script from scratch and understand its internals.

Let's take the following simplified set of requirements, your business may want you to implement:

- User tries to login to an application using **username and password** authentication.
  - If the user belongs to **manager**, or **employee** group, they can access application.
  - Other users should not be allowed to access the application.                                                           

We will start from the scratch and see how can we build our first conditional authentication script.
 <img :src="$withBase('/assets/img/guides/conditional-auth/conditional-auth-flow-diagram-condition-flow.png')" alt="Authentication flow with Group based Access control" border=0 style="border:0; text-decoration:none; outline:none">

## Prerequisites
1. You should have registered an application. If you don't have an app registered, <a href ="/guides/applications/">register an application</a> in Asgardeo.
2. Customize the login flow and enable `Username and Password authentication` authentication.
3. Create relevant <a href="/guides/user-management/groups/">groups</a> and assign users as necessary to try out the flow.

## Let's get started

### 1. Start with the default script

To start off, <a href="/guides/conditional-auth/configure-conditional-auth/">Configure conditional authentication</a> to your application and check the default script once you enable the two steps authentication.

```js
var onLoginRequest = function(context) {
    executeStep(1);
};
```
The above scripts does not have any conditional authentication. It allow all users to access the application after successful authentication.

### 2. Implement onSuccess callback

Now, we will implement what to do, if  **username and password based authentication** is success. You can use <a href="../api-reference/#executestep">onSuccess</a> eventCallback.

```js
var onLoginRequest = function (context) {
    executeStep(1, {
        onSuccess: function (context) {
            // Implement what to do when Step 1 authentication is success.
        }
    });
};
```

### 3. Get user object

If **username and password based authentication** is success, let's try to get the <a href="../api-reference/#user">user</a> from the <a href="../api-reference/#context">context</a>. You can use `context.currentKnownSubject` to get the authenticated user.

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

### 4. Check membership of user

Now check whether user is a member of `admin` or `manager`. You can use the utility function <a href="../api-reference/#check-group-membership">isMemberOfAnyOfGroups(user, groups)</a>. 

Refer the <a href="../api-reference/#utility-functions"> inbuilt functions </a> to get to know more existing functions.

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

### 5. Fail authentication

If the user is not a member, then fail the authentication and redirect the user to his application with some error code.

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

Now you have completed writing a conditional auth script for group-based access control scenario.

Similarly, you can build your own scripts to handle many scenarios using:
 - <a href="/guides/conditional-auth/api-reference">API references</a>
 - <a href="/guides/conditional-auth/predefined-templates">Pre-defined templates</a>.
