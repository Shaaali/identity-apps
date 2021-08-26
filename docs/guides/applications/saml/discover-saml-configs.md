# Discover SAML endpoints and configs in Asgardeo

You can follow this document to obtain required information and the configurations to:
 - Integrate sign in with Asgardeo for your SAML web application
 - Build login with Asgardeo using a SAML supported library

When configuring SAML based sign in with Asgardeo, you need to know:
1. SAML IdP endpoints of Asgardeo
2. Issuer of Asgardeo
3. The public certificate of Asgardeo

 <img :src="$withBase('/assets/img/guides/applications/saml-app/saml-integration.png')" alt="Integrate SAML app" border=0 style="border:0; text-decoration:none; outline:none">

## Prerequisite
To get started, you need to have an application registered in Asgardeo. If you don't have an app registered, go to [Asgardeo console](https://console.asgardeo.io/) to <a :href="$withBase('/guides/applications/web-app/register-saml-web-app/')">register a SAML application</a>.

## Get SAML configs
You need to know the SAML IdP configurations of Asgardeo if you want to add SAML login to your application. 

There are two options for a SAML application to get the SAML IdP configurations of Asgardeo:
1. [Use SAML IdP metadata of Asgardeo](#use-saml-metadata)
2. [Get SAML IdP configurations of Asgardeo from Console](#get-saml-configurations-of-asgardeo-from-console)

### Use SAML metadata

[SAML metadata](https://docs.oasis-open.org/security/saml/v2.0/saml-metadata-2.0-os.pdf) is an XML document which contains information necessary to integrate a SAML application with a with SAML supported identity provider. 

The SAML IdP metadata document contains:
 1. Endpoints (single sign-on URLs, single logout URLs, etc)
 2. Supported bindings
 3. IdP identifiers (entityID or sometimes called Issuer)
 4. Public certificate
 
**Sample SAML IdP metadata of Asgardeo**

```xml no-line-numbers
<?xml version="1.0" encoding="UTF-8"?>
<EntityDescriptor
	xmlns="urn:oasis:names:tc:SAML:2.0:metadata" entityID="accounts.asgardeo.io">
	<IDPSSODescriptor WantAuthnRequestsSigned="false" protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol" validUntil="2021-07-07T07:01:06.536Z">
		<KeyDescriptor use="signing">
			<KeyInfo
				xmlns="http://www.w3.org/2000/09/xmldsig#">
				<X509Data>
					<X509Certificate>MIIC/jCCAeagAwIBAgIECXIstjANBgkqhkiG9w0BAQQFADBBMRAwDgYDVQQDDAdiaWZyb3N0MQ0w
CwYDVQQLDAROb25lMQ8wDQYDVQQKDAZOb25lIEwxDTALBgNVBAYTBE5vbmUwHhcNMjEwMzIwMDYz
NTU5WhcNMzEwNDE3MDYzNTU5WjBBMRAwDgYDVQQDDAdiaWZyb3N0MQ0wCwYDVQQLDAROb25lMQ8w
DQYDVQQKDAZOb25lIEwxDTALBgNVBAYTBE5vbmUwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEK
AoIBAQCL+LfgKAXwhl3x7buxjeUmRfozJbt7aggfR/86WfB+1N1L5ICaYgybTpB3KEOvR/JxO41H
2GOwSFKb15xLmRmH2qy598tvU3TjUyXftUTqp44o/gChy9iavSu2kfRNSCped0N4UAAXegtWFROi
TD0iT5PbdwQ8MDyAwKZB/s2N7t82xDpoK7PO99R6Re9GcOX/tkAeBvD/SDK6MgnXU2UqI1uYJ0ow
BOfrxPBDhTlEkP34hPTOLNabVyJX5k5zXYvwCxQj5AWMudSUzhLjZfWiPRNqjWgv1XxAYBIccgYq
on1jG++e7Fod3jY0UUclzAHiguWKuM7Ijkd8plEUTgXNAgMBAAEwDQYJKoZIhvcNAQEEBQADggEB
AEIeJ9o5QYlRV2KJN5bLL7s6GV3hkYMIrzDoxHFgSvEt2XJULHWj3yvKe1hk/HzEII79fYYKS6xJ
v7MORegQP/zFCD8oAHt/3lnhrG1yM/SQDe60Kd5emWqLqMxNQBmmaYQDTY7F5PIdC9KJ/EeKIoz2
P2QlT5TNOcj9chtRHtsohNNv6Nkew6HZ49Xlm4BsFxhP6J5YPExV4bBw+RsHeiNdcxXNGaNtD5n2
L4KOHbmKddsL1x/KZ4Q67xzaS50IhNnfC84pOFxmYT2FsB02ZuVv97UsNF+8xv+GIN3qc+pIJEWd
HFY29KP4da//BDdQrftzYCATe37Um09id/0KMGs=</X509Certificate>
				</X509Data>
			</KeyInfo>
		</KeyDescriptor>
		<ArtifactResolutionService Binding="urn:oasis:names:tc:SAML:2.0:bindings:SOAP" Location="https://api.asgardeo.io/samlartresolve" index="1"/>
		<SingleLogoutService Binding="urn:oasis:names:tc:SAML:2.0:bindings:SOAP" Location="https://api.asgardeo.io/t/bifrost/samlsso" ResponseLocation="https://api.asgardeo.io/t/bifrost/samlsso"/>
		<SingleLogoutService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://api.asgardeo.io/t/bifrost/samlsso" ResponseLocation="https://api.asgardeo.io/t/bifrost/samlsso"/>
		<SingleLogoutService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect" Location="https://api.asgardeo.io/t/bifrost/samlsso" ResponseLocation="https://api.asgardeo.io/t/bifrost/samlsso"/>
		<SingleSignOnService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://api.asgardeo.io/t/bifrost/samlsso"/>
		<SingleSignOnService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect" Location="https://api.asgardeo.io/t/bifrost/samlsso"/>
		<SingleSignOnService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://api.asgardeo.io/t/bifrost/samlsso"/>
		<SingleSignOnService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect" Location="https://api.asgardeo.io/t/bifrost/samlsso"/>
	</IDPSSODescriptor>
</EntityDescriptor>
```

There are two ways to get the SAML IdP metadata of Asgardeo.
1. [File based metadata](#use-file-based-metadata)
2. [URL based metadata](#use-url-based-metadata)

Based on the capability of your SAML application or library, you can choose either approach.

#### Use File Based Metadata
To download the SAML metadata file of your organization in Asgardeo,
1. In the Asgardeo Console, Select **Develop > Application**.
2. Select the SAML application from the application view.
3. Go to  **Info** section.
4. Click **Download IdP Metadata** to download the metadata xml file.
    <img :src="$withBase('/assets/img/guides/applications/saml-app/download-idp-metadata.png')" alt="Get SAML metadata">

#### Use URL Based Metadata

You can use below endpoint URL to get the SAML IdP metadata information.

``` no-line-numbers
https://api.asgardeo.io/t/<organization_name>/identity/metadata/saml2
```

_Sample endpoint URL_
``` no-line-numbers
https://api.asgardeo.io/t/bifrost/identity/metadata/saml2
```

<br>
<br>

### Get SAML configurations of Asgardeo from Console

Some applications and SDKs do not have the capability to dynamically resolve endpoints from  SAML metadata file. You need to configure endpoints manually to support them.

You can login to [Asgardeo Console](https://console.asgardeo.io/) and get endpoints of Asgardeo. 

1. In the Asgardeo Console, Select **Develop > Application**.
2. Select the SAML application from the application view.
3. Go to  **Info** section of the application and finds the below server information related to your organization:
    - **Issuer** : Issuer name of Asgardeo
    - **Single Sign-On** : Sign-on URL of Asgardeo
    - **Single Logout** : Logout URL of Asgardeo
    - **IdP certificate** : Public certificate of Asgardeo
   <img :src="$withBase('/assets/img/guides/applications/saml-app/idp-endpoints.png')" alt="Get SAML endpoints">
4. You can download the certificate of Asgardeo from **IdP certificate**.

<br>

## What's next?
Now you've integrated your SAML web application. You also can:
- <a :href="$withBase('/references/app-settings/saml-settings-for-app')">Configure SAML settings</a>
