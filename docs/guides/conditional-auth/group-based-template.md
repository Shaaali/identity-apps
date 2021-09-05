# Add group-based authentication

You can enable a more secure login flow for users that belong to specific groups by applying the **Group-Based** conditional authentication template to your application. This template enables two-factor authentication with TOTP for users who belong to the user groups you specify.

## Scenario

Consider a scenario with two user groups, `manager` and `employee`. For users assigned to these groups, the login flow in applications should be stepped up with TOTP as follows:

1. Username and password
2. TOTP

## Prerequisites

-  You need an application registered in Asgardeo. If you don't already have one, register one of the following application types:
   -   <a :href="$withBase('/guides/applications/spa/register-single-page-app/')">Single-page app</a>
   -   <a :href="$withBase('/guides/applications/web-app/register-oidc-web-app/')">Web app with OIDC</a>
   -   <a :href="$withBase('/guides/applications/web-app/register-saml-web-app/')">Web app with SAML</a>

-  Create two user groups named `manager` and `employee` and assign customer accounts to them. For instructions, see the following:
   -  <a :href="$withBase('/guides/users/manage-groups/')">Managing groups</a>
   -  <a :href="$withBase('/guides/users/manage-groups/')">Managing customers</a>

## Configure the login flow

<CommonGuide guide='guides/fragments/manage-app/conditional-auth/configure-conditional-auth.md'/>

5. Select the **User > Group-Based** template.
6. Verify that the login flow is now updated with the following two authentication steps:

    -   Step 1: Username and Password
    -   Step 2: TOTP

7. Update the following parameter in the script.

   <table>
      <thead>
         <tr>
            <th>Parameter</th>
            <th>Description</th>
         </tr>
      </thead>
      <tbody>
         <tr>
            <td><code>groupsToStepUp</code></td>
            <td><p>Comma separated list of user groups. Two-factor authentication should apply to users from these groups.</p> For this example scenario, enter <code>manager</code> and <code>employee</code>.</td>
         </tr>
      </tbody>
   </table>

8. Click **Update** to confirm.

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

1. When step 1 of the authentication flow is complete, the **onLoginRequest** function retrieves the user from the context. 
2. The user and the configured list of groups are passed to the following function: `isMemberOfAnyOfGroups`. 
3. This function (which is available in Asgardeo by default) verifies whether the given user belongs to any of the listed groups. 
4. If the user belongs to any of the configured groups, authentication step 2 (TOTP) is prompted.

::: info
Find out more about the scripting language in the <a :href="$withBase('/references/conditional-auth/api-reference/')">Conditional Authentication API Reference</a>.
:::

## Try it out

Follow the steps given below.

1. Access the application URL.
2. Try to log in with a user who does not belong to any of the configured groups (manager or employee). You will 
   successfully signed in to the application.
3. Log out of the application.
4. Log in with a user who belongs to the `manager` or `employee` group or both. TOTP authentication is prompted.
    <img :src="$withBase('/assets/img/guides/conditional-auth/totp-2fa.png')" alt="group-based-2fa-conditional-auth-totp-page">
