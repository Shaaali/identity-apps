# Configure additional query parameters
Asgardeo supports following use cases reated to additional query parameters:
- Static query params to external identity provider
- Dynamic query params to external identity provider.
  - Application dynamically sends the dynamic query param value in the login request.
  - Conditional authentication script dynamically resolves the query param value.

You can check below examples when an application developer wants to send _login_hint_ as a query param to external provider.

## Send static query params to external identity provider         
   - **Sample Query Param:**   
    `login_hint=fixedValue`
      <img :src="$withBase('/assets/img/guides/idp/oidc-enterprise-idp/queryparam/fixed-query-param.png')" alt="Add fixed query param in enterprise IDP config">

## Send dynamic query params to external identity provider
1.  Application dynamically sends the dynamic query param value in the login request   
    - **Sample Query Param:**     
       `login_hint=${login_hint_value}` 
       <img :src="$withBase('/assets/img/guides/idp/oidc-enterprise-idp/queryparam/dynamic_query_param_from_app.png')" alt="Add dynamic query param in enterprise IDP config">
        Here application has to send _login_hint_value_ as a query param in authentication request. You can see a sample OIDC request from an application below.
       ```  
        https://accounts.asgardeo.io/t/bifrost/oauth2/authorize?scope=openid&response_type=code&redirect_uri=<redirect_uri>&client_id=<client_id>&login_hint_value=user@gmail.com
       ``` 
      <br> 
      
    - If the application sends a login request **without any query param**, then Asgardeo will send the defined `login_hint_value` as the query param value.  
        <br>
        **Sample login request to the external identity provider from Asgardeo:** <br>
        
        `https://<external_idp>/authorize?scope=openid&response_type=code&redirect_uri=https%3A%2F%2Faccounts.asgardeo.io%2Ft%2Fbifrost%2Fcommonauth&state=39fb14dd-c68e-45bf-abe0-b25697ac86a5%2COIDC&client_id=yq6DFWQiES9cmDOxRspTDC7opxkGH1qU&login_hint=login_hint_value`
           
2. Conditional authentication script dynamically resolves the query param value
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
                              'login_hint_value': emailAddress  // This is where we define the dynamic query param.
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
      