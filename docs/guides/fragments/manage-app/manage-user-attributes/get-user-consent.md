
Once the user logged into Asgardeo, Asgardeo will get consent from the end user to share his user attributes with the application.  

Asgardeo will ask to provide value for **mandatory** user attribute from end user during authentication, if the user **does not have** the attribute details in the <a href="/guides/user-management/user-profiles/">user profile</a>.  

Asgardeo will prompt for consent page for the requested user attributes once the user profile contains values for mandatory attributes. 

End user can:
1. **Select All** and click **Allow**. 
    - This will allow all attributes to be shared with application.
2. Selectively select user attribute and click **Allow**. 
    - This will share only the selected user attributes with the application. But user can't unselect the mandatory user attributes.
3. If user does not want to share any of the requested user attributes, user can click **Deny**. 

Asgardeo will not prompt for consent for the allowed attributes again, unless a user revokes the provided consent via MyAccount. 

