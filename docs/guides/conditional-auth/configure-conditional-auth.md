# Configure conditional authentication

Given below are the high-level steps for enabling [conditional authentication](./README.md) in your application.

## Enable conditional authentication

Follow the steps given below.

1. On the Asgardeo console, click **Develop > Applications**.
2. Select the application for which the conditional sign-in flow should apply, and go to **Sign-in Method**.
3. Click **Start with default configuration** to define the sign-in flow starting with `username and password`.
4. Turn on **Conditional Authentication** by switching the toggle.

   <img :src="$withBase('/assets/img/guides/conditional-auth/enable-conditional-auth.png')" alt="Enable conditional auth in Asgardeo">

   You can now define your conditional authentication script.

## Add conditional authentication script

There are two ways to add a conditional authentication script:

-  Use a predefined template
   
   Asgardeo provides a set of template scripts. You can use these templates to configure conditional authentication for some of the most common scenarios:

   -  [User-Age-Based authentication template](./user-age-based-template/)
   -  [Group-Based authentication template](./group-based-template/)
   -  [New-Device-Based authentication template](./new-device-based-template/)
   -  [IP-Based authentication template](./ip-based-template/)

-  Write a new conditional auth script

   If required, you can also use the script editor to introduce new functions and fields to an authentication script based on your requirement. See the instructions on <a :href="$withBase('/guides/conditional-auth/write-your-first-script/')">writing a custom authentication script</a>. 
