# Secret - Overview

Secrets allow users to securely save the secret values associated with any external APIs, that they plan to use for conditional authentication. This feature is used to securely store the secret values on Asgardeo console, and retrieve them whenever required for conditional authentication. 

## Scenario
Consider a scenario where a user needs to configure a login flow of an application along with a conditional script which executes an API call to a service endpoint (E.g., Choreo) after the first step, so that he can configure the login flow to prompt the second step he added based on the decision made by the service during the login flow.

## Manage Secrets
### Create a secret

To add a new secret:

1. On the [Asgardeo console](https://console.asgardeo.io/login), click **Develop > Secrets**.

    <img :src="$withBase('/assets/img/guides/secret/secret.png')" alt="Select secret in Asgardeo">

2. Click **New Secret**.

3. Enter the following details:
    <img :src="$withBase('/assets/img/guides/secret/create-a-secret.png')" alt="Create secret in Asgardeo">

    <table>
        <tr>
            <th>Parameter</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>Secret Name</td>
            <td>A meaningful name for the secret. This name is not changeable.</td>
        </tr>
        <tr>
            <td>Secret Value</td>
            <td>This is the value of the secret.  You can enter a value between length 
            <code>1</code> to <code>2048</code>.</td>
        </tr>
        <tr>
            <td>Secret Description</td>
            <td>A short description for the secret.</td>
        </tr>
    </table>

5. Click **Finish** to complete the creation.

### Update a secret
To edit a secret: 
1. On the [Asgardeo console](https://console.asgardeo.io/login), click **Develop > Secrets**.

2. You will be able to see all the secrets created. 

3. Click the edit button of the secret that need to be edited.
    <img :src="$withBase('/assets/img/guides/secret/edit-a-secret.png')" alt="Edit secret in Asgardeo">
<ul>
    <li>The secret name cannot be edited.</li>
    <li>The secret value can be edited but the previous value entered will not be visible.</li>
    <li>The secret description can be edited.</li>
</ul>

4. Edit the required fields and click **Update**.

### Delete a secret
To delete a secret:
1. On the Asgardeo Console, click **Develop > Secrets**.
2. Click **Delete** for the secret you want to remove.
3. Select the checkbox to confirm your action. 
4. Click **Confirm**.    

## Configure the login flow

<CommonGuide guide='guides/fragments/manage-app/conditional-auth/configure-conditional-auth.md'/>

5. Write your own script which executes an API call to a service endpoint.

6. Click on the key icon above the script to add an already created secret to the script. 
<img :src="$withBase('/assets/img/guides/secret/add-secret-to-script.png')" alt="Add secret to script">
7. Once you click on the key icon a drop down will be displayed with all the keys created on the console. 
<br>
(If you have not created the secret yet, select **Create new secret** from the drop down and [create a new secret](#create-a-secret) on the console.)


