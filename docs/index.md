---
home: true
heroText: Asgardeo Documentation
heroImage: /assets/img/asgardeo-logo.png
tagline: Welcome to the Asgardeo documentation. Within these pages, you will be able to learn and try out different use cases in Asgardeo that fulfill your identity needs and provide a seamless login experience.
homeBannerText: Work In Progress! Bear with us while we perfect our documentation for you.
actionText: Quick Start →
actionLink: /get-started/
getStartedText: Get Started
getStartedLink: /get-started/

features:
  - title: Login
    details: Register your applications and enable sign-in.
    link: /guides/authentication/add-login-to-apps/
    icon: padlockIcon
    subLinks:
      - name: "For SPAs"
        link: /guides/authentication/add-login-to-single-page-app
          
      - name: "For Web Apps"
        link: /guides/authentication/add-login-to-web-app/

  - title: Social Login
    details: Integrate your applications with a social identity provider.
    link: /guides/authentication/social-login/
    icon: federatedLoginIcon
    subLinks:
      - name: "Facebook"
        link: /guides/authentication/social-login/add-facebook-login/

      - name: "Github"
        link: /guides/authentication/social-login/add-github-login/

      - name: "Google"
        link: /guides/authentication/social-login/add-google-login/

  - title: Enterprise IDPs
    details: Secure your logins using standard identity protocols. 
    link: /guides/authentication/enterprise-login/
    icon: addAuthnIcon
    subLinks:
      - name: "Using SAML"
        link: /guides/authentication/enterprise-login/add-saml-idp-login/

      - name: "Using OIDC"
        link: /guides/authentication/enterprise-login/add-oidc-idp-login/

  - title: Multi-factor Authentication
    details: Strengthen your authentication flow.
    link: /guides/authentication/mfa/
    icon: usersIcon
    subLinks:
      - name: "TOTP"
        link: /guides/authentication/mfa/add-totp-login/
      
      - name: "Email OTP"
        link: /guides/authentication/mfa/add-emailotp-login/

  - title: Conditional Access
    details: Customize your authentication flow with conditional scripts.
    link: /guides/authentication/conditional-auth/
    icon: usersIcon
    subLinks:
      - name: "Use a template"
        link: /guides/authentication/conditional-auth/#script-templates/
      
      - name: "Define a custom authentication flow"
        link: /guides/authentication/conditional-auth/write-your-first-script/
      
      - name: "Based on API calls"
        link: /guides/authentication/conditional-auth/add-authentications-based-on-api-calls/
  
  - title: Users
    details: Manage different user profiles and enable users to manage their own profiles.
    link: /guides/users/
    icon: usersIcon
    subLinks:
      - name: "Collaborators"
        link: /guides/users/manage-collaborators/
      
      - name: "Customers"
        link: /guides/users/manage-customers/
      
      - name: "User self-service"
        link: /guides/user-self-service/
