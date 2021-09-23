# Request user information

User information is encoded inside the ID token returned along with the access token. In addition to that, OpenID Connect provides [userinfo endpoint](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo) to obtain user
information as a payload by invoking the userinfo endpoint with the access token obtained.

**Userinfo endpoint:**

``` no-line-numbers
https://api.asgardeo.io/t/<organization_name>/oauth2/userinfo
```

**Sample request:**

<CodeGroup>
<CodeGroupItem title="cURL" active>

``` 
curl --location --request GET 'https://api.asgardeo.io/t/{organization}/oauth2/userinfo' \
--header 'Authorization: Bearer {your_access_token}'
```

</CodeGroupItem>

<CodeGroupItem title="JavaScript - jQuery">

```js
var settings = {
    "url": "https://api.asgardeo.io/t/{organization}/oauth2/userinfo",
    "method": "GET",
    "timeout": 0,
    "headers": {
        "Authorization": "Bearer {your_access_token}"
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
    url: 'https://api.asgardeo.io/t/{organization}/oauth2/userinfo',
    headers: {
        'Authorization': 'Bearer {your_access_token}'
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

**Default sample response:**  
Asgardeo returns only `sub` claim, if there is no user attributes shared with the application.

```json no-line-numbers
{
  "sub": "user1@bifrost.com"
}
```

You can customize the user information in the response by <a :href="$withBase('/guides/authentication/user-attributes/enable-attributes-for-oidc-app/')">configuring user attributes</a> with the application.
<br>
