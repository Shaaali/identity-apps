# Enable user attributes for OpenID Connect apps

Asgardeo can share user attributes in the <a :href="$withBase('/guides/users/manage-customers/#manage-the-customer-s-profile')">user profile</a> with the applications. This guide walks you through the steps for sharing user attributes with OpenID Connect applications. 

## Configure user attributes to share
Follow the steps given below to configure the user attributes from the Asgardeo console to share them with the application.

### Select user attributes
<CommonGuide guide='guides/fragments/manage-app/manage-user-attributes/select-user-attributes.md'/>

### Define mandatory user attributes

<CommonGuide guide='guides/fragments/manage-app/manage-user-attributes/select-mandatory-attributes.md'/>

From the attributes that are listed in the **Attributes** tab, you can select the **Mandatory** attributes as shown below.

<img :src="$withBase('/assets/img/guides/applications/attributes/oidc/add-mandatory-user-attributes.png')" alt="Add madatory user attributes in Asgardeo">

### Disable the consent screen

 <CommonGuide guide='guides/fragments/manage-app/manage-user-attributes/disable-user-consent.md'/>

## How it works
Let's see how this flow works in Asgardeo.

Once you have configured the user attributes that are required for your application, Asgardeo implements the following process when a customer tries to log in to your app.

<img class="borderless-img" :src="$withBase('/assets/img/guides/applications/attributes/oidc/how-it-works.png')" alt="Provides consent for attributes in Asgardeo">

### Application requests with scopes
OAuth2.0 clients use scopes to determine the privilege to access the protected resources. However, for OpenID Connect, [scopes](https://openid.net/specs/openid-connect-core-1_0.html#ScopeClaims) can be used to request the information of users in the form of claims.

Asgardeo uses `openid` as a marker scope and it will not send any user attributes for the `openid` scope. Only the user attributes that are common for the <a :href="$withBase('#select-user-attributes')">selected user attribute</a> and the requested scopes (additional scopes except openid) will be returned.

OpenID Connect defines the following scope values that can be used to request claims:

<table>
  <tr>
    <th>Scope</th>
    <th>Description</th> 
    <th>Claims</th>
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

### Get consent for user attributes
 
<CommonGuide guide='guides/fragments/manage-app/manage-user-attributes/get-user-consent.md'/>

<img :src="$withBase('/assets/img/guides/applications/attributes/oidc/provide-consent.png')" width="400" alt="Provides consent for attributes in Asgardeo">

### Share user attributes with apps
Asgardeo shares the user attributes, for which the user provided consent, with the application along with the **subject** attribute via the [ID token](#id-token) and the [user info response](#userinfo-response). 

#### ID token

Once the <a :href="$withBase('/guides/authentication/oidc/implement-auth-code/#get-tokens')">application calls the token endpoint</a>, Asgardeo sends the ID token in the response. 
All the user attributes that are requested based on scopes are returned as claims in the ID token.

The application can decode the ID token to view the claims.

_A sample ID token is given below:_

``` no-line-numbers
{
  "isk": "69b37037a2349763dc48e2a30a62c3feebf0b5823cf869e149352737ddc0ca63",
  "at_hash": "7qgloEmkz3kGBTtH7RI4qw",
  "sub": "user@sample.com",
  "amr": [
    "BasicAuthenticator"
  ],
  "iss": "https://api.asgardeo.io/t/bitfrost/oauth2/token",
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
}
```

#### Userinfo response

In addition to getting attributes from the ID token, the application can <a :href="$withBase('/guides/authentication/oidc/implement-auth-code/#retrieve-user-details')">invoke the userinfo endpoint</a> and get user attributes along with the subject attribute.

_A sample userinfo response is given below:_

```json no-line-numbers
{
    "sub": "user@sample.com",
    "nickname": "nick",
    "given_name": "alice",
    "family_name": "john"
}
```

