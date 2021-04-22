# Single page application

A Single Page Application (SPA) is a web application that loads a single HTML page initially and dynamically update that page as the user interacts with the application. A SPA works inside a browser and does not require page reloading during use. The apps you use on a daily basis including Gmail, Facebook, Google Docs, and Google Maps are SPAs.
https://www.youtube.com/watch?v=tmKD2famPJc&t=129s

## SPA with OIDC

<img :src="$withBase('/assets/img/guides/spa-oidc.png')" alt="spa-with-oidc-diagram">

Describes the diagram

Callback URL in the app, how Asgardeo provides OIDC security to the application.

<br>

## Secure your SPA using Asgardeo

The following guides provide the steps that are required to ensure the security of your SPAs with Asgradeo

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

## What's next

* [Quickstart: Single page application sample](../../../quickstarts/qsg-spa-sample)