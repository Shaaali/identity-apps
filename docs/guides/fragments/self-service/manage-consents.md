
When customers log in to some applications, Asgardeo prompts for user consent with the user attributes the application requests.
You can view the consents given to applications and revoke them if needed.

To manage the consents given:
1. Log in to the My Account portal.
2. Click on **Security > Manage Consents**.
3. You can view the applications for which you have provided consent to share your user information.
4. Select an application and click **See more**. You can view the attributes shared with the selected application.
   <img :src="$withBase('/assets/img/guides/organization/self-service/view-consents.png')" alt="View consents">
5. You can either:
    - Unselect the attributes individually and click **Update**. This will remove access to these unselected user attributes for the given application.
    - Click **Revoke** to revoke all the user attributes shared with that application.

If you revoke the consent provided for a user attribute, you will be prompted  with the consent in the next login.

