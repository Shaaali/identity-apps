# My Account Portal for customers

Customers can easily access and self-manage their Asgardeo accounts from anywhere by using the [My Account portal](https://myaccount.asgardeo.io) for customers.

You can do the following on this portal:
- Update profile information
- Change password
- View and revoke consents given to applications
- View linked social accounts
- View and revoke active sessions
- Update the account recovery email
- Discover and maintain your applications
- Enroll TOTP

## Access My Account portal

<a :href="$withBase('/guides/user-management/manage-users/user-accounts/customer/')">Customers</a> can access the My Account portal via their organization.

The format of the My Account portal URL is as follows:

```
https://myaccount.asgardeo.io/t/{organization_name}
```

Example URL:

```
https://myaccount.asgardeo.io/t/bifrost
```

<br>


Customers can sign-in to their My Account portal and self-manage their information as follows:

## Update profile information
<CommonGuide guide='guides/fragments/self-service/update-profile.md'/>

## Change password 
<CommonGuide guide='guides/fragments/self-service/change-password.md'/>

## Manage linked social accounts
<CommonGuide guide='guides/fragments/self-service/manage-linked-social-accounts.md'/>

## Manage consents given to applications
<CommonGuide guide='guides/fragments/self-service/manage-consents.md'/>

## Manage login sessions
<CommonGuide guide='guides/fragments/self-service/manage-login-sessions.md'/>
