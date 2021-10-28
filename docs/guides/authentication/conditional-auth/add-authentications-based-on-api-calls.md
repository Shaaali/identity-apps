# Add MFA based on API calls
You can secure the login flow of your applications based on data received from external services.

## Scenario
Consider a scenario where the login flow of the application should be stepped up after an API call to an external service endpoint (e.g. WSO2 Choreo). The API call should be executed after the first authentication step is successfully completed. The second authentication step should be prompted based on the decision made by the service during the API call.

## Configure the login flow

<CommonGuide guide='guides/fragments/manage-app/conditional-auth/configure-conditional-auth.md'/>

5. Write your own script which executes an API call to a service endpoint.

6. Select the location in the script where the secret should be inserted, click the key icon above the script, and use one of the following options:
     <img :src="$withBase('/assets/img/guides/secret/add-secret-to-script.png')" alt="Add secret to script">

     - If you are adding an already existing secret, click "+" next to the secret in the drop-down menu.
     - If you need a new secret, you can first <a :href="$withBase('/guides/authentication/conditional-auth/configure-conditional-auth/#create-a-new-secret-on-the-console')">create a new secret</a> and then select the new secret from the drop-down menu.

    Now the created secret will be displayed on the dropdown, and if you want to add this new secret to your script, click on the secret from the dropdown and it will be automatically added to the location that your cursor points to in your script.




