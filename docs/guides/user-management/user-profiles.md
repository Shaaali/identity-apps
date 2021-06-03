# User profile

User profile contains information about users. It can be username, emailaddress, contact information, custom attributes, etc. 

Asgardeo provides different ways to manage user profiles such as the Asgardeo console, MyAccount and SCIM2 APIs.  You can view profile, update profile ,delete user and  reset passowrd via the user profile. 

Owner or collaborator user can customize the user profiles via claim management based on organization's requirements.

## Administrator updates user profile via Asgardeo Console

From the user's profile in Asgardeo console, admin can perform following options:
 - [Update the profile of a user.](#update-the-profile-of-a-user)
 - [Delete a user.](#delete-a-user)
 - [Reset the password of a user.](#reset-the-password-of-a-user)
 
Let's see how an administrator can access user profile.
 1. Login to Asgardeo Console. 

 2. Select **Manage** tab in the Console.

 3. Move to the **Users** section from the left navigation.

 4. Select the user to update.

 5. Click on **Edit**.
     <img :src="$withBase('/assets/img/guides/users/update-user-profile.png')" alt="update-user-profile">
    
    
### Update the profile of a user

Administrator(Owner/Collaborator) can update the user profile of the **customer** via Asgardeo Console.
    
::: tip
Profiles of **Collaborator** and the **Owner** can be updated only via MyAccount.
:::

1. Update the user profile.
2. Click **Update**.

### Delete a user

1. Click **Delete** button.

2. Type the user's username to confirm deleting the user.

3. Click **Confirm**.
         
     ::: danger
     This action is irreversible. Once you delete a user, the user will no longer access Asgardeo.
     :::

### Reset the password of a user.

Administrator(Owner/Collaborator) can reset the password of a customer user and request the customer user to reset his password.

<img :src="$withBase('/assets/img/guides/users/reset-password-of-user.png')" alt="reset-password-of-user">

- **Select the method to set the user password:**
      
  - **Invite user to set their own password:**
    If owner/collaborator user selects this option, a password reset email will be sent to the customer user to reset their password
      
  - **Set a temporary password for the user:**
    If owner/collaborator user selects this option, he/she can set password of the customer user.<br>
          
      ::: warning
      User's password must contain a minimum of 8 characters including at least one uppercase letter, one lowercase letter, one number, and one special character from !, @, #, $, %, *, &
      :::
      
## User updates user profile via MyAccount

All users can update their profile via MyAccount.

1. Login to Asgardeo MyAccount

2. Select **Personal Info** tab in the MyAccount.

3. Update profile information.
