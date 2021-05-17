# IP based conditional authentication

The IP based conditional authentication script prompts two factor authentication to the users who are logging outside of
the given ip range.

## Scenario

Consider a scenario where you wish to add security for users logging in from external networks or other geographic
locations. Using the IP-based adaptive authentication template, you can specify network ranges using the ip address so
that users logging in from an external network that is not listed in the authentication script are prompted to perform
an additional level of authentication.

If the user's IP address is not in the configured range (i.e. 192.168.1.0/24, 10.100.0.0/16), he will be prompted with
TOTP authentication as the step 2 of the login flow. Users logging in from the internally configured network specified
on the script, can simply provide their credentials (basic authentication) to access a resource.

## Before you begin

1. Your application should be registered in Asgardeo.

   Refer the [Manage applications](../../applications/README.md) section to register your application in Asgardeo if not
   done already.

2. Configure conditional authentication and deploy the **IP-Based Authentication Template** for the application.

   Refer the [Configure conditional authentication for an application](../configure-conditional-auth.md) guide on
   configuring conditional authentication with the template.

3. Customize the login flow and enable TOTP as the step 2.

## Configured authentication steps

* **Step 1:** Basic (Password) authenticator
* **Step 2:** TOTP

## Script

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
         <td>corpNetwork</td>
         <td>An array of ip ranges which should bypass 2FA</td>
      </tr>
   </tbody>
</table>

## Script walkthrough

**convertIpToLong** function converts and returns the provided IP address as a long value.

**isCorporateIP** function returns whether given IP address is in the given range. This method accepts two inputs. The
first argument is the IP address which should be validated and the second argument is the allowed IP range.

Upon the successful execution of the step 1 of the authentication flow, **onLoginRequest** function retrieves the IP
address of the logged-in user from the context. This IP address is passed to the function `isCorporateIP` along with the
configured IP address range.

If the IP address of the logged-in user is not in the configured IP range, then the step 2 of the authentication flow is
executed.

## Try it out

1. Access the application URL.

2. Try to login with a user who has the IP address in the configured range. User will be successfully logged in to the
   application.

3. Logout and login with a user who does not belong to the configured IP address range. Then the user is prompted with
   the TOTP authentication

   <img :src="$withBase('/assets/img/guides/conditional-auth/totp-2fa.png')" alt="ip-based-2fa-conditional-auth-totp-page">
