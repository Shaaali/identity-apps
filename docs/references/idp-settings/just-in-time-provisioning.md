# Just-in-Time User Provisioning

Just-in-Time (JIT) User Provisioning is a method to provision users to Asgardeo during federated authentication. A
service provider (SP) initiates the authentication request, and the user gets redirected to Asgardeo. Finally, Asgardeo
redirects the user to an external Identity Provider (IdP). JIT provisioning gets triggered when
Asgardeo receives a positive authentication response from the external identity provider. In such a scenario, Asgardeo
will provision the user to its internal user store along with the user claims obtained from the authentication response.

::: tip
You can configure JIT provisioning against an identity provider, but not against a service provider. Whenever you
associate a connection (IdP) with an application (SP) for outbound authentication, if JIT provisioning is enabled for a
particular IdP, the users from the external IdP will be provisioned into Asgardeo's internal user store.
:::

As an organization administrator, you can specify whether users federated from third-party identity providers are
locally provisioned or not. If provisioning is disabled Asgardeo will not store users' PII locally for users federated from an external
provider.

By default, Asgardeo keeps JIT User Provisioning **disabled** when creating an IdP.

### Enable JIT User Provisioning

To enable JIT User provisioning:

1. On Asgardeo Console, click `Develop` > `Connections` and select the IdP.
2. Move to the `Advanced` tab of the selected IdP.
3. Tick the `Just-in-Time User Provisioning` checkbox.
4. Click `Update` to save.

<img :src="$withBase('/assets/img/references/idp-settings/jit-enabled.png')" alt="JIT User Provisioning Config Enabled">

::: info
When you enable this configuration, user's login through federated IDP to a business application is performed in a
pass-through mode. The application end-user will bring both the external system's profile and credentials, and Asgardeo
will not create a local account for the user.
:::

### Disable JIT User Provisioning

To disable JIT User provisioning:

1. On Asgardeo Console, click `Develop` > `Connections` and select the IdP.
2. Move to the `Advanced` tab of the selected IdP.
3. Deselect the `Just-in-Time User Provisioning` checkbox.
4. Click `Update` to save.

<img :src="$withBase('/assets/img/references/idp-settings/jit-disabled.png')" alt="JIT User Provisioning Config Disabled">

::: info
When you disable this configuration, the user's authentication through federated IDP to a business
application is performed locally. Asgardeo will store the end user's external system's profile and PII on-premises by
creating a local account.
:::

#### Interconnections with Applications

When you are disabling JIT configuration, ensure there are no 2FA configured applications depending on
the target connection. In such a scenario, the following warning will be displayed.

<img :src="$withBase('/assets/img/references/idp-settings/jit-interconnections-conflict.png')" alt="JIT User Provisioning Interconnections Conflict">

This means that some applications that depend on the connection that you are trying to update has 2FA configured in their
authentication sequence. To avoid unusual login behaviours, you have to conditionally switch to **not to use 2FA** for this
IdP. Functionally, 2FA requires users' identifier to successfully authenticate.

You can learn how to conditionally skip authentication using our adaptive script <a :href="$withBase('/references/conditional-auth/api-reference/#execute-a-step')">Adaptive Script Docs</a>.
