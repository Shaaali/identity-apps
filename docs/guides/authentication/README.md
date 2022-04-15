# Authentication

See the topics given below to manage authentication for your applications.

## Design the login flow

When you register an application, you can customize the login flow.

- Configure Asgardeo login for <a :href="$withBase('/guides/authentication/add-login-to-single-page-app/')">single-page applications with OIDC</a> or <a :href="$withBase('/guides/authentication/add-login-to-web-app/')">web applications</a> with OIDC or SAML.

- Add <a :href="$withBase('/guides/authentication/social-login/')">social login</a> options such as <a :href="$withBase('/guides/authentication/social-login/add-google-login/')">Google</a>, <a :href="$withBase('/guides/authentication/social-login/add-facebook-login/')">Facebook</a>, and <a :href="$withBase('/guides/authentication/social-login/add-github-login/')">Github</a>.

- Add other <a :href="$withBase('/guides/authentication/enterprise-login/')">enterprise identity providers</a> as login options.

- Configure the number of factors (2FA or MFA) in the login flow to enforce <a :href="$withBase('/guides/authentication/mfa/')">multi-factor authentication</a>.

- Enforce <a :href="$withBase('/guides/authentication/conditional-auth/')">conditional authentication</a> to dynamically change the login flow of a user based on the user’s devices, networks, locations, or usage contexts.

## Manage user attributes

Manage the user attributes you want to share with your application:

- <a :href="$withBase('/guides/authentication/user-attributes/enable-attributes-for-oidc-app/')">Enable user attributes for OpenID Connect apps</a>
- <a :href="$withBase('/guides/authentication/user-attributes/enable-attributes-for-saml-app/')">Enable user attributes for SAML apps</a>

## Manage connections

You can define connections to external identity providers (IdPs) and use them to authenticate users who log in to your applications. This process of authenticating users with external IdPs is known as **identity federation**.

::: info
The external identity provider (IdP) authenticates users and issues the identification information by using security tokens like SAML 2.0, OpenID Connect, OAuth 2.0, and WS-Trust.
:::

### Benefits of identity federation

There are several benefits of using identity federation:

-   Remove the hassle of manually creating accounts for all of your customers.  

    Typically, when a user signs in to an application, a valid email address and password is provided for authentication. For this to work, the user must already have a registered account in the organization. Identity federation allows users to sign in with a user account registered with another IdP and automatically get access to your application. That is, an SSO connection is established between the external IdP and Asgardeo.

    ::: info
    If the IdP connection is <a :href="$withBase('/guides/authentication/jit-user-provisioning/')">configured with JIT user provisioning</a> in Asgardeo, this act of signing in with the external IdP will also automatically create a local account in the Asgardeo user store.
    :::

-   Give customers the convenience of choosing their existing, trusted IdP when they sign in or sign up to your organization in Asgardeo.

### Supported external IdPs

Asgardeo supports a variety of external identity providers with various open-standard protocols (such as OAuth2.0, OpenID Connect, and SAML).

- <a :href="$withBase('/guides/authentication/social-login/')">Social identity providers</a>
- <a :href="$withBase('/guides/authentication/enterprise-login/')">Enterprise identity providers</a>

You can configure any number of external IdPs for your application via Asgardeo.