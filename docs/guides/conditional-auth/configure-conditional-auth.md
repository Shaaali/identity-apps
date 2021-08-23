# Configure conditional authentication

Given below are the high-level steps for enabling [conditional authentication](./README.md) in your application.

## Enable conditional authentication

Follow the steps given below.

1. On the Asgardeo console, click **Develop > Applications**.
2. Select the application for which the conditional sign-in flow should apply and go to **Sign-in Method**.
3. Click **Start with default configuration** to define the sign-in flow starting with `username and password`.
4. Turn on **Conditional Authentication** by switching the toggle.

   <img :src="$withBase('/assets/img/guides/conditional-auth/enable-conditional-auth.png')" alt="Enable conditional auth in Asgardeo">

   You can now define your conditional authentication script.

## Add conditional authentication script

There are two ways to add a conditional authentication script:

-  Use a <a :href="$withBase('/guides/conditional-auth/#script-templates')">predefined template</a>.

-  Write a <a :href="$withBase('/guides/conditional-auth/write-your-first-script/')">new conditional auth script</a>.
