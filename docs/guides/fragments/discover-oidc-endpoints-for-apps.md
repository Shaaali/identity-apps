There are two options for an OIDC application to identify the endpoints of Asgardeo that it should call.

1. By using the discovery endpoint of Asgardeo
2. By manually defining the required endpoints.

**1. Use the discovery endpoint of Asgardeo**

Application can dynamically discover the OAuth 2.0 endpoints of Asgardeo by calling the discovery endpoint
under `<issuer>/.well-known/openid-configuration`. It contains the issuer name, endpoint URLs and information such as
supported scopes or response types as a JSON document.

_Issuer name of Asgardeo:_

`https://accounts.asgardeo.io/t/<yourTenantDomain>/oauth2/token`

_Discovery endpoint:_

`https://accounts.asgardeo.io/t/<yourTenantDomain>/oauth2/token/.well-known/openid-configuration`

_Sample request:_

<CodeGroup>

<CodeGroupItem title="cURL">

``` 
curl --location --request GET 'https://accounts.asgardeo.io/t/bifrost/oauth2/token/.well-known/openid-configuration'
```

</CodeGroupItem>

<CodeGroupItem title="JavaScript - jQuery" active>

```js
var settings = {
    "url": "https://accounts.asgardeo.io/t/bifrost/oauth2/token/.well-known/openid-configuration",
    "method": "GET",
    "timeout": 0,
};

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

</CodeGroupItem>

<CodeGroupItem title="Nodejs - Axios" active>

```js
var axios = require('axios');

var config = {
    method: 'get',
    url: 'https://accounts.asgardeo.io/t/bifrost/oauth2/token/.well-known/openid-configuration',
    headers: {}
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
```

</CodeGroupItem>

</CodeGroup>

**2. Configure the endpoints manually**

You can also find the server endpoints corresponding to your tenant domain from the **Help** panel of the application
view in the Console.

<img :src="$withBase('/assets/img/guides/applications/app-endpoint-help.png')" alt="app-help-panel-for-endpoints">

