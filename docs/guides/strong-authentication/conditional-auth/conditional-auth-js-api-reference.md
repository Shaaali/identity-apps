# Conditional Authentication JS API Reference

With conditional authentication, it is possible to configure dynamic sequences based on runtime parameters such as the
user’s IP address, user role, etc. Asgardeo allows you to define a dynamic authentication sequence using authentication
scripts written in JavaScript.

The following sections present the core API reference for the JavaScript-based conditional authentication functions and
fields.

::: tip Tip

As the authentication script is designed as a loosely typed, functional language similar to JavaScript, common knowledge
on JavaScript may help you to compose effective authentication scripts.

:::

---

## Core functions

### onLoginRequest(context)

This function is called when the initial authentication request is received by Asgardeo. It includes the following
parameters.

<table>
  <thead>
    <tr>  
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>context</td>
      <td>The authentication context, which contains the context information about the request.</td>
    </tr>
  </tbody>
</table>

<br/>

### executeStep(stepId, options, eventCallbacks)

This function is called to execute an authentication step. Authentication steps need to be configured prior to using
this function. This method accepts an object as a parameter and should include the following.

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>stepId</td>
      <td>The step number (mandatory)</td>
    </tr>
    <tr>
      <td>options</td>
      <td>An optional map that can configure step execution. Authentication option filtering is supported.<br />
  For more information, see <a href="#step-filtering">authentication step filtering</a> .</td>
    </tr>
    <tr>
      <td>eventCallbacks</td>
  <td>The object that contains the callback functions that are to be called based on the result of the step execution.<br />
  Supported results are “<code>onSuccess</code>” and “<code>onFail</code>”, which can have their own optional callbacks as anonymous functions (optional).</td>
    </tr>
  </tbody>
</table>


The API can be called in either of the following ways:

* With only the `stepId`.

  Example:

    ``` js
    executeStep(1)
    ```

* With only the `stepId` and `eventCallbacks`.

  Example:

    ``` js
    executeStep(1, {
        onSuccess: function(context) {
            //Do something on success
        }
    });
    ```

* With the `stepId`, `options`, and an empty `eventCallbacks` array. Different properties can be defined in
  the `options` object such as `authenticationOptions`, `authenticatorParams`.

  See the following two examples:

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

  ::: tip Note

  The API cannot be called with only the `stepId` and `options`.

  :::

**Authentication step filtering**

Filters out some of the authentication options of a step based on a condition. This can be achieved by specifying an
array named '`authenticationOptions`' to the `options` map. Each array item will require an '**`idp`**' for federated
IdPs or an '**`authenticator`**' for local authenticators.

**Example code**

``` js
executeStep(1,{
  authenticationOptions:[{authenticator:'basic'},{idp:'google'}]
   },{
       onSuccess: function (context) {
           // Do something on success
};
```

<br/>

### fail()

This function redirects the user to the redirect URI provided in the authorization request failing the authorization
flow.

This function takes a map as an optional parameter. When a map is provided as the parameter, the redirect URL will be
appended with following properties which should be contained in the map, otherwise the default parameters will be
passed. All the properties passed in the map are also optional.

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>errorCode </td>
      <td>error code to be appended in the redirect URL</td>
    </tr>
    <tr>
      <td>errorMessage </td>
      <td>error message to be appended in the redirect URL</td>
    </tr>
    <tr>
      <td>errorURI </td>
      <td>URI of a web page that includes additional information about the error</td>
    </tr>
  </tbody>
</table>

**Example code**

``` js
var parameterMap = {'errorCode': 'access_denied', 'errorMessage': 'login could not be completed', "errorURI":'http://www.example.com/error'};
if (!isAuthenticated) {
    fail(parameterMap);
}
```

<br/>

### sendError(url,parameters)

This function redirects the user to an error page. It includes the following parameters.

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>url</td>
      <td>The URL of the error page that the user is redirected to. If the value is null, the user is redirected by default to the ' <strong>retry.do'</strong> error page.<br />
  Note that any relative URL is assumed as the relative to host’s root.</td>
    </tr>
    <tr>
      <td>parameters</td>
      <td>Key value map passed as parameters. These are converted to query parameters in the URL.</td>
    </tr>
  </tbody>
</table>

**Example code**

``` js
var user = context.steps[1].subject;
var isAdmin = hasRole(user, 'admin');
if (!isAdmin) {
    sendError('http://www.example.com/error',{'errorcode':'000403','errorMsg':'You are not allowed to login to this app.'});
}
```

::: tip

When passing error messages to the error page, it is recommended to use the i18n key so that it can be internationalized
easily at the page.
:::

<br/>

## Utility functions

