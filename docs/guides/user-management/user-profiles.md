# User profile

User profile contains information about users. It can be username, emailaddress, contact information, custom attributes, etc. 

Asgardeo provides different ways to manage user profiles such as the Asgardeo console, MyAccount and SCIM2 APIs.  You can view profile, update profile ,delete user and  reset passowrd via the user profile. 

Administrator(Owner or collaborator) can customize the user profiles via claim management based on organization's requirements.

This guide will give you an overview of:
- [How an administrator can manage the user profile.](#administrator-updates-user-profile-via-asgardeo-console)
- [How a user can manage their own profile.](#user-updates-user-profile-via-my-account)

## Administrator updates user profile via Asgardeo Console

From the user's profile in Asgardeo console, admin can perform following options:
 - [Update the profile of a user.](#update-the-profile-of-a-user)
 - [Delete a user.](#delete-a-user)
 - [Reset the password of a user.](#reset-the-password-of-a-user)
 
Let's see how an administrator can access user profile.
 1. In the Asgardeo Console, Select **Manage > Users** tab in the Console.
 2. Select the user to update.
 3. Click on **Edit**.
     <img :src="$withBase('/assets/img/guides/users/update-user-profile.png')" alt="update-user-profile">
    
    
### Update the profile of a user

Administrator can update the user profile of the **customer** via Asgardeo Console.
    
::: tip Note
Profiles of **Collaborator** and the **Owner** can be updated only via My Account.
:::

1. Update the user profile attributes.
2. Click **Update**.

### Delete a user
1. Click **Delete**.
2. Type the user's username to confirm deleting the user.
3. Click **Confirm**.     
     ::: danger
     Note that deleted users cannot be retrieved again. Therefore, proceed with caution.
     :::

### Reset the password of a user.

An administrator can reset the password of a customer user and request the customer user to reset their password.
- **Select the method to set the user password:**     
  - **Invite user to set their own password:**
    If owner/collaborator user selects this option, a password reset email will be sent to the customer user to reset their password
      
  - **Set a temporary password for the user:**
    If owner/collaborator user selects this option, he/she can set password of the customer user.<br>
      
## User updates user profile via My Account

All users can update their profile via My Account.

1. In the Asgardeo My Account, Select **Personal Info**.
2. Update profile information.
