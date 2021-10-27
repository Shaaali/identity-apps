# Add authentication based on API calls
You can secure the login flow of your applications based on data received from external services.

## Scenario
Consider a scenario where the login flow of the application should be stepped up after an API call to an external service endpoint (e.g. WSO2 Choreo). The API call should be executed after the first authentication step is successfully completed. The second authentication step should be prompted based on the decision made by the service during the API call.

## Configure the login flow

<CommonGuide guide='guides/fragments/manage-app/conditional-auth/configure-conditional-auth.md'/>

5. Write your own script which executes an API call to a service endpoint.

6. Click the key icon above the script to create a new secret or add an already created secret to the script. <img :src="$withBase('/assets/img/guides/secret/add-secret-to-script.png')" alt="Add secret to script">
7. Once you click the key icon, use one of the following options from the drop-down menu:
    - Add an existing secret to the script:
        - Click the "+" following the secret you wish to add to your script and it will be added to the location specified by your cursor.

    - <a :href="$withBase('/guides/authentication/conditional-auth/configure-conditional-auth/#create-a-new-secret-on-the-console')"> Create a new secret on the console </a>.

    Now the created secret will be displayed on the dropdown, and if you want to add this new secret to your script, click on the secret from the dropdown and it will be automatically added to the location that your cursor points to in your script.




