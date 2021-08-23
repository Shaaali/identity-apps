# Overview - Applications

Regardless of the application type or the development technology, you can connect your application with Asgardeo and
control the way users log in to your app.

Currently, Asgardeo supports integrating two application types. When you select an application type, Asgardeo provides
all the recommended configs in place by default which you can change as needed later.

## Single page applications

Single-page applications(SPAs) are apps that run on the browser and do not require a page reload with change 
in content. 

The main advantage of single-page application is its speed. Since content is dynamically updated as the user interacts with it, user does not need to wait for page reloads. User can experience a seamless flow with high responsiveness from application. 

JavaScript frameworks and libraries, such as AngularJS, React, Vue.js, are some popular technologies adopted to build SPAs.

## Web applications

Web applications(web apps) are the most common type of applications in use. They are usually hosted on a web server
and accessed by the browser. Web applications need authentication as they offer functionality dependent on the 
logged-in user.

## Manage apps in Asgardeo

When you register an application in Asgardeo you can,

* **Enable log in with a standard authentication protocol**: Add authentication for your app using standard identity
  protocols like OpenID Connect and SAML.

* **Manage user attributes shared with your application**: Manage the user attributes you want to share with your
  application.

* **Design your application login flow**: Customize your application's login flow by deciding the number of factors (2FA or MFA) and social login options.

* **Enforce conditional authentication**: Dynamically change the login flow of a user based on the user’s devices, networks, locations, or usage contexts.

## Manage identity providers

An Identity Provider (IdP) is responsible for authenticating users and issuing identification information by using security tokens like SAML 2.0, OpenID Connect, OAuth 2.0 and WS-Trust.

Authenticating the users by trusting an assertion from an external identity provider is popularly known as **identity federation**. Identity federation helps to reduce the sign-in and sign-up flows and provides the capability for the users to choose their trusted identity provider for sign in.

Asgardeo supports variety of external identity providers with various Open Standard protocols (eg:, OAuth2.0, OpenID Connect, and SAML). You can configure any number of external identity providers to your application via Asgardeo.

Current trends require usage of services from hundreds of websites in a connected world. Most of these websites need the user to create an account with them by providing a valid email address and password. Remembering all the different user IDs and passwords that you use can be difficult and cumbersome. To make life easier most websites now provide the user with an option to log in using their Facebook account, Twitter account, Google account, etc. Since most of the internet users have one of these accounts, it makes creating a new account an instant action.

To make this process much easier, the Asgardeo comes with a set of more specific identity providers:

- <a :href="$withBase('/guides/connections/social-login/')">Social identity providers</a>
- <a :href="$withBase('/guides/connections/enterprise-login/')">Enterprise identity providers</a>

To connect to other identity providers which are not social identity providers, you can use open standard enterprise login.