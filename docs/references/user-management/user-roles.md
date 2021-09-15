# Asgardeo user roles

Roles consist of the permissions that are required by users to access the Asgardeo resources such as functions available on the Asgardeo Console, REST APIs, etc.

When you assign a role to a user, you are controlling what the user can do in Asgardeo. 

By default, Asgardeo has the **Administrator** user role. This role includes all administrative permissions in the organization. An organization can have many users with the administrator role. An administrator is a privileged user who has overall access to the organization.

<!-- 2. **Application developer**: This role includes the permissions required for registering and managing applications. The application developer is a privileged user who can integrate applications with Asgardeo. 

3. **Administrative auditor**: Role which provides read-only access to the organization. Since this user has list and view permission of the Asgardeo resources, this will be useful for troubleshooting issues  in the organization and provide support for other users such as developers in the organization.

Only <a :href="$withBase('/guides/users/manage-collaborators/')">Collaborators</a> can be assigned to Asgardeo roles, and a collaborator can be assigned only with one role.

The following tables list the permissions enabled for roles in the organization. -->
The following list contains the permissions enabled for an Administrator: 

## User Management
- View users
- Onboard users
- Update user profiles
- Delete users
- Terminate sessions
- View groups
- Create groups
- Update and delete groups
- View assigned users to groups
- Asign users to groups

## Application Management
- View apps and app settings
- Register apps
- Update and delete apps
- Update Sign-in methods
- Update protocol settings

## Connections Management
- View connections and connection settings
- Create new connection
- Update and delete connections

## Attributes and Scopes
- View attributes
- Create new attributes
- Update and delete attributes
- View scopes
- Add new attributes ti scopes
- Update and delete scopes

## Organization Settings
- View account recovery scenario and settings
- Configure account recovery scenarios
- View self registration related settings
- Configure self registration for users
- View account security related settings and configurations
- Configure account security related settings

<!--
## Users
<table>
  <tr>
    <th>Permission</th>
    <th>Administrator</th> 
    <th>Application developer</th> 
    <th>Administrative auditor</th> 
  </tr>
  <tr>
    <td>View users</td>
    <td>✔️</td>
    <td>✖️</td>
    <td>✔️</td>
  </tr>
  <tr>
      <td>Onboard users</td>
      <td>✔️</td>
      <td>✖️</td>
      <td>✖️</td>
  </tr>
  <tr>
    <td>Update user profiles</td>
    <td>✔️</td>
    <td>✖️</td>
    <td>✖️</td>
  </tr>
  <tr>
      <td>Delete users</td>
      <td>✔️</td>
      <td>✖️</td>
      <td>✖️</td>
    </tr>
    <tr>
      <td>Terminate user session</td>
      <td>✔️</td>
      <td>✖️</td>
      <td>✖️</td>
    </tr>
    <tr>
      <td>View groups</td>
      <td>✔️</td>
      <td>✖️</td>
      <td>✔️</td>
    </tr>
    <tr>
      <td>Create groups</td>
      <td>✔️</td>
      <td>✖️</td>
      <td>✖️</td>
    </tr>
    <tr>
      <td>Update and delete groups</td>
      <td>✔️</td>
      <td>✖️</td>
      <td>✖️</td>
    </tr>
    <tr>
      <td>View assigned users to groups</td>
      <td>✔️</td>
      <td>✖️</td>
      <td>✔️</td>
    </tr>
    <tr>
      <td>Assign users to groups</td>
      <td>✔️</td>
      <td>✖️</td>
      <td>✖️</td>
    </tr>  
</table>

<br>

## Applications

<table>
  <tr>
    <th>Permission</th>
    <th>Administrator</th> 
    <th>Application developer</th>
    <th>Administrative auditor</th>
  </tr>
  <tr>
    <td>View apps and app settings</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>✔️</td>
  </tr>
  <tr>
      <td>Register apps</td>
      <td>✔️</td>
      <td>✔️</td>
      <td>✖️</td>
  </tr>
  <tr>
    <td>Update and delete apps</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>✖️</td>
  </tr>
  <tr>
      <td>Update Sign-in methods</td>
      <td>✔️</td>
      <td>✔️</td>
      <td>✖️</td>
  </tr>
  <tr>
    <td>Update protocol settings</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>✖️</td>
  </tr>
</table>

<br>

## Connections

<table>
  <tr>
    <th>Permission</th>
    <th>Administrator</th> 
    <th>Application developer</th>
     <th>Administrative auditor</th>  
  </tr>
  <tr>
    <td>View connection and connection settings</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>✔️</td>
  </tr>
  <tr>
      <td>Create new connection</td>
      <td>✔️</td>
      <td>✔️
      <td>✖️</td>
  </tr>
  <tr>
    <td>Update and delete connections</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>✖️</td>
  </tr>
</table>

<br>

## Attributes and scopes
<table>
  <tr>
    <th>Permission</th>
    <th>Administrator</th> 
    <th>Application developer</th> 
     <th>Administrative auditor</th> 
  </tr>
  <tr>
    <td>View attributes</td>
    <td>✔️</td>
    <td>✖️</td>
    <td>✔️</td>
  </tr>
  <tr>
      <td>Create new attributes</td>
      <td>✔️</td>
      <td>✖️</td>
      <td>✖️</td>
  </tr>
  <tr>
    <td>Update and delete attributes</td>
    <td>✔️</td>
    <td>✖️</td>
    <td>✖️</td>
  </tr>
  <tr>
      <td>View scopes</td>
      <td>✔️</td>
      <td>✖️</td>
      <td>✔️</td>
    </tr>
    <tr>
        <td>Add new attributes to scopes</td>
        <td>✔️</td>
        <td>✖️</td>
        <td>✖️</td>
    </tr>
    <tr>
      <td>Update and delete scopes</td>
      <td>✔️</td>
      <td>✖️</td>
      <td>✖️</td>
    </tr>
</table>

## Organization settings
<table>
  <tr>
    <th>Permission</th>
    <th>Administrator</th> 
    <th>Application developer</th> 
    <th>Administrative auditor</th> 
  </tr>
    <tr>
          <td>View account recovery scenarios ad settings</td>
          <td>✔️</td>
          <td>✖️</td>
          <td>✔️</td>
    </tr>
    <tr>
      <td>Configure account recovery scenarios</td>
      <td>✔️</td>
      <td>✖️</td>
      <td>✖️</td>
    </tr>
    <tr>
          <td>View self registration related settings</td>
          <td>✔️</td>
          <td>✖️</td>
          <td>✔️</td>
    </tr>   
    <tr>
      <td>Configure self registration for users</td>
      <td>✔️</td>
      <td>✖️</td>
      <td>✖️</td>
    </tr> 
     <tr>
          <td>View account security related settings and configurations</td>
          <td>✔️</td>
          <td>✖️</td>
          <td>✔️</td>
    </tr>   
    <tr>
      <td>Configure account security related settings</td>
      <td>✔️</td>
      <td>✖️</td>
      <td>✖️</td>
    </tr> 
</table> -->
<br>
