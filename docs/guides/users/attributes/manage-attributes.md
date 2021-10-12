# Manage attributes

An attribute is a piece of information about a particular user. It can be anything associated with the user, such as name, group, preferences, etc. 

User attributes represent information directly related to the user, such as the street address, username, email, first name, and more.

You need user attributes to maintain the required user information in an organization. You can select the user information for your applications by using these attributes. Also, the user information displayed in user profiles is managed using attributes.

See the information given below to manage attributes in your organization.

## View attributes
To view the attributes available for your organization:
1. On the Asgardeo console, click **Manage > Attributes**.
2. Click **Attributes**.
   <img :src="$withBase('/assets/img/guides/organization/attributes/view-attributes.png')" alt="View attributes">

You can now see the complete list of attributes along with **Attribute Display Name** and **Attribute** name.

## Update attributes
To update the properties of a user attribute:
1. On the Asgardeo console, click **Manage > Attributes**.
2. Click **Attributes** to see the list of attributes.
3. Click **Edit** for the attribute you want to update.
   <img :src="$withBase('/assets/img/guides/organization/attributes/edit-attributes.png')" width="800" alt="Edit attributes"> 
   ::: info Info
     The **Attribute** field specifies the unique identifier of the attribute. It always starts with `http://wso2.org/claims`. This cannot be edited.
   :::
4. Update the following values.
   <table>
      <tbody>
         <tr>
            <td><b>Attribute Display Name</b></td>
            <td>Update the display name of the attribute that will show in user profiles.</td>
         </tr>
         <tr>
              <td><b>Description</b></td>
              <td>Update the description for the attribute.</td>
         </tr>
       <tr>
             <td><b>Display this attribute on the user's profile</b></td>
             <td>If this checkbox is selected, the attribute is displayed in customer's user profile.</td>
        </tr>
        <tr>
            <td><b>Make this attribute required on user's profile</b></td>
            <td>If this checkbox is selected, the customer user is required to specify a value for this attribute on the profile.</td>
        </tr>
        <tr>
           <td><b>Make this attribute read-only on user's profile</b></td>
           <td>If this checkbox is selected, the user information displayed using this attribute will be read-only in customer's user profiles.</td>
      </tr>
      </tbody>
   </table>
6. Click **Update**.
