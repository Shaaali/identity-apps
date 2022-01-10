# Just-in-Time User Provisioning

Just-in-Time (JIT) User Provisioning is a method to provision users to Asgardeo during federated authentication. When a
service provider (SP) initiates the authentication request, and the user gets redirected to Asgardeo. Finally, Asgardeo
redirects the user to an external Identity Provider (IdP). JIT provisioning gets triggered when
Asgardeo receives a positive authentication response from the external identity provider. In such a scenario, Asgardeo
will provision the user to its internal user store along with the user claims obtained from the authentication response.

::: tip
You can configure JIT provisioning against an identity provider, but not against a service provider. If you
associate a JIT enabled connection (IdP) with an application (SP) for outbound authentication, 
the users from the IdP will be provisioned into Asgardeo's internal user store.
:::

As an administrator of an organization, you can choose to provision users federated from third-party identity providers in Asgardeo.
If provisioning is disabled, Asgardeo will not store user claims of federated users.

By default, Asgardeo keeps JIT User Provisioning **disabled** when creating an IdP.

### Enable JIT User Provisioning

To enable JIT User provisioning:

1. On Asgardeo Console, click `Develop` > `Connections` and select the IdP.
2. Move to the `Advanced` tab of the selected IdP.
3. Select the `Just-in-Time User Provisioning` checkbox.
4. Click `Update` to save.

<img :src="$withBase('/assets/img/references/idp-settings/jit-enabled.png')" alt="JIT User Provisioning Config Enabled">

::: info
When you enable this configuration, federated users logging in to a business application will pass-through their profiles and credentials from an external IdP. 
Asgardeo will not create a local account for these users.
:::

### Disable JIT User Provisioning

To disable JIT User provisioning:

1. On Asgardeo Console, click `Develop` > `Connections` and select the IdP.
2. Move to the `Advanced` tab of the selected IdP.
3. Deselect the `Just-in-Time User Provisioning` checkbox.
4. Click `Update` to save.

<img :src="$withBase('/assets/img/references/idp-settings/jit-disabled.png')" alt="JIT User Provisioning Config Disabled">

::: info
When you disable this configuration, user authentication through a federated IdP
happens locally. User's profile, and the user's claims received from the external IdP are stored in Asgardeo by
creating a local account.
:::

#### Interconnections with Applications

When you are disabling JIT configuration, ensure there are no 2FA configured applications depending on
the target connection. In such a scenario, the following warning will be displayed.

<img :src="$withBase('/assets/img/references/idp-settings/jit-interconnections-conflict.png')" alt="JIT User Provisioning Interconnections Conflict">

This means some applications depend on the connection you are trying to update, and this application(s)
have 2FA configured in their authentication sequence. To avoid unusual login behaviors, you have to
conditionally switch to **not to use 2FA** for this IdP. Functionally, 2FA requires a user
identifier to authenticate successfully.

You can learn how to conditionally skip authentication using our adaptive script <a :href="$withBase('/references/conditional-auth/api-reference/#execute-a-step')">Adaptive Script Docs</a>.
