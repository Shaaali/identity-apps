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
        algoliaType: "full",
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
                ['', 'Introduction'],
                ['get-started/create-organization.md', 'Get Started'],
                {
                    title: 'Integrate Apps',
                    path: 'applications/',
                    sidebarDepth: 2,
                    children: [
                    {
                        title: 'Register Apps',
                        path: 'applications/spa',
                        prefix: 'applications/',
                        sidebarDepth: 2,
                        children: [
                            ['spa/register-single-page-app.md', 'Register an SPA'],
                            ['web-app/register-oidc-web-app.md', 'Register web app with OIDC'],
                            ['web-app/register-saml-web-app.md', 'Register web app with SAML'],
                        ]
                    },
                    {
                        title: 'Add Login to Apps',
                        path: 'applications/web-app',
                        prefix: 'applications/',
                        sidebarDepth: 2,
                        children: [
                            ['spa/add-login-to-single-page-app.md', 'Add login to an SPA'],
                            ['web-app/add-login-to-web-app.md', 'Add login to a web app'],
                            {
                                title: 'Implement OIDC Flows',
                                path: 'oidc',
                                prefix: 'oidc/',
                                children: [
                                    ['discover-oidc-configs.md', 'Discover OIDC endpoints'],
                                    ['implement-auth-code.md', 'Implement Authorization code flow'],
                                    ['implement-auth-code-with-pkce.md', 'Implement Authorization Code flow with PKCE'],
                                    ['validate-id-tokens.md', 'Validate ID tokens'],
                                    ['request-user-info.md', 'Request user information'],
                                    ['introspect-tokens.md', 'Validate tokens'],
                                    ['revoke-tokens.md', 'Revoke tokens'],
                                    ['add-logout.md', 'Implement logout'],
                                ]
                            },
                            {
                                title: 'Implement SAML Flows',
                                sidebarDepth: 2,
                                children: [
                                    ['saml/discover-saml-configs.md', 'Discover SAML endpoints and settings'],
                                ]
                            },
                        ]
                    },
                    {
                        title: 'Enable User Attributes',
                        prefix: 'applications/user-attributes/',
                        path: 'applications/user-attributes/',
                        sidebarDepth: 2,
                        children: [
                            ['enable-attributes-for-oidc-app.md', 'Enable attributes for OIDC apps'],
                            ['enable-attributes-for-saml-app.md', 'Enable attributes for SAML apps'],
                        ]
                    },
                    {
                        title: 'Add Social Login',
                        prefix: 'connections/social-login/',
                        path: 'connections/social-login/',
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
                        path: 'connections/enterprise-login/',
                        sidebarDepth: 2,
                        children: [
                            ['add-oidc-idp-login.md', 'Add login with OIDC'],
                            ['add-saml-idp-login.md', 'Add login with SAML'],
                        ]
                    },
                    {
                        title: 'Add Multi-Factor Authentication',
                        prefix: 'connections/mfa/',
                        path: 'connections/mfa',
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
                            ['group-based-template.md', 'Add group-based authentication'],
                            ['ip-based-template.md', 'Add IP-based authentication'],
                            ['new-device-based-template.md', 'Add device-based authentication'],
                            ['user-age-based-template.md', 'Add user age-based authentication'],
                            ['write-your-first-script.md', 'Write a custom authentication script'],
                        ]
                    },
                    ]
                },
                {
                    title: 'Manage Users',
                    prefix: 'users/',
                    path: 'users/',
                    sidebarDepth: 2,
                    children: [
                        ['owner.md', 'Manage owner'],
                        ['manage-collaborators.md', 'Manage collaborators'],
                        ['manage-customers.md', 'Manage customers'],
                        ['manage-user-profiles.md', 'Manage user profiles'],
                        ['manage-sessions.md', 'Manage active sessions'],
                        ['manage-groups', 'Manage groups'],
                        {
                            title: 'User Self-Service',
                            prefix: 'self-service/',
                            path: 'self-service/',
                            children: [
                                ['recover-password.md', 'Recover your password'],
                                {
                                    title: 'Customer',
                                    prefix: 'customer/',
                                    path: 'customer/',
                                    children: [
                                        ['my-account.md', 'My Account'],
                                        ['self-register.md', 'Self-register'],
                                    ]
                                },
                                {
                                    title: 'Owners and collaborators',
                                    prefix: 'owners/',
                                    path: 'owners/',
                                    children: [
                                        ['my-account.md', 'My Account'],
                                    ]
                                },
                            ]
                        },
                    ]
                },
                {
                    title: 'Manage Organization Settings',
                    prefix: 'organization-settings/',
                    path: 'organization-settings/',
                    sidebarDepth: 2,
                    children: [
                        ['organizations.md', 'Manage organizations'],
                        {
                            title: 'Attributes and Attribute Mappings',
                            path: 'attributes/',
                            children: [
                                ['attributes/manage-attributes', 'User attributes'],
                                ['attributes/manage-oidc-attribute-mappings', 'OIDC attribute mappings'],
                                ['attributes/manage-scim2-attribute-mappings', 'SCIM2 attribute mappings'],
                            ]
                        },
                        {
                            title: 'Account Recovery',
                            sidebarDepth: 2,
                            children: [
                                ['password-recovery', 'Configure password recovery'],
                            ]
                        },
                        ['configure-self-registration', 'Self-registration'],
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
            ],
            '/quickstarts/' : [
            {
                title: 'SPA',
                children: [
                    ['/quickstarts/qsg-spa-angular.md', 'Angular'],
                    ['/quickstarts/qsg-spa-javascript.md', 'Javascript'],
                    ['/quickstarts/qsg-spa-react.md', 'React'],
                ]
            },
            {
                title: 'Web App',
                children: [
                    ['/quickstarts/qsg-oidc-webapp-java-ee', 'OIDC Java EE'],
                    ['/quickstarts/qsg-saml-webapp-java-ee', 'SAML Java EE'],
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
