# Manage active sessions

A session corresponds to the time a user spends on an application from one user agent (e.g., browser) instance. we can consider one session as the time interval between a user's login and logout. 

Asgardeo maintains user sessions based on session cookies. Active sessions in Asgardeo are terminated in the following instances:
 - User closes the browser
 - User tries to terminate the sessions via Asgardeo Console and My Account
 - User logs out an application
 - User resets the password
 
Active sessions can be terminated explicitly by using the session management APIs as well.

An administrator(owner/collaborator) can view and terminate the active session(s) of users via the Asgardeo Console.

## View active sessions of users

 1. On the Asgardeo Console, select **Manage > Users**.
 2. Select a user and click **Edit**.
 3. Go to **Active Sessions** to view details.
    <img :src="$withBase('/assets/img/guides/users/view-active-sessions.png')" alt="view-active-sessions">
    
    
## Terminate active session/sessions

 4. Click  **Termination Sessions** under the selected session. This terminates the respective session only.
 5. Click **Termination All**. This will terminate all the sessions of that user.
