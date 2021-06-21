# Configure additional query parameters
Asgardeo supports sending additional information to your OIDC external IDP in the form of query params in the login request.
- Fixed query params
- Dynamic query params
  - Query param value sent in the application login request
  - Query param value resolved in a conditional authentication script

You can check below examples when an application developer wants to send _login_hint_ as a query param to external provider.

## Fixed query params    
Here Asgardeo sends the fixed query param to the external identity provider in the login request.    
   - **Sample Query Param:**   
    `login_hint=none`
      <img :src="$withBase('/assets/img/guides/idp/oidc-enterprise-idp/queryparam/fixed-query-param.png')" alt="Add fixed query param in enterprise IDP config">

## Dynamic query params
1.  Query param value sent in the application login request
    - **Sample Query Param:**     
       `login_hint=${login_hint_value}` 
       <img :src="$withBase('/assets/img/guides/idp/oidc-enterprise-idp/queryparam/dynamic_query_param_from_app.png')" alt="Add dynamic query param in enterprise IDP config">
        You can see a sample OIDC request from an application below.
       ```  
        https://accounts.asgardeo.io/t/bifrost/oauth2/authorize?scope=openid&response_type=code&redirect_uri=<redirect_uri>&client_id=<client_id>&login_hint_value=user@gmail.com
       ``` 
      <br> 
      
    - If the application does not send the query param in the login request, the particular parameterized query param will not be sent to the external OIDC identity provider.
                   
2. Query param value resolved in a conditional authentication script
   - **Sample Query Param:**     
    `login_hint=$authparam{login_hint_value}` 
    <img :src="$withBase('/assets/img/guides/idp/oidc-enterprise-idp/queryparam/dyamic_query_param_from_conditional_auth.png')" alt="Add dynamic query param in enterprise IDP config"> 
    Here _login_hint_value_ needs to be resolved from the conditional auth script.
    <br>  
    
   - **Sample conditional auth script:**  
       ```js
      // Step 1: username and password authentication  
      // Step 2: OIDC enterprise login  
      var onLoginRequest = function(context) {
          executeStep(1, {
              onSuccess: function(context) {
                  // Extracting authenticated user from the first step.
                  var emailAddress = context.steps[1].subject.username;
                  executeStep(2, {
                      authenticatorParams: {
                          common: {
                              'login_hint_value': emailAddress  // This is where we resolve the dynamic query param.
                          }
                      },
                      authenticationOptions: [{
                          idp: 'OIDC enterprise IDP' // Name of the OIDC idp.
                      }]
                  }, {});
              },
          });
      };
      ```
      <br>
      