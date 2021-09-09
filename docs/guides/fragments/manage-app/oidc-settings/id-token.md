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
Specifies whether to enable encryption for the ID Token when issuing the token using the public key of your application.
<br>To enable encryption, you should configure the [certificate](#certificate) of your application. You can configure the certificate from the <b>Certificates</b> section.

#### Algorithm
The algorithm enables a secure key exchange using an Asymmetric Key Encryption algorithm. 

Asgardeo uses the Public Key of the application (obtained from the [certificate](#certificate)) and the asymmetric encryption algorithm specified here to encrypt the CEK.

#### Encryption Method
The encryption method enables a symmetric encryption algorithm for encrypting ID tokens. The value you select corresponds to the JWE key length that is used by the encryption method.

The following encryption process is enforced by the encryption method:
1. First, a Random Content Encryption Key (CEK) is generated. This key is used for maintaining a secure communication channel with the application.
2. Asgardeo then uses the generated CEK value and the symmetric encryption algorithm specified here to encrypt the ID token.

#### ID Token expiry time
Provides the validity period of ID token in seconds. The default value is 3600 seconds.
