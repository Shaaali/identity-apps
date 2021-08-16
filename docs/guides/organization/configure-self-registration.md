# Configure self registration

<a :href="$withBase('/guides/user-management/manage-users/user-accounts/customer')">Customers</a> can self-register themselves to an organization in Asgardeo. Asgardeo provides the capability to enable  or disable self-registration feature and configure the settings. 
When self registration is enabled, users can register via the application’s login page. This creates a new customer account in the organization.

Self-registration for customers is enabled in the Asgardeo organizations by default. Asgardeo provides some default configurations. If you want to change the default password recovery configurations, you can follow this guide.
                                                                                                                                        
To configure self registration:
1. On the Asgardeo Console, click **Manage > Self Registration**.
    <img :src="$withBase('/assets/img/guides/organization/self-registration/configure-self-registration.png')" alt="Configure self registration">
2. Configure the below settings.
    <table>
          <tbody>
             <tr>
                  <td><b>Account Verification</b></td>
                  <td>Account Verification enables email verification at the self registration. The new account is activated only after the user verifies the email</td>
             </tr>
             <tr>
                <td><b>Account verification link expiry time</b></td>
                <td>Specifies account verification link expiry time in minutes. If you enter 60 min, account verification email will be expired after 60 min.</td>
           </tr>
          </tbody>
       </table>
6. Click **Update** once you configure the required settings.  

See how to <a :href="$withBase('/guides/organization/self-service/customer/self-register/')">try self registration</a>.     



