# Standard-based application - Introduction
A standard based application on Asgardeo will help developers to add identity on custom applications, regardless of the application type. Developers can freely change configurations to integrate any type of service provider.

Standard-based applications can be used to: 
- Integrate custom applications without any filtration on configurations.

    Sample scenario: 
    
    A developer wants to integrate a web/mobile application with password grant type. The application types, single page application, traditional web application and mobile application do not support password grant type as it is not recommended. 
    But if the developers want to use this grant type they may create a standard based application and use the password grant type. 

- Access the <a :href="$withBase('/apis/')"> management APIs</a>. of Asgardeo.

# Register an application

The organization administrator has to create a new application with client credentials in the Asgardeo console: 

1. On the Asgardeo Console, go to **Develop > Applications**
2. Click **New Application** and select **Standard-Based Application** to open the following:
    <img :src="$withBase('/assets/img/guides/applications/register-an-sba.png')" alt="Register a standard-based application">
3. Provide an application name and select the other options based on your requirements.
    
    ::: info
    - Your app can be registered as an OIDC app or a SAML app.
    - Management applications are used to access the management APIs in Asgardeo. Learn more about <a :href="$withBase('/apis/authentication/')">invoking management APIs</a>.
    :::
4. Click **Register** to complete the registration.

# Related Links
- <a :href="$withBase('/guides/applications/register-single-page-app/')">Register an OIDC application</a>
- <a :href="$withBase('/references/app-settings/oidc-settings-for-app/')">OIDC configurations</a>
- <a :href="$withBase('/guides/applications/register-saml-web-app/')">Register an SAML application</a>
- <a :href="$withBase('/references/app-settings/saml-settings-for-app/')">SAML configurations</a>

