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

    base: "/",

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
                    title: 'Users',
                    children: [
                        {
                            title: 'Manage Users',
                            children: [
                                ['user-management/', 'Users'],
                                ['user-management/manage-collaborator-accounts.md', 'Manage Collaborator Accounts'],
                                ['user-management/manage-customer-accounts.md', 'Manage Customer Accounts'],
                                ['user-management/user-profiles.md', 'User profiles'],
                                ['user-management/sessions.md', 'Sessions'],
                            ]
                        },
                        ['user-management/groups.md', 'Groups'],
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
                            ['spa/oidc-settings', 'OpenID Connect settings']
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
                                prefix: 'web-app/oidc/',
                                sidebarDepth: 2,
                                children: [
                                    ['register-app', 'Register webapp'],
                                    ['configure-login', 'Configure OpenID Connect login'],
                                    ['oidc-settings', 'OpenID Connect settings']
                                ]
                            },
                            {
                                title: 'Sign in with SAML',
                                prefix: 'web-app/saml/',
                                sidebarDepth: 2,
                                children: [
                                    ['register-app', 'Register webapp'],
                                    ['configure-login', 'Configure SAML login'],
                                    ['saml-settings', 'SAML settings']
                                ]
                            },

                        ]
                    },
                ]
                },
                {
                    title: 'Identity Providers',
                    children: [
                    ['identity-providers/', 'Overview'],
                    {
                        title: 'Social Login',
                        prefix: 'identity-providers/social-login/',
                        path: 'identity-providers/social-login/',
                        sidebarDepth: 2,
                        children: [
                            ['facebook.md', 'Facebook'],
                            ['github.md', 'Github'],
                            ['google.md', 'Google'],
                        ]
                    },
                    {
                        title: 'Enterprise Login',
                        prefix: 'identity-providers/enterprise-login/',
                        path: 'identity-providers/enterprise-login/',
                        sidebarDepth: 2,
                        children: [
                            ['oidc.md', 'OpenID Connect']
                        ]
                    },
                ]
            },
            {
                title: 'Multi-Factor Authentication',
                children: [
                    ['mfa/', 'Overview'],
                    ['mfa/totp.md', 'TOTP']
                ]
            },
            {
                title: 'Conditional Authentication',
                children: [
                    ['conditional-auth/', 'Overview'],
                    ['conditional-auth/configure-conditional-auth.md', 'Setup conditional authentication'],
                    ['conditional-auth/write-your-first-script.md', 'Write your first authentication script'],
                    {
                        title: 'Predefined templates',
                        prefix: 'conditional-auth/',
                        sidebarDepth: 2,
                        children: [
                            ['predefined-templates/', 'Overview'],
                            ['predefined-templates/group-based-template.md', 'Group based access control'],
                            ['predefined-templates/ip-based-template.md', 'IP based access control'],
                            ['predefined-templates/new-device-based-template.md', 'Device based access control'],
                            ['predefined-templates/user-age-based-template.md', 'Age based access control'],
                        ]
                    },
                    ['conditional-auth/api-reference.md', 'API Reference'],
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
                    ['/quickstarts/qsg-oidc-webapp-java-ee', 'Java EE sample'],
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
                    ['/sdks/java-ee', 'Java EE'],
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
        }]
    ]
});
