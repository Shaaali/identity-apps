# Group based conditional authentication

The group based conditional authentication script prompts two factor authentication to the users who belong to any of
the given sets of groups.

## Scenario

If the user is a member of one of the configured groups (i.e.,manager or employee) authentication will be stepped up. He
will have to go through two steps during the login flow. Basic authentication as the step 1 and TOTP authentication as
the step 2.

## Before you begin

1. Your application should be registered in Asgardeo.

   Refer the [Manage applications](../../../applications/README.md) section to register your application in Asgardeo if not
   done already.

2. Configure conditional authentication and deploy the **Group-Based 2FA Template** for the application.

   Refer the [Configure conditional authentication for an application](../configure-conditional-auth.md) guide on
   configuring conditional authentication with the template.

3. Customize the login flow and enable TOTP as the step 2.

4. Create the groups and assign users as necessary to try out the flow.

## Configured authentication steps

* **Step 1:** Basic (Password) authenticator
* **Step 2:** TOTP

## Script

```js
var groupsToStepUp = ['manager', 'employee'];

var onLoginRequest = function (context) {
    executeStep(1, {
        onSuccess: function (context) {
            // Extracting authenticated subject from the first step.
            var user = context.currentKnownSubject;
            // Checking if the user is assigned to one of the given groups.
            var isMember = isMemberOfAnyOfGroups(user, groupsToStepUp);
            if (isMember) {
                Log.info(user.username + ' is a member of one of the groups: ' + groupsToStepUp.toString());
                executeStep(2);
            }
        }
    });
};

```

## Configurable parameters

<table>
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>groupsToStepUp</td>
         <td>An array of groups for which users need to enforce 2FA</td>
      </tr>
   </tbody>
</table>

## Script walkthrough

Upon the successful execution of the step 1 of the authentication flow, **onLoginRequest** function retrieves the logged
in user from the context. The logged-in user and the configured list of groups are passed to the conditional
authentication JavaScript function, `isMemberOfAnyOfGroups`. This function is available in Asgardeo by default and
verifies whether the given user belongs to any of the given list of groups.

If the logged-in user belongs to any of the configured groups, then he is prompted for the authentication step 2, TOTP
authentication.

## Try it out

1. Access the application URL.

2. Try to login with a user who does not belong to any of the configured groups(manager or employee). User will be
   successfully logged in to the application.

3. Logout and login with a user who belongs to manager or employee group or both. Then the user is prompted with the
   TOTP authentication

   <img :src="$withBase('/assets/img/guides/conditional-auth/totp-2fa.png')" alt="group-based-2fa-conditional-auth-totp-page">
