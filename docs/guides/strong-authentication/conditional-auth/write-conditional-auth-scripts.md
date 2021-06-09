# Write conditional authentication scripts

By following this guide, you will be able to write your own conditional authentication script from scratch and understand its internals.

Let's take the following simplified set of requirements, your business may want you to implement:

- User tries to login to an application using **username and password** authentication.
  - If the user belongs to **Manager**, or **Admin** group, they can access application.
  - If user belongs to **Developer** group or does not belong to any group, they will be redirected to an error page.                                                           

We will start from the scratch and see how can we build our first conditional authentication script.
<img :src="$withBase('/assets/img/guides/conditional-auth/conditional-auth-flow-diagram-condition-flow.png')" alt="conditional-authentication-flow">

::: tip Before you begin
1. Your application should be registered in Asgardeo. Refer the <a href="../../../applications">Manage applications</a> section to register your application in Asgardeo if
   not done already.
2. Customize the login flow and enable `Username and Password authentication` authentication.
3. Create relevant <a href="../../../user-management/groups">groups</a> and assign users as necessary to try out the flow.
:::

## Let's get started

### 1. Start with the default script

To start off, <a href="../configure-conditional-auth">Configure conditional authentication</a> to your application and check the default script once you enable the two steps authentication.

```js
var onLoginRequest = function(context) {
    executeStep(1);
};
```
The above scripts does not have any conditional authentication. It allow all users to access the application after successful authentication.

### 2. Implement onSuccess callback

Now, we will implement what to do, if  **username and password based authentication** is success. You can use <a href="../conditional-auth-js-api-reference/#executestep-stepid-options-eventcallbacks">onSuccess</a> eventCallback.

```js
var onLoginRequest = function (context) {
    executeStep(1, {
        onSuccess: function (context) {
            // Implement what to do when Step 1 authentication is success.
        }
    });
};
```

### 3. Use the authenticated user object reference

If **username and password based authentication** is success, let's try to get the <a href="../conditional-auth-js-api-reference/#user-object">user</a> from the <a href="../conditional-auth-js-api-reference/#context-object">context</a>. You can use `context.currentKnownSubject` to get the authenticated user.

```js
var groups = ['admin', 'manager'];

var onLoginRequest = function (context) {
    executeStep(1, {
        onSuccess: function (context) {
            // Extracting authenticated user from the first step.
            var user = context.currentKnownSubject;
        }
    });
};
```

### 4. Use the inbuilt function check group membership

Now check whether user is a member of `admin` or `manager`. You can use the utility function <a href="../conditional-auth-js-api-reference/#ismemberofanyofgroups-user-groups">isMemberOfAnyOfGroups(user, groups)</a>. 

Refer the <a href="../conditional-auth-js-api-reference"> inbuilt functions </a> to get to know more existing functions.

```js
var groups = ['admin', 'manager'];

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

### 4. Redirect to an error page

If the user is not a member, then prompt for `TOTP` (Step 2) authentication. If user is a member of the allowed groups, prompt for `TOTP` authentication.

```js
var groups = ['admin', 'manager'];

var onLoginRequest = function (context) {
    executeStep(1, {
        onSuccess: function (context) {
            // Extracting authenticated user from the first step.
            var user = context.currentKnownSubject;
            // Checking if the user is assigned to one of the given groups.
            var isMember = isMemberOfAnyOfGroups(user, groups);
            if (isMember) {
               Log.info(user.username + ' is a member of the given groups: ' + groups.toString());
            } else{
                // Logic to redirect to an error page if user is not a member of the given groups.
                sendError('http://localhost:8080/error');
            }     
        }
    });
};
```

Now you have completed writing a conditional auth script for role-based access control scenario.

Similarly, you can build your own scripts to handle many scenarios using the <a href="../conditional-auth-js-api-reference" >JS-API references</a> and <a href="../conditional-auth-templates">pre-defined templates</a>.
