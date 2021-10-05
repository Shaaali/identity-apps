
Once the user is logged in to Asgardeo, Asgardeo requests consent from the end user to share user attributes with the application. 

If the user **does not have** the attribute details in the <a :href="$withBase('/guides/users/manage-customers/#manage-the-customer-s-profile')">user profile</a>, Asgardeo will prompt the user to enter the **mandatory** user attributes during login.  

The customer user can do one of the following:
1. **Select All** and click **Allow**. 
    - This will allow all attributes to be shared with the application.
2. Select specific user attributes and click **Allow**. 
    - This will share only the selected user attributes with the application. However, note that the user cannot unselect the mandatory user attributes.
3. If user does not want to share any of the requested user attributes, they can click **Deny**. 

Asgardeo will not prompt for consent for the allowed attributes again unless a user revokes the provided consent via MyAccount. 

