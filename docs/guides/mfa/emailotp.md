# MFA with Email OTP

Email OTP is a one-time password (OTP) sent to the user's verified email address, which the user must submit during login (as an additional authentication step). This password is typically valid for a very short period of time. 

During Email OTP authentication, the user is required to access the verified email account in quicktime to get the OTP. This prevents unauthorized users from accessing the OTP, and thereby adds an extra layer of security to the authentication process.

Follow the instructions given below to configure multi-factor authentication (MFA) using Email OTP in Asgardeo.

## Prerequisites
To get started, you need to have an application registered in Asgardeo.
If you don't already have one, see the instructions on <a :href="$withBase('/guides/applications/')">registering an application</a>.

::: tip Note
   - You can use Email OTP for multi-factor authentication only if a previous authentication step is configured with **username and password** or an <a :href="$withBase('/guides/identity-providers/')">identity provider</a>.  
   - Email OTP cannot be used as a first step in your login flow.
:::
  
## Set up Email OTP
Asgardeo has some default settings for email OTP, which are sufficient for most cases. If required, you can change the default settings as explained below.

To update the default Email OTP settings:

1. In the [Asgardeo Console](https://console.asgardeo.io), go to **Connections > Email OTP** and click **Setup**.
2. Update the following parameters in the **Settings** tab:

    <img :src="$withBase('/assets/img/guides/mfa/emailotp/setup-email-otp.png')" alt="Setup email OTP in Asgardeo">

    <table>
      <tr>
        <td><b>Email OTP expiry time</b></td>
        <td>Specifies the expiry time of the OTP token. The generated OTP will not be valid after this expiry time.</td>
      </tr>
      <tr>
        <td><b>Email OTP token length</b></td>
        <td>Specifies the number of characters allowed in the OTP token</td>
      </tr>
      <tr>
        <td><b>Use only numeric characters for OTP token</b></td>
        <td>Specifies whether to use only numeric characters in the OTP token. If this is selected, the generated OTP token contains only digits (0-9). If this option is not selected, the token contains alphanumeric characters.</td>
      </tr>
    </table>
3. Once you update the Email OTP settings, click **Update**.

## Enable Email OTP for an app
To enable Email OTP for MFA, you need to add **Email OTP** in the authentication flow of the application.

Follow the steps given below.
1. In the Asgardeo Console, go to **Develop > Applications**.
2. Select the application to add Email OTP.
3. Go to the **Sign-in Method** tab of the selected application.
4. Click **Start with default configuration**. 
5. Add a new step and click **Add Authentication**.
6. Select **Email OTP** and click **Add**.
   This adds Email OTP as an authentication option for the configured step.
    <img :src="$withBase('/assets/img/guides/mfa/emailotp/enable-email-otp.png')" alt="Enable email OTP authenticator in Asgardeo">
7. Click **Update**.

## How it works

If Email OTP is enabled in the authentication flow of your application, the customer is prompted with the Email OTP authentication step once the first authentication step is completed. Given below are the high-level steps that follow:

1. Asgardeo sends the OTP to the user's verified email address.
2. Asgardeo prompts the user to enter the OTP code.
   <img :src="$withBase('/assets/img/guides/mfa/emailotp/enter-email-otp.png')" alt="Authenticate with email OTP in Asgardeo">
3. If required, the user can request Asgardeo to resend the OTP. The new OTP invalidates the previously sent OTP.
4. The user enters the OTP and clicks **Continue**.
5. If the authentication is successful, the user can access the application.
