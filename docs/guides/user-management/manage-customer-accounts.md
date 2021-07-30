# Manage customer user accounts

This guide contains the following topics:
- [Create a customer user](#create-customer-user)
- [Delete a customer user](#delete-customer-user)
- [Assign groups to a customer user](#assign-groups)

## Create customer user
1. In the Asgardeo Console, Select **Manage > Users**.
2. Click  **New User** and Select **Customer** user from the list.
3. Provide the following details.
    - **Email (username):** A unique email address to identify the user. 
        <br>
        ::: warning
        This email address will be used as the username in Asgardeo. Note that a username is always unique to the organization and you can't change the username once it is created.
        :::
    - **First Name:** First name of the user. You can add/change this later.
    - **Last Name:** Last name of the user. You can add/change this later.
    - **Select the method to set the user password:**
      - **Invite user to set their own password:**
            If administrator selects this option, an email with a confirmation link will be sent to the provided email (username) to set their own password
      - **Set a temporary password for the user:**
            If administrator selects this option, he/she can set password of the user.<br>            
4. Click **Next**.
5. You can assign the user to some groups. 
6. Click **Finish**.

## Delete customer user

1. In the Asgardeo Console, Select **Manage > Users**.
2. Click on **Delete** on the user who needs to be removed.
3. Type the user's username to confirm deleting the user.     
     ::: danger
     Note that deleted users cannot be retrieved again. Therefore, proceed with caution.
     :::
4. Click **Confirm**.
     
## Assign groups

1. In the Asgardeo Console, Select **Manage > Users**. 
2. Click **Edit** on the user to assign groups.
3. Navigate to **Groups** and assign groups.
    <img :src="$withBase('/assets/img/guides/users/assign-groups-to-users.png')" alt="assign-groups">
    