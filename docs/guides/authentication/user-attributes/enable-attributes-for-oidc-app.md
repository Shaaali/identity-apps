# Enable user attributes for OpenID Connect apps

Asgardeo can share user attributes in the <a :href="$withBase('/guides/users/manage-customers/#manage-the-customer-s-profile')">user profile</a> with the applications. This guide walks you through the steps for sharing user attributes with OpenID Connect applications. 

## Configure user attributes to share
Follow the steps given below to configure the user attributes from the Asgardeo console and to share them with the application.

### Select user attributes

<CommonGuide guide='guides/fragments/manage-app/manage-user-attributes/select-user-attributes.md'/>

### Define mandatory user attributes

<CommonGuide guide='guides/fragments/manage-app/manage-user-attributes/select-mandatory-attributes.md'/>

<img :src="$withBase('/assets/img/guides/applications/attributes/oidc/add-mandatory-user-attributes.png')" alt="Add madatory user attributes in Asgardeo">

## How it works

Let's see how this flow works in Asgardeo.

Once you have configured the user attributes that are required for your application, Asgardeo implements the following process when a customer tries to log in to your app.

<img class="borderless-img" :src="$withBase('/assets/img/guides/applications/attributes/oidc/how-it-works.png')" alt="Provides consent for attributes in Asgardeo">

### Application requests attributes

When the user logs in to the app, a request is sent to Asgardeo with the relevant **scopes**.

Scopes determine which user attributes the application is privileged to access. A client application can only access user attributes that are bound by the requested scopes.

::: info
Learn more about <a :href="$withBase('/guides/users/attributes/manage-scopes')">managing scopes</a> in Asgardeo.
:::

### Checks mandatory attributes

Asgardeo verifies whether the user's profile has values for all the [mandatory attributes](#define-mandatory-user-attributes) that are enabled for the application. If there are missing values, a screen is prompted for the user to enter the missing values.

### Requests user consent

By default, Asgardeo requests the user's consent to share the user attributes with the application.

::: info
Learn more about <a :href="$withBase('/guides/authentication/manage-consent-for-attributes')">managing user consent</a>.
:::

### Shares attributes with the app

If the user gives consent, Asgardeo returns the requested user attributes as well as the **subject** attribute to the application in the **ID token**.

#### Subject Attribute
  
The subject attribute is the unique identifer for a customer. The application receives this value via the [subject attribute](#subject-attribute) parameter in the [ID token](#id-token). In Asgardeo, the user ID assigned to a customer is used as the subject attribute. 

#### ID token

Once the <a :href="$withBase('/guides/authentication/oidc/implement-auth-code/#get-tokens')">application calls the token endpoint</a>, Asgardeo sends the ID token in the response. 

All the user attributes that are requested based on scopes are returned as claims in the ID token. The application can decode the ID token to view the claims.

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