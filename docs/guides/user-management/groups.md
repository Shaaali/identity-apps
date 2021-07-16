# Groups

A group is a collection of users who have the same privileges to access resources in an organization. 

The Asgardeo Console allows you to:
- [Create and manage groups](#create-new-group)
- [Assign users to groups](#assign-users-to-groups)
- [Remove users from groups](#remove-users-from-groups) 
    
One user can be assigned to any number of groups. Applications can get details about groups a user belongs to in the authentication response (e.g., ID token) from Asgardeo as a user attribute.                                                          

::: tip
Only <a href="/guides/user-management/manage-users/user-accounts/customer">customer</a> users can be assigned to a group.
:::

For example, you can create the following user groups: `Admin`, `Manager`, and `Developer`. When one user group is granted access to a resource, it applies to all users in the group.

## Create new group
An admin can create new groups via the [Asgardeo Console](https://console.asgardeo.io). 

To create a new group:
1. In the Asgardeo console, Click **Manage > Groups**.
2. Click **New Group**.
3. Provide the following details.
    - **Group Name:** A unique name to identify the group.   
    - **Add Users:** If you already have existing customer users, you can search and add them.
    <img :src="$withBase('/assets/img/guides/groups/create-new-group-form.png')" alt="create-new-group-form">
4. Click **Finish**.

## Assign users to groups
Customer users can be assigned to groups. Admins can restrict access to resources based on the groups.

To assign  users  to groups:
1. In the Asgardeo console, Click **Manage > Groups**.
2. Select the group to assign the user.
3. Click **Edit** and navigate to **Users**.
     <img :src="$withBase('/assets/img/guides/groups/add-user-to-group-view.png')" alt="add-user-to-group-view">
4. Click **Assign User**.
5. Select users to add to the group.
6. Click **Save**.

## Remove users from groups
<a href="/guides/user-management/manage-users/user-accounts/customer/">Customer</a> users can be removed from the assigned groups by admins.

To remove users from groups:
1. In the Asgardeo Console, Click **Manage > Groups**.
2. Select the group to remove the user.
3. Click **Edit** and navigate to **Users**.
    <img :src="$withBase('/assets/img/guides/groups/remove-user-from-group-view.png')" alt="remove-user-from-group-view">
4. Click **Edit** icon.
5. Clear the checkbox for the user(s) you want to remove.
6. Click **Save**.
