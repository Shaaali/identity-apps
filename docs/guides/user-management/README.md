# Users

The users in Asgardeo are the digital representations of the identities of physical users who interact with your 
organization. With Asgardeo, the identity lifecycle of each of these users can be easily managed by the admins of the 
organization.
  
User management is a vital requirement for any organization. Asgardeo provides a centralized user management solution
 for you to easily manage operations like assigning users to groups, assigning roles to users and thereby providing 
 access to certain operations, enforcing password changes, and many more.

## Types of user accounts in Asgardeo

Asgardeo supports a set of user account types based on their relationship to the organization. Given below are the 
user account categories supported by Asgardeo.
  
**Owner**

This is the owner of the organization who self-registers to Asgardeo by creating an organization. The owner has all 
the administrative rights to the organization.

**Collaborator**

A user who can manage the organization and has access to the organization’s administrative operations such as 
application onboarding and user management. A collaborator user can be invited to the organization and assigned with 
permissions by its admins.

**Customer**

A user that is registered within the organization, and consumes and accesses applications in that organization. A 
customer can self-register or can be onboarded to an organization by its admins.

## Create consumer user accounts

1. Select the **Manage** tab in the Console
2. Move to the **Users** section from the left navigation
3. Click on “New User” button
4. Select the type of the user(Customer/Collaborator) you want to onboard. 

<img :src="$withBase('/assets/img/guides/users/add-new-user-button-click-view.png')" alt="add-new-user-button-click-view">

5. Select **Customer** user

6. Provide the following details.

<img :src="$withBase('/assets/img/guides/users/add-consumer-user-form.png')" alt="add-new-user-button-click-view">

- **Email (username):** A unique email address to identify the user. This emailaddress will be used as the username in Asgardeo.
    <br>
    You can't change this username of a user once the user is created.
- **First Name:** First name of the user.
    <br>
    You can add/change this later.
- **Last Name:** Last name of the user.
    <br>
    You can add/change this later.

- **Select the method to set the user password:**
<br>
  - **Invite user to set their own password**
  If you select this option, an email with confirmation link will be sent to the provided email (username) to set their own password
  - **Set a temporary password for the user**
  
  <img :src="$withBase('/assets/img/guides/users/create-users-by-settinng-their-password".png')" alt="add-new-user-button-click-view">

  
 