# Account Management

This section explains how owners can create multiple organizations in the Asgardeo console, switch between them, manage user attributes, perform account recovery, provide customers with self-service capabilities, and mitigate risks via configuring security measures for user accounts. 

-   Organization owners can manage the resources within their organizations. 

    See <a :href="$withBase('/guides/your-asgardeo/manage-organizations/')">Manage multiple organizations</a> for instructions.

-   User attributes represent a user's information within an organization. These default attributes can either be mapped to OpenID Connect claims or SCIM 2 attributes. 

    See <a :href="$withBase('/guides/users/attributes/')">Manage user attributes</a> for instructions.

-   In Asgardeo, accounts can be recovered by administrators or by the users themselves. Customers can recover their forgotten passwords using the self-service passwords recovery option. 
    
    See <a :href="$withBase('/guides/user-accounts/password-recovery/')">Configure password recovery</a> for instructions.

-   Customers can self-register to an organization in Asgardeo via an application’s login page.
    
    See <a :href="$withBase('/guides/user-accounts/configure-self-registration/')">Configure self-registration</a> for instructions.

-   When you onboard several users onto your organization, it is of utmost importance to secure their accounts from unauthorized logins or other unfavorable misuses. Some popularly effective methods include locking the account on consecutive failed login attempts and using reCAPTCHA to detect bots. 

    See the following sections for instructions on configuring these security measures: 

    - <a :href="$withBase('/guides/user-accounts/account-security/login-attempts-security/')">Configure login-attempts security</a>
    - <a :href="$withBase('/guides/user-accounts/account-security/bot-detection/')">Configure bot detection</a>