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
        ['meta', {name: 'robots', content: 'noindex, nofollow'}]
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
            text: "Guides",
            link: "/guides/",
          },
          {
            text: 'Quickstarts',
            link: '/quickstarts/',
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
            '/guides/' : [
                ["", 'Introduction'],
                ['get-started/create-organization.md', 'Get Started'],
                {
                    title: 'Integrate Apps',
                    children: [
                    ['manage-apps.md', 'Overview'],
                    {
                        title: 'Register Application',
                        prefix: 'applications/',
                        sidebarDepth: 2,
                        children: [
                            ['spa/register-single-page-app.md', 'Register an SPA'],
                            ['web-app/register-oidc-web-app.md', 'Register web app with OIDC'],
                            ['web-app/register-saml-web-app.md', 'Register web app with SAML'],
                        ]
                    },
                    {
                        title: 'Add Asgardeo Login',
                        prefix: 'applications/',
                        sidebarDepth: 2,
                        children: [
                            ['spa/add-login-to-single-page-app.md', 'Add login to an SPA'],
                            ['web-app/add-login-to-web-app.md', 'Add login to web app'],
                            {
                                title: 'Implement OIDC flows',
                                children: [
                                    ['oidc/discover-oidc-configs.md', 'Discover OIDC configurations'],
                                    ['oidc/integrate-confidential-client.md', 'Implement Authorization Code flow'],
                                    ['oidc/integrate-public-client.md', 'Implement Authorization Code flow with PKCE'],
                                ]
                            },
                            {
                                title: 'Implement SAML flows',
                                sidebarDepth: 2,
                                children: [
                                    ['saml/discover-saml-configs.md', 'Discover SAML configurations'],
                                ]
                            },
                            {
                                title: 'Enable User Attributes',
                                children: [
                                    ['user-attributes/enable-attributes-for-oidc-app.md', 'Enable attributes for OIDC apps'],
                                    ['user-attributes/enable-attributes-for-saml-app.md', 'Enable attributes for SAML apps'],
                                ]
                            },
                        ]
                    },
                    {
                        title: 'Add Social Login',
                        prefix: 'connections/social-login/',
                        sidebarDepth: 2,
                        children: [
                            ['add-facebook-login.md', 'Add Facebook login'],
                            ['add-github-login.md', 'Add Github login'],
                            ['add-google-login.md', 'Add Google login'],
                        ]
                    },
                    {
                        title: 'Add Enterprise Login',
                        prefix: 'connections/enterprise-login/',
                        sidebarDepth: 2,
                        children: [
                            ['add-oidc-idp-login.md', 'Add login with OIDC'],
                            ['add-saml-idp-login.md', 'Add login with SAML'],
                        ]
                    },
                    {
                        title: 'Add Multi-Factor Authentication',
                        prefix: 'connections/mfa/',
                        sidebarDepth: 2,
                        children: [
                            ['add-totp-login.md', 'Add TOTP'],
                            ['add-emailotp-login.md', 'Add Email OTP'],
                        ]
                    },
                    {
                        title: 'Add Conditional Authentication',
                        children: [
                            ['conditional-auth/', 'Overview'],
                            ['conditional-auth/configure-conditional-auth.md', 'Set up conditional authentication'],
                            ['conditional-auth/group-based-template.md', 'Add group-based authentication'],
                            ['conditional-auth/ip-based-template.md', 'Add IP-based authentication'],
                            ['conditional-auth/new-device-based-template.md', 'Add device-based authentication'],
                            ['conditional-auth/user-age-based-template.md', 'Add user age-based authentication'],
                            ['conditional-auth/write-your-first-script.md', 'Write a custom authentication script'],
                        ]
                    },
                    ]
                },
                {
                    title: 'Manage Users',
                    prefix: 'users/',
                    children: [
                        ['', 'Overview'],
                        ['owner.md', 'Manage owner'],
                        ['manage-collaborators.md', 'Manage collaborators'],
                        ['manage-customers.md', 'Manage customers'],
                        ['manage-user-profiles.md', 'Manage user profiles'],
                        ['manage-sessions.md', 'Manage active sessions'],
                        ['manage-groups', 'Manage groups'],
                        {
                            title: 'User Self-Service',
                            prefix: 'self-service/',
                            sidebarDepth: 2,
                            children: [
                                {
                                    title: 'Asgardeo User',
                                    children: [
                                        ['asgardeo-user/my-account', 'My Account'],
                                        ['asgardeo-user/recover-password', 'Recover your password'],
                                    ]
                                },
                                {
                                    title: 'Customer',
                                    children: [
                                        ['customer/my-account', 'My Account'],
                                        ['customer/recover-password', 'Recover your password'],
                                        ['customer/self-register', 'Self-register'],
                                    ]
                                },
                            ]
                        },
                    ]
                },
                {
                    title: 'Manage Organization Settings',
                    children: [
                        ['org-settings/organizations', 'Manage Organizations'],
                        {
                            title: 'Manage User Attributes',
                            prefix: 'org-settings/attributes/',
                            sidebarDepth: 2,
                            children: [
                                ['manage-attributes', 'Manage Attributes'],
                                ['manage-attribute-mappings', 'Manage Attribute Mappings'],
                            ]
                        },
                        {
                            title: 'Account Recovery',
                            prefix: 'org-settings/account-recovery/',
                            sidebarDepth: 2,
                            children: [
                                ['password-recovery', 'Configure password recovery'],
                            ]
                        },
                        ['org-settings/configure-self-registration', 'Self-registration'],
                        {
                            title: 'Manage Account Security',
                            prefix: 'org-settings/account-security/',
                            sidebarDepth: 2,
                            children: [
                                ['login-attempts-security', 'Configure Login Attempts Security'],
                                ['bot-detection', 'Configure Bot Detection'],
                            ]
                        },
                    ]
                },
            ],
            '/quickstarts/' : [
            {
                title: 'SPA',
                children: [
                    ['/quickstarts/qsg-spa-angular.md', 'Angular sample'],
                    ['/quickstarts/qsg-spa-javascript.md', 'Javascript sample'],
                    ['/quickstarts/qsg-spa-react.md', 'React sample'],
                ]
            },
            {
                title: 'Web App',
                children: [
                    ['/quickstarts/qsg-oidc-webapp-java-ee', 'OIDC Java EE sample'],
                    ['/quickstarts/qsg-saml-webapp-java-ee', 'SAML Java EE sample'],
                ]
            },
            ],
            '/sdks/' : [
            {
                title: 'SPA',
                children: [
                    ['/sdks/angular.md', 'Angular'],
                    ['/sdks/javascript.md', 'Javascript'],
                    ['/sdks/react.md', 'React'],
                ]
            },
            {
                title: 'Web App',
                children: [
                    ['/sdks/java-ee-oidc', 'OIDC Java EE'],
                    ['/sdks/java-ee-saml', 'SAML Java EE'],
                ]
            },
            ],
            '/references/' : [
                {
                    title: 'App Configurations',
                    children: [
                        ['/references/app-settings/oidc-settings-for-app.md', 'OIDC configurations'],
                        ['/references/app-settings/saml-settings-for-app.md', 'Saml configurations'],
                    ]
                },
                {
                    title: 'IdP Configurations',
                    children: [
                        ['/references/idp-settings/oidc-settings-for-idp.md', 'OIDC configurations'],
                        ['/references/idp-settings/saml-settings-for-idp.md', 'SAML configurations'],
                    ]
                },
                ['/references/user-management/user-roles.md', 'Role-based permissions'],
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
        'vuepress-plugin-chunkload-redirect'
    ]
});
