# Add user age-based authentication

To control access to your application based on the user's age, you can apply the **Age-Based** conditional authentication template. The age of the user is calculated using the `date of birth` attribute in the user's profile. Users are redirected to an error page if the date of birth is not specified in the user profile or if the user's age is below the minimum age configured in the template.

## Scenario

Consider a scenario where users who are younger than 18 years should be prevented from signing in to an application and redirected to an error message.

## Prerequisites

-   You need an application registered in Asgardeo. If you don't already have one, register one of the following application types:
    -   <a :href="$withBase('/guides/applications/register-single-page-app/')">Single-page app</a>
    -   <a :href="$withBase('/guides/applications/register-oidc-web-app/')">Web app with OIDC</a>
    -   <a :href="$withBase('/guides/applications/register-saml-web-app/')">Web app with SAML</a>

-   Go to the customer's user profile and update the birth date so that the current age is below 18 years. For instructions, see <a :href="$withBase('/guides/applications/register-single-page-app/')">Manage user profiles</a>.

## Configure the login flow

<CommonGuide guide='guides/fragments/manage-app/conditional-auth/configure-conditional-auth.md'/>

5. Select the **User > Age-Based** template.
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
                <td><code>ageLimit</code></td>
                <td><p>Minimum age required for the user to log in to the application.</p>For this example scenario, enter <code>18</code> as the value.</td>
            </tr>
            <tr>
                <td><code>errorPage</code></td>
                <td>The error page to which users are redirected if the age limit is below age limit. The default error page is used if this parameter is not configured.</td>
            </tr>
            <tr>
                <td><code>errorPageParameters</code></td>
                <td>Parameters to be passed to the error page. This information will display on the error page.</td>
            </tr>
        </tbody>
    </table>

7. Click **Update** to confirm.

## How it works

Shown below is the script of the user age-based conditional authentication template.

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

Let's look at how this script works.

1.  The **validateDOB** function validates whether the provided date of birth is correct.
2.  The **getAge** function calculates the age based on the configured birth date.
3.  When step 1 of the authentication flow is complete, the **onLoginRequest** function checks whether the
age of the user is above the configured age limit. 
4.  If the age is below the configured limit, the user is directed to the
configured error page.

::: info
Find out more about the scripting language in the <a :href="$withBase('/references/conditional-auth/api-reference/')">Conditional Authentication API Reference</a>.
:::

## Try it out

Follow the steps given below.

1. Access the application URL.
2. Try to log in with a user who is above 18 years of age. This user will successfully log in to the application.
3. Log out of the application.
4. Log in again with a user who is below 18 years. The user will see the following error.
    <img :src="$withBase('/assets/img/guides/conditional-auth/user-aged-based-conditional-auth-failure.png')" alt="user-aged-based-conditional-auth-failure-error-page">
