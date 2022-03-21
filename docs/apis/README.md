---
pageClass: intro-page
---

# apis

# APIs - Overview

This is the REST API documentation for Asgardeo.

## Management APIs

Asgardeo exposes a set of management APIs, which allows you to manage various organization settings and application settings programmatically using the APIs. This is an alternative to using the Asgardeo console.

## Authentication

You need an access token to invoke management APIs. If you are an administrator or developer who has access to the Asgardeo console, you can generate the required access tokens. 

::: info
Learn how to <a :href="$withBase('/apis/authentication')">get access tokens</a> for management APIs.
:::

## API references

Listed below are the management APIs of Asgardeo.

-   <a :href="$withBase('/apis/scim2')">User management API (SCIM2)</a> 
-   <a :href="$withBase('/apis/self-sign-up')">User self-service API</a>
-   <a :href="$withBase('/apis/session')">User session management API</a>
-   <a :href="$withBase('/apis/email-template')">Email templates API</a>
