# Standard-based application
When you integrate an application with Asgardeo, the first step is to register your app from the Asgardeo console. If you choose the standard-based application type when you register your app, it allows you to configure the protocol settings (OIDC or SAML) from scratch. 

You can also use the standard-based application type in the following scenarios:
- Integrate a web/mobile application with the password grant type. The application types for, single- page applications and, traditional web applications and mobile applications do not support password grant type as it is not recommended. 
- Access the <a :href="$withBase('/apis/')"> management APIs</a> of Asgardeo.
::: info
Alternatively, you can register using an application type that has configurations optimized for specific applications.
- <a :href="$withBase('/guides/applications/register-single-page-app/')">Register an SPA</a>
- <a :href="$withBase('/guides/applications/register-single-page-app/')">Register an OIDC web application</a>
- <a :href="$withBase('/guides/applications/register-saml-web-app/')">Register a SAML web application</a>
:::

## Register an application

To register an application:

1. On the Asgardeo Console, go to **Develop > Applications**
2. Click **New Application** and select **Standard-Based Application** to open the following:
    <img :src="$withBase('/assets/img/guides/applications/register-an-sba.png')" alt="Register a standard-based application">
3. Provide an application name and select the other options based on your requirements.

    ::: info
    - You can choose OIDC or SAML as the standard protocol for your application. See the complete list of <a :href="$withBase('/references/app-settings/oidc-settings-for-app/')">OIDC</a> and <a :href="$withBase('/references/app-settings/saml-settings-for-app/')">SAML</a>  configurations.
    - If you use OIDC, you can configure a management app, which can access the management APIs in Asgardeo. Learn about <a :href="$withBase('/apis/authentication/')">invoking management APIs</a>.
    :::

4. Click **Register** to complete the registration.