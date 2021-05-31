# Write conditional authentication scripts

By following this guide, you will be able to write your own conditional authentication script from scratch and understand its internals.

Let's take the following simplified set of requirements, your business may want you to implement. 

- An application has two authentication steps.
    - **Username and Password** as the first step.
    - Google **TOTP** as the second step.

Now you have configured 2 steps authentication. It would be as 
<img :src="$withBase('/assets/img/guides/conditional-auth/conditional-auth-flow-diagram-liner-flow.png')" alt="conditional-auth-flow-diagram-liner-flow">
 
We will start from the scratch and see how can we build our conditional auth script. We want to achieve the below conditional login flow.

- If the user belongs to **Manager**, or **Admin** group, they will be prompted with `TOTP` authentication in addition to `Username and Password` authentication.  

- If user belongs to **Developer** group or does not belong to any group, then login with `Username and Password` is sufficient.                                                           

<img :src="$withBase('/assets/img/guides/conditional-auth/conditional-auth-flow-diagram-condition-flow.png')" alt="conditional-authentication-flow">

## Before you begin

1. Your application should be registered in Asgardeo. Refer the [Manage applications](../../applications/README.md) section to register your application in Asgardeo if
   not done already.

2. Customize the login flow and enable `Username and Password authentication` as `Step 1` and the `TOTP` as the `Step 2`.

3. Create the groups and assign users as necessary to try out the flow.

**Configured authentication steps**

* **Step 1:** Username and Password authenticator
* **Step 2:** TOTP

**Configured groups**
* Admin
* Manager
* Developer


## Start writing your conditional auth script

### 1. Start with the default script

To start off, let's [configure the conditional authentication](configure-conditional-auth.md) to your application and check the default script once you enable the two steps authentication.

```js
var onLoginRequest = function(context) {
    executeStep(1);
    executeStep(2);
};

```
The above scripts does not have any conditional authentication. It will execute `Step 1` and then `Step 2`.

### 2. Implement onSuccess callback

Now, we will implement what to do, if  **username and password based authentication** (Step 1) is success. You can use [onSuccess](conditional-auth-js-api-reference/#executestep-stepid-options-eventcallbacks) eventCallback.

```js
var onLoginRequest = function (context) {
    executeStep(1, {
        onSuccess: function (context) {
            // Implement what to do when Step 1 authentication is success.
        }
    });
};
```


### 3. Implement onFail callback

Now, We will implement what to do, if  **username and password based authentication** (Step 1) is failed.

```js
var onLoginRequest = function (context) {
    executeStep(1, {
        onSuccess: function (context) {
           // Implement what to do when Step 1 authentication is successful.
        },
        onFail: function(context){
            // Implement what to do when Step 1 authentication is failed.
        }
    });
};
```

### 4. Use the authenticated user object reference

If **username and password based authentication** (Step 1) is success, let's try to get the [user](conditional-auth-js-api-reference/#user-object) from the [context](conditional-auth-js-api-reference/#context-object). We can use `context.currentKnownSubject` to get the authenticated user.

```js
var groupsToStepUp = ['admin', 'manager'];

var onLoginRequest = function (context) {
    executeStep(1, {
        onSuccess: function (context) {
            // Extracting authenticated user from the first step.
            var user = context.currentKnownSubject;
        },
        onFail: function(context){
         // Implement what to do when Step 1 authentication is failed.
        }
    });
};
```

### 5. Use an inbuilt function check group membership

Now check whether user is a member of any of the group `admin` or `manager`. We have this utility function [isMemberOfAnyOfGroups(user, groups)](conditional-auth-js-api-reference/#ismemberofanyofgroups-user-groups) to check whether the use is a member of any of the groups in the list. 

Refer the [inbuilt functions](conditional-auth-js-api-reference.md) to get to know more existing functions.

```js
var groupsToStepUp = ['admin', 'manager'];

var onLoginRequest = function (context) {
    executeStep(1, {
        onSuccess: function (context) {
            // Extracting authenticated user from the first step.
            var user = context.currentKnownSubject;
            // Checking if the user is assigned to one of the given groups.
            var isMember = isMemberOfAnyOfGroups(user, groupsToStepUp);
            
        },
        onFail: function(context){
               
        }
    });
};
```
### 6. Prompt for TOTP authentication

If the user is not a member, then prompt for `TOTP` (Step 2) authentication. If user is a member of the allowed groups, prompt for `TOTP` authentication.

```js
var groupsToStepUp = ['admin', 'manager'];

var onLoginRequest = function (context) {
    executeStep(1, {
        onSuccess: function (context) {
            // Extracting authenticated user from the first step.
            var user = context.currentKnownSubject;
            // Checking if the user is assigned to one of the given groups.
            var isMember = isMemberOfAnyOfGroups(user, groupsToStepUp);
            if (isMember) {
                executeStep(2)
            } else{
                Log.info(user.username + ' is not a member of any of the groups: ' + groupsToStepUp.toString());
            }     
        },
        onFail: function(context){
               
        }
    });
};
```

Now you have setup authentication script for the happy path. If a user belongs to group `admin` or `manager`, he needs to login with both `Username and Password` and `TOTP` authentication. Other users who don't belong to any group, and the users who belong to `developer` group will be prompted only with `username and password` authentication.

### 7. Redirect to error page on login failure

If the `Username and Password` authentication is not successful, let's redirect the user to some error page(`http://localhost:8080/error`). 

All users who try to authenticate to this app will be redirected to the above error page, if the `username and password` authentication got failed.

```js
var groupsToStepUp = ['admin', 'manager'];

var onLoginRequest = function (context) {
    executeStep(1, {
        onSuccess: function (context) {
            // Extracting authenticated user from the first step.
            var user = context.currentKnownSubject;
            // Checking if the user is assigned to one of the given groups.
            var isMember = isMemberOfAnyOfGroups(user, groupsToStepUp);
            if (isMember) {
                Log.info(user.username + ' is a member of one of the groups: ' + groupsToStepUp.toString());
            } else{
                executeStep(2)
            } 
        },
        onFail: function(context){
                // Logic to redirect to an error page if step 1 failed
               sendError('http://localhost:8080/error');
        }
    });
};
```

Now you have completed writing a conditional auth script from scratch. 

Similarly, you can build your own scripts to handle many scenarios using the [JS-API references](conditional-auth-js-api-reference.md) and [pre-defined templates](conditional-auth-templates.md).

