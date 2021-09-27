# Add group-based authentication (access control)

To control access to your application based on the user's group, you can apply the **Group-Based** conditional authentication template under **Access Control**. Users are redirected to an error page if the user does not belong to any of groups configured in the template.

## Scenario

Consider a scenario with two user groups, `manager` and `employee`. Login should be allowed to users assigned to these groups.

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

5. Select the **Access Control > Group-Based** template.

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
            <td><code>groupsToAllowAccess</code></td>
            <td>An array of user groups that can access the application. For this example scenario, enter <code>manager</code> and <code>employee</code>.</td>
         </tr>
      </tbody>
   </table>

7. Click **Update** to confirm.

## How it works

Shown below is the script of the group-based conditional authentication template for access control.

```js
// This script will allow access for any user who belongs
// to one of the given groups.
// If the user is a member of the following groups, user will be given access.
var groupsToAllowAccess = ['manager','employee'];

// Error page to redirect unauthorized users,
// can be either an absolute url or relative url to server root, or empty/null
// null/empty value will redirect to the default error page
var errorPage = '';

// Additional query params to be added to the above url.
// Hint: Use i18n keys for error messages
var errorPageParameters = {
    'status': 'Unauthorized',
    'statusMsg': 'You are not authorized to login to this application.'
};

var onLoginRequest = function(context) {
    executeStep(1, {
        onSuccess: function (context) {
            // Extracting authenticated subject from the first step.
            var user = context.currentKnownSubject;
            // Checking if the user is assigned to one of the given groups.
            var isMember = isMemberOfAnyOfGroups(user, groupsToAllowAccess);
            if (!isMember) {
                sendError(errorPage, errorPageParameters);
            }
        }
    });
};
```

Let's look at how this script works.

1. When the first step of the authentication flow is complete, the **onLoginRequest** function retrieves the user from the context. 
2. The user and the configured list of groups are passed to the following function: `isMemberOfAnyOfGroups`. 
3. This function (which is available in Asgardeo by default) verifies whether the given user belongs to any of the listed groups. 
4. If the user belongs to any of the configured groups, the user will be able to log in successfully.

::: info
Find out more about the scripting language in the <a :href="$withBase('/references/conditional-auth/api-reference/')">Conditional Authentication API Reference</a>.
:::

## Try it out

Follow the steps given below.

1. Access the application URL.
2. Try to log in with a user who belongs to the specified groups. This user will successfully log in to the application.
3. Log out of the application.
4. Log in again with a user who does not belong to the specified groups. The user will see the following error.
    <img :src="$withBase('/assets/img/guides/conditional-auth/user-aged-based-conditional-auth-failure.png')" alt="user-aged-based-conditional-auth-failure-error-page">

