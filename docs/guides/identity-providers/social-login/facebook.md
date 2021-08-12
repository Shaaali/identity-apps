# Facebook Login

You can add Facebook login to your applications using Asgardeo and enable users to log into applications with their Facebook account.

This guide provides the instructions on how to enable the Facebook login to your applications. 

## Prerequisite
To get started, you need to have an application registered in Asgardeo. If you don't have an app registered, [register an application](../../applications/) in Asgardeo to enable Facebook login.

## Add Facebook login
In order to add Facebook login to your app, follow below steps
 1. [Register app in Facebook](#register-app-in-facebook)
 2. [Create Facebook Identity Provider](#create-facebook-identity-provider)
 3. [Enable Facebook login](#enable-facebook-login)

### Register app in Facebook
You need to register Asgardeo as an app in Facebook. You can follow the [Facebook Documentation](https://developers.facebook.com/docs/development/create-an-app) to create an app in Facebook.

To register an app in Facebook:
1. Go to [Facebook developer portal](https://developers.facebook.com/apps) and click **Create App**.
2. Select **Consumer** app type.
3. Provide **App Display Name** and click **Create App ID** to create an application.
4. To add [Facebook login](https://developers.facebook.com/docs/facebook-login/), Click **Set Up** on **Facebook Login** card.
5. Select **Web** type.
6. Provide below as **Site URL**.
    ```
    https://api.asgardeo.io/t/<organization_name>
    ```
7. Go to **Settings** under **Facebook Login**, and add below as **Valid OAuth Redirect URIs**.
   ```
   https://api.asgardeo.io/t/<organization_name>/commonauth
   ```
9. Enable **Client OAuth Login** and **Web OAuth Login** (These configs are enabled by default). 
8. Click **Save Changes**.
9. Go to **Settings > Basic** and obtain **App ID** and **App Secret**.
      <img :src="$withBase('/assets/img/guides/idp/facebook-idp/app-id-secret-from-facebook.png')" alt="Get AppID and Secret from Facebook">

### Create Facebook Identity Provider
1. In the Asgardeo Console, Click **Connections > New Connections**.
2. Select **Facebook**.
3. Enter the following details of the Facebook identity provider and click **Finish**:
    - **Name**: A unique name for this Facebook identity provider.
    - **App ID**: App ID obtained from Facebook.
    - **App Secret**: App secret obtained from Facebook.   
    <img :src="$withBase('/assets/img/guides/idp/facebook-idp/add-facebook-idp.png')" alt="Add Facebook IDP in Asgardeo">
4. You can find more additional configurations once you create Facebook identity provider.
    - **Permissions**: Asgardeo requests below permissions from Facebook:
      - **email**: Grants read access to a user's primary email address.
      - **public_profile**: Grants read access to a user's default public profile fields.  
    
      Asgardeo needs these permissions to get user information and sends this to application based on the attribute configurations in the application. You can read [Facebook Documentation](https://developers.facebook.com/docs/permissions/reference) to know about permissions.
 
###  Enable Facebook login
1. In the Asgardeo Console, Click **Develop > Applications**.
2. Select an application from the application list that appears and navigate to the **Sign-in Method** tab of your application.
3. Click **Start with Default configuration**(If you have not modified the default sign in flow).
4. Click **Add Authentication** on the step, and select the Facebook identity provider you added the above.
5. Click **Update**.
    <img :src="$withBase('/assets/img/guides/idp/facebook-idp/add-facebook-federation-with-basic.png')" alt="Add Facebook login in Asgardeo">
