# Add Conditional Authentication

With conditional authentication, the login flow in an application is dependent on the risk factors associated with the user's login request.
This allows you to strengthen the authentication flow when the risk is higher. In Asgardeo, conditional authentication is configured using a [script](#authentication-script).

<img class="borderless-img" :src="$withBase('/assets/img/guides/conditional-auth/conditional-auth-intro.png')" alt="what is conditional authentication">

## Authentication script

The authentication script, for configuring dynamic authentication flows in Asgardeo, uses a functional language, which is similar to Javascript. You can configure the script using the script editor in the Asgardeo console. You can either use a [template](#script-templates) or <a :href="$withBase('/guides/authentication/conditional-auth/write-your-first-script/')">write a custom script</a>.

This scripting language supports a set of inbuilt <a :href ="$withBase('/references/conditional-auth/api-reference/#utility-functions')">functions</a> and <a :href ="$withBase('/references/conditional-auth/api-reference/#object-reference')">objects</a>. A simple conditional authentication script will look like the following:

```js
var onLoginRequest = function(context) {
    // Some possible initializations...
    executeStep(1);
        if (doStepUp(context) === true) { 
            executeStep(2);
        }
};

function doStepUp(context) {
    // A function that decides whether to enforce second step based on the request context.
    return true;
}
```

::: info
Find out more about the scripting language in the <a :href="$withBase('/references/conditional-auth/api-reference/')">Conditional Authentication API Reference</a>.
:::

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

The available templates are categorized as follows:
- Access Control - These templates restrict user login to the application based on specified conditions.
- Adaptive MFA - These templates prompt two-factor authentication for login attempts based on specific conditions.

The pre-defined templates are listed below. 

<table>
  <tr>
    <th>Template</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a :href="$withBase('/guides/authentication/conditional-auth/user-age-based-template/')">User-Age-Based</a></td>
    <td>This configures a login flow where users can log in only if their age is over the configured value. The user's age is calculated using the <code>date of birth</code> attribute.</td>
  </tr>
    <tr>
    <td><a :href="$withBase('/guides/authentication/conditional-auth/group-based-template-access-control/')">Group-Based (Access Control)</a></td>
    <td>This login flow allows login only for users who belong to any of the given set of groups</td>
  </tr>
  <tr>
    <td><a :href="$withBase('/guides/authentication/conditional-auth/sign-in-option-based-template/')">Sign-In-Option-Based</a></td>
    <td>This login flow prompts two-factor authentication (2FA) only for users who are signing in with a given option.</td>
  </tr>
  <tr>
    <td><a :href="$withBase('/guides/authentication/conditional-auth/new-device-based-template/')">New-Device-Based</a></td>
    <td>This login flow sends an email notification and/or prompts two-factor authentication for users who are logged in from a previously unused device.</td>
  </tr>
    <tr>
    <td><a :href="$withBase('/guides/authentication/conditional-auth/group-based-template/')">Group-Based (Adaptive MFA)</a></td>
    <td>This login flow prompts two-factor authentication (2FA) for users who belong to any of the given set of groups.</td>
  </tr>
  <tr>
    <td><a :href="$withBase('/guides/authentication/conditional-auth/ip-based-template/')">IP-Based</a></td>
    <td>This login flow prompts two-factor authentication for users who log in from outside the given IP range.</td>
  </tr>
</table>

If required, you can also use the script editor to introduce new functions and fields to an authentication script based on your requirement. See the instructions on <a :href="$withBase('/guides/authentication/conditional-auth/write-your-first-script/')">writing a custom authentication script</a>. 

## Secrets
Secrets securely store values associated with external APIs. These secrets are used in conditional authentication scripts when Asgardeo is required to interact with an external API (service endpoint) during the authentication process. You can securely store secrets on the Asgardeo console and retrieve them whenever required for conditional authentication. 

## What's next

* <a :href ="$withBase('/guides/authentication/conditional-auth/configure-conditional-auth/')">Configure conditional authentication</a>
* <a :href ="$withBase('/references/conditional-auth/api-reference/')">Conditional authentication API reference</a>
