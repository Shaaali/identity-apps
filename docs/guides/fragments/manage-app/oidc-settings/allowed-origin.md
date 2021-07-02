For security reasons, browsers restrict cross-origin HTTP requests initiated from browser scripts. [Cross Origin Resource Sharing(CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) allows your application to do cross-origin HTTP requests. 

This Allowed Origins are the URLs that are allowed to access APIs from javascript. By pre-registering the application origin as an allowed one in Asgardeo, applications can access APIs of Asgardeo:
 - Token endpoint
 - JWKS endpoint
 - Userinfo endpoint
 - other APIs

You can add multiple URLs as allowed origins.
