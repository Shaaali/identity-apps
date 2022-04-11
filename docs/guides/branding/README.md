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

#### Theme variations

Select from either **Dark** or **Light** theme variations to modify the styling of your login screens. You can start from these predefined theme variations and work your way through customizing the colors, images, etc.

Asgardeo uses the **Light** theme by default.

#### Theme preferences

The following design preferences apply to the theme you select. You can configure and save separate design preferences for each of the themes.

::: details Images

You can configure the logo and favicon for the theme you selected.

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
</table>

::: info Important
Be sure that the hosted image you use will properly return Content-Type headers. Without these headers, the image will not correctly render and you will experience a 403 error. You can use static image hosting services to ensure these headers are properly returned.
:::

::: details Color Palette

This is the primary color palette of the login screens. Click the color swatch and apply colors that match your organization’s style guide.

<table>
   <tr>
      <th>Branding Preference</th>
      <th>Description</th>
   </tr>
   <tr>
      <td>Primary Color</td>
      <td>
         <p>The color that appears dominantly in primary actions, anchor tags, etc.</p>
         <p>By default, Asgardeo uses an orange shade as the primary color for both <b>Light</b> and <b>Dark</b> themes</p>
      </td>
   </tr>
   <tr>
      <td>Secondary Color</td>
      <td>
         <p>The color that appears in secondary actions and other emphasized content.</p>
         <p>By default, Asgardeo uses a lighter gray shade as the secondary color.</p>
      </td>
   </tr>
</table>
:::

::: details Page

These are the basic design preferences you can update for login screens.

<table>
   <tr>
      <th>Branding Preference</th>
      <th>Description</th>
   </tr>
   <tr>
      <td>Background Color</td>
      <td>
         <p>This is the main background color that appears on the login screens.</p>
         <p>By default, Asgardeo uses a gray shade as the page's background color.</p>
      </td>
   </tr>
   <tr>
      <td>Font Color</td>
      <td>
         <p>The font color of the text that appears on the pages.</p>
         <p>By default, Asgardeo uses black as the font color.</p>
      </td>
   </tr>
</table>
:::

::: details Footer

Decide how you want the footer to look in the login screens by modifying the following attributes:

<table>
   <tr>
      <th>Branding Preference</th>
      <th>Description</th>
   </tr>
   <tr>
      <td>Border Color</td>
      <td>
         <p>The color of the top border of the footer that appears on the login screens.</p>
         <p>By default, Asgardeo uses a gray shade as the footer border color.</p>
      </td>
   </tr>
   <tr>
      <td>Font Color</td>
      <td>
         <p>The font color of the texts and links that appear on the footer.</p>
         <p>By default, the page font color will be used until a value for this is defined.</p>
      </td>
   </tr>
</table>
:::

::: details Font

Use one of the following options to override the default font for the theme you selected.

##### Use a web-safe font

<table>
   <tr>
      <th>Branding Preference</th>
      <th>Description</th>
   </tr>
   <tr>
      <td>Font Family</td>
      <td>
         <p>The list of available web safe fonts to select from.</p>
         <p>By default, Asgardeo uses Montserrat the font family.</p>
      </td>
   </tr>
</table>

##### Import a font

<table>
   <tr>
      <th>Branding Preference</th>
      <th>Description</th>
   </tr>
   <tr>
      <td>Font Import URL</td>
      <td>
         <p>Get the URL of a hosted font from the font service and add it here.</p>
         <p>E.g., <code>https://fonts.googleapis.com/css2?family=Poppins&display=swap</code></p>
      </td>
   </tr>
   <tr>
      <td>Font Family</td>
      <td>
         <p>This is the font family corresponding to the font imported using the URL  (specified in the <b>Font Import URL</b> field).</p>
         <p>E.g., <code>Poppins</code>, <code>Sans-serif</code></p>
      </td>
   </tr>
</table>
:::

::: details Headings

These preferences decide the look and feel of  `h1`, `h2`, `h3`, `h4`, `h5`, and `h6` elements in the login screens.

<table>
   <tr>
      <th>Branding Preference</th>
      <th>Description</th>
   </tr>
   <tr>
      <td>Font Color</td>
      <td>
         <p>This is the font color of the headings that appear on the login screens.</p>
         <p>By default, the page font color will be used until a value for this is defined.</p>
      </td>
   </tr>
</table>
:::

::: details Buttons

These preferences change the look and feel of buttons that appear on the login screens.

##### Primary Button

<table>
   <tr>
      <th>Branding Preference</th>
      <th>Description</th>
   </tr>
   <tr>
      <td>Font Color</td>
      <td>
         <p>This is the font color of the text inside the primary action buttons.</p>
         <p>By default, Asgardeo uses white as the font color for primary buttons.</p>
      </td>
   </tr>
   <tr>
      <td>Border Radius</td>
      <td>
         <p>This is the border radius of the primary action buttons.</p>
         <p>By default, Asgardeo uses <code>4 pixels</code> as the border-radius for primary buttons.</p>
      </td>
   </tr>
