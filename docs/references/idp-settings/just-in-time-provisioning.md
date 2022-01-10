# Just-in-Time User Provisioning

Just-in-Time (JIT) User Provisioning is about how to provision users to Asgardeo during federated authentication. A
service provider (SP) initiates the authentication request, and the user gets redirected to Asgardeo. Finally, Asgardeo
redirects the user to an external Identity Provider (IdP) for authentication. JIT provisioning gets triggered when
Asgardeo receives a positive authentication response from the external identity provider. Asgardeo will
provision the user to its internal user store with the user claims (PII) from the authentication response.

::: tip
You configure JIT provisioning against an identity provider – not against service providers. Whenever you
associate a connection (IdP) with an application (SP) for outbound authentication, if JIT provisioning is enabled for a
particular IdP, the users from the external IdP will be provisioned into Asgardeo's internal user store.
:::

As an organization administrator, you can specify whether users federated from third-party identity providers are
locally provisioned or not. It means Asgardeo will not store users' PII locally for users federated from an external
provider.

By default, Asgardeo keeps JIT User Provisioning **disabled** when creating an IdP.

### Enable JIT User Provisioning

To enable JIT configuration, all you have to do is enable the below configuration via the Advanced section.

<img :src="$withBase('/assets/img/references/idp-settings/jit-enabled.png')" alt="JIT User Provisioning Config Enabled">

::: info
When you enable this configuration, user's login through federated IDP to a business application is performed in a
pass-through mode. The application end-user will bring both the external system's profile and credentials, and Asgardeo
will not create a local account for the user.
:::

### Disable JIT User Provisioning

To disable JIT configuration, all you have to do is disable the below configuration via the Advanced section.

<img :src="$withBase('/assets/img/references/idp-settings/jit-disabled.png')" alt="JIT User Provisioning Config Disabled">

::: info
When you disable this configuration, the user's authentication through federated IDP to a business
application is performed locally. Asgardeo will store the end user's external system's profile and PII on-premises by
creating a local account.
:::

#### Interconnections with Applications

When you are disabling JIT configuration, you have to make sure there's no 2FA configured applications depending on
the target connection. In such a scenario, we will show you a warning message like below.

<img :src="$withBase('/assets/img/references/idp-settings/jit-interconnections-conflict.png')" alt="JIT User Provisioning Interconnections Conflict">

It means that listed applications depending on the connection that you are trying to update and has 2FA configured in their
authentication sequence. To avoid unusual login behaviours, you have to conditionally switch **not to use 2FA** for this
IdP. Functionally, 2FA requires users' identifier to successfully authenticate.

You can learn how to conditionally skip authentication with our adaptive script <a :href="$withBase('/references/conditional-auth/api-reference/#execute-a-step')">Adaptive Script Docs</a>.
