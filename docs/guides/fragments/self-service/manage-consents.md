
When you log in to some applications, Asgardeo prompts for your consent to access the user attributes the application requires. You can view the consents given to applications and revoke them if needed.

To manage the consents:
1. Sign in to the My Account portal.
2. Click **Security > Manage Consents**.
3. View the applications for which consent is given.
4. Select an application and click **See more**. You can view the attributes shared with the selected application.
   <img :src="$withBase('/assets/img/guides/organization/self-service/myaccount/view-consents.png')" alt="View consents">
5. You can either:
    - Unselect the attributes individually and click **Update**. This removes access to these unselected user attributes for the given application.
    - Click **Revoke** to revoke all the user attributes shared with that application.

If you revoke the consent provided for a user attribute, you will be prompted with the consent in the next login attempt.

