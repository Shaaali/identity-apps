# Branding your organization

You can customize the user interfaces presented to your customers at login, sign-up, and account recovery flows according to the theming guidelines of your organization.

By branding these interfaces, your customers will get a familiar and consistent user experience.

::: info 
See the complete list of [branding options](#branding-preferences) available in Asgardeo currently.
:::

<img class="borderless-img" :src="$withBase('/assets/img/guides/branding/branding-example.png')" alt="Asgardeo branding example">

## Prerequisites

You need to have an organization in Asgardeo. <a :href="$withBase('/get-started/create-asgardeo-account/')">Create an organization</a> if you don’t have one.

## Update your branding

Follow the steps given below to configure the branding preferences for your organization.

1. On the [Asgardeo console](https://console.asgardeo.io/login), go to **Develop > Branding**.

    <img :src="$withBase('/assets/img/guides/branding/branding-asgardeo-console-ui.png')" alt="Asgardeo Console - Branding UI">

2. Update the [available branding options](#branding-preferences) in the **General**, **Design**, and **Advanced** tabs.

   ::: info Note
   -   If you leave any of the branding preferences empty, Asgardeo defaults will be used.
   -   The real-time preview will show you a sample view as you update the values.
   :::

3. Before you save your updates, check the **Go Live** toggle.

   ::: info Important
   If the toggle is already switched on, the changes you save are immediately published to your application flows.
   :::

4. Save your updates.

## Publish your branding

Once you are ready with your branding updates, use the **Go Live** toggle to go live with your updates. 

Note that all subsequent branding changes that you save are immediately published if this toggle is switched on. 

::: info Info
For free-tier subscriptions, the **Powered by Asgardeo** label will display on the Asgardeo-powered interfaces when branding is published.
:::

## Disable your branding

You can temporarily disable your branding preferences by switching off the **Publish Changes** toggle. Your branding updates will still be saved and you can choose to publish them again later.

When disabled, Asgardeo’s default branding will apply to the interfaces in your application login, user registration, and account recovery flows.

## Revert your branding

If you want to revert your branding preferences, scroll down to the **Danger Zone** and click **Revert to default**.

::: warning Warning
Note that this permanently removes all the branding options that you have saved and the Asgardeo defaults will immediately apply.
:::

## Branding preferences

Listed below are the branding preferences that you can customize using the Asgardeo console.

- [General Preferences](./general-preferences.md)
- [Design Preferences](./design-preferences.md)
- [Advanced Preferences](./advanced-preferences.md)

## Extended branding preferences

If you need to apply more branding than what is allowed from the Asgardeo console, contact the Asgardeo team at **asgardeo-help@wso2.com**.
