# Manage collaborators

This guide walks you through the steps of managing a collaborator account. If you are the owner or an existing collaborator in the organization, you can onboard new collaborators or delete existing collaborator accounts.

::: info Info
You cannot manage the user profiles of other collaborators or update their passwords from the Asgardeo console. Collaborators must <a :href="$withBase('/guides/your-asgardeo/asgardeo-self-service/#change-password')">manage their own profiles and passwords</a> using the self-service portal (My Account).
:::

## Onboard a collaborator

Admins can onboard a collaborator by sending an email invitation. 

To onboard a collaborator:

1. On the Asgardeo console, click **Manage > Users**.
2. Click **Manage > Users** on the Asgardeo console.
3. Click  **New User** and select **Collaborator** from the list.
4. Provide the Email address of the collaborator.

    ::: warning
    This email address will be used as the username in Asgardeo. Note that a username is always unique to the organization, and you can't change the username once it is created.
    :::               
    <!--- **Role:** Select a role to assign to the collaborator. You can change this later.   
    <img :src="$withBase('/assets/img/guides/users/add-collaborator-account.png')" alt="Add collaborator user">-->
5. Click **Invite**.
6. The collaborator can access the Asgardeo console by accepting the invitation and setting a password for the new user account.
     
<!-- ## Assign roles

Asgardeo <a :href="$withBase('/references/user-management/user-roles/')">Roles</a> are used to specify the permissions that a user needs to access various resources on the Asgardeo console.

To assign roles to a collaborator:
1. On the Asgardeo Console, click **Manage > Users**.
2. Click **Edit** for the user you want to edit.
3. Go to **Roles** and assign the roles.
    <img :src="$withBase('/assets/img/guides/users/assign-roles-to-collaborator.png')" alt="Assign roles to collaborator">
4. Click **Update**. -->

For details on the available user roles and the permissions assigned to them, see <a :href="$withBase('/references/user-management/user-roles/')">Asgardeo User Roles</a>.

## Delete a collaborator

A collaborator account can be deleted by admins. Once an account is deleted, the action is irreversible. 

To delete a collaborator account:
1. On the Asgardeo console, click **Manage > Users**.
2. Click **Delete** for the user you want to remove.
3. Select the checkbox to confirm your action. 
4. Click **Confirm**.   
