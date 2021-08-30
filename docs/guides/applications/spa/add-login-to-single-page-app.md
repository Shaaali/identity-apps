# Add login to an SPA

SPAs by design run with the source code exposed in the browser. So they become incapable of maintaining any secrets. These kind of applications are called as public clients.

Based on the [OAuth 2.0 best practices for browser-based apps](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-browser-based-apps-08), Asgardeo recommends securing your SPAs using the OpenID Connect Authorization Code Flow for public clients with the PKCE ([Proof Key for Code Exchange](https://datatracker.ietf.org/doc/html/rfc7636)) extension.

The following guides provide the detailed steps needed to secure your SPAs with Asgradeo using the OpenID Connect Authorization Code Flow for public clients with the PKCE. 

### Try out samples

- [React SPA Sample](/quickstarts/qsg-spa-react.md)
- [Angular SPA Sample](/quickstarts/qsg-spa-angular.md)
- [JavaScript SPA Sample](/quickstarts/qsg-spa-javascript.md)

### Use an SDK to add login to your SPA

- [React SDK](/sdks/react.md)
- [Angular SDK](/sdks/angular.md)
- [Javascript SDK](/sdks/javascript.md)

### Manually add login to your SPA
- <a :href="$withBase('/guides/applications/oidc/implement-auth-code-with-pkce/')">Implement authorization code flow with PKCE</a>
