# Groups

A group is a collection of users who have the same privileges to access resources in an organization. 

The Asgardeo Console allows you to:
- Create and manage groups.
- Add users to groups.
- Remove users from groups. 
    
One user can be assigned users to any number of groups. Applications can get details about a user's group in 
the authentication response (e.g., id_token) from Asgardeo as a user attribute.                                                          

::: tip
Only [customer users](../#customer) can be assigned to a group.
:::

For example, you can create the following user groups: `Admin`, `Manager`, and `Developer`. When one user group is granted access to a resource, it applies to all users in the group.

### Creating a new group

1. In the Asgardeo console, Click **Manage > Groups**.
2. Click **New Group**.
3. Provide the following details.
    <img :src="$withBase('/assets/img/guides/groups/create-new-group-form.png')" alt="create-new-group-form">
    - **Group Name:** A unique name to identify the group.   
    - **Add Users:** If you already have existing customer users, you can search and add them.
4. Click **Finish**.

### Assigning users to a group

1. In the Asgardeo console, Click **Manage > Groups**.
2. Select the group to assign the user.
3. Click **Edit** and navigate to **Users**.
     <img :src="$withBase('/assets/img/guides/groups/add-user-to-group-view.png')" alt="add-user-to-group-view">
4. Click **Assign User**.
5. Select users to add to the group.
6. Click **Save**.

### Removing users from a group

1. In the Asgardeo Console, Click **Manage > Groups**.
2. Select the group to remove the user.
3. Click **Edit** and navigate to **Users**.
    <img :src="$withBase('/assets/img/guides/groups/remove-user-from-group-view.png')" alt="remove-user-from-group-view">
4. Click **Edit** icon.
5. Clear the checkbox for the user(s) you want to remove.
6. Click **Save**.
