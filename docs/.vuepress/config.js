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
        ['script', {src: '/scripts/analytics.js'}],
        ['script', {src: '/scripts/hotjar.js'}],
        ['noscript', {}, 
            `<iframe src="//www.googletagmanager.com/ns.html?id=GTM-PSTXMT" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
        ],
        ['script', {}, `
            (function (w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({'gtm.start':
                            new Date().getTime(), event: 'gtm.js'});
                var f = d.getElementsByTagName(s)[0], d
                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
                j.async = true;
                j.src = '//www.googletagmanager.com/gtm.js?id=' + i + dl;
                f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-PSTXMT');
        `
        ]
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
//         algolia: {
//             appId: "FZZ2G9EYKZ",
//             // This is search only API key.
//             apiKey: "eb6a5c630b8ebd2d4d862a2b0aaa7a67",
//             indexName: "asgardeo-algolia"
//         },
        algoliaType: "full",
        Navbar: true,
        blog: false,
        feed: false,
        pwa: false,
        sitemap: true,
        darkmode: 'switch',
        footer: {
            display: true,
            content: '© ' + new Date().getFullYear() + ' WSO2 Inc. All Rights Reserved'
        },
        git: {
            contributor:false
        },
        pageInfo: false,
        nextLinks: false,
        prevLinks: false,
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
                ['asgardeo-use-cases.md', 'Learn by Use Case'],
 //               ['explore-asgardeo.md', 'Explore Asgardeo'],
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
                        title: 'Add Standard-Based Login',
                        prefix: 'enterprise-login/',
                        path: 'enterprise-login/',
                        sidebarDepth: 2,
                        children: [
                            ['add-oidc-idp-login.md', 'Add login with OIDC IdP'],
                            ['add-saml-idp-login.md', 'Add login with SAML IdP'],
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
                            {
                                title: 'Add Access Control',
                                path: 'access-control/',
                                sidebarDepth: 2,
                                children: [
                                    ['user-age-based-template.md', 'Age-based access'],
                                    ['group-based-template-access-control.md', 'Group-based access'],
                                ]
                            },
                            {
                                title: 'Add Adaptive MFA',
                                path: 'adaptive-mfa/',
                                sidebarDepth: 2,
                                children: [
                                    ['group-based-template.md', 'MFA based on user group'],
                                    ['sign-in-option-based-template.md', 'MFA based on sign-in option'],
                                    ['new-device-based-template.md', 'MFA based on user device'],
                                    ['ip-based-template.md', 'MFA based on IP address'],
                                    ['add-authentications-based-on-api-calls.md', 'MFA based on API calls'],
                                ]
                            },
                            ['write-your-first-script.md', 'Write a custom authentication script'],
                        ]
                    },
                    {
                        title: 'Configure OIDC Flows',
                        path: 'oidc',
                        prefix: 'oidc/',
                        children: [
                            ['discover-oidc-configs.md', 'Discover OIDC endpoints'],
                            ['implement-auth-code.md', 'Implement login using the Authorization Code flow'],
                            ['implement-auth-code-with-pkce.md', 'Implement login using the Authorization Code flow and PKCE'],
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
                        ['manage-groups.md', 'Manage groups'],
                        ['manage-sessions.md', 'Manage active sessions'],
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
                        ['asgardeo-self-service.md', 'Self-service'],
                        ['recover-password.md', 'Recover your password'],
                        ['manage-organizations.md', 'Manage your organizations'],
                        ['delete-organizations.md', 'Delete your organizations'],
                        ['delete-your-user-account.md', 'Delete your user account'],
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
