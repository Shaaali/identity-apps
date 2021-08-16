# Overview - Conditional authentication

With conditional authentication, the login flow in an application is dependent on the risk factors associated with the user's login request.
This allows you to strengthen the authentication flow when the risk is higher. In Asgardeo, conditional authentication is configured using a [script](#authentication-script).

<img class="borderless-img" :src="$withBase('/assets/img/guides/conditional-auth/conditional-auth-intro.png')" alt="what is conditional authentication">

## Authentication script

The authentication script, for configuring dynamic authentication flows in Asgardeo, is a functional language, which is similar to Javascript. You can configure the script using the script editor in the Asgardeo console. You can either use a template or write a custom script.

This scripting language supports a set of inbuilt [functions](./api-reference#utility-functions) and [objects](./api-reference#object-reference). A simple conditional authentication script will look like the following:

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

## Script templates

The script editor in Asgardeo comes with a set of predefined templates to get you started with some of the most common conditional authentication scenarios. These scripts contain inline comments explaining the conditions that are applied.

<img :src="$withBase('/assets/img/guides/conditional-auth/conditional-auth-templates.png')" alt="conditional-auth-templates-view"><br>

<!--
You can define scripts that can consider the following evaluation criteria:

- User attributes
- User behavior
- Authentication Request Attributes
- Application attributes

You can define dynamic authentication flows that can perform actions similar to the following:

- Control the authentication step selection
- Change user attributes
- Send email notifications
- Redirect users to an error page etc. 

We will discuss the scenario that the template covers, the prerequisites, the
required parameters, the default authentication steps, and how you can try out the behavior of this template.
-->

The available templates are listed below.

* [User-Age-Based](./user-age-based-template/)

  This configures a login flow where users can log in only if their age is over the configured value. The user's age is calculated using the
  `date of birth` attribute.

* [Group-Based](./group-based-template/)

  This login flow prompts 2FA for users who belong to any of the given set of groups.

* [New-Device-Based](./new-device-based-template/)

  This login flow sends an email notification and/or prompts 2FA for users who are logged in from a previously unused device. A cookie is used to identify whether the device has been used before.

* [IP-Based](./ip-based-template/)

  This login flow prompts 2FA for users who are logging in from outside the given IP range.

If required, you can also use the script editor to introduce new functions and fields to an authentication script based on your requirement. See the instructions on <a :href="$withBase('/guides/conditional-auth/write-your-first-script/')">writing a custom authentication script</a>. 

## What's next
* [Set up conditional authentication for your application](./configure-conditional-auth)
* [Checkout the JS API reference](./api-reference)