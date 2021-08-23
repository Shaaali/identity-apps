# Enable user attributes for SAML apps

Asgardeo can share user attributes in the <a :href="$withBase('/guides/users/manage-user-profiles/')">user profile</a> with the applications. This guide walks you through the steps for sharing user attributes with SAML applications. 

## Prerequisite
The <a :href="$withBase('/references/app-settings/saml-settings-for-app/#attribute-profile')">Enable Attribute Profile</a> setting should be enabled to share the user attributes.

## Configure user attributes to share

This section guides you to configure user attributes in the console and to share them with the applications.

You can perform the following actions via the [Asgardeo console](https://console.asgardeo.io).

### Select user attributes

<CommonGuide guide='guides/fragments/manage-app/manage-user-attributes/select-user-attributes.md'/>

<br>

### Map user attributes

In the user attribute configurations, you can either choose default attribute names or define application-specific user attribute names.

To configure application-specific attribute names, you need to map the selected user attributes to application-specific user attributes. 

To perform mapping:
1. Click **Enable Mapping** in the **User Attributes** section.
2. Change the **Mapped user attribute** for the selected attribute.
 <img :src="$withBase('/assets/img/guides/applications/attributes/saml/enable-mapping.png')" alt="Eable mapping">

This ensures that the application receives attributes based on the name that is configured.

### Select mandatory user attributes

<CommonGuide guide='guides/fragments/manage-app/manage-user-attributes/select-mandatory-attributes.md'/>

Once you select the [required user attributes](#select-user-attributes), they appear under **User Attributes**. 

From the attributes that are listed, you can select the **Mandatory** attributes. 

<img :src="$withBase('/assets/img/guides/applications/attributes/saml/add-mandatory-user-attributes.png')" alt="Add mandatory user attributes in Asgardeo">


<br>

### Select the subject attribute

The subject attribute is used for exchanging information about the user. The subject is represented by the **subject** attribute in the SAML assertion. 
By default, Asgardeo shares **username** as the subject. Asgardeo provides the capability to define any user attribute as the subject.

To define some other attributes as the subject:
1. [Select it as a user attribute](#select-user-attributes). 
2. Go to the **Subject** section under **User Attributes**.
3. View all the user attributes that are selected from the **Subject attribute** list. Select one attribute that you need to have as the subject attribute.
    <img :src="$withBase('/assets/img/guides/applications/attributes/saml/select-sub-attribute.png')" alt="Select subject attribute in Asgardeo"> 
4. Click **Update**.

<br>
<br>

### Disable the consent screen

<CommonGuide guide='guides/fragments/manage-app/manage-user-attributes/disable-user-consent.md'/>


## How it works

Let's see how this flow works in Asgardeo.

Once you have configured the user attributes that are required for your application, Asgardeo implements the following process when a customer tries to log in to your app.

<img class="borderless-img" :src="$withBase('/assets/img/guides/applications/attributes/saml/how-it-works.png')" alt="Provides consent for attributes in Asgardeo">

### Asgardeo gets consent from user
 
<CommonGuide guide='guides/fragments/manage-app/manage-user-attributes/get-user-consent.md'/>

<img :src="$withBase('/assets/img/guides/applications/attributes/saml/provide-consent.png')" alt="Provides consent for attributes in Asgardeo">

<br>

### Asgardeo shares user attributes with apps

Asgardeo shares the user attributes, for which the user provided consent, with the application along with **subject** attribute via SAML assertion. 

#### Subject

The subject attribute is shared via the `<saml2:Subject>` element based on the [configured subject attribute](#select-the-subject-attribute).

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
The user attributes that are consented by the user will be shared with applications via the `<saml2:AttributeStatement>` element.

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

If you have done any custom attribute mapping via the [Enable mapping](#map-user-attributes) setting, the attributes will contain those application-specific names in the SAML assertion.

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
