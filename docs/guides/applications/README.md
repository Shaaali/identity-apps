# Manage applications

Regardless of the application type or the development technology, you can use Asgardeo to simply add authentication 
to your application by picking one of the supported standard protocols.

Currently, Asgardeo supports integrating two application types. When you select an application type, Asgardeo 
provides all the recommended configs in place by default which you can change later as per your wish.
* [Single page applications](./spa/README.md)
* [Web applications](./web-app/README.md)

When you register an application in Asgardeo you can, 

* **Enable login with a standard authentication protocol**: To add authentication for your applications, Asgardeo 
provides support for standard identity protocols like OpenID Connect and SAML.
  
* **Manage user attributes shared with your application**: With Asgardeo you can manage the user attributes you 
want to share with an application. You can even mark any attribute as mandatory. Such that if those attribute values 
are not available beforehand, it will prompt the users to input them during the login process.
  
* **Design your application login flow**: You can customize your application's login flow to suit your needs by 
deciding the number of factors you want (2FA or MFA) and social login options.
  
* **Enforce conditional authentication**: You can dynamically change the login flow of a user based on the user’s 
devices, networks, locations, or usage contexts.