The implementation of utility functions can be found in
the [WSO2 extensions code repository](https://github.com/wso2-extensions/identity-conditional-auth-functions).

### hasRole(user, role)

This function returns true if the specified '**`user`**' belongs to the specified '**`role`**', and returns false if the
user does not. It includes the following parameters.

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>user</td>
      <td>A user object representing the user details.</td>
    </tr>
      <tr>
      <td>role</td>
      <td>A string representing the role name.</td>
    </tr>
  </tbody>  
</table>


**Example code**

``` js
var user = context.steps[1].subject;
var isAdmin = hasRole(user, 'admin');
Log.info('--------------- Has Admin ' + isAdmin);
if (isAdmin) {
    executeStep(2);
}
```

<br/>

### assignUserRoles(user, assigningRoles)

This function assigns each of the roles specified in the '`assigningRoles`' parameter to the specified '`user`' object.
It returns true if all the roles are successfully assigned and returns false if not. It includes the following
parameters.

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>user</td>
      <td>A user object representing the user details.</td>
    </tr>
      <tr>
      <td>assigningRoles</td>
      <td>A list of strings containing roles that are to be assigned where each string is a role name.</td>
    </tr>
  </tbody>
</table>

``` js
executeStep(1, {
    onSuccess: function (context) {
        // Extracting authenticated subject from the first step.
        let user = context.currentKnownSubject;
        assignUserRoles(user, ['exampleRole1', 'exampleRole2']);
    }
});
```

<br/>

### removeUserRoles(user, removingRoles)

This function removes each of the roles specified in the '`removingRoles`' parameter to the given '`user`' object. It
returns true if all the roles are successfully removed and returns false if not. It includes the following parameters.


<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>user</td>
      <td>An object representing the user details.</td>
    </tr>
    <tr>
      <td>removingRoles</td>
      <td>A list of strings that contains roles that are to be removed where each string is a role name.</td>
    </tr>
  </tbody>
</table>

``` js
executeStep(1, {
    onSuccess: function (context) {
        // Extracting authenticated subject from the first step.
        let user = context.currentKnownSubject;
        removeUserRoles(user, ['exampleRole1', 'exampleRole2']);
    }
});
```

<br/>

### sendEmail(user, templateId, placeholderParameters)

This function sends an email to the specified user. It includes the following parameters.

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>user</td>
      <td>An object representing the user details.</td>
    </tr>
    <tr>
      <td>templateId</td>
      <td>Identifier of the email template. The email template specifies the body of the email that is sent out.</td>
    </tr>
    <tr>
      <td>placeholderParameters</td>
      <td>Used to replace any placeholders in the template.</td>
    </tr>
  </tbody>
</table>

**Example code**

``` js
var user = context.steps[1].subject;
var firstName = user.localClaims['http://wso2.org/claims/givenname'];
sendEmail(user, 'myTemplate', {'firstName':firstName});
```

<br/>

### setCookie(response, name, value, properties)

This functions sets a new cookie. It includes the following parameters.

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>name</td>
      <td>Name of the cookie.</td>
    </tr>
    <tr>
      <td>value</td>
      <td>Value of the cookie.</td>
    </tr>
    <tr>
      <td>properties</td>
      <td><p>A map that may contain optional attributes of the cookie with two other custom attributes ‘<code>encrypt</code>’ and '<code>sign</code>'.</p>
        <ul>
          <li>The default value of '<code>sign</code>' is false. If it is set to true, the value will be signed.</li>
          <li>The default value of '<code>encrypt</code>' is false. If it is set to true, value will be encrypted.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

::: tip

The size of the value has to be less than the RSA key pair length if '`encrypt`' is enabled (set to true).
:::

``` js
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

### getCookieValue(request, name, properties)

This function gets the plain-text cookie value for the cookie ‘`name`’ if present. It includes the following parameters.

<table>
  <thead>
    <tr class="header">
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="odd">
      <td>name</td>
      <td>Name of the cookie.</td>
    </tr>
    <tr>
      <td>value</td>
      <td>Value of the cookie.</td>
    </tr>
    <tr>
      <td>properties</td>
      <td><p>A map that may contain optional attributes of the cookie '<code>decrypt</code>' <strong>validateSignature</strong></p>
        <ul>
          <li>The default value of '<code>decrypt</code>' is false. If it is set to true, the value will be decrypted.</li>
          <li>The default value of '<code>validateSignature</code>' is false. If it is set to true, the signature will be validated before returning a response.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

``` js
getCookieValue(context.request,"name", {"decrypt" : true,"validateSignature" : true })
```

<br/>

### prompt(templateId, data, eventHandlers)

This function prompts for user input. It includes the following parameters.

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>templateId</td>
      <td>Identifier of the template that needs to be prompted.</td>
    </tr>
    <tr>
      <td>data</td>
      <td>The data to send to the prompt.</td>
    </tr>
    <tr>
      <td>eventHandlers</td>
      <td>The callback event handlers.</td>
    </tr>
  </tbody>
</table>

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

### getUserSessions(user)

This function returns a session object  (i.e. all the active user sessions of the specified user and returns an empty
array if there are no sessions). It includes the following parameters.

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>user</td>
      <td>This is a user object that represents the user details.</td>
    </tr>
  </tbody>
</table>

``` js
var user = context.currentKnownSubject;
var sessions = getUserSessions(user);
for (var key in sessions) {
    Log.info(“Session ID: ” + sessions[key].id);
}
```

<br/>

### terminateUserSession(user, sessionId)

This function returns a session object  (i.e. all the active user sessions of the specified user and returns an empty
array if there are no sessions). It includes the following parameters.

<table>
  <thead>
    <tr class="header">
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>user</td>
      <td>This is a user object that represents the user details.</td>
    </tr>
    <tr>
      <td>sessionId</td>
      <td>This is the `sessionId` string of the session that needs to be terminated.</td>
    </tr>
  </tbody>
</table>

``` js
var user = context.currentKnownSubject;
var sessions = getUserSessions(user);
if (sessions.length > 0) {
    var result = terminateUserSession(user, sessions[0]);
    Log.info(“Terminate Operation Successful?: ” + result);
}

```

<br/>

## Object Reference

### context Object

Contains the authentication context information. The information can be accessed as follows.

* `context.steps[<n>]` :  Access the authentication step information, where \<n\> is the step number (1-based).
  See [step Object](#step-object) for more information.

  :::tip Note

  The step number is the one configured at the step configuration, not the actual order in which they get executed.
  :::

* `context.request` :  Access the HTTP authentication request information. See [request Object](#request-object) for
  more information.
* `context.response` :  Access the HTTP response which will be sent back to the client.
  See [response Object](#response-object) for more information.
* `context.serviceProviderName` :  Get the application name.

<br/>

### step Object

Contains the authentication step information. May be null or invalid step number.

- `step.subject` :  Contains the authenticated user’s information from this step. May be null if the step is not yet
  executed. See [user Object](#user-object) for more information.
- `step.idp` :  Gives the Idp name which was used to authenticate this user.

<br/>

### user Object

* `user.username` : The user’s username.
* `user.tenantDomain` : The user’s tenant domain (only for local users; federated users will have this
  as `carbon.super`).
* `user.userStoreDomain` : The user’s user store domain (only for local users).
* `user.roles` : List of user’s roles.
* `user.localClaims[“<local_claim_url>”]` : (Read/Write) User’s attribute (claim) value for the given “local_claim_url”.
  If the user is a federated user, this will be the value of the mapped remote claim from the IdP.
* `user.claims[“<local_claim_url>”]`: (Read/Write) Sets a temporary claim value for the session.

  ::: tip Note

  `user.localClaims[“<local_claim_url>”]` updates the claim value in the user store as
  well. `user.claims[“<local_claim_url>”]` is an alternative to set a claim for temporary basis.

  :::

* `user.remoteClaims[“<remote_claim_url”]` : (Read/Write) User’s attribute (claim) as returned by IdP for the given
  “remote_claim_url”. Applicable only for federated users.

<br/>

### request Object

* `request.headers[“<header_name>”]` : Request’s header value for the given header name by \<header_name\>
* `request.params.param_name[0]` : Request’s parameter value for the given parameter name by the \<param_name\>
  index (`param_name` is an array).
* `request.cookies[“<cookie_name”]` : Request’s cookie value for the given cookie name by \<cookie_name\>
* `request.ip` : The client IP address of the user who initiated the request. If there are any load balancers (eg.
  Nginx) with connection termination, the ip is retrieved from the headers set by the load balancer.

<br/>

### response Object

* `response.headers[“<header_name>”]` : (Write) Response header value for the given header name by \<header_name\>.

<br/>

### session Object

* `session.userAgent` :  This is userAgent object of the user session. See [userAgent Object](#useragent-object) for
  more information.
* `session.ip` :  This is the session’s IP address.
* `session.loginTime` :  This is the session’s last login time.
* `session.lastAccessTime` :  This is the session’s last accessed time.
* `session.id` :  This is the session’s id.
* `session.applications` :  This is the list of application objects in the session.
  See [application Object](#application-object) for more information.

<br/>

### application Object

* `application.subject` :  This is the subject of the application.
* `application.appName` :  This is the name of the application.
* `application.appId` :  This is the id of the application.

<br/>

### userAgent Object

* `userAgent.raw` :  This is the raw userAgent string.
* `userAgent.browser` :  This is the Web Browser property that is extracted from the raw userAgent string.
* `userAgent.platform` :  This is the Operating System property that is extracted from the raw userAgent string.
* `userAgent.device` :  This is the Device property that is extracted from the raw userAgent string.
    
