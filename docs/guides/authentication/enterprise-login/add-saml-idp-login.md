# Add login with a SAML identity provider

You can add standard [SAML login](https://docs.oasis-open.org/security/saml/v2.0/saml-core-2.0-os.pdf) to your applications using an external SAML identity provider (IdP) and enable users to log in to your applications while maintaining their accounts in the external identity providers.

<img class="borderless-img" :src="$withBase('/assets/img/guides/idp/saml-enterprise-idp/configure-login.png')" alt="Configure SAML Enterprise IDP login in Asgardeo">

Follow this guide to register a SAML IdP in Asgardeo and add it to the login flow of your application.

## Register Asgardeo in the IdP
You need to register Asgardeo as a SAML application in the external identity provider. Follow the identity provider's documentation to know how to register a SAML application.

You can use the following URL as the **Assertion Consumer Service URL** (also known as callback URL/ redirect URL/ ACS URL) in the application that represents Asgardeo.

```bash no-line-numbers
https://api.asgardeo.io/t/<organization_name>/commonauth
```

After you register the app, you should get the required configurations as explained below.

-   If you are manually applying the IdP configurations to Asgardeo, you need the following configurations:
    - **Issuer** (also known as entityId)
    - **Single sign on URL** of the identity provider (also known as login URL)
    - **Identity Provider Certificate**

-   If you are using metadata to apply the IdP configurations to Asgardeo, you need the following:
    - **SAML IdP metadata file** of the identity provider
    - **Identity Provider Certificate**

## Register the SAML IdP

Now, let's register the SAML IdP in Asgardeo.

1. On the Asgardeo console, click **Develop > Connections**.
2. Click **New Connections**.
3. Select **Standard-Based IdP**.
4. Provide a unique **identity provider name**, select **SAML**, and click **Next**.

   <img :src="$withBase('/assets/img/guides/idp/saml-enterprise-idp/register-saml-idp.png')" alt="Create SAML Enterprise IDP in Asgardeo">
   
5. Select one of the following methods and add the SAML configurations:

    <table>
        <tr>
            <th>File Based Configuration</th>
            <td><p>Upload a SAML metadata file with the required configurations.</p> See <a :href="$withBase('#use-a-saml-metadata-file')">Use a SAML metadata file</a>.</td>
        </tr>
        <tr>
            <th>Manual Configuration</th>
            <td><p>Use this option to manually specify the required SAML configurations.</p> See <a :href="$withBase('#add-saml-configs-manually')">Add SAML configs manually</a>.</td>
        </tr>
    </table>

### Add SAML configs manually

If you selected **Manual Configuration** in the previous step, follow the steps given below.

1. Enter the following details:
   
    <img :src="$withBase('/assets/img/guides/idp/saml-enterprise-idp/register-saml-idp-with-manual-config.png')" alt="Create SAML Enterprise IDP with manual configurations">

    <table>
        <tr>
            <th>Parameter</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>Service provider entity ID</td>
            <td> A unique name for the SAML IdP. This value will be used as the <code>saml2:Issuer</code> in the SAML requests initiated from Asgardeo to the external identity provider (IdP).</td>
        </tr>
        <tr>
            <td>Identity provider Single Sign-On URL</td>
            <td>This vlaue specifies the single sign-on URL of the external IdP. This is where Asgardeo will send its authentication requests. You need to get this value from the external IdP.</td>
        </tr>
        <tr>
            <td>Identity provider entity ID</td>
            <td>This is the <code>saml2:Issuer</code> value specified in the SAML responses issued by the external IdP. You need to get this value from the external IdP.</td>
        </tr>
    </table>

3. Click **Next** and upload the public certificate of the identity provider.
4. Click **Finish** to complete the registration.
       
### Use a SAML metadata file

If you selected **File Based Configuration** in the previous step, follow the steps given below.

::: info
A SAML IdP metadata file contains the following:

- IdP identifiers (`entityID` or `Issuer`)
- Endpoints (single sign-on URLs, single logout URLs, etc)
- Supported bindings
:::
    
1. Upload the IdP metadata file.

    <img :src="$withBase('/assets/img/guides/idp/saml-enterprise-idp/register-saml-idp-with-metafile.png')" alt="Create SAML Enterprise IDP with Metadata file">

2. Click **Next** and upload the public certificate of the identity provider.
3. Click **Finish** to complete the registration.

::: info
Once the SAML identity provider is created, you can configure additional <a :href="$withBase('/references/idp-settings/saml-settings-for-idp')">SAML settings</a>.
:::
  
## Enable the SAML IdP for login

::: info Before you begin
You need to have an application registered in Asgardeo. If you don't already have one, register one of the following application types:

-   <a :href="$withBase('/guides/applications/register-single-page-app/')">Single-page app</a>
-   <a :href="$withBase('/guides/applications/register-oidc-web-app/')">Web app with OIDC</a>
-   <a :href="$withBase('/guides/applications/register-saml-web-app/')">web app with SAML</a>
:::

1. On the Asgardeo console, click **Develop > Applications**.
2. Open your application from the list and go to the **Sign-in Method** tab.
3. If you haven't already defined a sign-in flow, click **Start with Default configuration** to get started.
4. Click **Add Authentication** on the step, select your SAML identity provider, and click **Add**.

    <img :src="$withBase('/assets/img/guides/idp/saml-enterprise-idp/enable-saml-enterprise-login-with-basic.png')" alt="Add SAML IdP login in Asgardeo">

## Configure user attributes

Configuring attributes for an identity provider involves mapping the attributes available in the external SAML IdP to attributes that are local to Asgardeo. 
This is done so that Asgardeo can identify the user attributes in the response sent from the external SAML IdP. 

1. On the Asgardeo console, click **Develop > Connections**.
2. Select the SAML IdP connection from the list and click **Set up**.
3. Go to the **Attributes** tab and click **Add IdP Attributes**.
    <img :src="$withBase('/assets/img/guides/idp/saml-enterprise-idp/go-to-user-attribute-page.png')" alt="Go to attributes section in SAML IdP">
4. Provide the following values and click **Add Attribute Mapping**.

    <img :src="$withBase('/assets/img/guides/idp/saml-enterprise-idp/map-saml-idp-attributes.png')" alt="Map SAML IdP attributes">

    <table>
        <tr>
            <th>Parameter</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>External IdP Attribute</td>
            <td>The attribute from the external IdP that should be mapped to the local attribute.</td>
        </tr>
        <tr>
            <td>Maps to</td>
            <td>The local attribute to which the external IdP attribute is mapped.</td>
        </tr>
    </table>

5. Select one of the mapped attributes as the **subject attribute** for your application and click **Update**. 

    <img :src="$withBase('/assets/img/guides/idp/saml-enterprise-idp/select-subject-attributes.png')" alt="select a subject attribute">

    :::info
     To configure a different attribute as the subject, first you need to enable the <a :href="$withBase('/references/idp-settings/saml-settings-for-idp/#find-user-id-from-requests')">Find user ID from requests</a> setting for SAML IdP.
     If this setting is not enabled, Asgardeo uses the subject attribute that is sent by the external SAML IdP.
    :::

### How it works 

Consider a scenario where a SAML IdP returns the authenticated user's nickname and profile updated time to Asgardeo in the SAML authentication response as follows:

- http://schemas.idp.com/nickname   : nickname
- http://schemas.idp.com/updated_at : profile updated time

You may want to convert them to the local attribute URI so that the application can receive them in the local attribute URI. If you don't do that mapping, the application will receive the attributes as sent by the external IdP.

**A sample IdP attribute mapping done from the Asgardeo console**:

<img :src="$withBase('/assets/img/guides/idp/saml-enterprise-idp/sample-attribute-mapping.png')" alt="Sample IdP attribute mapping">

**Sample attributes in the SAML assertion of the integrated SAML app**:

```xml no-line-numbers
<saml2:AttributeStatement>
    <saml2:Attribute Name="http://wso2.org/claims/modified"
                        NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic"
                        >
        <saml2:AttributeValue xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                                xsi:type="xsd:string"
                                >Mon Aug 30 2021 07:26:40 GMT+0000 (Coordinated Universal Time)</saml2:AttributeValue>
    </saml2:Attribute>
    <saml2:Attribute Name="http://wso2.org/claims/nickname"
                        NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic"
                        >
        <saml2:AttributeValue xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                                xsi:type="xsd:string"
                                >John</saml2:AttributeValue>
    </saml2:Attribute>
</saml2:AttributeStatement>
```

**Sample subject attribute** in the assertion looks as shown below:

```xml no-line-numbers
<saml2:Subject>
    <saml2:NameID Format="urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress">John</saml2:NameID>
    <saml2:SubjectConfirmation Method="urn:oasis:names:tc:SAML:2.0:cm:bearer">
        <saml2:SubjectConfirmationData InResponseTo="jimhbeljflkppacldhnjcfjkhoobkddhngnkamom"
                                        NotOnOrAfter="2021-08-30T09:49:21.336Z"
                                        Recipient="http://localhost:8081/sample-app/home.jsp"
                                        />
    </saml2:SubjectConfirmation>
</saml2:Subject>
```

## Related links

- <a :href="$withBase('/references/idp-settings/saml-settings-for-idp/')">Configure SAML IdP settings</a>
