# User profiles

A user profile consists of user attributes that represent the details of the user. It can be the user name, email address, contact information, some custom attributes, etc. 

Depending on the organization's requirement, administrators can customize the list of user attributes visible in a user profile.

Asgardeo provides different ways to manage user profiles such as the Asgardeo Console, MyAccount and SCIM2 APIs.

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
 3. Click on **Edit**.  

Now you can see profile of the user.
  <img :src="$withBase('/assets/img/guides/users/update-user-profile.png')" alt="update-user-profile">
    
    
## Update the profile of a user

An administrator can update the user profile of the **customer** via Asgardeo Console.

To update the profile:
1. Select the attributes under **Profile** section of the selected user.
2. Update the user profile attributes.
3. Click **Update**.

## Delete a user

To delete a user from user profile view:
1. Click **Delete User** in **Profile** section of the selected user.
  <img :src="$withBase('/assets/img/guides/users/delete-user.png')" alt="Delete user">
2. Type the user's username to confirm deleting the user.
3. Click **Confirm**.     

## Reset the password of a user

An administrator can reset the password of a customer user and request the customer user to reset their password.

To reset password of a user:
1. Click **Reset Password** in the **Profile** of the user.
2. Select a method to set the user password     
   - **Invite user to set their own password:**  
   If owner/collaborator user selects this option, a password reset email will be sent to the customer user to reset their password    
   - **Set a temporary password for the user:**  
   If owner/collaborator user selects this option, he/she can set password of the customer user.<br>
   <img :src="$withBase('/assets/img/guides/users/reset-password-of-user.png')" alt="Reset password">
3. Click **Reset Password**.
