# Password recovery for customers

Users in an Asgardeo organization can recover a forgotten password by following the instructions on the Asgardeo sign-in page provided that <a :href="$withBase('/guides/user-accounts/password-recovery/')">password recovery is enabled</a> for business users in the organization.

To recover your password:
1. Go to the sign-in page via <a :href="$withBase('/guides/your-asgardeo/my-account/#access-my-account-portal')">My Account Portal</a>. 
    ::: info
    If you are an owner or a collaborator, you can choose to navigate to the [Asgardeo Console](https://console.asgardeo.io/) instead. If you are a customer, you can choose to navigate to a business application you have been granter access to instead. 
    :::

   <img :src="$withBase('/assets/img/guides/organization/self-service/customer/recover-your-password.png')" alt="Recover your password">
2. Click **Forgot password?**
3. Enter your username and click **Send Reset Link**.
   <img :src="$withBase('/assets/img/guides/organization/self-service/customer/forgot-your-password.png')" alt="Forgot your password">

   An email notification is sent to your email address. 

4. Open the email you received and click **Reset Password**.
   <img :src="$withBase('/assets/img/guides/organization/self-service/customer/reset-password-email.png')" alt="Reset password email">
5. Enter new password and **Proceed**.

Now you have reset your password and can sign in using your new password.
