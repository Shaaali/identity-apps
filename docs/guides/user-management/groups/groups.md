# Groups

In simple terms, a group is a collection of users who have same access level to access resources in an organization. 

## Groups in Asgardeo

Asgardeo Console provides you the support to:
- create and manage groups
- add users to groups
- remove users from groups. 
    
There is no restriction to assign users to any number of groups. Applications can get details about a user's group in 
the authentication response (e.g., id_token) from Asgardeo as a user attribute.                                                          

::: tip
Only customer users can be assigned to a group.
:::

For example, you can create separate groups of `Admin`, `Manager` and `Developer`, and allow the access for your application depends on their group.

### Creating a new group

1. On the Asgardeo Console, click **Manage > Groups**.

2. Click **New Group**.

<img :src="$withBase('/assets/img/guides/groups/create-new-group-view.png')" alt="create-new-group-view">

3. Fill in the group details.
    
<img :src="$withBase('/assets/img/guides/groups/create-new-group-form.png')" alt="create-new-group-form">
    
- **Group Name:** A unique name to identify the group.   
- **Add Users:** If you already have existing customer users, you can search and add them.

4. Click **Finish**.

### Assigning members

1. On the Asgardeo Console, click **Manage > Groups**.

2. Select the group to assign the user.

<img :src="$withBase('/assets/img/guides/groups/groups-list-view.png')" alt="list-groups-view">

3. Click on **Edit**

<img :src="$withBase('/assets/img/guides/groups/edit-group-view.png')" alt="edit-group-view">

4. Click on **Users**

<img :src="$withBase('/assets/img/guides/groups/add-user-to-group-view.png')" alt="add-user-to-group-view">

5. Click **Assign User** 

6. Select the users to add to the group.

<img :src="$withBase('/assets/img/guides/groups/assign-user-to-group.png')" alt="add-user-to-group">

7. Click **Save**

### Removing members

1. On the Asgardeo Console, click **Manage > Groups**.

2. Select the group to remove the user.

<img :src="$withBase('/assets/img/guides/groups/groups-list-view.png')" alt="list-groups-view">

3. Click on **Users** tab of the selected group.

<img :src="$withBase('/assets/img/guides/groups/remove-user-from-group-view.png')" alt="remove-user-from-group-view">

4. Click **Edit**

<img :src="$withBase('/assets/img/guides/groups/remove-user-from-group-early-view.png')" alt="remove-user-from-group">

5. Untick the user you want to remove.

<img :src="$withBase('/assets/img/guides/groups/remove-user-from-group.png')" alt="remove-user-from-group">

6. Click **Save**
