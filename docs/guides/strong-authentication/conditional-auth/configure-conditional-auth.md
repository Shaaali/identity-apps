# Configure conditional authentication for an application

This guide gives you the steps to define conditional authentication to your application. We assume that you have already
configured an application in Asgardeo to represent your app.

Refer the [Manage applications](../../applications/README.md) section to register your application in Asgardeo if not
done already.

## Enable conditional authentication

1. On the Asgardeo console, click **Develop > Applications**.

2. Select **Applications** from the side panel.

3. Select the application for which the conditional authentication should be defined.

   <img :src="$withBase('/assets/img/guides/conditional-auth/app-list-view.png')" alt="list-configured-applications-view">

4. Select the "**Sign-in Method**" tab in the application details view.

5. Click on "**Start with default configuration**" button to customize the login flow starting with the username and password
   login.
   
   <img :src="$withBase('/assets/img/guides/conditional-auth/sign-in-method.png')" alt="sign-in-method-tab-view">

6. Enable the "**Conditional Authentication**" radio button.

   <img :src="$withBase('/assets/img/guides/conditional-auth/sign-in-method-start-default.png')" alt="sign-in-method-start-default-view">

## Add a conditional authentication script

You can add authentication steps or use a template to configure conditional authentication depending on your
requirement.

**Use a template**

Asgardeo provides a set of conditional authentication script templates based on common scenarios.

These scripts contain inline comments explaining the logic on how the conditional authentication happens. You can also
find details such as prerequisites, the required parameters and the default authentication steps by clicking on the information icon(:information_source:).

<img :src="$withBase('/assets/img/guides/conditional-auth/conditional-auth-templates.png')" alt="conditional-auth-templates-view">

<br>

Refer the [Conditional authentication scenarios section](./conditional-auth-templates.md) for detailed guide on each template.

**Writing a new script**

If required, you can also use the script editor to introduce new functions and fields to an authentication script based
on your requirement, and then engage the script to the application’s authentication configuration.

A sample authentication script is shown below.

```js
   var onLoginRequest = function(context) {
      // Some possible initializations...
       executeStep(1, {
           onSuccess: function (context) {
               // Logic to execute if step 1 succeeded
               executeStep(2, {
                   onSuccess: function (context){
                       // Logic to execute if step 2 succeeded
                   },
                   onFail: function (context){
                       // Logic to execute if step 2 failed
                   }
               });
           }
           onFail: function(context){
               // Logic to execute if step 1 failed
               executeStep(3);
           }
      });
   }
   
   function someCommonFunction(context) {
       // Do some common things
   }
```
