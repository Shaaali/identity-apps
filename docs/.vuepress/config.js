const {config} = require("vuepress-theme-hope");
const {description} = require('../../package.json');

module.exports = {
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
        repo: '',
        editLinks: true,
        docsDir: '',
        editLinkText: 'Edit this page on Github',
        lastUpdated: false,
        logo: '/assets/img/asgardeo-logo.png',
        search: true,
        Navbar: true,
        blog: false,
        sidebar: [
            ['/get-started/asgardeo-overview', 'Home'],
            ['/get-started/get-started.md', 'Get started'],
            // {
            //     title: 'Quickstart',
            //     children: [
            //         ['/guides/applications/spa-sample-app.md', 'Integrate a sample SPA'],
            //         ['/guides/social-login/google-qsg.md', 'Login with Google'],
            //         ['/guides/strong-authentication/mfa-qsg.md', 'Enable two factor authentication']
            //     ]
            // },
            {
                title: 'Guides',
                children: [
                    {
                        title: 'Secure applications',
                        children: [
                            ['/guides/applications/app-overview.md', 'Introduction'],
                            {
                                title: 'Application types',
                                children: [
                                    ['/guides/applications/spa/spa-overview.md', 'Single page application'],
                                    ['/guides/applications/web-app/web-app-overview.md', 'Web application']
                                ]
                            },
                            ['/guides/applications/configuration/app-config-overview.md', 'Application configurations '],
                        ]
                    },
                    ['/guides/user-management/overview.md', 'Manage users'],
                    ['/guides/strong-authentication/overview.md', 'Add strong authentication'],
                    ['/guides/social-login/overview.md', 'Add federated authentication']
                ]
            },

            {
                title: 'APIs',
                collapsable: true, // optional, defaults to true
                children: [
                    ['/apis/apis-overview', 'Overview of APIs'],
                ]
            },
            {
                title: 'SDKs',
                collapsable: true, // optional, defaults to true
                children: [
                    ['/sdks/sdk-overview', 'Overview of APIs'],
                ]
            },
            {
                title: 'Concepts',
                collapsable: true, // optional, defaults to true
                children: [
                    {
                        title: 'Users, groups, and roles',
                        collapsable: true, // optional, defaults to true
                        children: [
                            ['/concepts/user-mgt/users-groups-roles', 'Users, groups, and roles'],
                            ['/concepts/user-mgt/user-types', 'Types of user accounts'],
                        ]
                    },
                    {
                        title: 'Authentication',
                        collapsable: true, // optional, defaults to true
                        children: [
                            ['/concepts/authentication/authentication-protocols', 'Overview of authentication protocols'],
                            ['/concepts/authentication/saml', 'SAML'],
                            ['/concepts/authentication/oidc', 'OpenID Connect'],
                        ]
                    },
                    {
                        title: 'Authorization',
                        collapsable: true, // optional, defaults to true
                        children: [
                            ['/concepts/authentication/authentication-protocols', 'Overview of authentication protocols'],
                            ['/concepts/authentication/oidc', 'OpenID Connect'],
                        ]
                    },
                ]
            },

            {
                title: 'Guides[deprecated]',
                collapsable: true, // optional, defaults to true
                sidebarDepth: 3,
                children: [
                    {
                        title: 'Set up a tenant',
                        collapsable: true, // optional, defaults to true
                        children: [
                            ['/guides/tenant/create-tenant', 'Create a tenant'],
                            {
                                title: 'Onboard users',
                                collapsable: true,
                                children: [
                                    ['/guides/tenant/onboard-users.md', 'Overview'],
                                    ['/guides/tenant/invite-user-to-set-password.md', 'Invite a user to set their password'],
                                    ['/guides/tenant/onboard-user-with-password.md', 'Onboard a user with a password'],
                                    ['/guides/tenant/invite-guest-user.md', 'Invite a guest user']
                                ]
                            },
                            ['/guides/tenant/create-role', 'Create a role'],
                        ],
                    },
                    {
                        title: 'Manage applications[option1]',
                        collapsable: true, // optional, defaults to true
                        children: [
                            {
                                title: 'Single page applications',
                                children: [
                                    ['/guides/applications/spa-angular', 'Angular'],
                                    ['/guides/applications/spa-react', 'React'],
                                    ['/guides/applications/spa-javascript', 'Javascript'],
                                    ['/guides/applications/configure-spa', 'Configurations']
                                ]
                            },
                        ]
                    },
                    {
                        title: 'Add stronger authentication',
                        collapsable: true, // optional, defaults to true
                        children: [
                            ['/concepts/authentication/authentication-protocols', 'Overview of authentication protocols'],
                            ['/concepts/authentication/oidc', 'OpenID Connect'],
                        ]
                    },
                ]
            },
        ],
        mdEnhance: {
            align: true,
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
}
