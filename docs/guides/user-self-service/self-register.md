# Self-register as a customer

<a :href="$withBase('/guides/users/manage-customers/')">Customers</a> can self-register to an Asgardeo organization from the login page that is accessed via a business application or the **My Account** portal.

## Prerequisites

 <a :href="$withBase('/guides/user-accounts/configure-self-registration/')">Self-registration</a> should be enabled for business users (customers) in the organization.

## Self-register

To self-register as a customer, the user should follow these steps. 

1. Go to the login page via the customer <a :href="$withBase('/guides/user-self-service/customer-self-service-portal/')">My Account Portal</a> or a business application.
   <img :src="$withBase('/assets/img/guides/organization/self-service/customer/recover-your-password.png')" alt="Self register to organization" width="400">
2. Click **Create an account**.
3. Enter the email address, password, and any other information that the application requests.

   ::: info
   All the user information that is enabled for a customer user profile is listed here. You can configure this list by configuring the <a :href="$withBase('/guides/users/attributes/manage-attributes/#update-attributes')">user attributes</a>.
   :::

   <img :src="$withBase('/assets/img/guides/organization/self-service/customer/self-registration-form.png')" alt="Account verification email notification" width="400">

4. Click **Sign Up** to create the account.

   ::: info
   If **Account Verification** is enabled for <a :href="$withBase('/guides/user-accounts/configure-self-registration/')">self-registration</a> in your organization, an email is sent to the user's registered email address.
   :::

5. The user can confirm the account from the email.

   <img :src="$withBase('/assets/img/guides/organization/self-service/customer/account-verification-email.png')" alt="Account verification email notification" width="600">
    
Now, the customer can log in to the My Account portal or any business applications in your organization. The email address is the username.
   
If the user tries to log in with an **unverified email address**, Asgardeo will show an error message saying that the account has not been verified and shows options to resend verification. This is applicable only if **Account Verification** is enabled for <a :href="$withBase('/guides/user-accounts/configure-self-registration/')">self registration</a>.

<img :src="$withBase('/assets/img/guides/organization/self-service/customer/login-with-unverified-email.png')" alt="Login with unverified email" width="400">