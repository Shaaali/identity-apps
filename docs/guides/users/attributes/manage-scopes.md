# Manage OIDC Scopes

[OIDC Scopes](https://openid.net/specs/openid-connect-core-1_0.html#ScopeClaims) are a convenient way of limiting the amount of user attributes an application can access. Each scope corresponds to a group of user attributes or claims. If these user attributes are required for your application, you can <a :href="$withBase('#using-scopes-in-client-applications')">use the scopes</a> in your app configuration to get the corresponding user attributes.

An application is **not** allowed access to user attributes that are beyond the scopes requested by the application.

## Default OIDC scopes
Asgardeo uses `openid` as a marker scope during authentication and it will not send any user attributes for the `openid` scope. 

OpenID Connect defines the following scope values that can be used to request user attributes:

<table>
  <tr>
    <th>Scope</th>
    <th>Description</th> 
    <th>Attributes</th>
  </tr>
   <tr>
      <td>profile</td>
      <td>This requests to retrieve profile information of the user.</td>
      <td>name, family_name, given_name, middle_name, nickname, preferred_username, profile, picture, website, gender, birthdate, zoneinfo, locale, updated_at</td>
    </tr>
  <tr>
    <td>email</td>
    <td>This requests access to the end-user's email related claims.</td>
    <td>email, email_verified</td>
  </tr>
  <tr>
    <td>address</td>
    <td>This scope value requests access to the address view of the user. This will return sub fields of the address claim.</td>
    <td>address, street_address</td>
  </tr>
  <tr>
      <td>phone</td>
      <td>This scope value requests access to the information related to the phone number of the user.</td>
      <td>phone_number, phone_number_verified</td>
  </tr>
</table>

## Create custom scopes

To view OpenID Connect Scopes in your organization:

1. On the Asgardeo console, select **Manage > Scopes**
2. Select **New OIDC Scope**.
3. Enter values for the required properties and click **Next**:
    <img :src="$withBase('/assets/img/guides/organization/scopes/create-scopes.png')" alt="Create OpenID Connect scopes" width=500>
    <table>
            <tbody>
                <tr>
                    <td>**Scope**</td>
                    <td>The scope name that will be shared with applications.</td>
                </tr>
                <tr>
                    <td>**Display name**</td>
                    <td>The scope name that will be displayed in the Scopes section.</td>
                </tr>
                <tr>
                    <td>**Description**</td>
                    <td>The description of the scope.</td>
                </tr>
            </tbody>
        </table>
4. Select the attributes that should be bound to the scope and click **Finish**.
    <img :src="$withBase('/assets/img/guides/organization/scopes/select-attributes.png')" alt="Select attributes bound to scope" width=500>

## Edit Scopes

All scopes except for the `openid` scope are configurable. You can add or delete attributes based on your requirement. 

1. On the Asgardeo console, go to **Manage > Scopes**
2. Select the scope to edit.
3. To add a new attribute to the scope, click **New Attribute** and enter the details of the attribute.
4. To delete an attribute, click **Delete**

## Use scopes in client applications

You can request for scopes in applications registered in Asgardeo if your applications require further information about the customer. 

1. When configuring the authentication request in your client app, append the **scope** parameter with the scopes that you need as shown below.

    ``` json{6} no-line-numbers
    {
      "clientID": "<client ID>",
      "serverOrigin": "https://api.asgardeo.io/t/<organization_name>",
      "signInRedirectURL": "https://localhost:5000",
      "signOutRedirectURL": "https://localhost:5000",
      "scope": [ "profile", "address", "phone" ]
    }
    ```
    ::: info
    Find out more about <a :href="$withBase('/get-started/start-integrating-apps')">configuring your application</a> in Asgardeo
    :::

2. <a :href="$withBase('/guides/authentication/user-attributes/enable-attributes-for-oidc-app/#select-user-attributes')">Select the user attributes</a> that the client application requires (ensure they are bound by the requested scopes). 
3. When the user logs in, Asgardeo will prompt the user with a consent screen to authorize access to the user attributes.
4. Once the user consents, your application will have access to the requested user attributes.











