# Branding your organization

You can customize the user interfaces presented to your customers at login, sign-up, and account recovery flows according to the theming guidelines of your organization.

By branding these interfaces, your customers will get a familiar and consistent user experience.

::: info 
See the complete list of [branding options](#branding-preferences) available in Asgardeo currently.
:::

<img class="borderless-img" :src="$withBase('/assets/img/guides/branding/branding-example.png')" alt="Asgardeo branding example" width="1000">

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

3. Before you save your updates, check the **Publish Changes** toggle.

   ::: info Important
   If the toggle is already switched on, the changes you save are immediately published to your application flows.
   :::

4. Save your updates.

## Publish your branding

Once you are ready with your branding updates, use the **Publish Changes** toggle to go live with your updates. 

Note that all subsequent branding changes that you save are immediately published if this toggle is switched on. 

::: info Info
The **Powered by Asgardeo** label will display on the Asgardeo-powered interfaces when branding is published.
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

### General preferences

Listed below are general branding preferences you can apply to the user registration and login interfaces.

<table>
   <tr>
      <th>Branding Preference</th>
      <th>Description</th>
   </tr>
   <tr>
      <td>Site Title</td>
      <td>The site title may appear in browser tabs, search engine results, social shares, etc. You can use any meaningful text here.</td>
   </tr>
   <tr>
      <td>Copyright Text</td>
      <td>
         <p>The copyright text is a short description that informs customers about the copyright law protecting your applications.</p>
         <p>In Asgardeo, the copyright text will appear on the footer of the login screens.</p>
      </td>
   </tr>
   <tr>
      <td>Contact Email</td>
      <td>This email address will appear on the error pages and other pages where customers would require support from the organization admin.</td>
   </tr>
</table>

### Design preferences

Listed below are the design changes you can apply to the user registration and login interfaces.

<table>
   <tr>
      <th>Branding Preference</th>
      <th>Description</th>
   </tr>
   <tr>
      <td>Logo</td>
      <td>
         <p>This is the logo that appears above the login box in login screens. Update the following values to set the required logo:</p>
         <ul>
            <li><b>URL</b>: You can update the logo by specifying the URL of a hosted image.</li>
            <li><b>Alt Text</b>: The 'Alt text' or 'alternative text' is a short description of an image. This text is useful to make sense of the image when it can't be viewed for some reason. A descriptive alt text is always a good practice to improve accessibility.</li>
         </ul>
         <p>Use an image that’s at least 600x600 pixels and less than 1mb in size for better performance.</p>
      </td>
   </tr>
   <tr>
      <td>Favicon</td>
      <td>
         <p>Browsers that provide favicon support typically display a page's favicon in the browser's address bar and next to the page's name in a list of bookmarks.</p>
         <p>You can update the favicon by specifying the URL of a hosted image (of type <b>png</b>, <b>ico</b>, etc.).</p>
         <p>Use an image with a square aspect ratio that’s at least 16x16 pixels in size for better results.</p>
      </td>
   </tr>
   <tr>
      <td>Contact Email</td>
      <td>
         <p>You can update the main color that appears dominantly in primary actions, anchor tags, etc.</p>
         <p>By default, Asgardeo uses an orange shade as the primary color. You can change this to match your organization’s style guide by entering a hex color code or by clicking the color swatch and picking a color.</p>
      </td>
   </tr>
</table>

### Advanced preferences

Listed below are some advanced branding preferences you can apply to the user registration and login interfaces.

<table>
   <tr>
      <th>Branding Preference</th>
      <th>Description</th>
   </tr>
   <tr>
      <td>Privacy Policy</td>
      <td>
         <p>This is a link to a statement or a legal document that states how your organization collects, handles, and processes the data of your customers and visitors.</p>
         <p>Once you configure a valid URL, Asgardeo will show this on the footer of the login screens.</p>
      </td>
   </tr>
   <tr>
      <td>Terms of Service</td>
      <td>
         <p>This is a link to an agreement that your customers must agree to and abide by in order to use your organization's applications or other services.</p>
         <p>Once you configure a valid URL, Asgardeo will show this on the footer of the login screens.</p>
      </td>
   </tr>
   <tr>
      <td>Cookie Policy</td>
      <td>
         This is a link to a document or a webpage with detailed information on all cookies used by your applications and the purpose of each of them.
      </td>
   </tr>
</table>

## Extended branding preferences

If you need to apply more branding than what is allowed from the Asgardeo console, contact the Asgardeo team at **asgardeo-help@wso2.com**.
