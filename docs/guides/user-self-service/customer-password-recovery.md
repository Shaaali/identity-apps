# Password recovery for customers

<a :href="$withBase('/guides/users/manage-customers/')">Customers</a> can recover a forgotten password by following the instructions on the Asgardeo sign-in page.

Alternatively, if the account owner is already signed in to the self-service portal, the password can be updated <a :href="$withBase('/guides/user-self-service/change-password/')">using the My Account portal</a>. 

## Prerequisites

<a :href="$withBase('/guides/user-accounts/password-recovery/')">Password recovery</a> should be enabled for business users in the organization.

## Recover password

To reset the password, the account owner should follow these steps. 

1. Go to the login page via a business application or the <a :href="$withBase('/guides/user-self-service/customer-self-service-portal/')">My Account portal</a>.

   <img :src="$withBase('/assets/img/guides/organization/self-service/customer/recover-your-password.png')" alt="Recover your password">

2. Click **Forgot password?**
3. Enter your username and click **Send Reset Link**.
   <img :src="$withBase('/assets/img/guides/organization/self-service/customer/forgot-your-password.png')" alt="Forgot your password">

   An email notification is sent to your email address. 

4. Open the email you received and click **Reset Password**.
   <img :src="$withBase('/assets/img/guides/organization/self-service/customer/reset-password-email.png')" alt="Reset password email">
5. Enter new password and **Proceed**.

Now you have reset your password and can sign in using your new password.

## Check password recovery email
Customers can also check the email address to which their password recovery information is sent to.

1. In the user's MyAccount portal, navigate to **Security > Account Recovery**.
    <img :src="$withBase('/assets/img/guides/users/account-recovery.png')" alt="Account recovery in Asgardeo MyAccount">
2. Click the **eye** icon, to check the recovery email address.
   ::: warning The recovery email address will be the user's email address. This cannot be updated.
3. Click **Done**.
