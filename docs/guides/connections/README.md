# Identity Providers

An Identity Provider (IdP) is responsible for authenticating users and issuing identification information by using security tokens like SAML 2.0, OpenID Connect, OAuth 2.0 and WS-Trust.

Authenticating the users by trusting an assertion from an external identity provider is popularly known as **identity federation**. Identity federation helps to reduce the sign-in and sign-up flows and provides the capability for the users to choose their trusted identity provider for sign in.

Asgardeo supports variety of external identity providers with various Open Standard protocols (eg:, OAuth2.0, OpenID Connect, and SAML). You can configure any number of external identity providers to your application via Asgardeo.

## Identity providers supported by Asgardeo
Current trends require usage of services from hundreds of websites in a connected world. Most of these websites need the user to create an account with them by providing a valid email address and password. Remembering all the different user IDs and passwords that you use can be difficult and cumbersome. To make life easier most websites now provide the user with an option to log in using their Facebook account, Twitter account, Google account, etc. Since most of the internet users have one of these accounts, it makes creating a new account an instant action.

To make this process much easier, the Asgardeo comes with a set of more specific [social identity providers](./social-login). 

Asgardeo supports:
1. [Social Identity Providers](./social-login)
2. [Enterprise Identity Providers](./enterprise-login)

To connect to other identity providers which are not social identity providers, you can use [open standard enterprise login](./enterprise-login).

