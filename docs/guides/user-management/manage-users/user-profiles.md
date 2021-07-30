# User profiles

A user profile consists of user attributes that represent the details of the user. It can be the user name, email address, contact information, some custom attributes, etc. 

Depending on the organization's requirement, administrators can customize the list of user attributes visible in a user profile.

User profiles can be managed using the Asgardeo Console or SCIM2 APIs. Users can also manage their own user profiles from the **My Account** app. 

This guide will give you an overview on how an administrator can manage the profiles of users.

From the user's profile in Asgardeo console, admin can perform following options:
 - [View profile  of a user](#view-profile-of-a-user)
 - [Update the profile of a user.](#update-the-profile-of-a-user)
 - [Delete a user.](#delete-a-user)
 - [Reset the password of a user.](#reset-the-password-of-a-user)
 
## View profile of a user

Administrators can view the user profile of any user as follows:
 1. On the Asgardeo Console, click **Manage > Users**.
 2. Select the user to view the profile.
 3. Click **Edit**.  

Now you can see the profile of the user.
  <img :src="$withBase('/assets/img/guides/users/update-user-profile.png')" alt="update-user-profile">
    
    
## Update the profile of a user

An administrator can update the user profile of a <a href="/guides/user-management/manage-users/user-accounts/customer/">customer</a> via the Asgardeo Console.

To update the user profile:
1. On the Asgardeo Console, click Manage > Users.
2. Select the customer account and click Edit.
3. Update the information on the user profile.
4. Click Update to save.

## Delete a user

To delete a user from user profile view:
1. Click **Delete User** in **Profile** section of the selected user.
  <img :src="$withBase('/assets/img/guides/users/delete-user.png')" alt="Delete user">
2. Type the user's username to confirm the action.
3. Click **Confirm**.     

## Reset the password of a user

Administrators can reset a user's password or initiate the password reset process from the Asgardeo Console.

To reset the password of a user:
1. Click **Reset Password** on the user's profile.
2. Select a method to set the user password:     
   - **Invite user to set their own password:**  
    If this option is selected, a password reset request can be sent to the customer via email. The customer can then use the instructions in the email to reset the password.  
   - **Set a temporary password for the user:**  
   If this option is selected, the owner/collaborator can set a temporary password for the customer.
   <img :src="$withBase('/assets/img/guides/users/reset-password-of-user.png')" alt="Reset password">
3. Click **Reset Password**.
