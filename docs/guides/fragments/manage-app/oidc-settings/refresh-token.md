These configurations are enabled only if Refresh Token grant type is selected from grant types.
<br>

#### Rotate refresh token
Asgardeo issues a new refresh token each time when access token is refreshed with `refresh_token` grant type. The previous token gets invalidated.

If application does not want to get new refresh token for each request, you can unselect this **Rotate refresh token** setting. Then the same refresh token will be issued with `refresh_token` grant type until the refresh token get expires.
<br>

#### Refresh token expiry time
This provides the validity period of refresh token in seconds. In Asgardeo, the default value is 86400 seconds(24 hrs).
