# Conditional authentication

## What is conditional authentication?

Conditional authentication provides dynamic login capabilities based on the risk factors associated with the user's authentication request. The goal of the conditional authentication is to provide a secure and flexible form of login mechanism.

<img :src="$withBase('/assets/img/guides/conditional-auth/conditional-auth-intro.png')" alt="conditional-authentication">

## Conditional Authentication with Asgardeo

Asgardeo supports [script-based conditional authentication](./configure-conditional-auth). You can use the provided script editor to define dynamic authentication flows depending on your requirements. 

The script editor comes with a set of [predefined templates](./conditional-auth-templates) that will help you to get you started for some of the most common authentication scenarios.

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

Asgardeo supports a set of inbuilt [functions](./conditional-auth-js-api-reference#utility-functions) and [objects](./conditional-auth-js-api-reference#object-reference) that you can refer when writing your conditional authentication script. A simple conditional authentication script will look like the example below.

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
* [Learn how to enable conditional authentication to your application](./configure-conditional-auth)
* [Try our predefined conditional authentication templates](./conditional-auth-templates)
* [Checkout the JS API reference](./conditional-auth-js-api-reference)
