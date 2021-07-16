# Customer

A Customer user who is registered within the organization, can consume and access applications in that organization. A 
customer can self-register or can be onboarded to an organization by its admins.

## Manage customer accounts
This guide walks you through the steps of managing a customer user account. An owner or a collaborator can manage customer accounts.
- [Onboard a customer user](#onboard-customer-user)
- [Assign groups to a customer user](#assign-groups) 
- [Delete a customer user](#delete-customer-user)

### Onboard customer user
To onboard a customer user:
1. The user can self-register himself via MyAccount of the organization
2. An Admin can invite the customer. 

Below instructions will guide you on how to onboard a customer user via Console:
1. In the Asgardeo Console, Select **Manage > Users**.
2. Click  **New User** and Select **Customer** user from the list.
3. Provide the following details.
    <img :src="$withBase('/assets/img/guides/users/add-customer-user-form.png')" alt="Add customer user">
    - **Email (username):** A unique email address to identify the user. 
        <br>
        ::: warning
        This email address will be used as the username in Asgardeo. Note that a username is always unique to the organization and you can't change the username once it is created.
        :::
    - **First Name:** First name of the user. You can add/change this later.
    - **Last Name:** Last name of the user. You can add/change this later.
    - **Select the method to set the user password:**
      - **Invite user to set their own password:**
            If an administrator selects this option, an email with a confirmation link will be sent to the provided email (username) to set their own password.
      - **Set a temporary password for the user:**
            If administrator selects this option, he/she can set password of the user.<br>            
4. Click **Next**.
5. You can assign the user to some groups. 
6. Click **Finish**.
     
### Assign groups
A user can be assigned to different <a href="/guides/user-management/groups/">groups</a> in the organization. Based on the assigned groups, admins can restrict customer users' access to resources.

To assign users to groups: 
1. In the Asgardeo Console, Select **Manage > Users**. 
2. Click **Edit** on the user to assign groups.
3. Navigate to **Groups** and assign groups.
    <img :src="$withBase('/assets/img/guides/users/assign-groups-to-users.png')" alt="assign-groups">

### Delete customer user
A customer user account can be deleted by admins. Once an account is deleted, the action is irreversible. 

To delete a customer user account:
1. In the Asgardeo Console, Select **Manage > Users**.
2. View all the users.
3. Click on **Delete** on the user who needs to be removed.
4. Type the user's username to confirm deleting the user.     
5. Click **Confirm**.
