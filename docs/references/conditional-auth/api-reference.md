# Conditional authentication - API reference

Asgardeo provides a set of defined functions and objects to write your conditional authentication script. They are grouped as follows:

- [Core functions](#core-functions): These are the basic functions that are used in the script. These are used for identifying the user who initiated the login flow, executing a step in the login flow, handling login failures, etc.
- [Utility functions](#utility-functions): These utility functions are used for specific scenarios. For example, checking whether the login user belongs to a specific user group.
- [Object references](#object-reference): Objects that you can use to capture user behaviors and to set attributes. For example, you can use the **user** and **request** objects and write the login conditions accordingly.

---

## Core functions

These are the basic functions that are required for defining the application login flow using an authentication script.

### Initial login request

`onLoginRequest()`

This function is called when the initial login request is received by Asgardeo. It includes the parameters given below.

- **Parameters**

  <table>
      <tr>
        <td><code>context</code></td>
        <td>The authentication context, which contains the context information about the request.</td>
      </tr>
  </table>

- **Example**

  ```bash
  onLoginRequest(context)
  ```

<br/>

### Execute a step

`executeStep()` 

This function is called to execute an authentication step in the login flow. Authentication steps need to be configured before using this function. This method accepts an object as a parameter and should include the parameters listed below.

- **Parameters**

  <table>
      <tr>
        <td><code>stepId</code></td>
        <td>(Mandatory) The step number in the login flow.</td>
      </tr>
      <tr>
        <td><code>options</code></td>
        <td>(Optional) A map that can configure step execution. Authentication option filtering is supported.<br />
    For more information, see <a href="#authentication-step-filtering">authentication step filtering</a>.</td>
      </tr>
      <tr>
        <td><code>eventCallbacks</code></td>
    <td>(optional) The object that contains the callback functions, which are to be called based on the result of the step execution.<br />
    Supported results are <code>onSuccess</code> and <code>onFail</code>, which can have their own optional callbacks as anonymous functions.</td>
      </tr>
  </table>

- **Example**

  Shown below are ways to define a login flow using the core functions.

  * This example uses only the `stepId`.
      ``` js
      executeStep(1)
      ```

  * This example uses only the `stepId` and `eventCallbacks`.
      ``` js
      executeStep(1, {
          onSuccess: function(context) {
              //Do something on success
          }
      });
      ```

  * This example uses the `stepId`, `options`, and an empty `eventCallbacks` array. Different properties can be defined by the `options` object such as `authenticationOptions` and `authenticatorParams`. However, you cannot write a script with only the `stepId` and `options`. See the following two examples:

    ``` js
    executeStep(1,{
        authenticationOptions:[{
            authenticator: 'totp'
        }]},
    });
    ```
    ``` js
    executeStep(1, {
        authenticatorParams: {
            local: {
                SessionExecutor: {
                    MaxSessionCount: '1'
                                    }
            }
        }
    });
    ```

  **Authentication step filtering**
  
  Filters out authentication options of a step based on a condition. This can be achieved by specifying an array named `authenticationOptions` to the `options` map. Each array item requires an `idp` for federated IdPs or an `authenticator` for local authenticators.

  ``` js
  executeStep(1,{
    authenticationOptions:[{authenticator:'basic'},{idp:'google'}]
    },{
        onSuccess: function (context) {
            // Do something on success
  };
  ```

### Fail the login flow

`fail()`  

This function redirects the user to the redirect URI provided in the authorization request when the login flow fails.

This function takes a map as an optional parameter. When a map is provided as the parameter, the redirect URL will be
appended with the following properties (which should be contained in the map). Otherwise, the default parameters are
passed. All the properties passed in the map are also optional.

- **Parameters**

  <table>
    <tbody>
      <tr>
        <td><code>errorCode</code></td>
        <td>The error code to be appended in the redirect URL.</td>
      </tr>
      <tr>
        <td><code>errorMessage</code></td>
        <td>The error message to be appended in the redirect URL.</td>
      </tr>
      <tr>
        <td><code>errorURI</code></td>
        <td>The URI of a web page that includes additional information about the error.</td>
      </tr>
    </tbody>
  </table>

- **Example**

  ``` js
  var parameterMap = {'errorCode': 'access_denied', 'errorMessage': 'login could not be completed', "errorURI":'http://www.example.com/error'};
  if (!isAuthenticated) {
      fail(parameterMap);
  }
  ```

### Redirect to error code

`sendError()`

This function redirects the user to an error page. It includes the parameters listed below.

- **Parameters**

  <table>
    <tbody>
      <tr>
        <td><code>url</code></td>
        <td>The URL of the error page that the user is redirected to. If the value is null, the user is redirected by default to the <strong>retry.do</strong> error page.<br />
        Note that any relative URL is assumed to be the relative to the host’s root.</td>
      </tr>
      <tr>
        <td><code>parameters</code></td>
        <td>Key value map passed as parameters. These are converted to query parameters in the URL.</td>
      </tr>
    </tbody>
  </table>

- **Example**

  When passing error messages to the error page, it is recommended to use the **i18n key** so that it can be internationalized
  easily on the page.

  ```js
  var user = context.steps[1].subject;
  var isAdmin = hasRole(user, 'admin');
  if (!isAdmin) {
      sendError('http://www.example.com/error',{'errorcode':'000403','errorMsg':'You are not allowed to login to this app.'});
  }
  ```

## Utility functions

The implementation of utility functions can be found in the [WSO2 extensions code repository](https://github.com/wso2-extensions/identity-conditional-auth-functions).

### Check group membership

`isMemberOfAnyOfGroups()`

This function returns `true` if the specified user belongs to at least one of the given groups, and returns `false` if the user does not. It includes the parameters listed below.

- **Parameters**

  <table>
    <tbody>
      <tr>
        <td><code>user</code></td>
        <td>A user object representing the user details.</td>
      </tr>
        <tr>
        <td><code>groups</code></td>
        <td>A list of strings that contain the groups. Each string is a group name.</td>
      </tr>
    </tbody>  
  </table>

- **Example**

  ``` js
  var groups = ['admin', 'manager'];
  var user = context.steps[1].subject;
  var isMember = isMemberOfAnyOfGroups(user, groups);
  if (isMember) {
      executeStep(2);
  }
  ```

<br/>

### Set cookie

`setCookie(response, name, value, properties)`

This function sets a new cookie. It includes the parameters listed below.

- **Parameters**

  <table>
    <tbody>
      <tr>
        <td><code>name</code></td>
        <td>Name of the cookie.</td>
      </tr>
      <tr>
        <td><code>value</code></td>
        <td>Value of the cookie.</td>
      </tr>
      <tr>
        <td><code>properties</code></td>
        <td><p>A map that may contain optional attributes of the cookie with the two custom attributes given below.</p>
          <ul>
            <li><code>sign</code>: The default value is <code>false</code>. If it is set to true, the value will be signed.</li>
            <li><code>encrypt</code>: The default value is <code>false</code>. If it is set to true, the value will be encrypted.</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>

- **Example**

  The size of the value has to be less than the RSA key pair length if '`encrypt`' is enabled (set to true).

  ```js
  setCookie(context.response, "name", "test", {"max-age" : 4000,
                                              "path" : "/",
                                              "domain" : "localhost",
                                              "httpOnly" : true,
                                              "secure" : true,
                                              'sameSite': 'LAX',
                                              "version" : 1,
                                              "comment" : "some comments",
                                              "encrypt" : true,
                                              "sign" : true})
  ```

<br/>

### Get cookie value

`getCookieValue()`

This function gets the plain-text cookie value for the cookie name if it is present. It includes the parameters listed below.

- **Parameters**

  <table>
    <tbody>
      <tr>
        <td><code>name</code></td>
        <td>Name of the cookie.</td>
      </tr>
      <tr>
        <td><code>value</code></td>
        <td>Value of the cookie.</td>
      </tr>
      <tr>
        <td><code>properties</code></td>
        <td><p>A map that may contain optional attributes of the cookie:</p>
          <ul>
            <li><code>decrypt</code>: The default value is <code>false</code>. If it is set to <code>true</code>, the value will be decrypted.</li>
            <li><code>validateSignature</code>: The default value is <code>false</code>. If it is set to <code>true</code>, the signature will be validated before returning a response.</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>

- **Example**

  ``` js
  getCookieValue(context.request,"name", {"decrypt" : true,"validateSignature" : true })
  ```

<br/>

### Prompt for user input

`prompt()`

This function prompts user input. It includes the parameters listed below.

- **Parameters**

  <table>
    <tbody>
      <tr>
        <td><code>templateId</code></td>
        <td>Identifier of the template that needs to be prompted.</td>
      </tr>
      <tr>
        <td><code>data</code></td>
        <td>The data to send to the prompt.</td>
      </tr>
      <tr>
        <td><code>eventHandlers</code></td>
        <td>The callback event handlers.</td>
      </tr>
    </tbody>
  </table>

- **Example**

  ``` js
  var onLoginRequest = function(context) {
    executeStep(1, {
        onSuccess: function (context) {
            var username = context.steps[1].subject.username;
            prompt("genericForm", {"username":username, "inputs":[{"id":"fname","label":"First Name"},{"id":"lname","label":"Last Name"}]}, {
              onSuccess : function(context) {
                  var fname = context.request.params.fname[0];
                  var lname = context.request.params.lname[0];
                  Log.info(fname);
                  Log.info(lname);
              }
            });
        }
    });
  }
  ```

<br/>

### Get user sessions

`getUserSessions()`

This function returns a session object  (i.e. all the active user sessions of the specified user or an empty
array if there are no sessions). It includes the parameters listed below.

- **Parameters**

  <table>
    <tbody>
      <tr>
        <td><code>user</code></td>
        <td>This is a user object that represents the user details.</td>
      </tr>
    </tbody>
  </table>

- **Example**

  ``` js
  var user = context.currentKnownSubject;
  var sessions = getUserSessions(user);
  for (var key in sessions) {
      Log.info(“Session ID: ” + sessions[key].id);
  }
  ```

<br/>

### Terminate user session

`terminateUserSession()`

This function returns a session object (i.e. all the active user sessions of the specified user or an empty
array if there are no sessions). It includes the parameters listed below.

- **Parameters**

  <table>
    <tbody>
      <tr>
        <td><code>user</code></td>
        <td>This is a user object that represents the user details.</td>
      </tr>
      <tr>
        <td><code>sessionId</code></td>
        <td>This is the <code>sessionId</code> string of the session that needs to be terminated.</td>
      </tr>
    </tbody>
  </table>

- **Example**

  ``` js
  var user = context.currentKnownSubject;
  var sessions = getUserSessions(user);
  if (sessions.length > 0) {
      var result = terminateUserSession(user, sessions[0]);
      Log.info(“Terminate Operation Successful?: ” + result);
  }
  ```

### Send email

`sendEmail()`

This function sends an email to the specified user. It includes the parameters listed below.

- **Parameters**

  <table>
    <tbody>
      <tr>
        <td><code>user</code></td>
        <td>An object representing the user details.</td>
      </tr>
      <tr>
        <td><code>templateId</code></td>
        <td>Identifier of the email template. The email template specifies the body of the email that is sent out.</td>
      </tr>
      <tr>
        <td><code>placeholderParameters</code></td>
        <td>Used to replace any placeholders in the template.</td>
      </tr>
    </tbody>
  </table>

- **Example**

  ``` js
  var user = context.steps[1].subject;
  var firstName = user.localClaims['http://wso2.org/claims/givenname'];
  sendEmail(user, 'myTemplate', {'firstName':firstName});
  ```

## Object Reference

### Context

Contains the authentication context information. The information can be accessed as follows:

<table>
    <tr>
      <td><code>context.steps[n]</code></td>
      <td>Access the authentication step information, where 'n' is the step number (1-based). See <a :href="$withBase('#step')">step</a> for more information.</td>
    </tr>
</table>

The step number is the one configured at the step configuration, not the actual order in which they get executed.

<table>
    <tr>
      <td><code>context.request</code></td>
      <td>Access the HTTP authentication request information. See <a :href="$withBase('#request')">request</a> for more information.</td>
    </tr>
    <tr>
      <td><code>context.response</code></td>
      <td>Access the HTTP response, which will be sent back to the client. See <a :href="$withBase('#response')">response</a> for more information.</td>
    </tr>
    <tr>
      <td><code>context.serviceProviderName</code></td>
      <td>Get the application name.</td>
    </tr>
</table>

### Step

Contains the authentication step information. May be a null or invalid step number.

<table>
    <tr>
      <td><code>step.subject</code></td>
      <td>Contains the authenticated user’s information from this step. May be null if the step is not yet
  executed. See <a :href="$withBase('#user')">user</a> for more information.</td>
    </tr>
    <tr>
      <td><code>step.idp</code></td>
      <td>Gives the IdP name, which was used to authenticate this user.</td>
    </tr>
</table>

### User

<table>
    <tr>
      <td><code>user.uniqueId</code></td>
      <td>The unique identifier of the user.</td>
    </tr>
    <tr>
      <td><code>user.username</code></td>
      <td>The user’s username.</td>
    </tr>
    <tr>
      <td><code>user.localClaims[“local_claim_url”]</code></td>
      <td>(Read/Write) User’s attribute (claim) value for the given "local_claim_url". If the user is a federated user, this will be the value of the mapped remote claim from the IdP.</td>
    </tr>
    <tr>
      <td><code>user.claims[“local_claim_url”]</code></td>
      <td>(Read/Write) Sets a temporary claim value for the session.</td>
    </tr>
    <tr>
      <td><code>user.localClaims[“local_claim_url”]</code></td>
      <td>Updates the claim value in the user store as well. The <code>user.claims[“local_claim_url”]</code> parameter is an alternative to setting a temporary claim.</td>
    </tr>
    <tr>
      <td><code>user.remoteClaims[“remote_claim_url”]</code></td>
      <td>(Read/Write) User’s attribute (claim) as returned by the IdP for the given “remote_claim_url”. Applicable only for federated users.</td>
    </tr>
</table>

### Request

<table>
    <tr>
      <td><code>request.headers[“header_name”]</code></td>
      <td>The request’s header value for the given header name.</td>
    </tr>
    <tr>
      <td><code>request.params.param_name[0]</code></td>
      <td>The request’s parameter value for the given parameter name by the <code>param_name</code> index (<code>param_name</code> is an array).</td>
    </tr>
    <tr>
      <td><code>request.cookies[“cookie_name”]</code></td>
      <td>The request’s cookie value for the given cookie name.</td>
    </tr>
    <tr>
      <td><code>request.ip</code></td>
      <td>The client IP address of the user who initiated the request. If there are any load balancers (eg. Nginx) with connection termination, the IP is retrieved from the headers set by the load balancer.</td>
    </tr>
</table>

### Response

<table>
    <tr>
      <td><code>response.headers[“header_name”]</code></td>
      <td>(Write) The response header value for the given header name.</td>
    </tr>
</table>

### Session

<table>
    <tr>
      <td><code>session.userAgent</code></td>
      <td>This is the userAgent object of the user session. See <a :href="$withBase('#user-agent')">userAgent</a> for more information.</td>
    </tr>
    <tr>
      <td><code>session.ip</code></td>
      <td>This is the session’s IP address.</td>
    </tr>
    <tr>
      <td><code>session.loginTime</code></td>
      <td>This is the session’s last login time.</td>
    </tr>
    <tr>
      <td><code>session.lastAccessTime</code></td>
      <td>This is the session’s last accessed time.</td>
    </tr>
    <tr>
      <td><code>session.id</code></td>
      <td>This is the session’s ID.</td>
    </tr>
    <tr>
      <td><code>session.application</code></td>
      <td>This is the list of application objects in the session. See <a :href="$withBase('#application')">application</a> for more information.</td>
    </tr>
</table>

### Application

<table>
    <tr>
      <td><code>application.subject</code></td>
      <td>This is the subject of the application.</td>
    </tr>
    <tr>
      <td><code>application.appName</code></td>
      <td>This is the name of the application.</td>
    </tr>
    <tr>
      <td><code>application.appId</code></td>
      <td>This is the ID of the application.</td>
    </tr>
</table>

### User agent

<table>
    <tr>
      <td><code>userAgent.raw</code></td>
      <td>This is the raw userAgent string.</td>
    </tr>
    <tr>
      <td><code>userAgent.browser</code></td>
      <td>This is the web browser property that is extracted from the raw userAgent string.</td>
    </tr>
    <tr>
      <td><code>userAgent.platform</code></td>
      <td>This is the operating system property that is extracted from the raw userAgent string.</td>
    </tr>
    <tr>
      <td><code>userAgent.device</code></td>
      <td>This is the device property that is extracted from the raw userAgent string.</td>
    </tr>
</table>