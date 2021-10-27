# Configure conditional authentication

Given below are the high-level steps for enabling [conditional authentication](./README.md) in your application.

## Enable conditional authentication

<CommonGuide guide='guides/fragments/manage-app/conditional-auth/configure-conditional-auth.md'/>

## Add conditional authentication script

There are two ways to add a conditional authentication script:

-  Use a <a :href="$withBase('/guides/authentication/conditional-auth/#script-templates')">predefined template</a>.
-  Write a <a :href="$withBase('/guides/authentication/conditional-auth/write-your-first-script/')">new conditional auth script</a>.

## Add a secret to the script
Secrets securely store values associated with external APIs. These secret values are used in conditional authentication scripts when Asgardeo is required to interact with an external API (service endpoint) during the authentication process. You can securely store these secret values on the Asgardeo console and retrieve them whenever required for conditional authentication. 

### Create a new secret

1. Enable conditional authentication and click the key icon above the script to create a new secret. <img :src="$withBase('/assets/img/guides/secret/add-secret-to-script.png')" alt="Add secret to script">

2. Click **Create a new secret** from the drop-down menu.

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

4. Click **Finish** to complete the creation.

### Delete an existing secret
1. Enable conditional authentication and click the key icon above the script to delete a secret. <img :src="$withBase('/assets/img/guides/secret/add-secret-to-script.png')" alt="Add secret to script"> 
2. Click the trash icon next to the secret you wish to delete.
2. Select the checkbox and confirm your action.