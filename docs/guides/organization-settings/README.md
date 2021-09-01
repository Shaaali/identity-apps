# Manage organization settings

## Manage multiple organizations

Owners can create multiple organizations in the Asgardeo console and switch between them as well. Then they can onboard users to the respective organizations and access the resources within the organizations. 

You can find instructions to perform this in <a :href="$withBase('/guides/organization-settings/organizations/')">Manage multiple organizations</a>.

## Manage user attributes

User attributes represnt a user's information within an organization. These default attributes can either be mapped to OpenID Connect claims or SCIM 2 attributes. 

You can find instructions to perform this in <a :href="$withBase('/guides/organization-settings/attributes/')">Manage user attributes</a>.

## Account recovery 

In Asgardeo, accounts can be recovered by administrators or by the users themselves. Customers can recover their forgotten passwords using the self-service passwords recovery option. 

You can find instructions to perform this in <a :href="$withBase('/guides/organization-settings/password-recovery/')">Configure password recovery</a>.

## Configure self-registration

Customers can self-register to an organization in Asgardeo via an application’s login page.

You can find instructions to perform this in <a :href="$withBase('/guides/organization-settings/configure-self-registration/')">Configure self-registration</a>.

## Manage account security 

When you onboard several users onto your organization, it is of utmost importance to secure their accounts unauthorized logins or other unfavorable misuses. Some popularly effective methods include locking the account on consecutive failed login attempts and using reCAPTCHA to detect bots. 

Follow the instructions given in the sections below to configure these security measures. 

- <a :href="$withBase('/guides/organization-settings/account-security/login-attempts-security/')">Configure login-attempts security</a>

- <a :href="$withBase('/guides/organization-settings/account-security/bot-detection/')">Configure bot detection</a>