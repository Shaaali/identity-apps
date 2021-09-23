# Register an OpenID Connect single-page app

To add login to your single-page application with Asgardeo, you need to first register your app in Asgardeo. 

Your app will be registered as an OpenID Connect single-page app and a client ID will be issued. Note that client secrets are not issued because single-page apps are public clients. However, the <a :href="$withBase('/references/app-settings/oidc-settings-for-app/#proof-key-for-code-exchange-pkce')">PKCE (Proof Key for Code Exchange)</a> extension is enabled by default as a security measure.

Follow the instructions given below.

## Register the app

To register the app:

1. On the [Asgardeo console](https://console.asgardeo.io/login), click **Develop > Applications**.

    <img :src="$withBase('/assets/img/guides/applications/select-app-type.png')" alt="Select app type in Asgardeo">

2. Click **New Application** and select **Single-Page Application** to open the following:

    <img :src="$withBase('/assets/img/guides/applications/create-new-spa.png')" alt="Create a new SPA">

3. Enter the following details:

    <table>
        <tr>
            <th>Parameter</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>Name</td>
            <td>A unique name to identify your application.</td>
        </tr>
        <tr>
            <td>Authorized redirect URLs</td>
            <td><p>The URL to which the authorization code is sent to upon user authentication and where the user is redirected to upon logout.</p> Click <b>Add Now</b> if you want to try a sample app.</td>
        </tr>
    </table>

5. Click **Register** to complete the registration.

## Disable PKCE (optional)

This single-page application you registered is configured with the [OpenID Connect Authorization Code Grant](https://openid.net/specs/openid-connect-core-1_0.html#CodeFlowAuth) with [PKCE](https://datatracker.ietf.org/doc/html/rfc7636). 

If your app does not support PKCE, you can disable it as follows:

1. Go to the **Protocol** tab of your application.
2. Clear the <a :href="$withBase('/references/app-settings/oidc-settings-for-app/#proof-key-for-code-exchange-pkce')">PKCE Mandatory</a> setting.

## Get the client ID

When you register your single-page application, a client ID is generated. Your application will identify itself to Asgardeo with this client ID.

You can get this client ID from the **Protocol** tab of the application as shown below.

<img :src="$withBase('/assets/img/guides/applications/get-client-id.png')" alt="Get client ID of SPA">

## What's next?

- <a :href="$withBase('/guides/applications/spa/add-login-to-single-page-app/')">Add login to your single-page app</a>