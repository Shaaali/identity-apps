# Overview - Applications

Regardless of the application type or the development technology, you can connect your application with Asgardeo and
control the way users log in to your app.

Currently, Asgardeo supports integrating two application types. When you select an application type, Asgardeo provides
all the recommended configs in place by default which you can change as needed later.

## Single page applications

Single-page applications(SPAs) are apps that run on the browser and do not require a page reload with change 
in content. 

The main advantage of single-page application is its speed. Since content is dynamically updated as the user interacts with it, user does not need to wait for page reloads. User can experience a seamless flow with high responsiveness from application. 

JavaScript frameworks and libraries, such as AngularJS, React, Vue.js, are some popular technologies adopted to build SPAs.

## Web applications

Web applications(web apps) are the most common type of applications in use. They are usually hosted on a web server
and accessed by the browser. Web applications need authentication as they offer functionality dependent on the 
logged-in user.

## Manage apps in Asgardeo

When you register an application in Asgardeo you can,

* **Enable log in with a standard authentication protocol**: Add authentication for your app using standard identity
  protocols like OpenID Connect and SAML.

* **Manage user attributes shared with your application**: Manage the user attributes you want to share with your
  application.

* **Design your application login flow**: Customize your application's login flow by deciding the number of factors (2FA or MFA) and social login options.

* **Enforce conditional authentication**: Dynamically change the login flow of a user based on the user’s devices, networks, locations, or usage contexts.