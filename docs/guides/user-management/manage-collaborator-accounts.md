# Manage collaborator user accounts

## Create collaborator user

1. Login to Asgardeo Console. 

2. Select **Manage** tab in the Console.

3. Move to the **Users** section from the left navigation.

4. Click  **New User** button.

5. Select **Collaborator** user.
    <img :src="$withBase('/assets/img/guides/users/add-new-user-button-click-view.png')" alt="add-new-user-button-click-view">

6. Provide the following details.
    <img :src="$withBase('/assets/img/guides/users/add-collaborator-user.png')" alt="add-collaborator-user">

    - **Email Address:** Emailaddress of the Collaborator user.<br>
        ::: danger
        This emailaddress will be used as the username in Asgardeo. Hence, you can't change this username once the user is created. Also you can't create a user with the existing username in the organization.
        :::
           
    - **Role:** Select the role to assign to the Collaborator user. You can add/change this later.
    
7. Click **Invite**

8. The collaborator user can access the Asgardeo Console by accepting the invitation and setting his own password.


## Delete collaborator user

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
     
## Assign roles
. Login to Asgardeo Console. 

2. Select **Manage** tab in the Console.

3. Move to the **Users** section from the left navigation.

4. Click on **Edit**.

5. Navigate to **Roles**.
    <img :src="$withBase('/assets/img/guides/users/assign-roles-to-collaborator-user.png')" alt="assign-groups">

6. Click **Update**.