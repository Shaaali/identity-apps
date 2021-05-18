User information is encoded inside the ID token returned along with the access token. You can also obtain user
information as a payload by invoking the userinfo endpoint with the access token obtained.

_Userinfo endpoint:_

`https://accounts.asgardeo.io/t/<yourTenantDomain>/oauth2/userinfo`

_Sample request:_

<CodeGroup>
<CodeGroupItem title="cURL" active>

``` 
curl --location --request GET 'https://accounts.asgardeo.io/t/bifrost/oauth2/userinfo' \
--header 'Authorization: Bearer 46e69c49-d697-3ce0-bdfe-1decb5157805'
```

</CodeGroupItem>

<CodeGroupItem title="JavaScript - jQuery">

```js
var settings = {
    "url": "https://accounts.asgardeo.io/t/bifrost/oauth2/userinfo",
    "method": "GET",
    "timeout": 0,
    "headers": {
        "Authorization": "Bearer 46e69c49-d697-3ce0-bdfe-1decb5157805"
    },
};

$.ajax(settings).done(function (response) {
    console.log(response);
});
```

</CodeGroupItem>

<CodeGroupItem title="Nodejs - Axios">

```js
var axios = require('axios');

var config = {
    method: 'get',
    url: 'https://accounts.asgardeo.io/t/bifrost/oauth2/userinfo',
    headers: {
        'Authorization': 'Bearer 46e69c49-d697-3ce0-bdfe-1decb5157805'
    }
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

_Default sample response:_

```json
{
  "sub": "user1@bifrost.com"
}
```

By default, only the username (sub) information will be available in the response. You can customize the user
information returned by configuring the user attributes of the application registered in the Asgardeo console.

More details on configuring the user attributes can be found in
the [User attributes](../applications/application-settings/configure-user-attribute.md) section in application settings. 

