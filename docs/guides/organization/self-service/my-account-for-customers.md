# My Account Portal for customers
Asgardeo provides My Account portal to help you to self manage your account and easy access to manage your information from anywhere.

Asgardeo provides below capabilities for the easy access to manage your information:
- Update profile information
- Change password
- View and revoke consents given to applications
- View linked social accounts
- View and revoke active sessions
- Update the account recovery email
- Discover your applications and maintain them
- Enroll for TOTP

## Access My Account portal
<a :href="$withBase('/guides/user-management/manage-users/user-accounts/customer/')">Customers</a> are managed by the organization. So their My Account portal is accessible via their organization.

You can access their My Account portal by accessing the below URL.

```
https://myaccount.asgardeo.io/t/{organization_name}
```

**Sample My Account portal** URL :
```
https://myaccount.asgardeo.io/t/bifrost
```

<br>


You can log in to My Account portal and self-manage your information. Below section guides you on how to manage your information via My Account.

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
