# Configure additional query parameters
Asgardeo supports following use cases reated to additional query parameters:
- Static query params to external identity provider
- Dynamic query params to external identity provider.
  - Application dynamically sends the query param value.
  - Conditional authentication script dynamically resolves the query param value.

You can check below examples when an application developer wants to send _login_hint_ as a query param to external provider.

## Send static query params to external identity provider         
   - _Sample Query Param:_   
    `login_hint=fixedValue`
      <img :src="$withBase('/assets/img/guides/idp/oidc-enterprise-idp/queryparam/fixed-query-param.png')" alt="Add fixed query param in enterprise IDP config">

## Send dynamic query params to external identity provider
1.  Application sends the query param value    
    - **_Sample Query Param:_**     
       `login_hint=${login_hint_value}` 
       <img :src="$withBase('/assets/img/guides/idp/oidc-enterprise-idp/queryparam/dynamic_query_param_from_app.png')" alt="Add dynamic query param in enterprise IDP config">
        Here application has to send _login_hint_value_ as a query param in authentication request. You can see a sample OIDC request from an application below.
       ```  
        https://accounts.asgardeo.io/t/bifrost/oauth2/authorize?scope=openid&response_type=code&redirect_uri=<redirect_uri>&client_id=<client_id>&login_hint_value=user@gmail.com
       ```       
2. Conditional authentication script resolves the query param value    
   - **_Sample Query Param:_**     
    `login_hint=$authparam{login_hint_value}` 
    <img :src="$withBase('/assets/img/guides/idp/oidc-enterprise-idp/queryparam/dyamic_query_param_from_conditional_auth.png')" alt="Add dynamic query param in enterprise IDP config"> 
    Here _login_hint_value_ needs to be resolved from the conditional auth script.   
   - **_Sample conditional auth script:_**  
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
                              'login_hint_value': emailAddress
                          }
                      },
                      authenticationOptions: [{
                          idp: 'OIDC enterprise IDP' // Name of the OIDC idp
                      }]
                  }, {});
              },
          });
      };
      ```
      <br>
      