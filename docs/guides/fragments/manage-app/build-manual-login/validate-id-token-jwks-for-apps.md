In order to validate the signature on the obtained ID token, you need the public key of Asgardeo. Signature of ID tokens can be validated using JWKS endpoint. See [ID Token validation](https://openid.net/specs/openid-connect-core-1_0.html#TokenResponseValidation).

Asgardeo exposes the public key information through the standard [JWKS](https://datatracker.ietf.org/doc/html/rfc7517) endpoint.

By using a signature validation library, you can validate the signature of the ID token using the JWKS endpoint.

**JWKS endpoint:**

```
https://api.asgardeo.io/t/<organization_name>/oauth2/jwks
```

**Sample request:**

<CodeGroup>
<CodeGroupItem title="cURL" active>

``` 
curl --location --request GET 'https://api.asgardeo.io/t/bifrost/oauth2/jwks'
```

</CodeGroupItem>

<CodeGroupItem title="JavaScript - jQuery">

```js
var settings = {
    "url": "https://api.asgardeo.io/t/bifrost/oauth2/jwks",
    "method": "GET",
    "timeout": 0,
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
    url: 'https://api.asgardeo.io/t/bifrost/oauth2/jwks',
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

_Sample response:_

```json
{
  "keys": [
    {
      "kty": "RSA",
      "e": "AQAB",
      "use": "sig",
      "kid": "Yzc5OTgwZTE3MWQzMWEzNDFmNzVhM2NiOTBlNjcwNTI5OGM0MmQ1YjkwYjg2MTIwZWMwNzM4Mzg1ZGIyZDg3ZA_RS256",
      "alg": "RS256",
      "n": "i_i34CgF8IZd8e27sY3lJkX6MyW7e2oIH0f_OlnwftTdS-SAmmIMm06QdyhDr0fycTuNR9hjsEhSm9ecS5kZh9qsuffLb1N041Ml37VE6qeOKP4AocvYmr0rtpH0TUgqXndDeFAAF3oLVhUTokw9Ik-T23cEPDA8gMCmQf7Nje7fNsQ6aCuzzvfUekXvRnDl_7ZAHgbw_0gyujIJ11NlKiNbmCdKMATn68TwQ4U5RJD9-IT0zizWm1ciV-ZOc12L8AsUI-QFjLnUlM4S42X1oj0Tao1oL9V8QGASHHIGKqJ9YxvvnuxaHd42NFFHJcwB4oLlirjOyI5HfKZRFE4FzQ"
    }
  ]
}
```

<br>
