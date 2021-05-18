# Conditional authentication scenarios

Asgardeo provides a set of pre-defined templates for common conditional authentication scenarios. This section guides
you through each of these templates. We will discuss the scenario that the template covers, the prerequisites, the
required parameters, the default authentication steps and how you can try out the behaviour of this template.

Following is the list of conditional authentication templates available in Asgardeo

**User**

* [User-Aged-Based](./conditional-auth-scenarios/user-aged-based-template.md)
  
    Allows log in to application if the user's age is over the configured value. User's age is
  calculated using the user's date of birth attribute.
  
* [Group-Based](./conditional-auth-scenarios/group-based-template.md)
  
    Prompts 2FA to the users who belong to any of the given sets of groups.

**Request**

* [New-Device-Based](./conditional-auth-scenarios/new-device-based-template.md)
  
    Sends an email notification and/or prompts 2FA to the users who are logging in from a previously
  unused device. A cookie is used to identify whether the device has been used before.

**Environment**

* [IP-Based](./conditional-auth-scenarios/ip-based-template.md)
  
    Prompts 2FA to the users who are logging outside of the given ip range.
