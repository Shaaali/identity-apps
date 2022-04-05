# Manage users

This guide walks you through the process of managing a user account. An owner or an administrator with administrative privilege can manage user accounts.

## Onboard a user
There are two ways to onboard a user:
- The user can self-register via My Account or a business application if **Self-Registration** is enabled in the organization. Learn about <a :href="$withBase('/guides/user-self-service/self-register/')">user self-registration</a>.
- An administrator can invite the user.

Let's look at how administrator can onboard users from the Asgardeo console.

1. On the Asgardeo console, click **Manage > Users**.
2. Click  **New User** button.
3. Provide the following details:
    <img :src="$withBase('/assets/img/guides/users/add-user-form.png')" width="500" alt="Add user">
    - **Email (Username):** A unique email address to identify the user. 
        <br>
        ::: warning
         This email address will be used as the username in Asgardeo. Note that a username is always unique to the organization and you can't change the username once it is created.
        :::
    - **First Name:** First name of the user. You can add/change this later.
    - **Last Name:** Last name of the user. You can add/change this later.
    - **Select the method to set the user password:**
      - **Invite user to set their own password:**
            If this option is selected, an email with a confirmation link will be sent to the provided email (username). The user can use the confirmation link to set a new password and to confirm the new account.  
      - **Set a temporary password for the user:**
            If this option is selected, the administrator can set a temporary password for the user.              
4. Click **Next**. (This option will only appear if your organization already have created groups. Otherwise, click **Finish**.)
5.  If required, you can assign the user to some groups. 
6. Click **Finish**.
     
## Assign groups
A user can be assigned to different <a :href="$withBase('/guides/users/manage-groups/')">groups</a> in the organization. Based on the assigned groups, administrators can restrict user's access to resources.

To assign users to groups: 
1. On the Asgardeo console, click **Manage > Users**. 
2. Click **Edit** for the user.
3. Go to **Groups** and assign groups.
   <img :src="$withBase('/assets/img/guides/users/assign-groups-to-users.png')" width="800" alt="Add user">

## Manage the user's profile

A user profile consists of attributes that represent the details of the user such as username, email address, contact information, other custom attributes, etc. 

::: info
Administrators in the organization can configure the list of attributes that should be available in a user profile. See <a :href="$withBase('/guides/users/attributes/manage-attributes/')">Manage attributes</a> for details.
:::
 
### View profile details

Administrators can view the user profile of any user as follows:

1. On the Asgardeo console, click **Manage > Users**.
2. Select the user to view the profile.

   <img :src="$withBase('/assets/img/guides/users/view-user-profile.png')" alt="view-user-profile">

### Update the profile

An administrator can update the profile of a <a :href="$withBase('/guides/users/manage-customers/')">user</a> via the Asgardeo console.

To update the user profile:

1. On the Asgardeo console, click **Manage > Users**.
2. Select the user account and click **Edit**.
3. Update the information on the user profile.

   <img :src="$withBase('/assets/img/guides/users/update-user-profile.png')" alt="update-user-profile">

4. Click **Update** to save.

## Reset the user's password

Administrators can reset a user's password or initiate the password reset process from the Asgardeo console.

To reset the password:

1. Click **Reset password** at the bottom of the user's profile.
  <img :src="$withBase('/assets/img/guides/users/reset-password.png')" alt="Reset User Password">
2. Select a method to reset the user password:     
   - **Invite user to set their own password:**  
    If this option is selected, a password reset request can be sent to the user via email. The user can then use the instructions in the email to reset the password.  
   - **Set a temporary password for the user:**  
   If this option is selected, the owner/administrator can set a temporary password for the user.
   <img :src="$withBase('/assets/img/guides/users/reset-password-of-user.png')" alt="Reset password" width="500">
3. Click **Reset Password**.

## Lock a user account

When you lock a user's account, the user will no longer be able to access any business applications or the self-service portal (My Account). 

To lock the user account:

1. On the Asgardeo console, click **Manage > Users** and select the user.
2. Enable the **Lock user** toggle at the bottom of the user's profile.
  <img :src="$withBase('/assets/img/guides/users/lock-user.png')" alt="Lock user">
3. Enable the checkbox to confirm your action. 
4. Click **Confirm**. 

::: info
You can unlock the user account again using the **Lock user** toggle explained above.
:::

## Delete a user
A user account can be deleted by administrators. Once an account is deleted, the action is irreversible. 

To delete a user account:
1. On the Asgardeo console, click **Manage > Users** and select the user.
2. Click **Delete User** at the bottom of the user's profile.
  <img :src="$withBase('/assets/img/guides/users/delete-user.png')" alt="Delete user">
3. Enable the checkbox to confirm your action. 
4. Click **Confirm**. 
