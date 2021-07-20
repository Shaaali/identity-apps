# MFA with Email OTP

Email OTP is a one-time password (OTP) sent to the user's verified email address, which the user must submit during login (as an additional authentication step). This password is typically valid for a very short period of time. 

During Email OTP authentication, the user is required to access the verified email account in quicktime to get the OTP. This prevents unauthorized users from accessing the OTP, and thereby adds an extra layer of security to the authentication process.

Follow the instructions given below to configure multi-factor authentication (MFA) using Email OTP in Asgardeo.

## Prerequisites
To get started, you need to have an application registered in Asgardeo.
If you don't already have one, see the instructions on <a href="/guides/applications/">registering an application</a>.

::: tip Note
   - You can use Email OTP for multi-factor authentication only if a previous authentication step is configured with **username and password** or an <a href="/guides/identity-providers/">identity provider</a>.  
   - Email OTP cannot be used as a first step of your login flow.
:::
  
## Set up Email OTP
Asgardeo has some default settings for email OTP which are sufficient for most cases. 
If you think you need to change the default settings to better suit your organization, you can go ahead and change them.

If you decide to go with default settings, you can skip this section.

To set up Email OTP:
1. In the [Asgardeo Console](https://console.asgardeo.io), go to **Connections > Email OTP** and click **Setup**.
   <img :src="$withBase('/assets/img/guides/mfa/emailotp/setup-email-otp.png')" alt="Setup email OTP in Asgardeo">
2. Update the following settings if required:
    <table>
      <tr>
        <td><b>Email OTP Expiry Time</b></td>
        <td>Specifies the expiry time of the OTP token. The generated OTP will not be valid after this expiry time</td>
      </tr>
      <tr>
        <td><b>Email OTP Token Length</b></td>
        <td>Specifies the number of allowed characters in the OTP token</td>
      </tr>
      <tr>
        <td><b>Use only numeric characters for OTP token</b></td>
        <td>Specifies whether to use only numeric characters in the OTP token. If this is selected, the generated OTP token contains only digits (0-9). If this option not selected, the token contains alphanumeric characters.</td>
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
5. Click **Add new step > Add Authentication**
6. Click **Email OTP**. This adds Email OTP as an authentication option for the configured step.
7. Click **Add**.
    <img :src="$withBase('/assets/img/guides/mfa/emailotp/enable-email-otp.png')" alt="Enable email OTP authenticator in Asgardeo">
6. Click **Update**.

## How it works
When a customer user tries to authenticate to a business application enabled with Email OTP, and once he successfully logged in with the first step of login flow, 
1. The user will receive an OTP to his verified email address.
2. Asgardeo will prompt to enter the OTP code.
   <img :src="$withBase('/assets/img/guides/mfa/emailotp/enter-email-otp.png')" alt="Authenticate with email OTP in Asgardeo">
3. User can click **Resend** to resend the OTP. This will invalidate the previously sent OTP.
4. Enter the OTP and click **Continue**.
6. If the authentication is successful, user can access the application.
