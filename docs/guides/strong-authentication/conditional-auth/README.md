# Conditional authentication

## What is conditional authentication?

Conditional authentication is a secure and flexible form of authentication. It enables validating multiple factors to determine the authenticity of a login attempt before granting access to a resource. The factors that are used for validation can depend on the risk probability associated with the particular user access request. This enables adjusting the authentication strength based on the context at hand.

## Conditional Authentication with Asgardeo

Asgardeo supports script-based conditional authentication. You can use the provided script editor to define dynamic authentication flows depending on your requirements. 

The script editor comes with a set of [predefined templates](conditional-auth-templates) that will help you to get you started for some of the most common authentication scenarios.

You can define scripts that can consider the following evaluation criteria:

- User attributes
- User behaviour
- Authentication Request Attributes
- Application attributes

You can define dynamic authentication flows that can perform actions similar to the following:
- Control the authentication step selection
- Change user attributes
- Send email notifications
- Redirect users to an error page etc.

Asgardeo supports a set of inbuilt [functions](conditional-auth-js-api-reference#utility-functions) and [objects](conditional-auth-js-api-reference#object-reference) that you can refer when writing your conditional authentication script. A simple conditional authentication script will look like the example below.

```js
var onLoginRequest = function(context) {
    // Some possible initializations...
    executeStep(1);
        if (doStepUp(context) === true) { 
        	executeStep(2);
        }
}

function doStepUp(context) {
    // A function that decides whether to enforce second step based on the request context.
    return true;
}
```

## What's next
* [Learn how to enable conditional authentication to your application](configure-conditional-auth)
* [Try our predefined conditional authentication templates](conditional-auth-templates)
* [Checkout the JS API reference](conditional-auth-js-api-reference)
