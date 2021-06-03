# Manage customer user accounts

## Create customer user

1. Login to Asgardeo Console. 

2. Select **Manage** tab in the Console.

3. Move to the **Users** section from the left navigation.

4. Click  **New User** button.

5. Select **Customer** user.
    <img :src="$withBase('/assets/img/guides/users/add-new-user-button-click-view.png')" alt="add-new-user-button-click-view"> 

6. Provide the following details.
    <img :src="$withBase('/assets/img/guides/users/add-consumer-user-form.png')" alt="add-consumer-user-form">

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

7. Click **Next**.

8. You can assign the user to some groups. 
    <img :src="$withBase('/assets/img/guides/users/assign-users-to-groups.png')" alt="assign-users-to-groups">

9. Click **Finish**.


## Delete consumer user

1. Login to Asgardeo Console. 

2. Select **Manage** tab in the Console.

3. Move to the **Users** section from the left navigation.
    <img :src="$withBase('/assets/img/guides/users/users-list-view.png')" alt="user-list-view">

4. Click on **Delete**.
 
5. Type the user's username to confirm deleting the user.
    <img :src="$withBase('/assets/img/guides/users/delete-user-confirm.png')" alt="user-delete">
     
     ::: danger
     This action is irreversible. Once you delete a user, the user will no longer access Asgardeo.
     :::
     
## Assign groups

1. Login to Asgardeo Console. 

2. Select **Manage** tab in the Console.

3. Move to the **Users** section from the left navigation.

4. Click on **Edit**.

5. Navigate to **Groups**.
    <img :src="$withBase('/assets/img/guides/users/assign-groups-to-users.png')" alt="assign-groups">
