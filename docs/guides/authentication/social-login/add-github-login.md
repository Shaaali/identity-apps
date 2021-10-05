# Github Login

You can add Github login to your applications using Asgardeo and enable users to log in to applications with their Github account.

This guide provides the instructions on how to enable the Github login to your applications. 

## Prerequisite
To get started, you need to have an application registered in Asgardeo. If you don't already have one, register one of the following application types.

-   <a :href="$withBase('/guides/applications/register-single-page-app/')">Single-page app</a>
-   <a :href="$withBase('/guides/applications/register-oidc-web-app/')">Web app with OIDC</a>
-   <a :href="$withBase('/guides/applications/register-saml-web-app/')">Web app with SAML</a>

## Register app in Github
1. Follow this [Github documentation](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app) to create Asgardeo as an OAuth app in Github.
2. Go to [Github](https://github.com/) and create an OAuth App.
3. Provide below URLs while configuring the app. 
    - **Homepage URL**.
      ``` no-line-numbers
       https://api.asgardeo.io/t/<organization_name>
      ```
   - **Authorization callback URL**
      ``` no-line-numbers
      https://api.asgardeo.io/t/<organization_name>/commonauth
      ```
4. Obtain **Client ID** and **Client secret**.

## Create Github Identity Provider
1. On the Asgardeo console, click **Develop > Connections**.
2. Click **New Connections**.
3. Select **Github**.
4. Enter the following details and click **Finish**:
    - **Name**: A unique name for this Github identity provider.
    - **Client ID**: Client ID obtained from Github.
    - **Client secret**: Client secret obtained from Github.   
    <img :src="$withBase('/assets/img/guides/idp/github-idp/add-github-idp.png')" alt="Add Github IDP in Asgardeo">
5. You can find additional configurations once you create the Github identity provider.
     - **Scopes**:  Asgardeo requests below scopes from Github:
       - **user:email** : Grants read access to a user's email addresses.
       - **read:user** : Grants access to read a user's profile data.  
     
       Asgardeo needs these scopes to get user information and sends this to application based on the attribute configurations. You can read [Github Documentation](https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps) to know more about scopes.
 
##  Enable Github login
1. On the Asgardeo console, click **Develop > Applications**.
2. Select an application from the application list that appears and navigate to the **Sign-in Method** tab of your application.
3. Click **Start with Default configuration** (if you have not modified the default sign in flow).
4. Click **Add Authentication** on the step, and select the Github identity provider you added the above.
5. Click **Update**.
   <img :src="$withBase('/assets/img/guides/idp/github-idp/add-github-federation-with-basic.png')" alt="Add Github login in Asgardeo">
