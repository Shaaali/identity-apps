# Enable Google authentication

Follow the steps in this guide to enable [social login](../../concepts/authentication/social-login.md) and let your
users log in to an application using their Google credentials.

---

::: tip Before you begin

Before you begin, follow the [Google documentation](https://support.google.com/googleapi/answer/6158849) to create an
OAuth Credential on the Google developer console and obtain a client ID & secret.

You can use the following URL as the Authorized Redirect URI.

```
https://dev.accounts.asgardeo.io/t/<organization_name>/commonauth
```

:::

## Add an identity provider

An identity provider is the application that maintains your user's account and is managing their identity for you. In
this case, your identity provider is Google.

The identity provider in Asgardeo represents the connection to Google.

1. On the Asgardeo Console, click **Develop > Identity Providers**.

2. Click **New Identity Provider** and click **Google**.

3. Enter the **Client ID** and **Client Secret** values you obtained from Google.

4. Click **Finish**.

5. Click the **application** link on the **Quick Start** tab.

6. Select an application from the application list that appears. You will be redirected to the **Sign-on Method** tab of
   your application.

7. Drag and drop the **Google** authenticator to **Step 1**.

    <img :src="$withBase('/assets/img/guides/google-social-login.png')" alt="foo">

## What's next?

- See [manage identity providers](../social-login/manage-identity-providers.md) to manage your identity provider
  settings.
- See [multi-factor authentication](../strong-authentication/mfa-qsg.md) for more guidance on MFA.






