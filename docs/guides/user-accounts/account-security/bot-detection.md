# Configure bot detection

Asgardeo uses [reCAPTCHA](https://developers.google.com/recaptcha/) to detect bots that attempt unauthorized login or other types of internet abuse. This is a free service provided by Google that verifies whether a user is a human or a robot. It comes in the form of a widget.

When bot detection is enabled, Asgardeo enforces reCAPTCHA validation in the following scenarios:
- Customer login
- Customer password recovery
- Customer self registration

::: info
This feature is enabled by default for all the organizations in Asgardeo. You will not be able to disable this for your organization at present.
:::

To check the flows in which reCAPTCHA validation will be enforced in your organization:
1. On the Asgardeo console, click **Manage > Account Security**.
2. Click **Configure** to open the **Bot Detection** security page.
   <img :src="$withBase('/assets/img/guides/organization/account-security/bot-detection/enable-bot-detection.png')" alt="Enable bot detection">
