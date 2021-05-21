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
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}]
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
//          {
//            text: 'SDKs',
//            link: '/sdks/'
//          },
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
                        ['spa-react', 'React SDK for OIDC'],
                        ['spa-angular', 'Angular SDK for OIDC'],
                        ['spa-javascript', 'Javascript SDK for OIDC'],
                        ['spa-configure-general', 'Direct OIDC integration']
                    ]
                },
                {
                    title: 'Web application',
                    path: '/guides/applications/web-app/',
                    prefix: '/guides/applications/web-app/',
                    collapsable: false,
                    sidebarDepth: 2,
                    children: [
                        ['web-app-oidc-java-ee', 'OIDC Agent for Java EE'],
                        ['web-app-oidc-general.md', 'Direct OIDC integration']
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
                    prefix: '/guides/strong-authentication/conditional-auth/',
                    children: [
                        ['configure-conditional-auth.md', 'Configure conditional authentication'],
                        ['conditional-auth-templates.md', 'Predefined templates'],
                        ['conditional-auth-js-api-reference.md', 'JS API Reference']
                    ]
                },
              ]
            },{
                title: 'Manage Users',
                    icon:  'usersIcon',
                    children: [
                        ['user-management/', 'Users'],
              ]
            },
            ],

            '/concepts/' : [
            '',
            {
                title: 'Users, groups, and roles',
                children: [
                    ['/concepts/user-mgt/users-groups-roles', 'Users, groups, and roles'],
                    ['/concepts/user-mgt/user-types', 'Types of user accounts'],
                ]
            },
            {
                title: 'Authentication',
                children: [
                    ['/concepts/authentication/authentication-protocols', 'Overview of authentication protocols'],
                    ['/concepts/authentication/saml', 'SAML'],
                    ['/concepts/authentication/oidc', 'OpenID Connect'],
                ]
            },
            {
                title: 'Authorization',
                children: [
                    ['/concepts/authentication/authentication-protocols', 'Overview of authentication protocols'],
                    ['/concepts/authentication/oidc', 'OpenID Connect'],
                ]
            },
            ]
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
