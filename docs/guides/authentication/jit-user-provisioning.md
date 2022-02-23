# Configure Just-in-Time (JIT) user provisioning

This guide explains the concept of Just-In-Time user provisioning, why and when to use it, and also the instructions for configuring it.

## How JIT provisioning works

Just-in-Time (JIT) user provisioning is a method used to store a user's identity and user claims in the Asgardeo user store when the user is authenticated through an <a :href="$withBase('/guides/authentication/#manage-connections')">external identity provider (IdP)</a>.

The flow of JIT user provisioning is as follows: 

1. When an application initiates an authentication request, the user gets redirected to Asgardeo. 
2. If the user has used an external identity provider for authentication, Asgardeo redirects the user to the selected external IdP. 
3. Asgardeo receives a positive authentication response from the external IdP with the user information.
4. JIT provisioning is triggered and Asgardeo creates a user account in its internal user store along with the user claims obtained from the authentication response.

With this process, new user accounts are automatically provisioned to Asgardeo through external IdPs.

## Prerequisites

First, the external IdP should be registered in Asgardeo as a connection. 

::: info
Learn more about how to enable login to your application using the following external IdPs: 
- <a :href="$withBase('/guides/authentication/social-login/add-facebook-login/')">Facebook</a>
- <a :href="$withBase('/guides/authentication/social-login/add-google-login/')">Google</a>
- <a :href="$withBase('/guides/authentication/social-login/add-github-login/')">Github</a>
- <a :href="$withBase('/guides/authentication/enterprise-login/add-oidc-idp-login/')">OpenID Connect IdPs</a>
- <a :href="$withBase('/guides/authentication/enterprise-login/add-saml-idp-login/')">SAML IdPs</a>
:::

## Disable JIT user provisioning

::: warning
Disabling JIT user provisioning might break the application login flow if you have MFA configured. Learn more about [troubleshooting sign-in flow errors with JIT](#troubleshoot-sign-in-flow-errors).
:::

To disable JIT user provisioning for an external IdP:

1. On the Asgardeo console, click **Develop > Connections** and select the IdP.
2. Go to the **Advanced** tab of the selected IdP.
3. Clear the **Just-in-Time User Provisioning** checkbox.
    
    <img :src="$withBase('/assets/img/guides/jit-provisioning/jit-enabled.png')" alt="JIT User Provisioning Config Enabled">

4. Click **Update** to save.

## Enable JIT user provisioning

::: info
JIT user provisioning is enabled by default. If you have disabled JIT user provisioning, use these instructions to enable it.
:::

To enable JIT user provisioning for an external IdP:

1. On the Asgardeo console, click **Develop > Connections** and select the IdP.
2. Go to the **Advanced** tab of the selected IdP.
3. Check the **Just-in-Time User Provisioning** checkbox.
    
    <img :src="$withBase('/assets/img/guides/jit-provisioning/jit-disabled.png')" alt="JIT User Provisioning Config Disabled">

4. Click **Update** to save.

## Troubleshoot sign-in flow errors

If you have disabled JIT provisioning for an IdP, you need to validate its effect on your applications that use <a :href="$withBase('/guides/authentication/mfa/')">multi-factor authentication</a>. This is because certain MFA mechanisms (such as TOTP and EmailOTP) require the login users to have local accounts in Asgardeo. Therefore, the application’s sign-in flow involving JIT-disabled IdPs and the MFA options will break by default. 

In such scenarios, you will see the following warning in the application’s sign-in flow:

<img :src="$withBase('/assets/img/guides/jit-provisioning/jit-mfa-conflict.png')" alt="MFA based Sign-in flow with JIT user provisioning">

To avoid such errors, you can use one of the following options:
- Conditionally skip MFA
    
    You can skip MFA for external connections during the login flow by using the
    following authentication example script:
    
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
    ::: info
    For more information on this script, you can refer to the <a :href="$withBase('/guides/authentication/conditional-auth/sign-in-option-based-template/#how-it-works')">sign-in option based conditional authentication script</a>.
    :::
- [Enable JIT provisioning](#enable-jit-user-provisioning)


