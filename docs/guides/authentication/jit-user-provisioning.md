# Configure Just-in-Time (JIT) user provisioning

This guide explains the concept of Just-In-Time user provisioning, why and when to use it, and also the instuctions for configuring it.

## Introduction

Just-in-Time (JIT) user provisioning is a method used to store a user's identity and user claims in the Asgardeo user store when the user is authenticated through an <a :href="$withBase('/guides/authentication/#manage-connections')">external identity provider (IdP)</a>.

.............

The flow of JIT user provisioning is as follows: 

1. When an application initiates an authentication request, the user gets redirected to Asgardeo. 
2. If the user has used an external identity provider for authentication, Asgardeo redirects the user to the selected external IdP. 
3. Asgardeo receives a positive authentication response from the external IdP with the user information.
4. JIT provisioning is triggered and Asgardeo creates a user account in its internal user store along with the user claims obtained from the authentication response.

With this process, new user accounts are automatically provisioned to Asgardeo through external IdPs.

## Prerequisites

First, the external IdP should be registered in Asgardeo as a connection. 

::: info
Learn more about how to enable login to your application using the following external IdPs: 
- <a :href="$withBase('/guides/authentication/social-login/add-facebook-login/')">Facebook</a>
- <a :href="$withBase('/guides/authentication/social-login/add-google-login/')">Google</a>
- <a :href="$withBase('/guides/authentication/social-login/add-github-login/')">Github</a>
- <a :href="$withBase('/guides/authentication/enterprise-login/add-oidc-idp-login/')">OpenID Connect IdPs</a>
- <a :href="$withBase('/guides/authentication/enterprise-login/add-saml-idp-login/')">SAML IdPs</a>
:::

## Enable JIT user provisioning

To enable JIT user provisioning for an external IdP:

1. On Asgardeo console, click **Develop > Connections** and select the IdP.
2. Go to the **Advanced** tab of the selected IdP.
3. Select the **Just-in-Time User Provisioning** checkbox.
    
    <img :src="$withBase('/assets/img/guides/jit-provisioning/jit-enabled.png')" alt="JIT User Provisioning Config Enabled">

4. Click **Update** to save.

## Disable JIT user provisioning

If you disable JIT provisioning for an IdP, be sure to validate its effect on your applications that use <a :href="$withBase('/guides/authentication/mfa/')">multi-factor authentication (MFA)</a>. This is because certain MFA mechanisms (such as TOTP and EmailOTP) require the login users to have local accounts in Asgardeo.

Consider the following scenarios:

.....

In the user login flow, the authentication step for subject identification is where the login user is identified by validating credentials. For the MFA step to work, the user credentials that were validated should be stored in a local user account. This means that JIT provisioning is required for external IdPs that are in the subject identification step.

Alternatively, you can configure a login flow to skip the second authentication step when the specific IdP is used as the first authenticator. This can be achieved by a <a :href="$withBase('/guides/authentication/conditional-auth/write-your-first-script/')">conditional authentication script</a> with the <a :href="$withBase('/references/conditional-auth/api-reference/#execute-a-step')">step-execution method</a>.