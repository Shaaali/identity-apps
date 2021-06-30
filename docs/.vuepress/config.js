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
        logo: '/assets/img/asgardeo-logo.png',
        search: true,
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
            {
                title: 'Get Started',
                icon:  'gettingStartedIcon',
                children: [
                    ['', 'Asgardeo Overview'],
                    ['get-started/create-organization.md', 'Create an organization']
                ]
            },
            {
                title: 'Users',
                icon:  'usersIcon',
                children: [
                    {
                        title: 'Manage Users',
                        path: 'user-management/',
                        children: [
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
                icon:  'applicationsIcon',
                children: [
                ['applications/', 'Overview'],
                {
                    title: 'Single page application',
                    path: 'applications/spa/',
                    prefix: 'applications/spa/',
                    sidebarDepth: 2,
                    children: [
                        ['spa-integrate-with-oidc', 'Integrate with OIDC']
                    ]
                },
                {
                    title: 'Web application',
                    path: 'applications/web-app/',
                    prefix: 'applications/web-app/',
                    sidebarDepth: 2,
                    children: [
                        ['web-app-integrate-with-oidc.md', 'Integrate with OIDC']
                    ]
                },
                // Uncomment as each section is implemented
//                {
//                    title: 'Application settings',
//                    prefix: '/guides/applications/application-settings/',
//                    collapsable: false,
//                    children: [
//                        ['configure-general.md', 'Configure general details'],
//                        ['configure-protocol.md', 'Define authorization protocol'],
//                        ['configure-user-attribute.md', 'Select user attributes'],
//                        ['configure-sign-on.md', 'Configure sign-on method'],
//                        ['configure-advanced.md', 'Configure advanced settings']
//                    ]
//                },
              ]
            },
            {
                title: 'Identity Providers',
                icon: 'addLoginIcon',
                children: [
                ['identity-providers/', 'Overview'],
                {
                    title: 'Social login',
                    prefix: 'identity-providers/social-login/',
                    children: [
                        ['facebook.md', 'Facebook'],
                        ['github.md', 'Github'],
                        ['google.md', 'Google'],
                    ]
                },
                {
                    title: 'Enterprise login',
                    prefix: 'identity-providers/enterprise-login/',
                    children: [
                        ['oidc.md', 'OpenID Connect'],
                        // ['saml.md', 'SAML'],

                    ]
                },
                ]
            },
            {
                title: 'Multi-Factor Authentication',
                icon: 'addAuthnIcon',
                children: [
                    ['mfa/', 'Overview'],
                    ['mfa/totp.md', 'TOTP']
                ]
            },
            {
                title: 'Conditional Authentication',
                icon: 'addLoginIcon',
                children: [
                    ['conditional-auth/', 'Overview'],
                    ['conditional-auth/configure-conditional-auth.md', 'Setup conditional authentication'],
                    ['conditional-auth/write-your-first-script.md', 'Write your first authentication script'],
                    {
                        title: 'Predefined templates',
                        prefix: 'conditional-auth/predefined-templates/',
                        path: 'conditional-auth/predefined-templates/',
                        children: [
                            ['group-based-template.md', 'Group based access control'],
                            ['ip-based-template.md', 'IP based access control'],
                            ['new-device-based-template.md', 'Device based access control'],
                            ['user-age-based-template.md', 'Age based access control'],
                        ]
                    },
                    ['conditional-auth/api-reference.md', 'API Reference'],
                ]
            },
            ],
            '/quickstarts/' : [
            {
                title: 'SPA',
                icon:  'gettingStartedIcon',
                children: [
                    ['/quickstarts/qsg-spa-angular.md', 'Angular sample'],
                    ['/quickstarts/qsg-spa-javascript.md', 'Javascript sample'],
                    ['/quickstarts/qsg-spa-react.md', 'React sample'],
                ]
            },
            {
                title: 'Web App',
                icon:  'applicationsIcon',
                children: [
                    ['/quickstarts/qsg-oidc-webapp-java-ee', 'Java EE sample'],
                ]
            },
            ],
            '/sdks/' : [
            {
                title: 'SPA',
                icon:  'gettingStartedIcon',
                children: [
                    ['/sdks/angular.md', 'Angular'],
                    ['/sdks/javascript.md', 'Javascript'],
                    ['/sdks/react.md', 'React'],
                ]
            },
            {
                title: 'Web App',
                icon:  'applicationsIcon',
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
