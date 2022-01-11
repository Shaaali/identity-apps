# Configure Just-in-Time User Provisioning

If you are an administrator of an organization, Just-in-Time (JIT) user provisioning can be configured for any external
IdP. Enabling JIT provisioning allows Asgardeo to store federated user's identity and user claims, in the Asgardeo user
store.

## Enable JIT User Provisioning

To enable JIT User provisioning:

1. On Asgardeo Console, click **Develop > Connections** and select the IdP.
2. Move to the **Advanced** tab of the selected IdP.
3. Select the **Just-in-Time User Provisioning** checkbox.
4. Click **Update** to save.

<img :src="$withBase('/assets/img/guides/jit-provisioning/jit-enabled.png')" alt="JIT User Provisioning Config Enabled">

::: info
When you enable this configuration, federated users logging in to a business application will pass-through
their profiles and credentials from an external IdP. Asgardeo will not create a local account for these users.
:::

## Disable JIT User Provisioning

To disable JIT User provisioning:

1. On Asgardeo Console, click **Develop > Connections** and select the IdP.
2. Move to the **Advanced** tab f the selected IdP.
3. Deselect the **Just-in-Time User Provisioning** checkbox.
4. Click **Update** to save.

<img :src="$withBase('/assets/img/guides/jit-provisioning/jit-disabled.png')" alt="JIT User Provisioning Config Disabled">

::: info
When you disable this configuration, user authentication through a federated IdP happens locally. User's
profile and user claims received from the external IdP are stored in Asgardeo by creating a local account.
:::

## Related References

- <a :href="$withBase('/references/idp-settings/just-in-time-provisioning/')">Just-in-Time User Provisioning</a>
