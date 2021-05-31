# Conditional authentication

## What is conditional authentication?
Conditional authentication flexible form of authentication that tightens security and provides flexible form of authentication. This enables adjusting the authentication strength based on the context at hand.

## Conditional Authentication with Asgardeo

Asgardeo supports script-based conditional authentication, which allows using a provided script editor to set up appropriate authentication factors depending on the requirement. 

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

If necessary, the script editor can also be used to introduce new [functions and fields](conditional-auth-js-api-reference) to an authentication script based on specific requirements.

```js
var onLoginRequest = function(context) {
    // Some possible initializations...
    executeStep(1);
        if (doStep(context) === true) { 
        	executeStep(2);
        }
}

function doStep(context) {
    // A function that decides whether to enforce second step based on the request context.
    return true;
}
```

## What's next
* [Learn how to enable conditional authentication to your application](configure-conditional-auth)
* [Try our predefined conditional authentication templates](conditional-auth-templates)
* [Checkout the JS API reference](conditional-auth-js-api-reference)
