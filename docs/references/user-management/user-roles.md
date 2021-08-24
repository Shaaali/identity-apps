# Asgardeo default roles

Roles consist of the permissions that are required by users to access the Asgardeo resources such as functions available on the Asgardeo Console, REST APIs, etc.

When you assign a role to a user, you are controlling what the user can do in Asgardeo.

The following default roles are available in Asgardeo:
1. **Administrator**: This role includes all administrative permissions in the organization. An organization can have many users with the administrator role. An administrator is a privileged user who has overall access to the organization.

2. **Application developer**: This role includes the permissions required for registering and managing applications. The application developer is a privileged user who can integrate applications with Asgardeo. 

Only <a :href="$withBase('/guides/users/manage-collaborators/')">Collaborators</a> can be assigned to Asgardeo roles.

<!--
This is commented until this role is onboarded to product
3. **Administrative auditor**: Role which provides read-only access to the system. This will be useful for support operations and troubleshooting.
-->

The following tables list the permissions enabled for roles in the organization.

## Users
<table>
  <tr>
    <th>Permission</th>
    <th>Administrator</th> 
    <th>Application developer</th> 
  </tr>
  <tr>
    <td>View users</td>
    <td>✔️</td>
    <td>✖️</td>
  </tr>
  <tr>
      <td>Onboard users</td>
      <td>✔️</td>
      <td>✖️</td>
  </tr>
  <tr>
    <td>Update user profiles</td>
    <td>✔️</td>
    <td>✖️</td>
  </tr>
  <tr>
      <td>Delete users</td>
      <td>✔️</td>
      <td>✖️</td>
    </tr>
    <tr>
      <td>Terminate user session</td>
      <td>✔️</td>
      <td>✖️</td>
    </tr>
    <tr>
      <td>View groups</td>
      <td>✔️</td>
      <td>✖️</td>
    </tr>
    <tr>
      <td>Create groups</td>
      <td>✔️</td>
      <td>✖️</td>
    </tr>
    <tr>
      <td>Update and delete groups</td>
      <td>✔️</td>
      <td>✖️</td>
    </tr>
    <tr>
      <td>View assigned users to groups</td>
      <td>✔️</td>
      <td>✖️</td>
    </tr>
    <tr>
      <td>Assign users to groups</td>
      <td>✔️</td>
      <td>✖️</td>
    </tr>
    <tr>
      <td>Configure account recovery scenarios</td>
      <td>✔️</td>
      <td>✖️</td>
    </tr>
    <tr>
      <td>Configure self registration for users</td>
      <td>✔️</td>
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
  </tr>
  <tr>
    <td>View apps</td>
    <td>✔️</td>
    <td>✔️</td>
  </tr>
  <tr>
      <td>Register apps</td>
      <td>✔️</td>
      <td>✔️</td>
  </tr>
  <tr>
    <td>Update and delete apps</td>
    <td>✔️</td>
    <td>✔️</td>
  </tr>
  <tr>
      <td>Update Sign-in methods</td>
      <td>✔️</td>
      <td>✔️</td>
  </tr>
  <tr>
    <td>Update protocol settings</td>
    <td>✔️</td>
    <td>✔️</td>
  </tr>
</table>

<br>

## Connections

<table>
  <tr>
    <th>Permission</th>
    <th>Administrator</th> 
    <th>Application developer</th> 
  </tr>
  <tr>
    <td>View connections</td>
    <td>✔️</td>
    <td>✔️</td>
  </tr>
  <tr>
      <td>Create new connections</td>
      <td>✔️</td>
      <td>✔️</td>
  </tr>
  <tr>
    <td>Update and delete connections</td>
    <td>✔️</td>
    <td>✔️</td>
  </tr>
</table>

<br>

## Attributes and scopes
<table>
  <tr>
    <th>Permission</th>
    <th>Administrator</th> 
    <th>Application developer</th> 
  </tr>
  <tr>
    <td>View attributes</td>
    <td>✔️</td>
    <td>✔️</td>
  </tr>
  <tr>
      <td>Create new attributes</td>
      <td>✔️</td>
      <td>✖️</td>
  </tr>
  <tr>
    <td>Update and delete attributes</td>
    <td>✔️</td>
    <td>✖️</td>
  </tr>
  <tr>
      <td>View scopes</td>
      <td>✔️</td>
      <td>✔️</td>
    </tr>
    <tr>
        <td>Add new attributes to scopes</td>
        <td>✔️</td>
        <td>✔️</td>
    </tr>
    <tr>
      <td>Update and delete scopes</td>
      <td>✔️</td>
      <td>✔️</td>
    </tr>
</table>

<br>
