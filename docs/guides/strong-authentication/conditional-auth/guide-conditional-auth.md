# Guide to write conditional authentication scripts

This conditional authentication scripts helps you by writing down the authentication flow you want to achieve in simple English.

Let's take the following simplified set of requirements, your business may want you to implement,

- My application has two authentication steps at maximum
    - Username and Password as the first step
    - Google TOTP as the second step
- If user belongs to **Manager**, or **Admin** group, then it is sufficient to show the first step only.
- If user belongs to **Developer** group, then the second step needs to be presented.

## Before you begin

1. Your application should be registered in Asgardeo.

   Refer the [Manage applications](../../applications/README.md) section to register your application in Asgardeo if
   not done already.

2. Customize the login flow and enable TOTP as the step 2.

3. Create the [groups](../../users/create-group.md) and assign users as necessary to try out the flow.

## Configured authentication steps

* **Step 1:** Basic (Password) authenticator
* **Step 2:** TOTP

## Configured groups
* Admin
* Manager
* Developer

## Follow the guide to setup your conditional authentication script.

**Step1:**

Once you configured two steps authentication, you can see the conditional script as below.

```js
    
var onLoginRequest = function(context) {
    executeStep(1);
    executeStep(2);
};

```

**Step2:**

Now, we will implement what to do, if  **username and password based authentication** (step1) is success.

```js
var onLoginRequest = function (context) {
    executeStep(1, {
        onSuccess: function (context) {
            // Implement what to do when step1 authentication is success.
        }
    });
};
```

**Step3:**

Now, We will implement what to do, if  **username and password based authentication** (step1) is failed.

```js
var onLoginRequest = function (context) {
    executeStep(1, {
        onSuccess: function (context) {
           // Implement what to do when step1 authentication is successful.
        },
        onFail: function(context){
            // Implement what to do when step1 authentication is failed.
        }
    });
};
```

**Step4:**

If **username and password based authentication** (step1) is success, let's try to get the **user** from the **context**. We can use `context.currentKnownSubject` to get the authenticated user.

```js
var groupsToStepUp = ['admin', 'manager'];

var onLoginRequest = function (context) {
    executeStep(1, {
        onSuccess: function (context) {
            // Extracting authenticated user from the first step.
            var user = context.currentKnownSubject;
        },
        onFail: function(context){
         // Implement what to do when step1 authentication is failed.
        }
    });
};
```

**Step5:**

Now check whether user is a member of any of the group `admin` or `manager`. We have this inbuilt JS function `isMemberOfAnyOfGroups(user, list_of_group)` to check whether the use is a member of any of the groups in the list.

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
**Step6:**

If the user is not a member, then prompt for **Step-2** (TOTP) authentication. If user is a member of the allowed groups, add some logs.

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
               
        }
    });
};
```

Now you have setup authentication script for successful journey. If a user belongs to group `admin` or `manager`, he can login only with `Username and Password` authentication. Other users who don't belong to any group, and the users who belong to `developer` group will be prompted with `TOTP` as well.

**Step7:**

If the `Username and Password` authentication is not successful, let's redirect the user to some error page(`http://localhost.com:8080/error`). 

All users who try to authenticate to this app will be redirected to the above error page, if the authentication got failed.

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
               sendError('http://localhost.com:8080/error');
        }
    });
};
```

Similarly you can build your script to handle all the scenarios using the JS-API references and scenarios.
