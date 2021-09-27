#### Audience
Specifies the recipient(s) that this ID token is intended for. By default, the client ID of this application is added as an audience. You can add multiple audiences in the ID token.

 _Sample default ID token_:
 ```json no-line-numbers
 {
  "isk": "c37e33a87f794f9db4e43eeec5596dd0f64ba43c2c8a6e35eb4bd09e8a09d58a",
  "at_hash": "sXH3BGop66MmXp0CCWDk2A",
  "aud": "Wsoq8t4nHW80gSnPfyDvRbiC__Ea",
  "c_hash": "IgFIyrsoOeTwjdAaG3y3OQ",
  "sub": "Alice@bifrost.com",
  "nbf": 1623843889,
  "azp": "Wsoq8t4nHW80gSnPfyDvRbiC__Ea",
  "amr": [
    "BasicAuthenticator"
  ],
  "iss": "https://api.asgardeo.io/t/bifrost/oauth2/token",
  "exp": 1623847489,
  "iat": 1623843889
 }
 ```

 _Sample ID token when `sample_app` is added as a audience value_:

 ```json no-line-numbers
 {
  "isk": "1f77c2907c1c2670d73909d3dad38cd02ecda3c21a343dec9d75b51630ca5418",
  "at_hash": "a387Ursh5iNxeMmNViWT2A",
  "aud": [
    "Wsoq8t4nHW80gSnPfyDvRbiC__Ea",
    "sample_app"
  ],
  "c_hash": "tz02tie7nYsK4__SFj2uKQ",
  "sub": "Alice@bifrost.com",
  "nbf": 1623908834,
  "azp": "Wsoq8t4nHW80gSnPfyDvRbiC__Ea",
  "amr": [
    "BasicAuthenticator"
  ],
  "iss": "https://api.asgardeo.io/t/bifrost/oauth2/token",
  "exp": 1623912434,
  "iat": 1623908834
 }
 ```
<br>

#### Enable encryption
Specifies whether to enable encryption for the ID token when the token is issued. The public key of your application is used for encryption.

To enable encryption, you should configure the certificate of your application from the <b>Certificates</b> section.

#### Algorithm
A single-use AES secret key, called the Content Encryption Key (CEK), is generated to encrypt the ID token payload.

Asgardeo uses the public Key of the application (obtained from the <a href="#certificate">certificate</a>) and the asymmetric encryption algorithm specified here to encrypt the generated CEK. The selected algorithm is mentioned as the "alg" in the ID token header.

#### Encryption Method
The encryption method defines a symmetric encryption algorithm for encrypting ID tokens. 

Asgardeo uses a generated CEK value and the symmetric encryption algorithm specified here to encrypt the ID token. The selected encryption method is mentioned as the "enc" in the id token header. 

#### ID Token expiry time
Provides the validity period of ID token in seconds. The default value is 3600 seconds.
