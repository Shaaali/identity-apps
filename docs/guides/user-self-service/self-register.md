# Self-register as a customer

<a :href="$withBase('/guides/users/manage-customers/')">Customers</a> can self-register to an Asgardeo organization from the login page that is accessed via a business application. 

## Prerequisites

 <a :href="$withBase('/guides/user-accounts/configure-self-registration/')">Self-registration</a> should be enabled for business users in the organization.

## Self-register

To self-register as a customer, the user should follow these steps. 

1. Go to the login page via the customer <a :href="$withBase('/guides/user-self-service/customer-self-service-portal/')">My Account Portal</a> or a business application.
   <img :src="$withBase('/assets/img/guides/organization/self-service/customer/recover-your-password.png')" alt="Self register to organization" width="300">
2. Click **Create an account**.
3. Enter the email address, password, and any other mandatory information that the application requests.
4. Click **Sign Up**.

   ::: info
   If **Account Verification** is enabled for <a :href="$withBase('/guides/user-accounts/configure-self-registration/')">self-registration</a> in your organization, an email is sent to your registered email address.
   :::

   <img :src="$withBase('/assets/img/guides/organization/self-service/customer/account-verification-email.png')" alt="Account verification email notification" width="500">

5. Confirm your account from the email.
    
## Access your account

Now the customer can log in to the My Account portal or any business applications in your organization. Use the email address as your username.
   
If you try to log in with an **unverified email address**, Asgardeo will show an error message saying that the account has not been verified and shows options to resend verification. This is applicable only if **Account Verification** setting is enabled in <a :href="$withBase('/guides/user-accounts/configure-self-registration/')">self registration configuration</a>.

<img :src="$withBase('/assets/img/guides/organization/self-service/customer/login-with-unverified-email.png')" alt="Login with unverified email" width="300"> 

If you have not received the confirmation email and want Asgardeo to resend the email, click **Resend**.