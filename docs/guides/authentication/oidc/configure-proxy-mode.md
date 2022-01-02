# Configure Proxy Mode

As an organization administrator, you can specify whether users federated from third-party identity providers are
locally provisioned or not. It means Asgardeo will not store users' `PII` locally for users federated from an external
provider.

## Enable Proxy Mode

To enable Proxy Mode, you have to make sure there's no application(s) is depending on the target connection. If there
are no setting conflicts, you can enable proxy mode configuration via the Just-in-Time Provisioning section.

::: info
When you enable **Proxy Mode** configuration, users' login through federated IDP to a business application is
performed in a _pass-through_ mode. The application end-user will bring both the external system's profile and
credentials, and Asgardeo **will not** create a local account for the user.
:::