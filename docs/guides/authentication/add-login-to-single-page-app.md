# Add login to an SPA

Single-page apps (SPAs) by design run with the source code exposed in the browser, which means that they cannot maintain any secrets. These kinds of applications are called public clients.

Based on the [OAuth 2.0 best practices for browser-based apps](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-browser-based-apps-08), Asgardeo recommends securing your SPAs using the OpenID Connect Authorization Code Flow for public clients with the PKCE ([Proof Key for Code Exchange](https://datatracker.ietf.org/doc/html/rfc7636)) extension.

See the guides given below to add login to your SPAs with Asgardeo. 

### Try out samples

- <a :href="$withBase('/get-started/try-samples/qsg-spa-react')">React SPA Sample</a>
- <a :href="$withBase('/get-started/try-samples/qsg-spa-angular')">Angular SPA Sample</a>
- <a :href="$withBase('/get-started/try-samples/qsg-spa-javascript')">JavaScript SPA Sample</a>

### Use an SDK to add login to your SPA

- <a :href="$withBase('/get-started/try-your-own-app/react')">React SDK</a>
- <a :href="$withBase('/get-started/try-your-own-app/angular')">Angular SDK</a>
- <a :href="$withBase('/get-started/try-your-own-app/javascript')">Javascript SDK</a>

### Manually add login to your SPA

- <a :href="$withBase('/guides/authentication/oidc/implement-auth-code-with-pkce/')">Implement authorization code flow with PKCE</a>
