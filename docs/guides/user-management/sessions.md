# Session

Session is the period of time a user spends on an application in a user agent instance. Simply we can consider it as the time interval between login to an application and logout from that application. 

Asgardeo maintains user sessions based on session cookies. Asgardeo session will be terminated in the following instances.
 - When user closes the browser
 - When user tries to terminate the sessions via Asgardeo Console and MyAccount
 - When user logging out an application(OIDC/SAML logout mechanisms) 
 - When user resets the password.
 
 Sessions can be terminated explicitly by using the session using Session management APIs as well.

## Administrator manages active sessions of users

### Administrator views active sessions of users

Administrator(owner/collaborator) can view the active sessions of users of via Asgardeo Console.

1. Login to Asgardeo Console. 

2. Select **Manage** tab in the Console.

3. Move to the **Users** section from the left navigation.

4. Select a user.

5. Click on **Edit**.

6. Navigate to **Active Sessions**.
    <img :src="$withBase('/assets/img/guides/users/view-active-sessions.png')" alt="view-active-sessions">
    
    
### Administrator terminates active session/sessions

Administrator(owner/collaborator) can terminate the active session(s) of users of via Asgardeo Console.


6. Click  **Termination Sessions** under the selected session. This will terminate that respective session only.

7. Click **Termination All**. This will terminate all the sessions of that user.

## Users manage their own sessions

All users can login to MyAccount and manage their sessions.

### Users view their sessions
1. Login to Asgardeo MyAccount

2. Select **Security** tab in the MyAccount.
   
3. View **Active Sessions**.
   <img :src="$withBase('/assets/img/guides/users/active-sessions-myaccount.png')" alt="view-active-sessions-myaccount">

### Users terminate their session
4. Click  **Terminate All**. This will terminate all the sessions of that user.

5. Select the respective session and lick **Termination Session**. This will terminate the corresponding sessions of that user.
