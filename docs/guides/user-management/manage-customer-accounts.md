# Manage customer user accounts

This guide contains following topics:
- [Create a customer user](#create-customer-user)
- [Delete a customer user](#delete-customer-user)
- [Assign groups to a customer user](#assign-groups)

## Create customer user

1. In Asgardeo Console, Select **Manage > Users**.  section from the left navigation.
2. Click  **New User** and Select **Customer** user.
3. Provide the following details.
    - **Email (username):** A unique email address to identify the user. 
        <br>
        ::: danger
        This emailaddress will be used as the username in Asgardeo. Hence, you can't change this username once the user is created. Also you can't create a user with the existing username in the organization.
        :::
       
    - **First Name:** First name of the user. You can add/change this later.
    - **Last Name:** Last name of the user. You can add/change this later.

    - **Select the method to set the user password:**
      - **Invite user to set their own password**
            If owner/collaborator user selects this option, an email with confirmation link will be sent to the provided email (username) to set their own password
      - **Set a temporary password for the user**
            If owner/collaborator user selects this option, he/she can set password of the user.<br>
            
        ::: warning
        User's password must contain a minimum of 8 characters including at least one uppercase letter, one lowercase letter, one number, and one special character from !, @, #, $, %, *, &
        :::
6. Click **Next**.
7. You can assign the user to some groups. 
8. Click **Finish**.

## Delete customer user

1. In Asgardeo Console, Select **Manage** tab in the Console.
2. Move to the **Users** section from the left navigation.
3. Click on **Delete** on the user who needs to be removed.
4. Type the user's username to confirm deleting the user.     
     ::: danger
     This action is irreversible. Once you delete a user, the user will no longer access Asgardeo. Please proceed with caution.
     :::
5. Click **Confirm**.
     
## Assign groups

1. In Asgardeo Console, Select **Manage > **Users** tab in the Console.. 
2. Click on **Edit** on the user to assign roles.
3. Navigate to **Groups** and assign roles.
    <img :src="$withBase('/assets/img/guides/users/assign-groups-to-users.png')" alt="assign-groups">
    