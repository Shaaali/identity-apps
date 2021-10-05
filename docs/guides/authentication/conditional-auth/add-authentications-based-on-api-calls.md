# Add authentication based on API calls
## Scenario
Consider a scenario where a user needs to configure a login flow of an application along with a conditional script which executes an API call to a service endpoint (E.g., Choreo) after the first step, so that he can configure the login flow to prompt the second step he added based on the decision made by the service during the login flow.

## Configure the login flow

<CommonGuide guide='guides/fragments/manage-app/conditional-auth/configure-conditional-auth.md'/>

5. Write your own script which executes an API call to a service endpoint.

6. Click on the key icon above the script to create a new secret or add an already created secret to the script. <img :src="$withBase('/assets/img/guides/secret/add-secret-to-script.png')" alt="Add secret to script">
7. Once you click on the key icon a drop down will be displayed with options to:
    - Add an existing secret to the script:
        - Click the secret you wish to add to your script and it will be added to the location specified by your cursor.
    - Create a new secret on the console:
        1. Click **Create a new secret** from the drop-down menu.

        2. Enter the following details:
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

        3. Click **Finish** to complete the creation.

        Now the created secret will be displayed on the dropdown, and if you want to add this new secret to your script, click on the secret from the dropdown and it will be automatically added to the location that your cusor points to in your script.


