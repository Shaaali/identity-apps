# Just-in-Time User Provisioning

Just-in-Time (JIT) User Provisioning is a method to provision users to Asgardeo during federated authentication. When a
service provider (SP) initiates an authentication request, the user gets redirected to Asgardeo. Once in Asgardeo,
if the user decides to use an external identity provider (i.e., a social or an enterprise connection) for authentication,
Asgardeo redirects the user to an external Identity Provider (IdP). JIT provisioning gets triggered when
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

## Interconnections with Applications

When you are disabling JIT configuration, ensure there are no 2FA configured applications depending on
the target connection. In such a scenario, the following warning will be displayed.

<img :src="$withBase('/assets/img/references/idp-settings/jit-interconnections-conflict.png')" alt="JIT User Provisioning Interconnections Conflict">

This means some applications that depend on the connection you are trying to update, have 2FA
configured in their authentication sequence. To avoid unusual login behaviors, you have to
conditionally switch to **not to use 2FA** for this IdP. Functionally, 2FA requires a user
identifier to authenticate successfully.

You can learn how to conditionally skip authentication using our adaptive script <a :href="$withBase('/references/conditional-auth/api-reference/#execute-a-step')">Adaptive Script Docs</a>.