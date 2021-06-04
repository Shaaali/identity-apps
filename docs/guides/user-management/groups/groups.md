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

1. Go to the Asgardeo console.

2. Click **Manage > Groups**.

3. Click **New Group**.
    <img :src="$withBase('/assets/img/guides/groups/create-new-group-view.png')" alt="create-new-group-view">

4. Provide the following details..
    <img :src="$withBase('/assets/img/guides/groups/create-new-group-form.png')" alt="create-new-group-form">
    
    - **Group Name:** A unique name to identify the group.   
    - **Add Users:** If you already have existing customer users, you can search and add them.

5. Click **Finish**.

### Assigning users to a group

1. Go to the Asgardeo console.

2. Click **Manage > Groups**.

3. Select the group to assign the user.
    <img :src="$withBase('/assets/img/guides/groups/groups-list-view.png')" alt="list-groups-view">

4. Click **Edit**.
    <img :src="$withBase('/assets/img/guides/groups/edit-group-view.png')" alt="edit-group-view">

5. Click **Users**.
    <img :src="$withBase('/assets/img/guides/groups/add-user-to-group-view.png')" alt="add-user-to-group-view">

6. Click **Assign User** .

7. Select users to add to the group.
    <img :src="$withBase('/assets/img/guides/groups/assign-user-to-group.png')" alt="add-user-to-group">

8. Click **Save**.

### Removing users from a group

1. Go to the Asgardeo console.

2. Click **Manage > Groups**.

3. Select the group to remove the user.
    <img :src="$withBase('/assets/img/guides/groups/groups-list-view.png')" alt="list-groups-view">

4. Go to the **Users** tab of the selected group.
    <img :src="$withBase('/assets/img/guides/groups/remove-user-from-group-view.png')" alt="remove-user-from-group-view">

5. Click **Edit**.
    <img :src="$withBase('/assets/img/guides/groups/remove-user-from-group-early-view.png')" alt="remove-user-from-group">

6. Clear the checkbox for the user you want to remove.
    <img :src="$withBase('/assets/img/guides/groups/remove-user-from-group.png')" alt="remove-user-from-group">

7. Click **Save**.
