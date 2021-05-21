# Single page applications

Single-page applications (SPAs) are JavaScript apps that run on the browser. They load a single HTML page and 
dynamically update the content based on the user interaction. SPAs do API calls directly from the browser to fetch 
information to update its content.

Since SPAs run their logic entirely on the browser they are also known as browser-based apps. The apps you use on a 
daily basis including Gmail, Facebook, Google Docs, and Google Maps are SPAs.

## Secure your SPA with Asgardeo

SPAs by design run with the source code exposed in the browser. So they become incapable of maintaining any secrets. 
SPAs are known as public clients for this reason. 

Based on the [OAuth 2.0 best practices for browser-based apps](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-browser-based-apps-08)
Asgardeo recommends securing your SPAs using the OpenID Connect Authorization Code Flow for public clients 
with the PKCE ([Proof Key for Code Exchange](https://datatracker.ietf.org/doc/html/rfc7636)) extension.

The following guides provide the detailed steps needed to secure your SPAs with Asgradeo using the OpenID Connect 
Authorization Code Flow for public clients with the PKCE. 

<table>
  <tbody>
    <tr>
      <td><h4><b>Use an Asgardeo SDK</b></h4></td>
      <td rowspan="4" colspan="4"><h4>or</h4></td>
      <td><h4><b>Use your own framework</b></h4></td>
    </tr>
    <tr>
      <td style="text-align:center"><a href="./spa-react">React</a></td>
      <td rowspan="3" colspan="3" style="text-align:center"><a href="./spa-configure-general">General guide</a></td>
    </tr>
    <tr>
      <td style="text-align:center"><a href="./spa-angular">Angular</a></td>
    </tr>
    <tr>
      <td style="text-align:center"><a href="./spa-javascript">Javascript</a></td>
    </tr>
  </tbody>
</table>

<br>

## Related Links

* [Tryout React SPA Sample](/quickstarts/qsg-spa-react.md)
* [Tryout Angular SPA Sample](/quickstarts/qsg-spa-angular.md)
* [Tryout JavaScript SPA Sample](/quickstarts/qsg-spa-javascript.md)
