# Register a SAML web app

To integrate your web application with Asgardeo using [SAML](https://docs.oasis-open.org/security/saml/v2.0/saml-core-2.0-os.pdf), you need to first register your application as a SAML application in Asgardeo.

There are two ways to provide your SAML application configurations to Asgardeo during registration:

- Use a SAML SP metadata file
- Add SAML SP configurations manually

Follow the instructions given below.

## Register the app

To register the app:

1. On the [Asgardeo Console](https://console.asgardeo.io/login), click **Develop > Applications**.

    <img :src="$withBase('/assets/img/guides/applications/select-app-type.png')" alt="Select app type in Asgardeo">

2. Click **New Application** and select **Traditional Web Application**.
3. In the **Name** field, enter a unique name to identify your application.
4. Select the **SAML** protocol.
5. Select one of the methods to add the SAML configurations of your app:

    <table>
        <tr>
            <th>Manual</th>
            <td><p>Use this option to manually specify the required SAML configurations.</p> See <a :href="$withBase('#add-saml-configs-manually')">Add SAML configs manually</a>.</td>
        </tr>
        <tr>
            <th>File Based</th>
            <td><p>Upload a SAML metadata file with the required configurations.</p> See <a :href="$withBase('#use-a-saml-metadata-file')">Use a SAML metadata file</a>.</td>
        </tr>
        <tr>
            <th>URL Based</th>
            <td><p>Point to the endpoint with the SAML metadata.</p> See <a :href="$withBase('#use-a-saml-metadata-file')">Use a SAML metadata file</a>.</td>
        </tr>
    </table>

### Add SAML configs manually
    
If you selected **Manual** in the previous step, you can manually specify the SAML configurations as follows:

<img :src="$withBase('/assets/img/guides/applications/saml-app/register-saml-app.png')" alt="Register SAML app"> 

<table>
    <tr>
        <th>Parameter</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>Issuer</td>
        <td>The unique identifier of the application. The value added here should be specified in the SAML authentication request as <code>saml:Issuer</code> element sent from the client application. You can't change this <code>issuer</code> configuration after you register the app.</td>
    </tr>
    <tr>
        <td>Assertion consumer service URLs</td>
        <td>The URLs to which the browser is redirected to upon successful authentication and receives SAML response.</td>
    </tr>
</table>

### Use a SAML metadata file

An SP metadata XML file contains the following:

- SP certificate
- The entity ID (also known as issuer)
- Assertion Consumer Service URLs (ACS URLs)
- Single Logout Service URLs

There are two ways to use a SAML metadata file during application registration:

-   Select the **File Based** option and upload the SAML SP metadata file. 

    <img :src="$withBase('/assets/img/guides/applications/saml-app/register-saml-app-using-metadata-file.png')" alt="Register SAML app using metadata file">

-   Select the **URL Based** option and specify the SAML meta URL, which refers to the endpoint that hosts the SAML metadata file.

    <img :src="$withBase('/assets/img/guides/applications/saml-app/register-saml-app-using-meta-url.png')" alt="Register SAML app using meta url">     

## What's next?

- <a :href="$withBase('/guides/applications/web-app/add-login-to-web-app/')">Add login to your web app</a>