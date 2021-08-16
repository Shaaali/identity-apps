# Add group-based authentication

You can enable a more secure sign-in flow for users that belong to specific groups by applying the **group-based** conditional authentication template to your application. This template enables two-factor authentication with TOTP for users who belong to the user groups you specify.

## Scenario

For customers in the organization that belong to the `manager` or `employee` user groups, the authentication flow should be stepped up. That is, these customers are required to go through two steps during the sign-in flow as follows:

* **Step 1:** Basic (Password) authenticator
* **Step 2:** TOTP

## Prerequisites

-  You need an application registered in Asgardeo. If you don't already have one, <a :href ="$withBase('/guides/applications/web-app/oidc/register-app/')">register an application</a>.
- Create two user groups named `manager` and `employee` and assign customer accounts to each group.

## Configure the sign-in flow

Follow the steps given below.

1. On the Asgardeo console, click **Develop > Applications**.
2. Select the application for which the conditional sign-in flow should apply and go to **Sign-in Method**.
3. Click **Start with default configuration** to define the sign-in flow starting with `username and password`.
4. Turn on **Conditional Authentication** by switching the toggle.

   <img :src="$withBase('/assets/img/guides/conditional-auth/enable-conditional-auth.png')" alt="Enable conditional auth in Asgardeo">

5. Select the **User > Group-Based** template.
6. Update the following parameter in the script.

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
            <td>Comma separated list of user groups for which two-factor authentication should apply.</td>
         </tr>
      </tbody>
   </table>

## How it works

Shown below is the script of the group-based conditional authentication template.

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

Let's look at how this script works.

1. When step 1 of the authentication flow is complete, the **onLoginRequest** function retrieves the logged-in user from the context. 
2. The logged-in user and the configured list of groups are passed to the following conditional
authentication JavaScript function - `isMemberOfAnyOfGroups`. 
3. This function (which is available in Asgardeo by default) verifies whether the given user belongs to any of the listed groups. 
4. If the logged-in user belongs to any of the configured groups, authentication step 2 (TOTP) is prompted.

## Try it out

Follow the steps given below.

1. Access the application URL.
2. Try to sign in with a user who does not belong to any of the configured groups (manager or employee). You will 
   successfully signed in to the application.
3. Log out of the application.
4. Sign in with a user who belongs to the manager or employee group or both. TOTP authentication is prompted.
    <img :src="$withBase('/assets/img/guides/conditional-auth/totp-2fa.png')" alt="group-based-2fa-conditional-auth-totp-page">
