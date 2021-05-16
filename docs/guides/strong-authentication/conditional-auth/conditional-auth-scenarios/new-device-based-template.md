# New device based adaptive authentication

Sends an email notification and/or prompts two factor authentication to the users who log in from a previously unused
device. A cookie is used to identify whether the device has been used before.

## Before you begin

1. Your application should be registered in Asgardeo.

   Refer the [Manage applications](../../applications/README.md) section to register your application in Asgardeo if not
   done already.

2. Configure conditional authentication and deploy the **New-Device-Based Authentication Template** for the application.

   Refer the [Configure conditional authentication for an application](../configure-conditional-auth.md) guide on
   configuring conditional authentication with the template.

3. Customize the login flow and enable TOTP as the step 2.

## Configured authentication steps

* **Step 1:** Basic (Password) authenticator
* **Step 2:** TOTP

## Scenario

If the user uses a new device or a new browser to log in to the application, the user is prompted for a second step of
authentication. The new device or browser is identified by a cookie, therefore, once the cookie expires (this expiry
time is specified in the authentication script), the same browser or device is considered as a new device.

## Script

```js
// Amount of time in seconds to remember a device. Set to 2 years below.
var deviceRememberPeriod = 60 * 60 * 24 * 365 * 2;

// Cookie name to be set
var cookieName = 'deviceAuth';

// Whether to send a notification on new device login
var sendNotification = true;

// Whether to step up authentication for new device login
var stepUpAuthentication = true;

// Email template to be used for new device login notification
var emailTemplate = 'UnseenDeviceLogin';


var onLoginRequest = function (context) {
    executeStep(1, {
        onSuccess: function (context) {
            subject = context.currentKnownSubject;
            if (!validateCookie(context, subject)) {
                Log.debug('New device login for ' + subject.identifier);

                if (sendNotification === true) {
                    var templatePlaceholders = {
                        'username': subject.identifier,
                        'login-time': new Date().toUTCString()
                    };
                    var isSent = sendEmail(subject, emailTemplate, templatePlaceholders);
                    if (isSent) {
                        Log.debug('New device login notification sent to ' + subject.identifier);
                    } else {
                        Log.debug('New device login notification sending failed to ' + subject.identifier);
                    }
                }

                if (stepUpAuthentication === true) {
                    Log.debug('Stepping up authentication due to a new device login for ' + subject.identifier);
                    executeStep(2, {
                        onSuccess: function (context) {
                            setCookie(context.response, cookieName, subject.identifier, {
                                'sign': true,
                                'max-age': deviceRememberPeriod,
                                'sameSite': 'LAX'
                            });
                        }
                    });
                }
            }
        }
    });
};

// Validate if the user has a valid cookie with the value as subject's username
var validateCookie = function (context, subject) {
    var cookieVal = getCookieValue(context.request, cookieName, {'validateSignature': true});
    return subject.identifier === cookieVal;
};

```

## Configurable parameters

<table>
   <thead>
      <tr>
         <th>Parameter</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>sendNotification</td>
         <td>Whether to send email notifications to the users</td>
      </tr>
      <tr>
         <td>stepUpAuthentication</td>
         <td>Whether to step up the authentication</td>
      </tr>
      <tr>
         <td>cookieName</td>
         <td>Cookie name to be used for device identification</td>
      </tr>
      <tr>
         <td>deviceRememberPeriod</td>
         <td>For how long this device should be remembered as a trusted device. Once this time period passes, login attempts will be considered as new device logins</td>
      </tr>
   </tbody>
</table>

## Script walkthrough

**validateCookie** function verifies whether the user has a valid cookie for the logged-in user. This function calls the
conditional authentication JavaScript
function, [getCookieValue(request, name, properties)](../conditional-auth-js-api-reference/#getcookievalue-request-name-properties)
. The cookie name configured in `cookieName` parameter.

Upon the successful execution of the step 1 of the authentication flow, **onLoginRequest** function validates the **
deviceAuth** cookie. If there is no valid cookie found, the function checks whether the `sendNotification`
and `stepUpAuthentication` properties are enabled.

If `sendNotification` property is enabled, the JavaScript conditional authentication
function [sendEmail(user, templateId, placeholderParameters)](../conditional-auth-js-api-reference/#sendemail-user-templateid-placeholderparameters)
is called to send the notification email with the logged in timestamp. The email template is set as **
UnseenDeviceLogin** in the variable `emailTemplate`.

If `stepUpAuthentication` property is enabled, the step 2 of the authentication flow is executed.

On the successful execution of step 2 of the authenticaiton
flow, [setCookie(response, name, value, properties)](../conditional-auth-js-api-reference/#setcookie-response-name-value-properties)
is called to set a **deviceAuth** cookie.

## Try it out

1. Access the application URL from a new device/browser.

2. Try to login to the application. The user is prompted with the TOTP authentication. The configured email of the user
   will receive the email notification.

   <img :src="$withBase('/assets/img/guides/conditional-auth/new-device-email-notification.png')" alt="new-device-email-notification-sample">

3. Logout and login with the same user from the same device/browser. User will be successfully logged in to the
   application with only the basic authentication.
   