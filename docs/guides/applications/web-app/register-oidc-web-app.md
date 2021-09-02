# Register an OpenID Connect web app

To integrate your web application with Asgardeo using OpenID Connect, you need to first register your web application as an OpenID Connect web application in Asgardeo console and obtain client credentials.

Follow the instructions given below.

## Register the app

To register the app:

1. On the [Asgardeo console](https://console.asgardeo.io/login), click **Develop > Applications**.

    <img :src="$withBase('/assets/img/guides/applications/select-app-type.png')" alt="Select app type in Asgardeo">

2. Click **New Application** and select **Traditional Web Application** to open the following:

    <img :src="$withBase('/assets/img/guides/applications/create-new-web-app.png')" alt="Create a new web app">

3. Enter the following details. 

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
            <td>Protocol</td>
            <td><p>The access configuration protocol that is used to log in to the application with SSO.</p> Select <b>OpenID Connect</b>.</td>
        </tr>
        <tr>
            <td>Authorized redirect URLs</td>
            <td>The authorized redirect URLs determine where the authorization code is sent to once the user is authenticated.</td>
        </tr>
    </table>

4. Click **Register** to complete the registration

## Obtain the client ID and secret

When you register your web application, the OpenID Connect client ID and client secret are generated. Your web application will identify itself to Asgardeo with these credentials.

You can get this client ID from the **Protocol** tab of the application as shown below.

<img :src="$withBase('/assets/img/guides/applications/get-client-id-and-secret.png')" alt="Get client ID and secret of webapp">

## What's next?

- <a :href="$withBase('/guides/applications/web-app/add-login-to-web-app/')">Add login to your web app</a>
