# Self register to Asgardeo by customers

Customers can self-register to an Asgardeo organization if admins have <a href="/guides/organization/configure-self-registration/">enabled self registration to their organization</a>.

To self register:
1. Go to the login page via the My Account Portal or a business application.
   <img :src="$withBase('/assets/img/guides/organization/self-service/customer/recover-your-password.png')" alt="Self register to organization">
2. Click **Create an account**
3. Enter your email address and click **Continue**.
   <img :src="$withBase('/assets/img/guides/organization/self-service/customer/self-registration-enter-username.png')" alt="Self registration">
4. Enter your details, select **I have read and understood the Privacy Policy**, and click **Sign Up**.
5. Enter your username and click **Send Reset Link**.
   <img :src="$withBase('/assets/img/guides/organization/self-service/customer/account-verification-email.png')" alt="Account verification email notification">

If you try to log in with an unverified email address, Asgardeo will show an error message saying that the account has not been verified and shows options to resend verification. This is applicable only if **Account Verification** setting is enabled in <a href="/guides/organization/configure-self-registration/">self registration configuration</a>. 

Click **Resend** to resend the email verification.
 <img :src="$withBase('/assets/img/guides/organization/self-service/customer/login-with-unverified-email.png')" alt="Login with unverified email"> 
