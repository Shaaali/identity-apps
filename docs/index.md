---
home: true
heroText: Asgardeo Documentation
heroImage: /assets/img/asgardeo-logo.png
tagline: Welcome to the Asgardeo documentation! Within these pages, you will learn how to fulfill the identity and access management requirements of your applications by using Asgardeo.
homeBannerText: Work In Progress! Bear with us while we perfect our documentation for you.
actionText: Quick Start →
actionLink: /get-started/
getStartedText: Get Started
getStartedLink: /get-started/

features:
  - title: Login
    details: Enable secure login for your applications using Asgardeo as the identity provider.
    link: /guides/authentication/add-login-to-apps/
    # icon: padlockIcon
    subLinks:
      - name: "For Single-Page Applications"
        link: /guides/authentication/add-login-to-single-page-app
          
      - name: "For Web Applications"
        link: /guides/authentication/add-login-to-web-app/

  - title: Social Login
    details: Enable your application users to login with their existing social identities.
    link: /guides/authentication/social-login/
    # icon: federatedLoginIcon
    subLinks:
      - name: "Facebook Login"
        link: /guides/authentication/social-login/add-facebook-login/

      - name: "Github Login"
        link: /guides/authentication/social-login/add-github-login/

      - name: "Google Login"
        link: /guides/authentication/social-login/add-google-login/

  - title: Enterprise IDPs
    details: Enable your application users to login using a standard-based identity provider. 
    link: /guides/authentication/enterprise-login/
    # icon: addAuthnIcon
    subLinks:
      - name: "SAML-based Identity Providers"
        link: /guides/authentication/enterprise-login/add-saml-idp-login/

      - name: "OIDC-based Identity Providers"
        link: /guides/authentication/enterprise-login/add-oidc-idp-login/

  - title: Multi-factor Authentication
    details: Add strong authentication to your application by enabling multiple authentication factors in the login flow.
    link: /guides/authentication/mfa/
    # icon: usersIcon
    subLinks:
      - name: "TOTP"
        link: /guides/authentication/mfa/add-totp-login/
      
      - name: "Email OTP"
        link: /guides/authentication/mfa/add-emailotp-login/

  - title: Conditional Authentication
    details: Add strong authentication to your application by customizing the login flow using a script.
    link: /guides/authentication/conditional-auth/
    # icon: usersIcon
    subLinks:
      - name: "Access Control"
        link: /guides/authentication/conditional-auth/access-control/

      - name: "Adaptive MFA"
        link: /guides/authentication/conditional-auth/adaptive-mfa/
      
      - name: "Custom Authentication Flows"
        link: /guides/authentication/conditional-auth/write-your-first-script/
  
  - title: Users
    details: Manage users in your organizations and enable users to manage their own profiles.
    link: /guides/users/
    # icon: usersIcon
    subLinks:
      - name: "Collaborators"
        link: /guides/users/manage-collaborators/
      
      - name: "Customers"
        link: /guides/users/manage-customers/
      
      - name: "User Self-Service"
        link: /guides/user-self-service/
