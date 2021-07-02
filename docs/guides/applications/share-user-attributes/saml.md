# Share user attributes with SAML apps

Asgardeo can share user attributes in <a href="/guides/user-management/user-profiles/">user profile</a> with applications.  This guides walks you through the steps for sharing user attributes with SAML applications. 

## Prerequisite
<a href="/guides/applications/web-app/saml/saml-settings/#attribute-profile">Enable Attribute profile</a> setting. This configuration should be enabled to share user attributes.

## Configure user attributes to share

This section will guide you on how to configure user attributes  from console to share with application.

An application developer can perform below actions via [Asgardeo Console](https://console.asgardeo.io):
- [Select user attributes](#select-user-attributes)
- [Select subject attribute](#select-subject-attribute)
- [Enable custom mapping for attributes](#enable-mapping)
- [Disable the control of getting consent from users to share attributes](#disable-consent-screen)

### Select user attributes

<CommonGuide guide='guides/fragments/manage-app/manage-user-attributes/select-user-attributes.md'/>

<br>

### Enable mapping

In user attributes configuration,  you can either choose default attribute names or define application specific user attribute names.

In order to configure application specific attribute names, you need map the selected user attributes to application specific user attributes. 

To perform mapping:
1. Click, **Enable Mapping** in **User attributes** section.
2. Change the **Mapped user attribute** for the selected attribute.
 <img :src="$withBase('/assets/img/guides/applications/attributes/saml/enable-mapping.png')" alt="Eable mapping">

This will make sure that application receives attributes based on the name that is configured.

### Select mandatory user attributes

<CommonGuide guide='guides/fragments/manage-app/manage-user-attributes/select-mandatory-attributes.md'/>

Once the application developer selects the [required user attributes](#select-user-attributes), they will appear under **User Attributes**. 
From those attributes that are listed, you can select **Mandatory** attributes. 

<img :src="$withBase('/assets/img/guides/applications/attributes/saml/add-mandatory-user-attributes.png')" alt="Add madatory user attributes in Asgardeo">


<br>

### Select subject attribute

Subject attribute used to exchange information about the user. Subject is represented by **subject** attribute in the SAML assertion. 
By default, Asgardeo shares **username** as the subject. But Asgardeo provides the capability to define any user attributes as the subject.

In order to define some other attributes as subject, 
1. First you need to [select it as a user attribute](#select-user-attributes) as mentioned above. 
2. Go to **Subject** section under **User Attributes**.
3. You can view all the user attributes that are selected from the **Subject attribute** list. Select one attribute that you need to have as the subject attribute.
    <img :src="$withBase('/assets/img/guides/applications/attributes/saml/select-sub-attribute.png')" alt="Select subject attribute in Asgardeo"> 
4. Click **Update**.

<br>
<br>

### Disable consent screen

<CommonGuide guide='guides/fragments/manage-app/manage-user-attributes/disable-user-consent.md'/>


## How it works
Once the application developer selects the required and mandatory attributes:
1. [Asgardeo  gets consent from users](#asgardeo-gets-consent-from-user)
2. [Asgardeo shares user attributes in authentication response](#asgardeo-shares-user-attributes-with-apps)

Let's see how this flow works in Asgardeo:
<img :src="$withBase('/assets/img/guides/applications/attributes/saml/how-it-works.png')" alt="Provides consent for attributes in Asgardeo">

### Asgardeo gets consent from user
 
<CommonGuide guide='guides/fragments/manage-app/manage-user-attributes/get-user-consent.md'/>

<img :src="$withBase('/assets/img/guides/applications/attributes/saml/provide-consent.png')" alt="Provides consent for attributes in Asgardeo">

<br>

### Asgardeo shares user attributes with apps

Asgardeo shares the consented user attributes with application along with **subject** attribute via SAML assertion. 

#### Subject

Subject attribute is shared via `<saml2:Subject>` element based on the [configured subject attribute](#select-subject-attribute).

_A sample Subject element found in a SAML assertion is given below:_

```xml
<saml2:Subject>
        <saml2:NameID Format="urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress">alice@bifrost.com</saml2:NameID>
        <saml2:SubjectConfirmation Method="urn:oasis:names:tc:SAML:2.0:cm:bearer">
            <saml2:SubjectConfirmationData InResponseTo="immfmmacmiaomepphphhlfokfggpffkleokajfbg"
                                           NotOnOrAfter="2021-07-13T06:09:33.594Z"
                                           Recipient="http://localhost:8081/sample-app/home.jsp"
                                           />
        </saml2:SubjectConfirmation>

</saml2:Subject>
```

#### Attribute statement
The user attributes that are consented by the user, will be shared with application via `<saml2:AttributeStatement>` element.

_A sample attribute statement element found in a SAML assertion is given below:_
```xml
<saml2:AttributeStatement>
        <saml2:Attribute Name="http://wso2.org/claims/country"
                         NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic"
                         >
            <saml2:AttributeValue xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                                  xsi:type="xsd:string"
                                  >Sri Lanka</saml2:AttributeValue>
        </saml2:Attribute>
        <saml2:Attribute Name="http://wso2.org/claims/emailaddress"
                         NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic"
                         >
            <saml2:AttributeValue xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                                  xsi:type="xsd:string"
                                  >alice@bifrost.com</saml2:AttributeValue>
        </saml2:Attribute>
</saml2:AttributeStatement> 
```

#### Attribute statement with attribute mapping

If you have done any custom attribute mapping via [Enable mapping](#enable-mapping) setting, the attributes will contain those application specific names in the SAML assertion.

_A sample attribute statement element with custom attribute mapping is given below:_

```xml
<saml2:AttributeStatement>
            <saml2:Attribute Name="country"
                             NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic"
                             >
                <saml2:AttributeValue xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                                      xsi:type="xsd:string"
                                      >Sri Lanka</saml2:AttributeValue>
            </saml2:Attribute>
            <saml2:Attribute Name="emailaddress"
                             NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic"
                             >
                <saml2:AttributeValue xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                                      xsi:type="xsd:string"
                                      >alice@bifrost.com</saml2:AttributeValue>
            </saml2:Attribute>
</saml2:AttributeStatement>
```
