# User management

The users in Asgardeo are the digital representations of the identities of physical users who interact with your 
organization. With Asgardeo, the identity lifecycle of each of these users can be easily managed by the admins of the 
organization. 

The admins can grant users access to resources in your organization and control user access. Admins can also manage various user operations via the [Asgardeo Console](https://console.asgardeo.io) and SCIM APIs.

Shown below are some main user management capabilities available in Asgardeo.

<img class="borderless-img" :src="$withBase('/assets/img/guides/users/user-management-overview.png')" alt="User management">

## User accounts

Asgardeo supports a set of user account types based on their relationship to the organization. 

Given below are the types of user accounts you can have in an Asgardeo organization.
 - [**Owner**](owner.md)
 - [**Collaborator**](manage-collaborators.md)
 - [**Customer**](manage-customers.md)
  
An **Asgardeo User** is a user managed by Asgardeo, who can access the Asgardeo console and develop or manage applications in the organization. Both the owner and collaborator are Asgardeo users.

### Comparing User Accounts

The following table compares the different user account types available in Asgardeo.

Based on your requirements, you can choose user types and create them via [Asgardeo Console](https://console.asgardeo.io).

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
     <li><b>Role: Application developer</b></li>
         <ul>
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

See the topics given below for details of the main components that are required for user management.
- <a :href="$withBase('/guides/users/manage-groups/')">Groups</a>
- <a :href="$withBase('/references/user-management/user-roles/')">Roles</a>
- User stores
