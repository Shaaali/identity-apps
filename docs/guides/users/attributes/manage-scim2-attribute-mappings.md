# Manage SCIM 2.0 attribute mappings

Attributes in your organization are mapped to the following SCIM 2.0 schemas mappings:
- [Core schema attributes](https://datatracker.ietf.org/doc/html/rfc7643#section-3.1)
- [User schema attributes](https://datatracker.ietf.org/doc/html/rfc7643#section-4.1)
- [Enterprise schema attributes](https://datatracker.ietf.org/doc/html/rfc7643#section-4.3)
- Custom schema attributes

The attributes in the core, user and enterprise schemas are well-defined in the [SCIM 2.0 specification](https://datatracker.ietf.org/doc/html/rfc7643) and you can't modify the attributes in these schemas. Cutom schema attributes can be added, or deleted by users. 

## View SCIM 2.0 attributes
To view the SCIM 2 attributes mapped to user attributes in your organization:
1. On the Asgardeo console, click **Manage > Attributes> Manage Attribute Mappings**.
2. Click **SCIM 2.0**.
   <img :src="$withBase('/assets/img/guides/organization/attributes/attribute-mappings/view-scim2-attributes.png')" alt="View SCIM2 attributes">

## Add a SCIM 2.0 custom schema attribute
You can add new SCIM 2.0 custom schema attributes as follows:

1. On the Asgardeo console, click **Manage > Attributes > Manage Attribute Mappings**.
2. Click **SCIM 2.0**.
3. Click **New Attribute**.
4. Enter values for the following properties: 
   <img :src="$withBase('/assets/img/guides/organization/attributes/attribute-mappings/add-scim2-attribute-mapping.png')" alt="Add OpenID Connect attributes">
   <table>
         <tbody>
           <tr>
               <td>**SCIM Attribute**</td>
               <td>The SCIM attribute name that will be shared with applications.</td>
            </tr>
            <tr>
               <td>**User attribute to map to**</td>
               <td>Select the default attribute that should be mapped to the new SCIM attribute.</td>
            </tr>
         </tbody>
      </table>
5. Click **Save**.     

## Delete a SCIM 2.0 custom schema attribute
To delete the SCIM 2.0 custom schema attributes available in your organization:
1. On the Asgardeo console, click **Manage > Attributes > Manage Attribute Mappings**.
2. Click **SCIM 2.0 > Custom Schema**.
3. Select the attribute to delete.
4. Click **Delete**.
5. Enable the checkbox to confirm you action.
6. Click **Confirm**.