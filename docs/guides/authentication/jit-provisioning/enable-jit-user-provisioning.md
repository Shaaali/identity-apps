# Enable JIT User Provisioning

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

## Related References

- <a :href="$withBase('/references/idp-settings/just-in-time-provisioning/')">Just-in-Time User Provisioning</a>