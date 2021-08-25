# Validate ID tokens by apps

ID token is a security token sent by Asgardeo to application during token request. This ID token contain information about the authenticated user. 

**Sample ID token**
```no-line-numbers
eyJ4NXQiOiJZemM1T1Rnd1pURTNNV1F6TVdFek5ERm1OelZoTTJOaU9UQmxOamN3TlRJNU9HTTBNbVExWWprd1lqZzJNVEl3WldNd056TTRNemcxWkdJeVpEZzNaQSIsImtpZCI6Ill6YzVPVGd3WlRFM01XUXpNV0V6TkRGbU56VmhNMk5pT1RCbE5qY3dOVEk1T0dNME1tUTFZamt3WWpnMk1USXdaV013TnpNNE16ZzFaR0l5WkRnM1pBX1JTMjU2IiwiYWxnIjoiUlMyNTYifQ.eyJpc2siOiIzYzdlNDIyZGFkNTk1MDc3ZTAyYTYzNjRjYzViN2M5YTE2NzFkNzhmYWQ1MmZmZTVlNmE0MzcwOTRiNGNhOWZmIiwiYXRfaGFzaCI6IklVdEVuNHRLQWlzVWVXRDhIWGZwRXciLCJhdWQiOiJXc29xOHQ0bkhXODBnU25QZnlEdlJiaUNfX0VhIiwiY19oYXNoIjoic3ZicjU1SEVIUGo3emt3Z2VuSkgxUSIsInN1YiI6IkFsaWNhQGJpZnJvc3QuY29tIiwibmJmIjoxNjI5OTY4MzQ0LCJhenAiOiJXc29xOHQ0bkhXODBnU25QZnlEdlJiaUNfX0VhIiwiYW1yIjpbIkJhc2ljQXV0aGVudGljYXRvciJdLCJpc3MiOiJodHRwczpcL1wvYXBpLmFzZ2FyZGVvLmlvXC90XC9iaWZyb3N0XC9vYXV0aDJcL3Rva2VuIiwiZXhwIjoxNjI5OTcxOTQ0LCJpYXQiOjE2Mjk5NjgzNDQsInNpZCI6ImY3OGY1ZjRjLTE4NjItNDIwOS04NWEzLWUyMmMyYTljMDY4ZCJ9.D9-lJ8vtC8Hj5mJvUm1ld9w0rifPzjHc6UyCbENtWbno0zTYB_ki3_z-x7zI_-72ixiDpsjzwLbmKKWw8tFtqWM36WvdwBH6mBDVB_K7cy8NqrACLOjFgBrRa3HXwHkwAgwHp6Vpgbs35aAbwf0OTBxeohnbEA4y84D0pFILHm-u_iFG1-tS-QKKh6s8SBR0MNA6dJqj95R3NVF-tk4aztHI5GB63aaw2E883Xd6r2k4MIi3vQoB35-T_zFSebypaheyW3IXCPNsXjsyy4toMRfE4KEeI-j20vixxtIB22OlOWBMie7ce9Atzu6op0R0eJz3f3Ch6OrPxcvT3ghSJQ
```

**Sample decoded ID token**
```json no-line-numbers
{
  "isk": "3c7e422dad595077e02a6364cc5b7c9a1671d78fad52ffe5e6a437094b4ca9ff",
  "at_hash": "IUtEn4tKAisUeWD8HXfpEw",
  "aud": "Wsoq8t4nHW80gSnPfyDvRbiC__Ea",
  "c_hash": "svbr55HEHPj7zkwgenJH1Q",
  "sub": "Alica@bifrost.com",
  "nbf": 1629968344,
  "azp": "Wsoq8t4nHW80gSnPfyDvRbiC__Ea",
  "amr": [
    "BasicAuthenticator"
  ],
  "iss": "https://api.asgardeo.io/t/bifrost/oauth2/token",
  "exp": 1629971944,
  "iat": 1629968344,
  "sid": "f78f5f4c-1862-4209-85a3-e22c2a9c068d"
}
```
When an application receives ID token, it has to validate the token. Validating an ID token involves followings:
- [Verify the signature used to sign the ID token](#verify-the-signature-in-the-id-token)
- [Verify the claims in ID token](#verify-the-claims-in-id-token)


## Verify the signature in the ID token
In order to validate the signature on the obtained ID token, you need the public key of Asgardeo. Signature of ID tokens can be validated using JWKS endpoint. See [ID Token validation](https://openid.net/specs/openid-connect-core-1_0.html#TokenResponseValidation).

Asgardeo exposes the public key information through the standard [JWKS](https://datatracker.ietf.org/doc/html/rfc7517) endpoint.

By using a signature validation library, you can validate the signature of the ID token using the JWKS endpoint.

**JWKS endpoint:**

``` no-line-numbers
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

```json no-line-numbers
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


## Verify the claims in ID token

Applications should verify the claims in the ID token before consume it. You can either use some libraries, or use manual approach to verify the claims.  See [ID token validation](https://openid.net/specs/openid-connect-core-1_0.html#TokenResponseValidation)

These are some claims that are sent in ID token which needs to be verified by the application.
- **iss**(issuer): should match the `https://api.asgardeo.io/t/<organization_name>/oauth2/token`
- **aud**(audience): should match the Client ID of the application.
- **iat** (issued at time): indicates when this ID token was issued. Applications can reject tokens that were issued too far away from the current time.
- **exp** (expiry time): indicates at which time this ID token will expire. Applications should reject the expired tokens.
