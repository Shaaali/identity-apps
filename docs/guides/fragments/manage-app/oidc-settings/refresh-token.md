These configurations are enabled only if refresh token grant type is added as an allowed grant type.

#### Rotate refresh token
Asgardeo issues a new refresh token each time when access token is refreshed with refresh token grant type. The previous token gets invalidated.

If application does not want to get new refresh token for each request, you can unselect this **Rotate refresh token** setting. Then the same refresh token will be issued with refresh token grant type until the refresh token get expires.

<br>

#### Refresh token expiry time
Provides the validity period of refresh token in seconds. The default value is 86400 seconds.
