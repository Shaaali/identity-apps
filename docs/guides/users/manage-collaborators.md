# Manage administrators

This guide walks you through the steps of managing an administrator account. If you are the owner or an existing administrator in the organization, you can onboard new administrators or delete existing administrator accounts.

::: info Info
You cannot manage the user profiles of other administrators or update their passwords from the Asgardeo console. Administrators must <a :href="$withBase('/guides/your-asgardeo/asgardeo-self-service/#change-password')">manage their own profiles and passwords</a> using the self-service portal (My Account).
:::

## Onboard an administrator

Administrators can onboard another administrator by sending an email invitation.

To onboard an administrator:

1. On the Asgardeo console, click **Manage > Administrators**.
2. Click **New Administrator**.
3. Provide the email address of the administrator and click **Invite**.

    ::: warning
    This email address will be used as the username in Asgardeo. Note that a username is always unique to the organization, and you can't change the username once it is created.
    :::

    <img :src="$withBase('/assets/img/guides/users/add-administrator.png')" alt="Add administrator user">

The administrator can access the Asgardeo console by accepting the invitation and setting a password for the new administrator account.

::: info
For details on the available user roles and the permissions assigned to them, see <a :href="$withBase('/references/user-management/user-roles/')">Asgardeo User Roles</a>.
:::

## Delete an administrator

An administrator account can be deleted by administrators. Once an account is deleted, the action is irreversible.

To delete an administrator account:
1. On the Asgardeo console, click **Manage > Administrators**.
2. Click **Delete** for the administrator you want to remove.
3. Select the checkbox to confirm your action.
4. Click **Confirm**.
