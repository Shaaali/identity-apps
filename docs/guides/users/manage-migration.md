# Migrate users from an Existing system

Owners of organizations in Asgardeo may need to migrate users from an existing identity provider (IdP) to Asgardeo. This guide gives you details on how to migrate users from an external IdP to Asgardeo.

## When is user migration required?

You may need to migrate users from an external IdP to Asgardeo due to the following requirements:

* The organization requires to combine users from multiple systems to one IdP for proper user management.
* The organization requires to reorganize, restructure, and simplify data storage.
* The organization requires to combine user data storages for centralized user management during company acquisitions and mergers.
* The organization requires to move or separate identity data due to geo-political, data protection, compliance, and regulatory reasons.
* The organization requires effective identity management that can provide additional protection over user data storage, scalability in IAM, and minimal maintenance costs.

## How to migrate users to Asgardeo?

Please contact the Asgardeo help: email address to get help on migrating your existing user base from your current IdP to your Asgardeo organization.

::: info
**Note:** Be sure to use your owner account or a collaborator account with admin privileges to send the request.
:::

Alternatively, you can use traditional approaches of user migration. However these methods run with challenges as listed in the section below.

## Challenges of traditional user transition

Manual user transition is a challenging task, as each and every entry should be added to the new system manually. This brought up the need for automated user migration methods which import users together with their groups, attributes, and other characteristics. These traditional user migration methods run with various challenges which may result in unwanted operational overhead and bad user experience for both the owners and the end users. Users may face challenges in the following areas of traditional user transition methods,

* **Credential transition**

    This is one of the main challenges faced during user migration as systems have their passwords stored as hashes. The password policies and hashing mechanisms vary across different IdPs. Due to this, a hashed password on one system will not be usable on another.


* **Schema matching**

    Schemas of one system might not match with the schemas of the other system which the organization is planning to migrate to. In such scenarios, the administrators will have a huge overhead to make the schemas match by doing a one to one mapping.


* **User experience of the end users**

    Due to the challenge of credential transition, when migrating users in bulk the following methods will be used to activate the user accounts:
  * Setting a temporary password for each user
  * Sending an invitation email with a password reset link.

  The invitation emails may be missed out or ignored by the users and users may even try to use the old password on the new systems. This causes user dissatisfaction towards the organization.

All the challenges mentioned above are taken care of in Asgardeo User Migration. This provides administrators with lower operational overhead and the end users with a better user experience. 
