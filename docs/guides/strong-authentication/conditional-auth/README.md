# Conditional authentication

## What is conditional authentication?
Conditional authentication, also known as step-up authentication, is an evolved and flexible form of multi-factor authentication that tightens security when the possibility of a security breach is higher. Additional authentication steps such as SMS OTP, FIDO, fingerprint authentication etc., can be configured and deployed in such a way that the system is able to decide which steps to prompt during the authentication process depending on the user’s risk profile and their behaviour.

## Why is it needed?
With conditional authentication, the authentication strength is adjusted in real-time based on the context at hand, before granting access to a resource.

Organisations can apply precisely the right level of security to each and every login request, instead of issuing static procedures for everyone to follow under all circumstances. 

It improves convenience for the user while still tightening the security around authentication.

## Using conditional authentication with Asgardeo

Asgardeo supports script-based conditional authentication, which allows using a provided script editor to set up appropriate authentication factors depending on the requirement. 

The script editor provides [a set of predefined templates](conditional-auth-templates.md) that can be used to easily set up conditional authentication for some of the most common authentication scenarios. 

If necessary, the script editor can also be used to introduce new [functions and fields](conditional-auth-js-api-reference.md) to an authentication script based on specific requirements, and the script can then be engaged to the service provider’s authentication step configuration.

## Related Links
* [Try out conditional authentication](configure-conditional-auth.md)
* [Set up common authentication scenarios](conditional-auth-templates.md)
* [Learn about the functions and fields related to authentication scripts](conditional-auth-js-api-reference.md)
* [Multi Factor authentication](../mfa-qsg.md)
