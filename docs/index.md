---
home: true
heroText: Asgardeo Documentation
heroImage: /assets/img/asgardeo-logo.png
tagline: Welcome to the Asgardeo documentation! Within these pages, you will learn how to build a seamless login experience for your applications using Asgardeo.
homeBannerText: Work In Progress! Bear with us while we perfect our documentation for you.
actionText: Quick Start →
actionLink: /get-started/
getStartedText: Get Started
getStartedLink: /get-started/
whatIsAsgardeoText: What is Asgardeo
whatIsAsgardeoLink: /get-started/

features:
  - title: Login
    details: Register your applications and enable sign-in
    link: /guides/authentication/add-login-to-apps/
    icon: icons/feature-login.svg
    cssClass: login
    subLinks:
      - name: "For SPAs"
        link: /guides/authentication/add-login-to-single-page-app
          
      - name: "For Web Apps"
        link: /guides/authentication/add-login-to-web-app/

  - title: Social Login
    details: Integrate your applications with a social identity provider
    link: /guides/authentication/social-login/
    icon: icons/feature-social-login.svg
    cssClass: social-login
    subLinks:
      - name: "Facebook"
        link: /guides/authentication/social-login/add-facebook-login/

      - name: "Github"
        link: /guides/authentication/social-login/add-github-login/

      - name: "Google"
        link: /guides/authentication/social-login/add-google-login/

  - title: Enterprise IDPs
    details: Secure your logins using standard identity protocols
    link: /guides/authentication/enterprise-login/
    icon: icons/feature-enterprise-idp.svg
    cssClass: enterprise-idp
    subLinks:
      - name: "Using SAML"
        link: /guides/authentication/enterprise-login/add-saml-idp-login/
      
      - name: "Using OIDC"
        link: /guides/authentication/enterprise-login/add-oidc-idp-login/

  - title: Multi Factor Authentication
    details: Strengthen your authentication flow
    link: /guides/authentication/mfa/
    icon: icons/feature-mfa.svg
    cssClass: mfa
    subLinks:
      - name: "TOTP"
        link: /guides/authentication/mfa/add-totp-login/
      
      - name: "Email OTP"
        link: /guides/authentication/mfa/add-emailotp-login/

  - title: Conditional Access
    details: Customize your authentication flow with conditional scripts
    link: /guides/authentication/conditional-auth/
    icon: icons/feature-conditional-access.svg
    cssClass: conditional-access
    subLinks:
      - name: "Group-based"
        link: /guides/authentication/conditional-auth/group-based-template-access-control/

      - name: "IP-based"
        link: /guides/authentication/conditional-auth/ip-based-template/
      
      - name: "Device-based"
        link: /guides/authentication/conditional-auth/new-device-based-template/
  
  - title: Users
    details: Manage user profiles and enable users to manage their own profiles
    link: /guides/users/
    icon: icons/feature-users.svg
    cssClass: users
    subLinks:
      - name: "Collaborators"
        link: /guides/users/manage-collaborators/
      
      - name: "Customers"
        link: /guides/users/manage-customers/
      
      - name: "User Self-Service"
        link: /guides/user-self-service/

technologies:
  - name: Angular
    icon: images/technologies/angular-logo.svg
    sdkPath: https://github.com/asgardeo/asgardeo-auth-angular-sdk
    samplePath: https://github.com/asgardeo/asgardeo-auth-angular-sdk/releases/latest/download/asgardeo-angular-app.zip
    cssClass: angular
  
  - name: Javascript
    icon: images/technologies/javascript-logo.svg
    sdkPath: https://github.com/asgardeo/asgardeo-auth-spa-sdk
    samplePath: https://github.com/asgardeo/asgardeo-auth-spa-sdk/releases/latest/download/asgardeo-html-js-app.zip
    cssClass: javascript
  
  - name: React
    icon: images/technologies/react-logo.svg
    sdkPath: https://github.com/asgardeo/asgardeo-auth-react-sdk
    samplePath: https://github.com/asgardeo/asgardeo-auth-react-sdk/releases/latest/download/asgardeo-react-app.zip
    cssClass: react
  
  - name: Java EE-OIDC
    icon: images/technologies/oidc-idp-illustration.png
    sdkPath: https://github.com/asgardeo/asgardeo-tomcat-oidc-agent
    samplePath: https://github.com/asgardeo/asgardeo-tomcat-oidc-agent/releases/latest/download/oidc-sample-app.war
    cssClass: oidc
  
  - name: Java EE-SAML
    icon: images/technologies/saml-logo.svg
    sdkPath: https://github.com/asgardeo/asgardeo-tomcat-saml-agent
    samplePath: https://github.com/asgardeo/asgardeo-tomcat-saml-agent/releases/latest/download/sample-app.war
    cssClass: saml
