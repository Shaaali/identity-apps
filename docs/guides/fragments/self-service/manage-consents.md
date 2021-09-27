
When a customer logs in to some applications, Asgardeo prompts for the customer's consent to access the user attributes the application requires. The customer can view the consents given to applications and revoke them if needed.

Given below are the steps to follow.

1. Sign in to the My Account portal.
2. Click **Security > Manage Consents**.
3. View the applications for which consent is given.
4. Select an application and click **See more**. The attributes shared with the selected application are listed.
   <img :src="$withBase('/assets/img/guides/organization/self-service/myaccount/view-consents.png')" alt="View consents">
5. You can do one of the following:
    - Clear the attributes individually and click **Update**. This removes access to the unselected user attributes for the given application.
    - Click **Revoke** to revoke all the user attributes shared with that application.

If consent is revoked for a user attribute, the customer will be prompted with consent in the next login attempt to that application.

