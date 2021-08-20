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
        hostname : 'https://docs.asgardeo.io',
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
//          {
//            text: 'Concepts',
//            link: '/concepts/'
//          }
        ],
        sidebar: {
            '/guides/' : [
                ["", 'Introduction'],
                {
                    title: 'Get Started',
                    children: [
                        ['get-started/create-organization.md', 'Create an organization']
                    ]
                },
                {
                    title: 'Organization',
                    children: [
                        ['organization/organizations', 'Manage Organizations'],
                        {
                            title: 'Attributes',
                            prefix: 'organization/attributes/',
                            sidebarDepth: 2,
                            children: [
                                ['manage-attributes', 'Manage Attributes'],
                                ['manage-attribute-mappings', 'Manage Attribute Mappings'],
                            ]
                        },
                        {
                            title: 'Account Recovery',
                            prefix: 'organization/account-recovery/',
                            sidebarDepth: 2,
                            children: [
                                ['password-recovery', 'Configure password recovery'],
                            ]
                        },
                        ['organization/configure-self-registration', 'Configure self registration'],
                        {
                            title: 'Account Security',
                            prefix: 'organization/account-security/',
                            sidebarDepth: 2,
                            children: [
                                ['login-attempts-security', 'Configure Login Attempts Security'],
                                ['bot-detection', 'Configure Bot Detection'],
                            ]
                        },
                        {
                            title: 'User Self-Service',
                            prefix: 'organization/self-service/',
                            sidebarDepth: 2,
                            children: [
                                {
                                    title: 'Asgardeo User',
                                    prefix: 'asgardeo-user/',
                                    sidebarDepth: 2,
                                    children: [
                                        ['my-account', 'My Account'],
                                        ['recover-password', 'Recover your password'],
                                    ]
                                },
                                {
                                    title: 'Customer',
                                    prefix: 'customer/',
                                    sidebarDepth: 2,
                                    children: [
                                        ['my-account', 'My Account'],
                                        ['recover-password', 'Recover your password'],
                                        ['self-register', 'Self register'],
                                    ]
                                },
                            ]
                        },

                    ]
                },
                {
                    title: 'Users',
                    children: [
                        ['user-management/', 'Overview'],
                        {
                            title: 'Manage Users',
                            children: [
                                {
                                    title: 'Users Accounts',
                                    prefix: 'user-management/manage-users/user-accounts/',
                                    path:'user-management/manage-users/user-accounts/',
                                    sidebarDepth: 2,
                                    children: [
                                        ['owner', 'Owner'],
                                        ['collaborator', 'Collaborator'],
                                        ['customer', 'Customer'],
                                    ]
                                },
                                ['user-management/manage-users/user-profiles.md', 'User profiles'],
                                ['user-management/manage-users/sessions.md', 'Active Sessions'],
                            ]
                        },
                        ['user-management/groups.md', 'Manage Groups'],
                        ['user-management/roles.md', 'Manage Roles'],
                    ]
                },
                {
                    title: 'Applications',
                    children: [
                    ['applications/', 'Overview'],
                    {
                        title: 'Single page application',
                        prefix: 'applications/',
                        sidebarDepth: 2,
                        children: [
                            ['spa/', 'Overview'],
                            ['spa/register-app', 'Register SPA'],
                            ['spa/configure-login', 'Configure OpenID Connect login'],
                            ['spa/oidc-settings', 'OpenID Connect settings'],
                            ['share-user-attributes/oidc', 'Share user attributes']
                        ]
                    },
                    {
                        title: 'Web application',
                        prefix: 'applications/',
                        sidebarDepth: 2,
                        children: [
                            ['web-app/', 'Overview'],
                            {
                                title: 'Sign in with OIDC',
                                sidebarDepth: 2,
                                children: [
                                    ['web-app/oidc/register-app', 'Register webapp'],
                                    ['web-app/oidc/configure-login', 'Configure OpenID Connect login'],
                                    ['web-app/oidc/oidc-settings', 'OpenID Connect settings'],
                                    ['share-user-attributes/oidc', 'Share user attributes']
                                ]
                            },
                            {
                                title: 'Sign in with SAML',
                                sidebarDepth: 2,
                                children: [
                                    ['web-app/saml/register-app', 'Register webapp'],
                                    ['web-app/saml/configure-login', 'Configure SAML login'],
                                    ['web-app/saml/saml-settings', 'SAML settings'],
                                    ['share-user-attributes/saml', 'Share user attributes']
                                ]
                            },

                        ]
                    },
                    ]
                },
                {
                    title: 'Connections',
                    children: [
                        {
                            title: 'MFA',
                            prefix: 'mfa/',
                            sidebarDepth: 2,
                            children: [
                                ['', 'Overview'],
                                ['emailotp.md', 'Enable Email OTP'],
                                ['totp.md', 'Enable TOTP'],
                            ]
                        },
                        {
                            title: 'Identity Providers',
                            prefix: 'identity-providers/',
                            sidebarDepth: 2,
                            children: [
                                ['', 'Overview'],
                                {
                                    title: 'Social Login',
                                    prefix: 'social-login/',
                                    path: 'social-login/',
                                    sidebarDepth: 2,
                                    children: [
                                        ['facebook.md', 'Facebook'],
                                        ['github.md', 'Github'],
                                        ['google.md', 'Google'],
                                    ]
                                },
                                {
                                    title: 'Enterprise Login',
                                    prefix: 'enterprise-login/',
                                    path: 'enterprise-login/',
                                    sidebarDepth: 2,
                                    children: [
                                        ['oidc.md', 'OpenID Connect']
                                    ]
                                },
                            ]
                        },
                    ],
                },
                {
                    title: 'Conditional Authentication',
                    children: [
                        ['conditional-auth/', 'Overview'],
                        ['conditional-auth/configure-conditional-auth.md', 'Set up conditional authentication'],
                        ['conditional-auth/group-based-template.md', 'Add group-based authentication'],
                        ['conditional-auth/ip-based-template.md', 'Add IP-based authentication'],
                        ['conditional-auth/new-device-based-template.md', 'Add device-based authentication'],
                        ['conditional-auth/user-age-based-template.md', 'Add user age-based authentication'],
                        ['conditional-auth/write-your-first-script.md', 'Write a custom authentication script'],
                        ['conditional-auth/api-reference.md', 'Authentication Script - Reference'],
                    ]
                },
            {
                title: 'Hidden',
                children: [
                    ['identity-providers/enterprise-login/configure-additional-query-params.md', 'Configure additional query parameters'],
                    ['applications/integrate-public-client.md', 'Integrate public client'],
                    ['applications/integrate-confidential-client.md', 'Integrate confidential client'],
                ]
            }
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
