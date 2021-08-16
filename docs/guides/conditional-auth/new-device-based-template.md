# Add device-based authentication

You can enable a more secure sign-in flow when users sign in from a previously unused device by applying the **New-Device-Based** conditional authentication template to your application.

When the user signs in from such a device, this template enables two-factor authentication and/or sends an email notification when the user passes the first authentication step. A cookie is used to identify whether the device has been used before.

## Scenario

If the customer uses a new device or a new browser to sign in to the application, the user is prompted with a second authentication step. An email is also sent to the customer with details of the sign-in attempt. The new device or browser is identified by a cookie, therefore, once the cookie expires (this expiry time is specified in the authentication script), the same browser or device is considered as a new device.

## Prerequisites

You need an application registered in Asgardeo. If you don't already have one, <a :href ="$withBase('/guides/applications/web-app/oidc/register-app/')">register an application</a>.

## Configure the sign-in flow

Follow the steps given below.

1. On the Asgardeo console, click **Develop > Applications**.
2. Select the application for which the conditional sign-in flow should apply, and go to **Sign-in Method**.
3. Click **Start with default configuration** to define the sign-in flow starting with `username and password`.
4. Turn on **Conditional Authentication** by switching the toggle.

   <img :src="$withBase('/assets/img/guides/conditional-auth/enable-conditional-auth.png')" alt="Enable conditional auth in Asgardeo">

5. Select the **Request > Device-Based** template.
6. Update the following parameter in the script.

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
                <td>Specifies whether email notifications should be sent to users.</td>
            </tr>
            <tr>
                <td>stepUpAuthentication</td>
                <td>Specifies whether to step up the authentication.</td>
            </tr>
            <tr>
                <td>cookieName</td>
                <td>Cookie name to be used for device identification.</td>
            </tr>
            <tr>
                <td>deviceRememberPeriod</td>
                <td>The length of time for which this device should be remembered as a trusted device. Once this time period passes, login attempts are considered as new device logins.</td>
            </tr>
        </tbody>
    </table>

## How it works

Shown below is the script of the device-based conditional authentication template.

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

Let's look at how this script works.

The **validateCookie** function verifies whether the user has a valid cookie for the logged-in user. This function calls the conditional authentication JavaScript function [getCookieValue(request, name, properties)](api-reference/#get-cookie-value). The cookie name is configured with the _cookieName_ parameter.

Upon the successful execution of step 1 in the authentication flow, the **onLoginRequest** function validates the **deviceAuth** cookie. If there is no valid cookie found, the function checks whether the _sendNotification_ and _stepUpAuthentication_ parameters are enabled.

If the _sendNotification_ property is enabled, the JavaScript conditional authentication function [sendEmail(user, templateId, placeholderParameters)](api-reference/#send-email) is called to send the notification email with the logged in timestamp. The email template is set as **UnseenDeviceLogin** in the _emailTemplate_ variable.

If the _stepUpAuthentication_ parameter is enabled, step 2 of the authentication flow is executed.

On the successful execution of step 2 of the authentication flow, [setCookie(response, name, value, properties)](api-reference/#set-cookie) is called to set a **deviceAuth** cookie.

## Try it out

Follow the steps given below.

1. Access the application URL from a new device/browser.
2. Try to log in to the application. You will be prompted with TOTP authentication. The configured email of the user
   will receive the email notification.
    <img :src="$withBase('/assets/img/guides/conditional-auth/new-device-email-notification.png')" alt="new-device-email-notification-sample">
3. Log out and log in with the same user from the same device/browser. You will be successfully logged in to the
   application with only the basic authentication.
