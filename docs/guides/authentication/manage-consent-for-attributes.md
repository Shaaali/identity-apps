# Manage consent for user attributes

If <a :href="$withBase('/guides/authentication/user-attributes/')">user attributes are enabled</a> for applications registered in Asgardeo, the applications can access a user's profile information when the user logs in to the app. However, it may be necessary to get the user's consent before sharing the user's information.

In Asgardeo, you can let the app users (customers) acknowledge the use of user attributes or skip consent as explained below.

## Get consent for user attributes

Once the user is logged in, Asgardeo requests consent from the customer to share user attributes with the application. 

<img :src="$withBase('/assets/img/guides/applications/attributes/oidc/provide-consent.png')" width="400" alt="Provides consent for attributes in Asgardeo">

If the user **does not have** the attribute details in the <a :href="$withBase('/guides/users/manage-customers/#manage-the-customer-s-profile')">user profile</a>, Asgardeo will prompt the user to enter the **mandatory** user attributes during login.

The user can do one of the following during login:

-  Select specific user attributes and click **Allow**. 
    
    This will share only the selected user attributes with the application. However, note that the user cannot unselect the mandatory user attributes.
    
-  If the user does not want to share any of the requested user attributes, they can click **Deny**. 

Asgardeo will not prompt for consent for the allowed attributes again unless a user revokes the provided consent via MyAccount. 

## Disable the consent screen

If user consent is not required for your application to access user information, you can disable the consent screen as follows:

1. Sign in to the [Asgardeo Console](https://console.asgardeo.io) and select the application for which user consent needs to be disabled.
2. Go to the **Advanced** tab and enable **Skip login consent**.

   <img :src="$withBase('/assets/img/guides/applications/attributes/skip-login-consent.png')" alt="Skip login consent in Asgardeo">