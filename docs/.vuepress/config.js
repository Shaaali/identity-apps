const {config} = require("vuepress-theme-hope");

module.exports = config({
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: "Asgardeo Docs",
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: "Get started with Asgardeo. Fully integrated developer experience to create seamless login experiences in minutes.",
    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
        ['meta', {name: 'google-site-verification', content: 't7sfVDHspOQUclosR3wjsyXV34xmdbqiefY0WeLfqgM'}],
        ['meta', {name: 'robots', content: 'noindex, nofollow'}],
        ['script', {}, 
        `
        (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:2626904,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        ` ]
    ],

    base: '/asgardeo/docs/',
    dest: 'docs/.vuepress/dist/asgardeo/docs',

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */

    themeConfig: {
        hostname : 'https://wso2.com',
        displayAllHeaders: false,
        repo: '',
        editLinks: true,
        docsDir: '',
        docVersion: "BETA",
        productTitle: "Docs",
        editLinkText: 'Edit this page on Github',
        logo: '/assets/img/asgardeo-logo-console.svg',

        search: true,
        // algolia: {
        //     appId: "FZZ2G9EYKZ",
        //     // This is search only API key.
        //     apiKey: "eb6a5c630b8ebd2d4d862a2b0aaa7a67",
        //     indexName: "asgardeo-algolia"
        // },
        algoliaType: "full",
        Navbar: true,
        blog: false,
        feed: false,
        pwa: false,
        sitemap: true,
        darkmode: 'switch',
        footer: {
            display: true,
            content: 'Asgardeo Docs | © 2021 WSO2'
        },
        git: {
            contributor:false
        },
        pageInfo: false,
        nav: [
          {
            text: "Get Started",
            link: "/get-started/",
          },
          {
            text: "Guides",
            link: "/guides/",
          },
        //  These sections are yet not completed. Uncomment as they are implemented
//          {
//            text: 'APIs',
//            link: '/apis/',
//          },
         {
           text: 'SDKs',
           link: '/sdks/'
         },
         {
            text: 'References',
            link: '/references/'
         },
//          {
//            text: 'Concepts',
//            link: '/concepts/'
//          }
        ],
        sidebar: {
            '/get-started/' : [
                ['', 'Get Started - Overview'],
                ['create-asgardeo-account.md', 'Create your Account'],
                {
                    title: 'Start Integrating Apps',
                    path: 'start-integrating-apps/',
                    sidebarDepth: 2,
                    children:[
                        {
                            title: 'Try a Sample App',
                            prefix: 'try-samples/',
                            path: 'try-samples/',
                            sidebarDepth: 2,
                            children:[
                                {
                                    title: 'SPAs',
                                    children:[
                                    ['qsg-spa-angular.md', 'Angular'],
                                    ['qsg-spa-javascript.md', 'Javascript'],
                                    ['qsg-spa-react.md', 'React'],
                                    ]
                                },
                                {
                                    title: 'Web Apps',
                                    children:[
                                    ['qsg-oidc-webapp-java-ee', 'OIDC Java EE'],
                                    ['qsg-saml-webapp-java-ee', 'SAML Java EE'],
                                    ]
                                },
                            ]
                        },      
                        {
                            title: 'Try your Own App',
                            prefix: 'try-your-own-app/',
                            path: 'try-your-own-app/',
                            sidebarDepth: 2,
                            children: [
                                {
                                    title: 'SPAs',
                                    children:[
                                    ['angular.md', 'Angular'],
                                    ['javascript.md', 'Javascript'],
                                    ['react.md', 'React'],
                                    ]
                                },
                                {
                                    title: 'Web Apps',
                                    children:[
                                    ['java-ee-oidc', 'OIDC Java EE'],
                                    ['java-ee-saml', 'SAML Java EE'],
                                    ]
                                },
                            ]
                        },
                    ]
                },
                ['explore-asgardeo.md', 'Explore Asgardeo'],
            ],
            '/guides/' : [
                ['', 'Guides - Overview'],
                {
                    title: 'Applications',
                    prefix: 'applications/',
                    path: 'applications/',
                    sidebarDepth: 2,
                    children: [
                            ['register-single-page-app.md', 'Register an SPA'],
                            ['register-oidc-web-app.md', 'Register web app with OIDC'],
                            ['register-saml-web-app.md', 'Register web app with SAML'],
                    ]
                },
                {   
                    title: 'Authentication',
                    prefix: 'authentication/',
                    path: 'authentication/',
                    sidebarDepth: 2,
                    children: [
                    {
                        title: 'Add Login to Apps',
                        path: 'add-login-to-apps/',
                        sidebarDepth: 2,
                        children: [
                            ['add-login-to-single-page-app.md', 'Add login to an SPA'],
                            ['add-login-to-web-app.md', 'Add login to a web app'],
                        ]
                    },
                    {
                        title: 'Enable User Attributes',
                        prefix: 'user-attributes/',
                        path: 'user-attributes/',
                        sidebarDepth: 2,
                        children: [
                            ['enable-attributes-for-oidc-app.md', 'Enable attributes for OIDC apps'],
                            ['enable-attributes-for-saml-app.md', 'Enable attributes for SAML apps'],
                        ]
                    },
                    {
                        title: 'Add Social Login',
                        prefix: 'social-login/',
                        path: 'social-login/',
                        sidebarDepth: 2,
                        children: [
                            ['add-facebook-login.md', 'Add Facebook login'],
                            ['add-github-login.md', 'Add Github login'],
                            ['add-google-login.md', 'Add Google login'],
                        ]
                    },
                    {
                        title: 'Add Enterprise Login',
                        prefix: 'enterprise-login/',
                        path: 'enterprise-login/',
                        sidebarDepth: 2,
                        children: [
                            ['add-oidc-idp-login.md', 'Add login with OIDC'],
                            ['add-saml-idp-login.md', 'Add login with SAML'],
                        ]
                    },
                    {
                        title: 'Add Multi-Factor Authentication',
                        prefix: 'mfa/',
                        path: 'mfa',
                        sidebarDepth: 2,
                        children: [
                            ['add-totp-login.md', 'Add TOTP'],
                            ['add-emailotp-login.md', 'Add Email OTP'],
                        ]
                    },
                    {
                        title: 'Add Conditional Authentication',
                        prefix: 'conditional-auth/',
                        path: 'conditional-auth/',
                        sidebarDepth: 2,
                        children: [
                            ['configure-conditional-auth.md', 'Set up conditional authentication'],
                            ['user-age-based-template.md', 'Add user age-based authentication'],
                            ['group-based-template-access-control.md', 'Add group-based authentication (access control)'],
                            ['sign-in-option-based-template.md', 'Add sign-in-option-based authentication'],
                            ['new-device-based-template.md', 'Add device-based authentication'],
                            ['group-based-template.md', 'Add group-based authentication (adaptive MFA)'],
                            ['ip-based-template.md', 'Add IP-based authentication'],
                            ['add-a-secret-to-authentication-script.md', 'Add a secret to a conditional authentication script'],
                            ['write-your-first-script.md', 'Write a custom authentication script'],
                        ]
                    },
                    {
                        title: 'Configure OIDC Flows',
                        path: 'oidc',
                        prefix: 'oidc/',
                        children: [
                            ['discover-oidc-configs.md', 'Discover OIDC endpoints'],
                            ['implement-auth-code.md', 'Implement Authorization code flow'],
                            ['implement-auth-code-with-pkce.md', 'Implement Authorization Code flow with PKCE'],
                            ['validate-id-tokens.md', 'Validate ID tokens'],
                            ['request-user-info.md', 'Request user information'],
                            ['token-validation-resource-server.md', 'Validate tokens'],
                            ['revoke-tokens.md', 'Revoke tokens'],
                            ['add-logout.md', 'Implement logout'],
                        ]
                    },
                    {
                        title: 'Configure SAML Flows',
                        path: 'saml',
                        prefix: 'saml/',
                        sidebarDepth: 2,
                        children: [
                            ['discover-saml-configs.md', 'Discover SAML endpoints and settings'],
                        ]
                    },
                    ],
                },
                {
                    title: 'User Management',
                    prefix: 'users/',
                    path: 'users/',
                    sidebarDepth: 2,
                    children: [
                        ['manage-collaborators.md', 'Manage collaborators'],
                        ['manage-customers.md', 'Manage customers'],
                        ['manage-user-profiles.md', 'Manage user profiles'],
                        ['manage-sessions.md', 'Manage active sessions'],
                        ['manage-groups.md', 'Manage groups'],
                        {
                            title: 'Manage Attributes and Mappings',
                            prefix: 'attributes/',
                            path: 'attributes/',
                            children: [
                                ['manage-attributes', 'User attributes'],
                                ['manage-oidc-attribute-mappings', 'OIDC attribute mappings'],
                                ['manage-scim2-attribute-mappings', 'SCIM2 attribute mappings'],
                            ]
                        },
                    ]
                },
                {
                    title: 'Account Management',
                    prefix: 'user-accounts/',
                    path: 'user-accounts/',
                    sidebarDepth: 2,
                    children: [
                        ['password-recovery', 'Configure password recovery'],
                        ['configure-self-registration', 'Configure self-registration'],
                        {
                            title: 'Manage Account Security',
                            sidebarDepth: 2,
                            children: [
                                ['account-security/login-attempts-security', 'Configure login-attempts security'],
                                ['account-security/bot-detection', 'Configure bot detection'],
                            ]
                        },
                    ]
                },
                {
                    title: 'User Self-Service',
                    prefix: 'user-self-service/',
                    path: 'user-self-service/',
                    children: [
                        ['customer-self-service-portal.md', 'Self-service portal'],
                        ['update-profile-info.md', 'Update profile information'],
                        ['change-password.md', 'Change password'],
                        ['manage-linked-accounts.md', 'Manage linked social accounts'],
                        ['manage-consents.md', 'Manage consents'],
                        ['manage-login-sessions.md', 'Manage login sessions'],
                        ['self-register.md', 'Self-register'],
                        ['customer-password-recovery.md', 'Password recovery'],
                        ['enable-totp.md', 'Enroll TOTP'],
                        ['discover-applications.md', 'Discover applications'],
                    ]
                },
                {
                    title: 'Your Asgardeo',
                    prefix: 'your-asgardeo/',
                    path: 'your-asgardeo/',
                    sidebarDepth: 2,
                    children: [
                        ['manage-organizations.md', 'Manage your organizations'],
                        ['asgardeo-self-service.md', 'Self-service'],
                        ['recover-password.md', 'Recover your password'],
                    ]
                },
            ],
            '/sdks/' : [
                ['', ''],
            ],
            '/references/' : [
                ['/references/user-management/user-roles.md', 'Asgardeo user roles'],
                {
                    title: 'App Configurations',
                    path: 'app-settings/',
                    children: [
                        ['/references/app-settings/oidc-settings-for-app.md', 'OIDC configurations'],
                        ['/references/app-settings/saml-settings-for-app.md', 'SAML configurations'],
                    ]
                },
                {
                    title: 'IdP Configurations',
                    path: 'idp-settings/',
                    children: [
                        ['/references/idp-settings/oidc-settings-for-idp.md', 'OIDC configurations'],
                        ['/references/idp-settings/saml-settings-for-idp.md', 'SAML configurations'],
                    ]
                },
                ['/references/conditional-auth/api-reference.md', 'Conditional auth - API'],
            ]
//
//            '/concepts/' : [
//            '',
//            {
//                title: 'Users, groups, and roles',
//                children: [
//                    ['/concepts/user-mgt/users-groups-roles', 'Users, groups, and roles'],
//                    ['/concepts/user-mgt/user-types', 'Types of user accounts'],
//                ]
//            },
//            {
//                title: 'Authentication',
//                children: [
//                    ['/concepts/authentication/authentication-protocols', 'Overview of authentication protocols'],
//                    ['/concepts/authentication/saml', 'SAML'],
//                    ['/concepts/authentication/oidc', 'OpenID Connect'],
//                ]
//            },
//            {
//                title: 'Authorization',
//                children: [
//                    ['/concepts/authentication/authentication-protocols', 'Overview of authentication protocols'],
//                    ['/concepts/authentication/oidc', 'OpenID Connect'],
//                ]
//            },
//            ]
        },
        mdEnhance: {
            align : true
        },
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
        'tabs',
        ['check-md', {
            exitLevel: 'error'
        }],
        'vuepress-plugin-chunkload-redirect',
        ['@xiaopanda/vuepress-plugin-code-copy', {
            buttonStaticIcon: true,
            buttonIconTitle: "Copy to clipboard",
            buttonAlign: "top",
            buttonColor: "#888"
        }]
    ]
});
