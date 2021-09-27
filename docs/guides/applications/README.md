# Applications

Regardless of the application type or the development technology, you can connect your application with Asgardeo and control the way users log in to your app.

Currently, Asgardeo supports integrating two application types. When you select an application type, Asgardeo provides all the recommended configs in place by default which you can change as needed later.

## Single-page applications

Single-page applications(SPAs) are apps that run on the browser and do not require a page reload with a change 
in content. 

The main advantage of a single-page application is its speed. Since content is dynamically updated as the user interacts with it, the user does not need to wait for page reloads. Users can experience a seamless flow with high responsiveness from the application. 

JavaScript frameworks and libraries, such as AngularJS, React, Vue.js, are some popular technologies adopted to build SPAs.

- <a :href="$withBase('/guides/applications/register-single-page-app/')">Register a single-page application</a>

## Web applications

Web applications(web apps) are the most common type of applications in use. They are usually hosted on a web server
and accessed by the browser. Web applications need authentication as they offer functionality dependent on the logged-in user.

- <a :href="$withBase('/guides/applications/register-oidc-web-app/')">Register a web application with OIDC</a>
- <a :href="$withBase('/guides/applications/register-saml-web-app/')">Register a web application  with SAML</a>