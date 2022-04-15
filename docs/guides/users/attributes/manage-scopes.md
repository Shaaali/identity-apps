# Manage OIDC Scopes

[OpenID Connect (OIDC) Scopes](https://openid.net/specs/openid-connect-core-1_0.html#ScopeClaims) are a convenient way of limiting the amount of user information that an application can access when a user logs in. 

In Asgardeo, each piece of user information is mapped to a <a :href="$withBase('/guides/users/attributes/manage-attributes/')">user attribute</a> and an OIDC scope corresponds to a group of user attributes (or claims). For example, see the <a :href="$withBase('#default-oidc-scopes')">default OIDC scopes</a> and the list of corresponding user attributes. 

::: info 
An application is **not** allowed access to user attributes that are beyond the scopes requested by the application.
:::

If your application needs to retrieve a certain set of user attributes when a user logs in, you can use the scopes relevant to those attributes when you <a :href="$withBase('#use-scopes-in-client-applications')">configure your app</a>.

## Default OIDC scopes
Asgardeo uses `openid` as a marker scope during authentication and it will not return any user attributes for the `openid` scope. 

Listed below are the default OpenID Connect scopes that you can use to request user attributes for your application:

<table>
  <tr>
    <th>Scope</th>
    <th>Description</th> 
    <th>Attributes</th>
  </tr>
   <tr>
      <td><code>profile</code></td>
      <td>This requests to retrieve profile information of the user.</td>
      <td>
        <ul>
          <li>name</li>
          <li>family_name</li>
          <li>given_name</li>
          <li>middle_name</li>
          <li>nickname</li>
          <li>preferred_username</li>
          <li>profile</li>
          <li>picture</li>
          <li>website</li>
          <li>gender</li>
          <li>birthdate</li>
          <li>zoneinfo</li>
          <li>locale</li>
          <li>updated_at</li>
        </ul>
      </td>
    </tr>
  <tr>
    <td><code>email</code></td>
    <td>This requests access to the end-user's email related claims.</td>
    <td>
      <ul>
        <li>email</li>
        <li>email_verified</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><code>address</code></td>
    <td>This scope value requests access to the address view of the user. This will return sub fields of the address claim.</td>
    <td>
      <ul>
        <li>address</li>
        <li>street_address</li>
      </ul>
    </td>
  </tr>
  <tr>
      <td><code>phone</code></td>
      <td>This scope value requests access to the information related to the phone number of the user.</td>
      <td>
        <ul>
          <li>phone_number</li>
          <li>phone_number_verified</li>
        </ul>
      </td>
  </tr>
</table>

## Create custom scopes

To add new scopes to your organization:

1. In the Asgardeo console, go to **Manage > Scopes**
2. Click **New OIDC Scope** to open the **Create OpenID Connect Scope** dialog.
   <img :src="$withBase('/assets/img/guides/organization/scopes/create-scopes.png')" alt="Create OpenID Connect scopes" width=500>
3. Enter values for the required properties and click **Next**:
    <table>
            <tbody>
                <tr>
                    <td>**Scope**</td>
                    <td>The scope name that will be shared with applications.</td>
                </tr>
                <tr>
                    <td>**Display name**</td>
                    <td>The scope name that will be displayed in the Scopes section. Applications should use this scope name to request the corresponding attributes.</td>
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

1. In the Asgardeo console, go to **Manage > Scopes**
2. Select the scope to edit.
3. To add a new attribute to the scope, click **New Attribute** and enter the details of the attribute.
4. To delete an attribute from the scope, click **Delete**.

## Use scopes to request attributes

As an application developer, you can follow the steps given below to request user information from Asgardeo using scopes.

1. First, go to the Asgardeo console and see that your application has the <a :href="$withBase('/guides/authentication/user-attributes/enable-attributes-for-oidc-app/#select-user-attributes')">required attributes enabled</a>. 
2. Go to **Manage > Scopes** in the console and see that the required attributes are bound to a **scope**. 

   You may have <a :href="$withBase('#default-oidc-scopes')">default OIDC scopes</a> or <a :href="$withBase('#create-custom-scopes')">custom scopes</a>.

3. When configuring the authentication request in your client app, append the **scope** parameter with the scopes that you need:

    ``` json{6}
    {
      "clientID": "<client ID>",
      "baseUrl": "https://api.asgardeo.io/t/<organization_name>",
      "signInRedirectURL": "https://localhost:3000",
      "signOutRedirectURL": "https://localhost:3000",
      "scope": [ "profile", "address", "phone" ]
    }
    ```
    ::: info
    Find out more about <a :href="$withBase('/get-started/start-integrating-apps')">configuring applications</a>.
    :::

When the user logs in, Asgardeo will prompt the user with a consent screen to authorize access to the user attributes. Once the user consents, your application will have access to the requested user attributes.











