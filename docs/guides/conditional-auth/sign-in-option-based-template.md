# Add sign-in-option-based authentication

You can enable a more secure sign-in flow when users that sign in from a specific authentication method by applying the **Sign-In-Option-Based** conditional authentication template to your application.

## Scenario

Consider a scenario where your application has multiple authentication methods configured as the first authentication step. You need to secure the sign-in flow for users signing in through a selected method of authentication (ex: basic authentication). If the user sign-in with the specified authentication method, the second authentication step is prompted. Users signing in from an authentication method which is not specified in the script can simply sign in using only the first step.

## Prerequisites

You need an application registered in Asgardeo. If you don't already have one, <a :href ="$withBase('/guides/applications/web-app/register-oidc-web-app/')">register an application</a>.

## Configure the sign-in flow

Follow the steps given below.

1. On the Asgardeo console, click **Develop > Applications**.
2. Select the application for which the conditional sign-in flow should apply and go to **Sign-in Method**.
3. Click **Start with default configuration** to define the sign-in flow starting with `username and password`.
4. Turn on **Conditional Authentication** by switching the toggle.

   <img :src="$withBase('/assets/img/guides/conditional-auth/enable-conditional-auth.png')" alt="Enable conditional auth in Asgardeo">

5. Select the **Adaptive MFA > Sign-In-Option-Based** template.
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
                <td><code>signInOptionToStepUp</code></td>
                <td>Parameter to define the sign-in option to which the second authentication step should apply. It can be configured as follows:
                    <ul>
                    <li>For basic authentication using username and password use <code>LOCAL</code> as the parameter value.</li>
                    <li>For federated IdPs use the name of the IdP as the parameter value (Ex: <code>Facebook</code>, <code>Google</code>, <code>Github</code>).</li>
                    </ul>    
                </td>
            </tr>
        </tbody>
    </table>

## How it works

Shown below is the script of the device-based conditional authentication template.

```js
// This script will step up authentication and prompt TOTP in case when
// user sign-in with configured sign-in option.
// Set the required sign-in option that requires step up authentication.
var signInOptionToStepUp = 'LOCAL';
var onLoginRequest = function(context) {
    executeStep(1, {
        onSuccess: function (context) {
            var step = context.steps[1];
            if (step.idp == signInOptionToStepUp) {
                executeStep(2);
            }
        }
    });
};
```

Let's look at how this script works.

1. When step 1 of the authentication flow is complete, the **onLoginRequest** function retrieves the 1st authentication method from the context.
2. The function verifies whether the given authentication method belongs to the method mentioned in ```signInOptionToStepUp```.
3. If the first authentication method is the authentication method in ```signInOptionToStepUp```, authentication step 2 (TOTP) is prompted.

## Try it out

Follow the steps given below.

1. Access the application URL.
2. Try to sign in with to the application with an authenticator which is not specified in the script. You will successfully sign in to the application.
3. Log out of the application.
4. Sign in with with the authenticator specified in the script. TOTP authentication is prompted.
   <img :src="$withBase('/assets/img/guides/conditional-auth/totp-2fa.png')" alt="ip-based-2fa-conditional-auth-totp-page">
