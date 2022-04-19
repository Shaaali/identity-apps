---
pageClass: intro-page
---

# apis

<<<<<<< HEAD
<!-- markdownlint-disable-next-line -->
# APIs - Overview
=======
# Introduction
>>>>>>> 166666a... Overview-improv

This is the REST API documentation for Asgardeo.

## APIs in Asgardeo

Asgardeo exposes a set of APIs, which allows you to manage various organization settings and application settings programmatically using the APIs. This is an alternative to using the Asgardeo console. 

Some of these APIs are used for management purposes and they have special [authentication](#authentication) requirements. The management APIs in Asgardeo are as follows: 
-   <a :href="$withBase('/apis/email-template')">Email templates API</a>
-   <a :href="$withBase('/apis/scim2')">User management API (SCIM2)</a> 
    - ```users``` endpoint
    - ```group``` endpoint
    - ```bulk``` endpoint
    - ```resource type``` endpoint
    - ```service provider config``` endpoint
-   <a :href="$withBase('/apis/self-sign-up')">User self-service API</a>

<<<<<<< HEAD
You need an access token to invoke management APIs. If you are an administrator or developer who has access to the Asgardeo console, you can generate the required access tokens.
=======
The other APIs of Asgardeo are as follows:
-   <a :href="$withBase('/apis/session')">User session management API</a>
-   <a :href="$withBase('/apis/scim2')">User management API (SCIM2)</a> 
    - ```me``` endpoint 
>>>>>>> 166666a... Overview-improv

## Authentication

You need an access token to invoke APIs in Asgardeo. If you are an administrator or developer who has access to the Asgardeo console, you can generate the required access tokens. 

The process of obtaining access tokens is different for management APIs and other APIs of Asgardeo. 

<<<<<<< HEAD
- <a :href="$withBase('/apis/scim2')">User management API (SCIM2)</a>
- <a :href="$withBase('/apis/self-sign-up')">User self-service API</a>
- <a :href="$withBase('/apis/session')">User session management API</a>
- <a :href="$withBase('/apis/email-template')">Email templates API</a>
=======
::: info
Learn how to: 
- <a :href="$withBase('/apis/authentication')">get access tokens for management APIs</a>.
- <a :href="$withBase('/guides/authentication/oidc/implement-auth-code')">get access tokens for other APIs</a>.
:::
>>>>>>> 166666a... Overview-improv
