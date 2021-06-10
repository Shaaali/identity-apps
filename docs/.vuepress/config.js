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
        sitemap: false,
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
                title: 'Get started',
                icon:  'gettingStartedIcon',
                children: [
                '',
                ['get-started/create-organization.md', 'Create an organization']
              ]
            },
            {
                title: 'Manage applications',
                icon:  'applicationsIcon',
                children: [
                ['applications/', 'Overview'],
                {
                    title: 'Single page application',
                    path: '/guides/applications/spa/',
                    prefix: '/guides/applications/spa/',
                    collapsable: false,
                    sidebarDepth: 2,
                    children: [
                        ['spa-integrate-with-oidc', 'Integrate with OIDC']
                    ]
                },
                {
                    title: 'Web application',
                    path: '/guides/applications/web-app/',
                    prefix: '/guides/applications/web-app/',
                    collapsable: false,
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
                // Guides for the login is not yet completed.
            // {
            //     title: 'Configure federated login',
            //     icon: 'addLoginIcon',
            //     children: [
            //     ['social-login/overview.md', 'Overview'],
            //     {
            //         title: 'Social login',
            //         children: [
            //             ['/guides/social-login/google-qsg.md', 'Enable Google authentication']
            //         ]
            //     },
            //     {
            //         title: 'Enterprise login',
            //         children: [
            //             ['/guides/social-login/google-qsg.md', 'Enable OIDC authentication']
            //         ]
            //     },
            //   ]
            // },
            {
                title: 'Add strong authentication',
                icon: 'addAuthnIcon',
                children: [
                    // Guides for the multi factor authentication is not yet completed.
                // ['strong-authentication/overview.md', 'Overview'],
                // {
                //     title: 'Multi factor authentication',
                //     children: [
                //         ['/guides/strong-authentication/mfa-qsg.md', 'Configure multi factor authentication']
                //     ]
                // },
                {
                    title: 'Conditional authentication',
                    path:'/guides/strong-authentication/conditional-auth/',
                    prefix: '/guides/strong-authentication/conditional-auth/',
                    collapsable: false,
                    sidebarDepth: 2,
                    children: [
                        ['configure-conditional-auth.md', 'Configure script'],
                        ['write-your-first-script.md', 'Guide to write'],
                        {
                            title: 'Predefined templates',
                            children: [
                                ['conditional-auth-scenarios/overview.md', 'Overview'],
                                ['conditional-auth-scenarios/group-based-template.md', 'Group'],
                                ['conditional-auth-scenarios/ip-based-template.md', 'IP'],
                                ['conditional-auth-scenarios/new-device-based-template.md', 'New Device'],
                                ['conditional-auth-scenarios/user-age-based-template.md', 'User Age'],
                            ]
                        },
                        ['api-reference.md', 'API Reference'],
                    ]
                },
              ]
            },{
                title: 'Manage users',
                    icon:  'usersIcon',
                    children: [
                        {
                            title: 'Users',
                            prefix: '/guides/user-management/',
                            path: '/guides/user-management/',
                            collapsable: false,
                            sidebarDepth: 2,
                            children: [
                               ['manage-collaborator-accounts.md', 'Manage Collaborator Accounts'],
                               ['manage-customer-accounts.md', 'Manage Customer Accounts']
                            ]
                       },
                        ['user-management/user-profiles.md', 'User profiles'],
                        ['user-management/sessions.md', 'Sessions'],
                        ['user-management/groups.md', 'Groups'],
              ]
            },
            ],
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
