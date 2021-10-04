# User Management

The users in Asgardeo are the digital representations of the identities of physical users who interact with your 
organization. With Asgardeo, the identity lifecycle of each of these users can be easily managed by the admins of the 
organization. 

The admins can grant users access to resources in your organization and control user access. Admins can also manage various user operations via the [Asgardeo console](https://console.asgardeo.io) and SCIM APIs.

Shown below are some main user management capabilities available in Asgardeo.

<img class="borderless-img" :src="$withBase('/assets/img/guides/users/user-management-overview.png')" alt="User management">

## User accounts

Asgardeo supports a set of user account types based on their relationship to the organization. 

Given below are the types of user accounts you can have in an Asgardeo organization.

### Owner

This is the owner of the organization who [self-registers](https://asgardeo.io/early-signup) to Asgardeo by creating an organization. The owner has all 
the administrative rights in the organization.

The owner can access the Asgardeo console and manage the organization.

An owner can perform the following actions:
- Onboard users
- Create organizations
- Manage users and groups
- Manage applications
- Enforce password reset

The owner account cannot be deleted once it is created. There can be only one owner for an organization. By default, it’s the user who created the organization. 

An owner is always assigned the **Administrator** role. It cannot be changed by other admins either.

### Collaborator 

A collaborator is a user who can manage the organization and has access to the organization’s administrative operations. A collaborator can be invited to the organization and assigned with the Administrator <a :href="$withBase('/references/user-management/user-roles/')">user role</a>.

Refer <a :href="$withBase('/guides/users/manage-collaborators/')">Managing collaborators</a> for more information. 

### Customer 

A customer registered in an organization can consume and access applications in that organization.

Refer <a :href="$withBase('/guides/users/manage-customers/')">Managing customers</a> for more information. 

### Comparing User Accounts

The following table compares the different user account types available in Asgardeo.

Based on your requirements, you can choose user types and create them via the [Asgardeo Console](https://console.asgardeo.io).

<br>

<table>
  <tr>
    <th>User Accounts</th>
    <th>Managed By</th>
    <th>Capabilities</th> 
  </tr>
  <tr>
    <td>Owner<Badge text="Asgardeo User" type="optional"/></td>
    <td>Asgardeo</td>
    <td>
    <li>Onboard users</li>
    <li>Create organizations</li>
    <li>Manage users and groups</li>
    <li>Manage applications</li>
    </td>
  </tr>
  <tr>
    <td>Collaborator<Badge text="Asgardeo User" type="optional"/></td>
    <td>Asgardeo</td>
    <td>
    <li><b>Role: Administrator </b> </li>
        <ul>
            <li>Onboard users</li>
            <li>Create organizations</li>
            <li>Manage users and groups</li>
            <li>Manage applications</li>
        </ul>
    </td>
  </tr>
  <tr>
    <td>Customer</td>
     <td>Organization</td>
    <td><li>Consume business applications</li></td>
  </tr>
</table>

## What's next?

Following are the main components that are required for user management.
- <a :href="$withBase('/guides/users/manage-groups/')">Groups</a>
- <a :href="$withBase('/references/user-management/user-roles/')">Roles</a>
- User stores <i>`(Coming soon)`</i>
