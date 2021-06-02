# Conditional authentication scenarios

Asgardeo provides a set of pre-defined templates for common conditional authentication scenarios. This section guides
you through each of these templates. We will discuss the scenario that the template covers, the prerequisites, the
required parameters, the default authentication steps and how you can try out the behaviour of this template.

Following is the list of conditional authentication templates available in Asgardeo

**User**

* <a href="../conditional-auth-scenarios/user-aged-based-template">User-Aged-Based</a>

  Allows log in to application if the user's age is over the configured value. User's age is calculated using the user's
  date of birth attribute.

* <a href="../conditional-auth-scenarios/group-based-template">Group-Based</a>

  Prompts 2FA to the users who belong to any of the given sets of groups.

**Request**

* <a href="../conditional-auth-scenarios/new-device-based-template">New-Device-Based</a>

  Sends an email notification and/or prompts 2FA to the users who are logging in from a previously unused device. A
  cookie is used to identify whether the device has been used before.

**Environment**

* <a href="../conditional-auth-scenarios/ip-based-template">IP-Based</a>

  Prompts 2FA to the users who are logging outside of the given ip range.
