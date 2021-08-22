# Configure self-registration

<a :href="$withBase('/guides/users/manage-customers/')">Customers</a> can self-register to an organization in Asgardeo via an application’s login page. This creates a new customer account in the organization. The self-registration capability is enabled in Asgardeo organizations by default. 

To disable this capability in your organization or to change the default configurations, see the following instructions:

1. On the Asgardeo console, click **Manage > Self Registration**.
    <img :src="$withBase('/assets/img/guides/organization/self-registration/configure-self-registration.png')" alt="Configure self registration">
2. Configure the below settings.

    -   To disable self-registration, turn off the toggle.
    -   To configure how self-registration works, update the following settings and click **Update**.
        <table>
            <tbody>
                <tr>
                    <td><b>Account Verification</b></td>
                    <td>Enables email verification at self-registration. The new account is activated only after the user verifies the email.</td>
                </tr>
                <tr>
                    <td><b>Account verification link expiry time</b></td>
                    <td>Specifies account verification link expiry time in minutes. If you enter 60 min, the account verification email expires after 60 min.</td>
            </tr>
            </tbody>
        </table>

<a :href="$withBase('/guides/organization/self-service/customer/self-register/')">Try self-registration</a>.