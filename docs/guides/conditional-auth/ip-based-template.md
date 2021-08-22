# Add IP-based authentication

You can secure the sign-in flow based on the user's IP address by applying the **IP-Based** conditional authentication template to your application. This template prompts two-factor authentication for users who are signing in from outside a given IP range.

## Scenario

Consider a scenario where you need to secure the sign-in flow for users signing in from external networks or other geographic
locations. If the user's IP address is not in the configured range (i.e. 192.168.1.0/24, 10.100.0.0/16), the second authentication step is prompted.
Users signing in from the internally configured network specified in the script can simply provide their credentials (basic authentication) to sign in.

## Prerequisites

You need an application registered in Asgardeo. If you don't already have one, <a :href ="$withBase('/guides/applications/web-app/register-oidc-web-app/')">register an application</a>.

## Configure the sign-in flow

Follow the steps given below.

1. On the Asgardeo console, click **Develop > Applications**.
2. Select the application for which the conditional sign-in flow should apply and go to **Sign-in Method**.
3. Click **Start with default configuration** to define the sign-in flow starting with `username and password`.
4. Turn on **Conditional Authentication** by switching the toggle.

   <img :src="$withBase('/assets/img/guides/conditional-auth/enable-conditional-auth.png')" alt="Enable conditional auth in Asgardeo">

5. Select the **IP-Based** template.
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
            <td>corpNetwork</td>
            <td>Comma separated list of IP addresses for which two-factor authentication should apply.</td>
        </tr>
    </tbody>
    </table>

## How it works

Shown below is the script of the IP-based conditional authentication template.

```js
// Configure the network ranges here
var corpNetwork = ['192.168.1.0/24', '10.100.0.0/16'];

var onLoginRequest = function (context) {
    executeStep(1, {
        onSuccess: function (context) {
            var user = context.currentKnownSubject;
            // Extracting the origin IP of the request
            var loginIp = context.request.ip;
            Log.info('User: ' + user.username + ' logged in from IP: ' + loginIp);
            // Checking if the IP is within the allowed range
            if (!isCorporateIP(loginIp, corpNetwork)) {
                executeStep(2);
            }
        }
    });
};

// Function to convert ip address string to long value
var convertIpToLong = function (ip) {
    var components = ip.split('.');
    if (components) {
        var ipAddr = 0, pow = 1;
        for (var i = 3; i >= 0; i -= 1) {
            ipAddr += pow * parseInt(components[i]);
            pow *= 256;
        }
        return ipAddr;
    } else {
        return -1;
    }
};

// Function to check if the ip address is within the given subnet
var isCorporateIP = function (ip, subnets) {
    var subnetLength = subnets.length;
    for (var i = 0; i < subnetLength; i++) {
        var subnetComponents = subnets[i].split('/');
        var minHost = convertIpToLong(subnetComponents[0]);
        var ipAddr = convertIpToLong(ip);
        var mask = subnetComponents[1];
        if (subnetComponents && minHost >= 0) {
            var numHosts = Math.pow(2, 32 - parseInt(mask));
            if ((ipAddr >= minHost) && (ipAddr <= minHost + numHosts - 1)) {
                return true;
            }
        }
    }
    return false;
};
```

Let's look at how this script works.

1.  The **convertIpToLong** function converts and returns the provided IP address as a long value.
2.  The **isCorporateIP** function returns whether the user's IP address is in the given range. This method accepts two inputs. The
first argument is the IP address that should be validated and the second argument is the allowed IP range.
3.  When step 1 of the authentication flow is complete, the **onLoginRequest** function retrieves the IP
address of the user from the context. 
4.  This IP address is passed to the _isCorporateIP_ function along with the
configured IP address range.
5.  If the IP address of the logged-in user is not in the configured IP range, step 2 of the authentication flow is
executed.

## Try it out

Follow the steps given below.

1. Access the application URL.
2. Try to sign in with a user who has the IP address in the configured range. You will successfully sign in to the application.
3. Log out of the application.
4. Sign in with a user who does not belong to the configured IP address range. TOTP authentication is prompted.
   <img :src="$withBase('/assets/img/guides/conditional-auth/totp-2fa.png')" alt="ip-based-2fa-conditional-auth-totp-page">
