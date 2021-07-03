# Github Login

You can add Github login to your applications using Asgardeo and enable users to log into applications with their Github account. To provides this capability, Asgardeo uses standard [OAuth2.0 protocol](https://datatracker.ietf.org/doc/html/rfc6749#section-1.3) underneath.  

This guide provides the instructions on how to enable the Github login to your applications. 

## Prerequisite
To get started, you need to have an application registered in Asgardeo. If you don't have an app registered, [register an application](../../applications/) in Asgardeo to enable Github login.

## Add Github login
In order to add Github login to your app, follow below steps
 1. [Register OAuth app in Github](#register-app-in-github)
 2. [Create Github Identity Provider](#create-github-identity-provider)
 3. [Enable Github login](#enable-github-login)

### Register app in Github
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

### Create Github Identity Provider
1. In the Asgardeo Console, Click **Develop > Identity Providers**.
2. Select **Github**.
3. Enter the following details of the Github identity provider and click **Finish**:
    - **Name**: A unique name for this Github identity provider.
    - **Client ID**: Client ID obtained from Github.
    - **Client secret**: Client secret obtained from Github.   
    <img :src="$withBase('/assets/img/guides/idp/github-idp/add-github-idp.png')" alt="Add Github IDP in Asgardeo">
4. You can find more additional configurations once you create Github identity provider.
     - **Scopes**:  Asgardeo requests below scopes from Github:
       - **user:email** : Grants read access to a user's email addresses.
       - **read:user** : Grants access to read a user's profile data.  
     
       Asgardeo needs these scopes to get user information and sends this to application based on the attribute configurations in the application. You can read [Github Documentation](https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps) to know more about scopes.
 
###  Enable Github login
1. In the Asgardeo Console, Click **Develop > Applications**.
2. Select an application from the application list that appears and navigate to the **Sign-in Method** tab of your application.
3. Click **Start with Default configuration**(If you have not modified the default sign in flow).
4. Click **Add Authentication** on the step, and select the Github identity provider you added the above.
5. Click **Update**.
   <img :src="$withBase('/assets/img/guides/idp/github-idp/add-github-federation-with-basic.png')" alt="Add Github login in Asgardeo">
