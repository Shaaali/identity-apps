# Manage organization settings

This sections explains how owners can create multiple organizations in the Asgardeo console, switch between them, manage user attributes, perform account recovery, provide customers with self-service capabiliities, and mitigate risks via configuring security measures for user accounts. 


- Owners can onboard users to the respective organizations and access the resources within the organizations. 

You can find instructions to perform this in <a :href="$withBase('/guides/organization-settings/organizations/')">Manage multiple organizations</a>.

- User attributes represent a user's information within an organization. These default attributes can either be mapped to OpenID Connect claims or SCIM 2 attributes. 

You can find instructions to perform this in <a :href="$withBase('/guides/organization-settings/attributes/')">Manage user attributes</a>.

- In Asgardeo, accounts can be recovered by administrators or by the users themselves. Customers can recover their forgotten passwords using the self-service passwords recovery option. 

You can find instructions to perform this in <a :href="$withBase('/guides/organization-settings/password-recovery/')">Configure password recovery</a>.

- Customers can self-register to an organization in Asgardeo via an application’s login page.

You can find instructions to perform this in <a :href="$withBase('/guides/organization-settings/configure-self-registration/')">Configure self-registration</a>.

- When you onboard several users onto your organization, it is of utmost importance to secure their accounts unauthorized logins or other unfavorable misuses. Some popularly effective methods include locking the account on consecutive failed login attempts and using reCAPTCHA to detect bots. 

Follow the instructions given in the sections below to configure these security measures. 

- <a :href="$withBase('/guides/organization-settings/account-security/login-attempts-security/')">Configure login-attempts security</a>

- <a :href="$withBase('/guides/organization-settings/account-security/bot-detection/')">Configure bot detection</a>