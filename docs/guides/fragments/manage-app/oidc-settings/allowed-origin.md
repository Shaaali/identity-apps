For security reasons, browsers restrict cross-origin HTTP requests initiated from browser scripts. [Cross Origin Resource Sharing(CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) allows your application to do cross-origin HTTP requests. 

Allowed origins are the set of URLs that are allowed to access Asgardeo APIs from javascript. By pre-registering the application origin as an allowed one, applications can access APIs of Asgardeo:
 - Token endpoint
 - JWKS endpoint
 - Userinfo endpoint
 - Other APIs

