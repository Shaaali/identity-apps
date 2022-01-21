# Configure Just-in-Time user provisioning

If you are an administrator of an organization, Just-in-Time (JIT) user provisioning can be configured for any external
IdP. Enabling JIT provisioning allows Asgardeo to store federated user's identity and user claims, in the Asgardeo user
store.

## Introduction

Just-in-Time (JIT) user provisioning is a method used to store the user's identity and user claims in the Asgardeo user store, if the user is aunthenticated through an external Identity provider (IdP). 

The flow of JIT user provisioning is as follows: 

1. When an application initiates an authentication request, the user gets redirected to Asgardeo. 
2. Once in Asgardeo, if the user decides to use an external identity provider for authentication,
Asgardeo redirects the user to the selected external IdP. 
3. JIT provisioning gets triggered when Asgardeo receives a positive authentication response from the external IdP. 

In such a scenario, Asgardeo will create a user account to its internal user store along with the user claims obtained from the authentication response.

## Enable JIT user provisioning

To enable JIT user provisioning:

1. On Asgardeo Console, click **Develop > Connections** and select the IdP.
2. Go to the **Advanced** tab of the selected IdP.
3. Select the **Just-in-Time User Provisioning** checkbox.
<img :src="$withBase('/assets/img/guides/jit-provisioning/jit-enabled.png')" alt="JIT User Provisioning Config Enabled">

4. Click **Update** to save.

::: info
When you disable this configuration, the user's profile and user claims received from the external IdP are stored in Asgardeo by creating a local account.
:::

## Disable JIT user provisioning

To disable JIT user provisioning, unselect the **Just-in-Time User Provisioning** checkbox.

<img :src="$withBase('/assets/img/guides/jit-provisioning/jit-disabled.png')" alt="JIT User Provisioning Config Disabled">

::: info
When you enable this configuration, Asgardeo will not create a local account for the users federated through an external IdP.
:::

When disabling JIT configuration, ensure there are no MFA configured applications depending on
the selected IdP. If the IdP has such applications, the following warning will be displayed.

<img :src="$withBase('/assets/img/references/idp-settings/jit-interconnections-conflict.png')" alt="JIT User Provisioning Interconnections Conflict">

This warning shows that there are applications using MFA to authenticate users, and certain MFA mechanisms require a provisoned user account for proper functionality.

You can learn more on how to conditionally skip authentication using our <a :href="$withBase('/references/conditional-auth/api-reference/#execute-a-step')">Conditional Authentication </a>docs.
