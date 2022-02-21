# MFA based sign-in flow with JIT user provisioning

When you disable the JIT configuration and integrate it into an application authentication sequence,
you must ensure configured multi-factor options are skipped during the authentication flow or enable
JIT configuration for an affected connection. Else the authentication flow will break.

## How do you know if it is going to break?

In scenarios which the authentication flow is going to break, the following warning will be displayed.
This displays the connections (identity providers) that have JIT disabled.

<img :src="$withBase('/assets/img/references/idp-settings/jit-mfa-conflict.png')" alt="MFA based Sign-in flow with JIT user provisioning">

At this point, you may have to take a decision on whether you want to **enable JIT** for the
listed connections or **conditionally skip MFA** for these providers.

## How to conditionally skip External Authenticators?

You can skip configured MFA for external connections during the authentication flow by using the
following authentication script. For more information on this script, you can refer to the
<a :href="$withBase('/guides/authentication/conditional-auth/sign-in-option-based-template/#how-it-works')">sign-in option based conditional authentication script</a>.

```js
var localAuthenticator = 'LOCAL';
var onLoginRequest = function (context) {
    executeStep(1, {
        onSuccess: function (context) {
            var step = context.steps[1];
            if (step.idp == localAuthenticator) {
                executeStep(2); // MFA Step
            }
        }
    });
};
```

## How to enable the JIT configuration?

You can enable the JIT configuration for a connection by following these steps.

- On the Asgardeo console, click Develop > Connections and select the IdP.
- Go to the Advanced tab of the selected IdP.
- Fill the Just-in-Time User Provisioning checkbox.
  <img :src="$withBase('/assets/img/references/idp-settings/jit-disabled.png')" alt="JIT User Provisioning Config Disabled">
- Click Update to save.