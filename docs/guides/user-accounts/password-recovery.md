# Configure password recovery

Asgardeo provides the support for self-service password recovery option for <a :href="$withBase('/guides/users/manage-customers/')">customers</a> on the login page. The user will receive a password reset link via email upon request. 
This guide walks you through setting up password recovery for users to recover a lost or forgotten password. 

To configure password recovery:
1. On the Asgardeo Console, click **Manage > Account Recovery**.
2. Go to **Password Recovery**.
3. Click **Configure** to open the **Password Recovery** page.
4. Turn on **Enabled** to enable this configuration.
    <img :src="$withBase('/assets/img/guides/organization/account-recovery/password-recovery/configure-password-recovery.png')" alt="Configure password recovery">
5. Configure the below settings if you want to change the default password recovery configurations.
    <table>
          <tbody>
             <tr>
                  <td><b>Notify on successful recovery</b></td>
                  <td>Specifies whether to notify the user via an email when password recovery is successful.</td>
             </tr>
             <tr>
                <td><b>Recovery link expiry time</b></td>
                <td>Specifies password recovery link expiry time in minutes. If you enter 60 min, password recovery email notification will be expired after 60 min.</td>
           </tr>
          </tbody>
       </table>
6. Click **Update** once you configure the required settings.  

<a :href="$withBase('/guides/user-self-service/recover-password/')">Try self-service password recovery</a>.     
