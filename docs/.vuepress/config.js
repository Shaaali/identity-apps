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

    // base: "/asgardeo-docs/",

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
        pageInfo: false,
        nav: [
          {
            text: "Guides",
            link: "/guides/",
          },
          {
            text: 'Quick Starts',
            link: '/quickstart/',
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
                    title: 'Application types',
                    children: [
                        ['/guides/applications/spa-overview.md', 'Single page application'],
                        ['/guides/applications/web-app-overview.md', 'Web application']
                    ]
                },  
                {
                    title: 'Application settings',
                    children: [
                        ['/guides/applications/configure-general.md', 'Configure general details'],
                        ['/guides/applications/configure-protocol.md', 'Define authorization protocol'],
                        ['/guides/applications/configure-user-attribute.md', 'Select user attributes'],
                        ['/guides/applications/configure-sign-on.md', 'Configure sign-on method'],
                        ['/guides/applications/configure-advanced.md', 'Configure advanced settings']

                    ]
                },                
              ]
            },
            {
                title: 'Add login',
                children: [
                ['social-login/', 'Overview'],
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
                ['strong-authentication/', 'Overview'],
                {
                    title: 'Multi factor authentication',
                    children: [
                        ['/guides/strong-authentication/mfa-qsg.md', 'Configure multi factor authentication']
                    ]
                },  
                {
                    title: 'Adaptive authentication',
                    children: [
                        ['/guides/strong-authentication/mfa-qsg.md', 'Configure adaptive authentication']
                    ]
                },                
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
