# Session

Session is the period of time a user spends on an application in a user agent instance. Simply we can consider it as the time interval between login to an application and logout from that application. 

Asgardeo maintains user sessions based on session cookies. Asgardeo session will be terminated in the following instances.
 - When user closes the browser
 - When user tries to terminate the sessions via Asgardeo Console and MyAccount
 - When user logging out an application(OIDC/SAML logout mechanisms) 
 - When user resets the password.
 
 Sessions can be terminated explicitly by using the session using Session management APIs as well.

We will guide you:
- [How an administrator can manage the active sessions of user.](#administrator-manages-active-sessions-of-users)
  - View active sessions of users.
  - Terminate active session(s) of users.
- [How a users can manage their own sessions.](#users-manage-their-own-sessions)
  - View their active sessions
  - Terminate their active session(s).

## Administrator manages active sessions of users

Administrator(owner/collaborator) can view and terminate the active session(s) of users of via Asgardeo Console

**Administrator views active sessions of users**

 1. In Asgardeo Console, Select **Manage > Users**.
 2. Select a user and Click **Edit**.
 3. Navigate to **Active Sessions**.
    <img :src="$withBase('/assets/img/guides/users/view-active-sessions.png')" alt="view-active-sessions">
    
    
**Administrator terminates active session/sessions**

 4. Click  **Termination Sessions** under the selected session. This will terminate that respective session only.
 5. Click **Termination All**. This will terminate all the sessions of that user.

## Users manage their own sessions

All users can login to MyAccount and manage their sessions.

**Users view their sessions**
 1. In the Asgardeo MyAccount, Select **Security > Active Sessions**.
    <img :src="$withBase('/assets/img/guides/users/active-sessions-myaccount.png')" alt="view-active-sessions-myaccount">

**Users terminate their session**
 
 3. Click  **Terminate All**. This will terminate all the sessions of that user.
 4. Select the respective session and click **Termination Session**. This will terminate the corresponding sessions of that user.
