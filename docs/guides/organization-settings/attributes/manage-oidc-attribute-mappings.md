# Manage OpenID Connect attribute mappings
You can map OpenID Connect claims to <a :href="$withBase('/guides/organization-settings/attributes/')">default attributes</a> in the organization. This allows applications that implement OpenID Connect login to receive user information in the ID token.

## View OpenID Connect attributes
To view the OpenID Connect attributes available for your organization:
1. On the Asgardeo Console, Click **Manage > Attributes > Manage Attribute Mappings**.
2. Click **OpenID Connect**.
   <img :src="$withBase('/assets/img/guides/organization/attributes/attribute-mappings/view-oidc-attributes.png')" alt="View OpenID Connect attributes">

You can find the mapped OpenID Connect attributes.

## Add an OpenID Connect attribute
Asgardeo supports some OpenID Connect attributes by default. You can add new OpenID Connect attributes as follows:

1. On the Asgardeo Console, Click **Manage > Attributes > Manage Attribute Mappings**.
2. Click **OpenID Connect**.
3. Click **New Attribute**.
4. Enter values for the following properties: 
   <img :src="$withBase('/assets/img/guides/organization/attributes/attribute-mappings/add-oidc-attribute-mapping.png')" alt="Add OpenID Connect attributes">
   <table>
         <tbody>
           <tr>
               <td>**OpenID Connect Attribute**</td>
               <td>The OpenID Connect attribute name that will be shared with applications in the ID token and userinfo responses.</td>
            </tr>
            <tr>
               <td>**User attribute to map to**</td>
               <td>Select the default attribute that should be mapped to the new OIDC attribute.</td>
            </tr>
         </tbody>
      </table>
5. Click **Save**.     

For example, shown below are a set of OpenID Connect claims mapped to user attribute in Asgardeo:
 <table>
      <thead>
            <tr>
               <th>**OpenID Connect Attribute (OIDC claim)**</th>
               <th>**User attribute to map to**</th>
            </tr>
      </thead>
      <tbody>
      <tr>
        <td><b>`email_home`</b></td>
        <td>`http://wso2.org/claims/emails.home` </td>
      </tr>
      </tbody>
    </table>

You need to enable `email_home` as a <a :href="$withBase('/guides/applications/user-attributes/enable-attributes-for-oidc-app/#select-user-attributes')">requested attribute</a> for your application and also add it to an OIDC scope. You can then configure your application to receive this user information when a user signs in.

After user authentication, you can find the `email_home` claim in the ID token as shown below.

``` no-line-numbers
    {
      "isk": "69b37037a2349763dc48e2a30a62c3feebf0b5823cf869e149352737ddc0ca63",
      "at_hash": "7qgloEmkz3kGBTtH7RI4qw",
      "sub": "user@sample.com",
      "amr": [
        "BasicAuthenticator"
      ],
      "iss": "https://accounts.asgardeo.io/t/bitfrost/oauth2/token",
      "given_name": "alice",
      "sid": "5580be2b-a12d-43a4-823a-9d1352b88269",
      "aud": "UEP40cZTZfxJfGdDWFmTrwqluxoa",
      "c_hash": "VlKxb3UhuYtFEG_VftAa0g",
      "nbf": 1625557031,
      "azp": "UEP40cZTZfxJfGdDWFmTrwqluxoa",
      "nickname": "nick",
      "exp": 1625560631,
      "iat": 1625557031,
      "family_name": "john"
      "email_home": "john_home@gmail.com"
    }
```

<br>

## Delete an OpenID Connect attribute
To delete the OpenID Connect attributes available in your organization:
1. On the Asgardeo console, click **Manage > Attributes > Manage Attribute Mappings**.
2. Click **OpenID Connect**.
3. Select the attribute to delete.
4. Click **Delete**.
5. Select the checkbox to confirm your action. 
6. Click **Confirm**.  
