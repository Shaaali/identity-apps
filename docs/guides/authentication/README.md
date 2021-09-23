# Authentication

See the topics given below to manage authentication for your applications.

## Design the login flow

When you register an application, you can customize the login flow.

- Configure Asgardeo login for <a :href="$withBase('/guides/authentication/spa/add-login-to-single-page-app/')">single-page applications with OIDC</a> or <a :href="$withBase('/guides/authentication/web-app/add-login-to-web-app/')">web applications</a> with OIDC or SAML.

- Add <a :href="$withBase('/guides/authentication/social-login/')">social login</a> options such as <a :href="$withBase('/guides/authentication/social-login/add-google-login/')">Google</a>, <a :href="$withBase('/guides/authentication/social-login/add-facebook-login/')">Facebook</a>, and <a :href="$withBase('/guides/authentication/social-login/add-github-login/')">Github</a>.

- Add other <a :href="$withBase('/guides/authentication/enterprise-login/')">enterprise identity providers</a> as login options.

- Configure the number of factors (2FA or MFA) in the login flow to enforce <a :href="$withBase('/guides/authentication/mfa/')">multi-factor authentication</a>.

- Enforce <a :href="$withBase('/guides/authentication/conditional-auth/')">conditional authentication</a> to dynamically change the login flow of a user based on the user’s devices, networks, locations, or usage contexts.

## Manage user attributes

Manage the user attributes you want to share with your application:

- <a :href="$withBase('/guides/authentication/user-attributes/enable-attributes-for-oidc-app/')">Enable user attributes for OpenID Connect apps</a>
- <a :href="$withBase('/guides/authentication/user-attributes/enable-attributes-for-saml-app/')">Enable user attributes for SAML apps</a>

## Manage connections

An Identity Provider (IdP) is responsible for authenticating users and issuing identification information by using security tokens like SAML 2.0, OpenID Connect, OAuth 2.0, and WS-Trust.

Authenticating the users by trusting an assertion from an external identity provider is popularly known as **identity federation**. Identity federation helps to reduce the sign-in and sign-up flows and provides the capability for the users to choose their trusted identity provider for sign-in.

Asgardeo supports a variety of external identity providers with various Open Standard protocols (eg:, OAuth2.0, OpenID Connect, and SAML). You can configure any number of external identity providers to your application via Asgardeo.

Current trends require the usage of services from hundreds of websites in a connected world. Most of these websites need the user to create an account with them by providing a valid email address and password. Remembering all the different user IDs and passwords that you use can be difficult and cumbersome. To make life easier most websites now provide the user with an option to log in using their Facebook account, Twitter account, Google account, etc. Since most internet users have one of these accounts, it makes creating a new account an instant action.

To make this process much easier, the Asgardeo comes with a set of more specific identity providers:

- <a :href="$withBase('/guides/authentication/social-login/')">Social identity providers</a>
- <a :href="$withBase('/guides/authentication/enterprise-login/')">Enterprise identity providers</a>

To connect to other identity providers, which are not social identity providers, you can use open-standard enterprise login.