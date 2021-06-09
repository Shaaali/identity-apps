# Configure conditional authentication

This guide gives you the steps to define conditional authentication to your application. We assume that you have already
configured an application in Asgardeo to represent your app.

Refer the <a href="../../../applications">Manage applications</a> section to register your application in Asgardeo if not
done already.

## Enable conditional authentication

1. On the Asgardeo console, click **Develop > Applications**.
2. Select the application for which the conditional authentication should be defined, and select **Sign-in Method**" .
3. Click on "**Start with default configuration**" button to customize the login flow starting with the `username and
   password` login.
4. Enable the "**Conditional Authentication**" radio button.
   <img :src="$withBase('/assets/img/guides/conditional-auth/enable-conditional-auth.png')" alt="Enable conditional auth in Asgardeo">

## Add conditional authentication script
There are two ways to add conditional authentication script:
1. [Use a predefined template ](#use-a-predefined-template)
2. [Write conditional authentication script](#write-a-conditional-auth-script)

### Use a predefined template
Asgardeo provides a set of conditional authentication script templates based on common scenarios. You can use these templates to configure conditional authentication depending on your requirements.

These scripts contain inline comments explaining the logic on how the conditional authentication happens. You can also
find details such as prerequisites, the required parameters and the default authentication steps by clicking on the
information icon(:information_source:).

Refer the <a href="../conditional-auth-templates">Conditional authentication scenarios section</a> for the detailed guide on each
template.

### Write a conditional auth script
If required, you can also use the script editor to introduce new functions and fields to an authentication script based
on your requirement, and then engage the script to the application’s authentication configuration.

A sample authentication script is shown below.

```js
   var onLoginRequest = function (context) {
    // Some possible initializations...
    executeStep(1, {
        onSuccess: function (context) {
            // Logic to execute if step 1 succeeded
            executeStep(2, {
                onSuccess: function (context) {
                    // Logic to execute if step 2 succeeded
                },
                onFail: function (context) {
                    // Logic to execute if step 2 failed
                }
            });
        },
        onFail: function (context) {
            // Logic to execute if step 1 failed
            executeStep(3);
        }
    });
}

function someCommonFunction(context) {
    // Do some common things
}
```
