# Enroll TOTP via MyAccount
If the user wants to use another authenticator app for getting the OTP or if the user has deleted the scanned QR from the authenticator app, the user can configure it via the My Account portal. The QR code that is generated via My Account is the same as the code prompted during the first-time login.
 
1. In the user's MyAccount portal, navigate to **Security > Multi-Factor Authentication**.
    <img :src="$withBase('/assets/img/guides/mfa/totp/mfa-via-myaccount.png')" alt="Add MFA from Asgardeo MyAccount">
2. Click the **+** icon and scan the prompted QR code using an authenticator.
    <img :src="$withBase('/assets/img/guides/mfa/totp/scan-qr-code-via-myaccount.png')" alt="SCAN QR code in Asgardeo MyAccount">
3. Enter the TOTP code obtained after scanning the QR code.
4. Click **Verify**.