</table>

##### Secondary Button

<table>
   <tr>
      <th>Branding Preference</th>
      <th>Description</th>
   </tr>
   <tr>
      <td>Font Color</td>
      <td>
         <p>This is the font color of the text inside the secondary action buttons.</p>
         <p>By default, Asgardeo uses a dark gray shade as the font color for secondary buttons.</p>
      </td>
   </tr>
   <tr>
      <td>Border Radius</td>
      <td>
         <p>This is the border radius of the secondary action buttons.</p>
         <p>By default, Asgardeo uses <code>4 pixels</code> as the border-radius for secondary buttons.</p>
      </td>
   </tr>
</table>

##### External Connection Button

These preferences change the look and feel of buttons used for linking external identity providers (Facebook, Google, etc.) from the login screens.

<table>
   <tr>
      <th>Branding Preference</th>
      <th>Description</th>
   </tr>
   <tr>
      <td>Background Color</td>
      <td>
         <p>This is the background color for external connection buttons.</p>
         <p>By default, Asgardeo uses a light gray shade as the font color for external connection buttons.</p>
      </td>
   </tr>
   <tr>
      <td>Font Color</td>
      <td>
         <p>This is the font color of the text inside the external connection buttons.</p>
         <p>By default, Asgardeo uses a dark gray shade as the font color for external connection buttons.</p>
      </td>
   </tr>
   <tr>
      <td>Border Radius</td>
      <td>
         <p>This is the border radius of the external connection buttons.</p>
         <p>By default, Asgardeo uses <code>4 pixels</code> as the border-radius for external connection buttons.</p>
      </td>
   </tr>
</table>
:::

::: details Login Box

These preferences change how the login box appears on the screens.

<table>
   <tr>
      <th>Branding Preference</th>
      <th>Description</th>
   </tr>
   <tr>
      <td>Background Color</td>
      <td>
         <p>This is the background color of the login box.</p>
         <p>By default, Asgardeo uses white as the background color for the login box.</p>
      </td>
   </tr>
   <tr>
      <td>Font Color</td>
      <td>
         <p>This is the font color of the text inside the login box.</p>
         <p>By default, the page font color will be used until a value for this is defined.</p>
      </td>
   </tr>
   <tr>
      <td>Border Radius</td>
      <td>
         <p>This is the border color of the login box.</p>
         <p>By default, Asgardeo doesn’t have a border color for the login box.</p>
      </td>
   </tr>
   <tr>
      <td>Border Width</td>
      <td>
         <p>This is the border width of the login box.</p>
         <p>By default, Asgardeo uses 1 pixel as the border width for the login box.</p>
      </td>
   </tr>
   <tr>
      <td>Border Radius</td>
      <td>
         <p>This is the border radius of the login box.</p>
         <p>By default, Asgardeo uses <code>12 pixels</code> as the border-radius for the login box.</p>
      </td>
   </tr>
</table>
:::

::: details Inputs

These preferences change how the input fields, checkboxes, etc, look on the login screens.

<table>
   <tr>
      <th>Branding Preference</th>
      <th>Description</th>
   </tr>
   <tr>
      <td>Background Color</td>
      <td>
         <p>This is the background color of the inputs in the login screens.</p>
         <p>By default, Asgardeo uses white as the background color for the inputs.</p>
      </td>
   </tr>
   <tr>
      <td>Font Color</td>
      <td>
         <p>This is the font color of the inputs in the login screens.</p>
         <p>By default, the page font color will be used until a value for this is defined.</p>
      </td>
   </tr>
   <tr>
      <td>Border Color</td>
      <td>
         <p>This is the border color of the inputs in the login screens.</p>
         <p>By default, Asgardeo uses a lighter gray shade as the border color of the inputs.</p>
      </td>
   </tr>
   <tr>
      <td>Border Width</td>
      <td>
         <p>This is the border radius of the inputs in the login screens.</p>
         <p>By default, Asgardeo uses <code>4 pixels</code> as the border radius for the login box.</p>
      </td>
   </tr>
   <tr>
      <td>Border Radius</td>
      <td>
         <p>This is the border radius of the login box.</p>
         <p>By default, Asgardeo uses <code>12 pixels</code> as the border-radius for the login box.</p>
      </td>
   </tr>
</table>

##### Input Labels

<table>
   <tr>
      <th>Branding Preference</th>
      <th>Description</th>
   </tr>
   <tr>
      <td>Font Color</td>
      <td>
         <p>This is the font color of the input labels in the login screens.</p>
         <p>By default, the page font color will be used until a value for this is defined.</p>
      </td>
   </tr>
</table>
:::

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
