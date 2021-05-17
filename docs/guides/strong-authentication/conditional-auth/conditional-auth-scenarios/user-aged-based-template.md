# User age based conditional authentication

The user age based conditional authentication script allows log in to application if the user's age is over the
configured value. The age of the user is calculated using the user's date of birth attribute.


## Scenario

Any user who is below the specified age limit (i.e., under the age of 18 years) is restricted access and prevented from
logging in to the application. The user will be redirected to an error page if the date of birth is not present or user
is below configured value.

## Before you begin

1. Your application should be registered in Asgardeo.

   Refer the [Manage applications](../../applications/README.md) section to register your application in Asgardeo if not
   done already.

2. Configure conditional authentication and deploy the **User-Age-Based Authentication Template** for the application.

   Refer the [Configure conditional authentication for an application](../configure-conditional-auth.md) guide on
   configuring conditional authentication with the template.

3. Birth Date of the user trying to login needs to be updated using the Asgardeo Myaccount portal.

## Configured authentication steps

**Step 1:** Basic (Password) authenticator

## Script

```js
var ageLimit = 18;
var errorPage = '';
var errorPageParameters = {
    'status': 'Unauthorized',
    'statusMsg': 'You need to be over ' + ageLimit + ' years to login to this application.'
};

// Date of birth attribute at the client side
var dateOfBirthClaim = 'http://wso2.org/claims/dob';

// The validator function for DOB. Default validation check if the DOB is in YYYY-MM-dd format
var validateDOB = function (dob) {
    return dob.match(/^(\d{4})-(\d{2})-(\d{2})$/);
};

var onLoginRequest = function (context) {
    executeStep(1, {
        onSuccess: function (context) {
            var underAge = true;
            // Extracting user store domain of authenticated subject from the first step
            var dob = context.currentKnownSubject.localClaims[dateOfBirthClaim];
            Log.debug('DOB of user ' + context.currentKnownSubject.identifier + ' is : ' + dob);
            if (dob && validateDOB(dob)) {
                var birthDate = new Date(dob);
                if (getAge(birthDate) >= ageLimit) {
                    underAge = false;
                }
            }
            if (underAge === true) {
                Log.debug('User ' + context.currentKnownSubject.identifier + ' is under aged. Hence denied to login.');
                sendError(errorPage, errorPageParameters);
            }
        }
    });
};

var getAge = function (birthDate) {
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
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
         <td>ageLimit</td>
         <td>Minimum age required for the user to log in to the application</td>
      </tr>
      <tr>
         <td>errorPage</td>
         <td>Error page to redirect the user if the age limit is below ageLimit. Redirected to the default error page if not configured</td>
      </tr>
      <tr>
         <td>errorPageParameters</td>
         <td>Parameters to be passed to the error page</td>
      </tr>
   </tbody>
</table>

## Script walkthrough

**validateDOB** function validates whether the provided data of birth is correct.

**getAge** function calculates the age based on the configured birthdate.

Upon the successful execution of the step 1 of the authentication flow, **onLoginRequest** function checks whether the
age of the user is above the configured age limit. If the age is below the configured limit, the user is directed to the
configured error page.

## Try it out

1. Access the application URL.

2. Try to login with a user above 18 years. User will be successfully logged in to the application.

3. Logout and login a user below 18 years. User is now restricted from logging in because he is underage.

   <img :src="$withBase('/assets/img/guides/conditional-auth/user-aged-based-conditional-auth-failure.png')" alt="user-aged-based-conditional-auth-failure-error-page">
