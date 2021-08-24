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
   <img :src="$withBase('/assets/img/guides/organization/attributes/edit-attributes.png')" alt="Edit attributes"> 
   ::: tip Note
     **Attribute** specifies the unique identifier of the attribute. It always start with `http://wso2.org/claims`. This cannot be edited.
   :::
4. Update the following values.
   <table>
      <tbody>
         <tr>
            <td>**Attribute Display Name**</td>
            <td>Update the display name of the attribute that will show in user profiles.</td>
         </tr>
         <tr>
              <td>**Description**</td>
              <td>Update the description for the attribute.</td>
         </tr>
       <tr>
             <td>**Display this attribute on the user's profile**</td>
             <td>If this checkbox is selected, the attribute displays in user profiles.</td>
        </tr>
        <tr>
           <td>**Make this attribute read only on user's profile**</td>
           <td>If this checkbox is selected, the user information displayed using this attribute will be read-only in user profiles.</td>
      </tr>
      </tbody>
   </table>
6. Click **Update**.