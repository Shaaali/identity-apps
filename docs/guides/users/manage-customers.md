# Manage customers

A customer registered in the organization can consume and access applications in that organization.

This guide walks you through the process of managing a customer account. An owner or a collaborator with administrative privilege can manage customer accounts.

## Onboard a customer
There are two ways to onboard a customer:
- The user can self-register via My Account.
- An admin can invite the customer. 

Let's look at how admins can onboard customers from the Asgardeo Console.
1. On the Asgardeo Console, click **Manage > Users**.
2. Click  **New User** and select **Customer** from the list.
3. Provide the following details:
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
            If this option is selected, an email with a confirmation link will be sent to the provided email (username). The customer can use the confirmation link to set a new password and to confirm the new account.  
      - **Set a temporary password for the user:**
            If this option is selected, the administrator can set a temporary password for the user.              
4. Click **Next**.
5.  If required, you can assign the user to some groups. 
6. Click **Finish**.
     
## Assign groups
A user can be assigned to different <a :href="$withBase('/guides/users/manage-groups/')">groups</a> in the organization. Based on the assigned groups, admins can restrict customer users' access to resources.

To assign users to groups: 
1. On the Asgardeo Console, click **Manage > Users**. 
2. Click **Edit** for the user.
3. Go to **Groups** and assign groups.
    <img :src="$withBase('/assets/img/guides/users/assign-groups-to-users.png')" alt="assign-groups">

## Delete a customer
A customer user account can be deleted by admins. Once an account is deleted, the action is irreversible. 

To delete a customer account:
1. On the Asgardeo Console, click **Manage > Users**.
2. View all the users.
3. Click **Delete** for the user that should be removed.
4. Enable the checkbox to confirm your action.     
5. Click **Confirm**.
