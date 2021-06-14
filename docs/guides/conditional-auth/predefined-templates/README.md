# Predefined templates

Asgardeo provides a set of pre-defined templates for common conditional authentication scenarios. This section guides
you through each of these templates. We will discuss the scenario that the template covers, the prerequisites, the
required parameters, the default authentication steps and how you can try out the behaviour of this template.

These scripts contain inline comments explaining the logic on how the conditional authentication happens. You can also
find details such as prerequisites, the required parameters and the default authentication steps by clicking on the
information icon(:information_source:).

<img :src="$withBase('/assets/img/guides/conditional-auth/conditional-auth-templates.png')" alt="conditional-auth-templates-view"><br>

Following is the list of conditional authentication templates available in Asgardeo

**User**

* [User-Age-Based](./user-age-based-template)

  Allows log in to application if the user's age is over the configured value. User's age is calculated using the user's
  date of birth attribute.

* [Group-Based](./group-based-template)

  Prompts 2FA to the users who belong to any of the given sets of groups.

**Request**

* [New-Device-Based](./new-device-based-template)

  Sends an email notification and/or prompts 2FA to the users who are logging in from a previously unused device. A
  cookie is used to identify whether the device has been used before.

**Environment**

* [IP-Based](./ip-based-template)

  Prompts 2FA to the users who are logging outside of the given ip range.
