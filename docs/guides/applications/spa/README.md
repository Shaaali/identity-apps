# Single page applications

Single-page applications (SPAs) are apps that run on the browser and do not require a page reload with change 
in content. SPAs load a single HTML page initially and dynamically update the content as a user interacts with it. 
They fetch content by doing API calls to a web server directly from the browser.

Since SPAs run their logic entirely on the browser they are also known as browser-based apps. The apps you use on a 
daily basis including Gmail, Facebook, Google Docs, and Google Maps are SPAs.

## Secure your SPA with Asgardeo

SPAs by design run with the source code exposed in the browser. So they become incapable of maintaining any secrets.

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
      <td style="text-align:center"><a href="../../../sdks/react">React</a></td>
      <td rowspan="3" colspan="3" style="text-align:center"><a href="./spa-configure-general">General guide</a></td>
    </tr>
    <tr>
      <td style="text-align:center"><a href="../../../sdks/angular">Angular</a></td>
    </tr>
    <tr>
      <td style="text-align:center"><a href="../../../sdks/javascript">Javascript</a></td>
    </tr>
  </tbody>
</table>

<br>

## Related Links

* [Tryout React SPA Sample](/quickstarts/qsg-spa-react.md)
* [Tryout Angular SPA Sample](/quickstarts/qsg-spa-angular.md)
* [Tryout JavaScript SPA Sample](/quickstarts/qsg-spa-javascript.md)
