# Facebook Login

You can add Facebook login to your applications using Asgardeo and enable users to log in to applications with their Facebook account.

This guide provides the instructions on how to enable the Facebook login to your applications. 

## Prerequisite
To get started, you need to have an application registered in Asgardeo. If you don't already have one, register one of the following application types.

-   <a :href="$withBase('/guides/applications/register-single-page-app/')">Single-page app</a>
-   <a :href="$withBase('/guides/applications/register-oidc-web-app/')">Web app with OIDC</a>
-   <a :href="$withBase('/guides/applications/register-saml-web-app/')">Web app with SAML</a>

## Register app in Facebook
You need to register Asgardeo as an app in Facebook. You can follow the [Facebook Documentation](https://developers.facebook.com/docs/development/create-an-app) to create an app in Facebook.

To register an app in Facebook:
1. Go to [Facebook developer portal](https://developers.facebook.com/apps) and click **Create App**.
2. Select **Consumer** as the app type and click **Next**.
3. Provide **Display Name** and click **Create App** to create an application.
4. To add [Facebook login](https://developers.facebook.com/docs/facebook-login/), click **Set Up** on **Facebook Login** card.
5. Select **Web** type.
6. Provide below as **Site URL**.
    ``` no-line-numbers
    https://api.asgardeo.io/t/<organization_name>
    ```
8. **Save** and **Continue**.
7. From the left panel, go to **Settings** under **Facebook Login**, and add the following as the **Valid OAuth Redirect URIs**.
   ``` no-line-numbers
   https://api.asgardeo.io/t/<organization_name>/commonauth
   ```
9. Enable **Client OAuth Login** and **Web OAuth Login** (These configs are enabled by default). 
8. Click **Save Changes**.
9. Go to **Settings > Basic** and obtain **App ID** and **App Secret**.
      <img :src="$withBase('/assets/img/guides/idp/facebook-idp/app-id-secret-from-facebook.png')" alt="Get AppID and Secret from Facebook">

## Create Facebook Identity Provider
1. On the Asgardeo Console, click **Develop > Connections**.
2. Click **New Connections**.
3. Select **Facebook**.
4. Enter the following details of the Facebook identity provider and click **Finish**:
    - **Name**: A unique name for this Facebook identity provider.
    - **App ID**: App ID obtained from Facebook.
    - **App Secret**: App secret obtained from Facebook.   
    <img :src="$withBase('/assets/img/guides/idp/facebook-idp/add-facebook-idp.png')" alt="Add Facebook IDP in Asgardeo">

You can find additional configurations once you create the Facebook identity provider.
- **Permissions**: Asgardeo requests the following permissions from Facebook:
- **email**: Grants read access to a user's primary email address.
- **public_profile**: Grants read access to a user's default public profile fields.  
    
Asgardeo needs these permissions to get user information and sends this to application based on the attribute configurations in the application. You can read [Facebook Documentation](https://developers.facebook.com/docs/permissions/reference) to know about permissions.

##  Enable Facebook login
1. On the Asgardeo Console, click **Develop > Applications**.
2. Select an application from the application list that appears and navigate to the **Sign-in Method** tab of your application.
3. Click **Start with Default configuration** (if you have not modified the default sign in flow).
4. Click **Add Authentication** on the step, and select the Facebook identity provider you created above.
5. Click **Update**.
    <img :src="$withBase('/assets/img/guides/idp/facebook-idp/add-facebook-federation-with-basic.png')" alt="Add Facebook login in Asgardeo">
