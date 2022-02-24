
# Add passwordless login with FIDO2

FIDO2 lets you go passwordless by allowing your application users to use hardware-based authenticators in place of passwords. Application users can either use a FIDO2 supported hardware security key or a built-in authenticator on their devices such as a fingerprint scanner, TouchID, FaceID or Windows Hello to authenticate.

::: info What is FIDO2?
 The FIDO Alliance, whose mission is to reduce the world’s reliance on passwords, introduced its latest specifications, collectively called FIDO2. FIDO2 specifications are the World Wide Web Consortium’s (W3C) Web Authentication specification (WebAuthn) and FIDO alliance’s corresponding Client to Authenticator Protocol (CTAP).
:::

You can configure FIDO2 passwordless login for your apps using two methods:
- **Security key/Biometrics**: An application user uses a FIDO2 supported authenticator to log in without entering a username or a password.
- **Identifier first + Security key/Biometrics**: An application user enters a username first. Asgardeo verifies the identity from the username and prompts the user to use a FIDO2 supported authenticator to log in.

## Prerequisites
To get started, you need to have an application registered in Asgardeo. If you don't already have one, register one of the following application types.
    -   <a :href="$withBase('/guides/applications/register-single-page-app/')">Single-page app</a>
    -   <a :href="$withBase('/guides/applications/register-oidc-web-app/')">Web app with OIDC</a>
    -   <a :href="$withBase('/guides/applications/register-saml-web-app/')">Web app with SAML</a>

::: info
 To try out passwordless login, you need to have a FIDO2 security key registered in Asgardeo. Learn how to <a :href="$withBase('/guides/user-self-service/register-security-key/')">register your FIDO2 security key</a>.
:::

## Enable passwordless login for an app

Follow the steps given below to enable **passwordless** login for your application. 

1. On the Asgardeo console, use one of the following options to start:
    - Option 1: Go to **Develop > Applications**.
    - Option 2: Go to **Connections > Passwordless** and click **Set up**.
2. Select the application for which passwordless login needs to be enabled.
3. Go to the **Sign-in Method** tab:

    - If you don't have a customized login flow, you can click **Add Passwordless login**. 

      <img :src="$withBase('/assets/img/guides/passwordless/add-passwordless-login.png')" alt="Configuring passwordless login in Asgardeo">
    
    - If you have an already built login flow, you can add security Key/biometrics as an additional authenticator for the first step.

      <img :src="$withBase('/assets/img/guides/passwordless/passwordless-login-step.png')" alt="Customize the login flow">

4. Click **Update** to save your changes.

::: info
 Application users need to register their security keys/biometrics via the My Account app prior to using passwordless login. Be sure to educate your users on how to <a :href="$withBase('/guides/user-self-service/register-security-key/')">register a security key/biometrics via My Account.</a>
:::

## Try it out

Follow the steps given below.

1. Access the application URL.
2. Click **Login** to open the Asgardeo login page.
3. On the Asgardeo login page, click **Sign In With Security Key**. You will be redirected to the FIDO2 login page.
    <img :src="$withBase('/assets/img/guides/passwordless/sign-in-with-security-key.png')" alt="Sign In With Security Key in Asgardeo" width="500">
4. Follow the instructions given by your browser or device to login.
    <img :src="$withBase('/assets/img/guides/passwordless/sign-in-with-security-key-page.png')" alt="Sign In With Security Key page in Asgardeo" width="500">
