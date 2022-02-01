# Configure Just-in-Time (JIT) user provisioning

This guide explains the concept of Just-In-Time user provisioning, why and when to use it, and also the instuctions for configuring it.

## Introduction

Just-in-Time (JIT) user provisioning is a method used to store a user's identity and user claims in the Asgardeo user store when the user is aunthenticated through an <a :href="$withBase('/guides/authentication/#manage-connections')">external identity provider (IdP)</a>.

The flow of JIT user provisioning is as follows: 

1. When an application initiates an authentication request, the user gets redirected to Asgardeo. 
2. Once in Asgardeo, if the user decides to use an external identity provider for authentication, Asgardeo redirects the user to the selected external IdP. 
3. JIT provisioning is triggered when Asgardeo receives a positive authentication response from the external IdP with the user information.

When the above steps are successfully completed, Asgardeo creates a user account in its internal user store along with the user claims obtained from the authentication response.

## Enable JIT user provisioning

To enable JIT user provisioning for an external IdP:

1. On Asgardeo console, click **Develop > Connections** and select the IdP.
2. Go to the **Advanced** tab of the selected IdP.
3. Select the **Just-in-Time User Provisioning** checkbox.
    
    <img :src="$withBase('/assets/img/guides/jit-provisioning/jit-enabled.png')" alt="JIT User Provisioning Config Enabled">

4. Click **Update** to save.

## Disable JIT user provisioning

If you disable JIT provisioning for an IdP, be sure to validate its effect on your applications that have <a :href="$withBase('/guides/authentication/mfa/')">multi-factor authentication (MFA)</a> enabled. This is because certain MFA mechanisms (such as TOTP and EmailOTP) require a provisoned user account for proper functionality.

Typically, when the application login flow is defined with MFA, the first authentication step should be carried out using a local user account before prompting MFA for that user. This means that JIT provisioning is required for external IdPs that are first authenticators.

Alternatively, you can configure a login flow to skip the second authentication step when the specific IdP is used as the first authenticator. This can be achieved by a <a :href="$withBase('/guides/authentication/conditional-auth/write-your-first-script/')">conditional authentication script</a> with the <a :href="$withBase('/references/conditional-auth/api-reference/#execute-a-step')">step-execution method</a>.