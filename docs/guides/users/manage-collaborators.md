# Manage collaborators

A collaborator is a user who can manage the organization and has access to the organization’s administrative operations. A collaborator can be invited to the organization and assigned with

A collaborator can be assigned to the following <a :href="$withBase('/references/user-management/user-roles/')">Asgardeo roles</a>:
 - Administrator
 - Application developer

This guide walks you through the steps of managing a collaborator account. An owner or another collaborator with an administrative role can manage collaborator accounts.
- [Onboard a collaborator user](#onboard-a-collaborator)
- [Assign roles to collaborator](#assign-roles)
- [Delete a collaborator](#delete-a-collaborator)

## Onboard a collaborator

Admins can onboard a collaborator by sending an email invitation. 

To onboard a collaborator via [Asgardeo Console](https://console.asgardeo.io):
1. Click **Manage > Users** on the Asgardeo Console.
2. Click  **New User** and select **Collaborator** from the list.
3. Provide the following details.
    - **Email Address:** Email address of the collaborator.<br>
        ::: warning
        This email address will be used as the username in Asgardeo. Note that a username is always unique to the organization, and you can't change the username once it is created.
        :::               
    - **Role:** Select a role to assign to the collaborator. You can change this later.   
    <img :src="$withBase('/assets/img/guides/users/add-collaborator-account.png')" alt="Add collaborator user">
4. Click **Invite**.
5. The collaborator can access the Asgardeo Console by accepting the invitation and setting a password for the new user account.
     
## Assign roles

Asgardeo roles are used for managing user permissions (to access resources on the Asgardeo console).

To assign roles to a collaborator:
1. On the Asgardeo Console, click **Manage > Users**.
2. Click **Edit** for the user you want to edit.
3. Go to **Roles** and assign the roles.
    <img :src="$withBase('/assets/img/guides/users/assign-roles-to-collaborator.png')" alt="Assign roles to collaborator">
4. Click **Update**.

## Delete a collaborator

A collaborator account can be deleted by admins. Once an account is deleted, the action is irreversible. 

To delete a collaborator account:
1. In the Asgardeo Console, click **Manage > Users**.
2. Click **Delete** for the user you want to remove.
3. Type the user's username to confirm deleting the user.     
