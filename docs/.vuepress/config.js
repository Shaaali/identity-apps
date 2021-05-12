const {config} = require("vuepress-theme-hope");

module.exports = config({
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: "Docs",
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: " ",
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

    base: "/asgardeo-docs/",

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */

    themeConfig: {
        displayAllHeaders: true,
        repo: '',
        editLinks: true,
        docsDir: '',
        editLinkText: 'Edit this page on Github',
        logo: '/assets/img/asgardeo-logo.png',
        search: true,
        Navbar: true,
        blog: false,
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
            text: 'Quick Starts',
            link: '/quickstarts/',
          },
          {
            text: 'APIs',
            link: '/apis/',
          },
          {
            text: 'SDKs',
            link: '/sdks/'
          },
          {
            text: 'Concepts',
            link: '/concepts/'
          }
        ],
        sidebar: {
            '/guides/' : [
            {
                title: 'Get started',
                children: [
                '',
                ['get-started/create-tenant.md', 'Create tenant']
              ]
            },
            {
                title: 'Manage applications',
                children: [
                ['applications/', 'Overview'],
                {
                    title: 'Single page application',
                    path: '/guides/applications/spa/',
                    prefix: '/guides/applications/spa/',
                    collapsable: false,
                    sidebarDepth: 2,
                    children: [
                        ['spa-react', 'React SDK for OpenID Connect'],
                        ['spa-angular', 'Angular SDK for OpenID Connect'],
                        ['spa-javascript', 'Javascript SDK for OpenID Connect'],
                        ['spa-configure-general', 'Direct OpenID Connect integration']
                    ]
                },
                {
                    title: 'Web application',
                    path: '/guides/applications/web-app/',
                    prefix: '/guides/applications/web-app/',
                    collapsable: false,
                    sidebarDepth: 2,
                    children: [
                        ['web-app-oidc-java-ee', 'Asgardeo OIDC Agent for Java EE'],
                        ['web-app-oidc-general.md', 'Direct OpenID Connect integration']
                    ]
                },
                {
                    title: 'Application settings',
                    prefix: '/guides/applications/application-settings/',
                    collapsable: false,
                    children: [
                        ['configure-general.md', 'Configure general details'],
                        ['configure-protocol.md', 'Define authorization protocol'],
                        ['configure-user-attribute.md', 'Select user attributes'],
                        ['configure-sign-on.md', 'Configure sign-on method'],
                        ['configure-advanced.md', 'Configure advanced settings']
                    ]
                },
              ]
            },
            {
                title: 'Add login',
                children: [
                ['social-login/overview.md', 'Overview'],
                {
                    title: 'Social login',
                    children: [
                        ['/guides/social-login/google-qsg.md', 'Enable Google authentication']
                    ]
                },
                {
                    title: 'Enterprise login',
                    children: [
                        ['/guides/social-login/google-qsg.md', 'Enable OIDC authentication']
                    ]
                },
              ]
            },
            {
                title: 'Add strong authentication',
                children: [
                ['strong-authentication/overview.md', 'Overview'],
                {
                    title: 'Multi factor authentication',
                    children: [
                        ['/guides/strong-authentication/mfa-qsg.md', 'Configure multi factor authentication']
                    ]
                },
                {
                    title: 'Conditional authentication',
                    children: [
                        ['/guides/strong-authentication/conditional-auth/configure-conditional-auth.md', 'Configure conditional authentication'],
                        ['/guides/strong-authentication/conditional-auth/conditional-auth-js-api-reference.md', 'JS API Reference']
                    ]
                },
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
            ],
            '/quickstarts/' : [
                '']
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
