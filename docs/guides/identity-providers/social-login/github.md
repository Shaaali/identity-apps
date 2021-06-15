# Github Login

Follow this guide to enable Github login to your applications.

::: tip Before you begin
You should have an application registered in Asgardeo. If you don't have, [create application](../../applications/) in Asgardeo to enable Google login.
:::

**Steps**<br>
Inorder to add Github identity provider, you have to follow below steps in Asgardeo after completing the above prerequisites:
 1. [Register OAuth app in Github](#register-app-in-github)
 2. [Create Github Identity Provider](#create-github-identity-provider)
 3. [Enable Github login](#enable-github-login)

## Register app in Github
1. Follow this [Github documentation](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app) to create Asgardeo as an OAuth app in Github.
2. Go to [Github](https://github.com/) and create an OAuth App.
3. Provide below URLs while configuring the app. 
    - **Homepage URL**.
      ```
       https://accounts.asgardeo.io/t/<organization_name>
      ```
   - **Authorization callback URL**
      ```
      https://accounts.asgardeo.io/t/<organization_name>/commonauth
      ```
4. Obtain **Client ID** and **Client secret**.

## Create Github Identity Provider
1. In the Asgardeo Console, Click **Develop > Identity Providers**.
2. Select **Github**.
3. Enter the following details of the Github identity provider and click **Finish**:
    - **Name**: A unique name for this Github identity provider.
    - **Client ID**: Client ID obtained from Github.
    - **Client secret**: Client secret obtained from Github.   
    <img :src="$withBase('/assets/img/guides/idp/github-idp/add-github-idp.png')" alt="Add Github IDP in Asgardeo">
4. You can find more additional configurations once you created Github identity provider.
     - **Scopes**: This is the list of scopes that are requested from Github. Asgardeo needs these scopes to get user information and sends this to application based on the attribute configurations in the application. You can read [Github Documentation](https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps) to know more about scopes.
 
##  Enable Github login
1. In the Asgardeo Console, Click **Develop > Applications**.
2. Select an application from the application list that appears and navigate to the **Sign-on Method** tab of your application.
3. Select the Github identity provider you added the above, click **Add Authentication** on the step and click **Update** .
    <img :src="$withBase('/assets/img/guides/idp/github-idp/add-github-federation.png')" alt="Add Github login in Asgardeo">
