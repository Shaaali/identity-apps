const { config } = require("vuepress-theme-hope");
const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Asgardeo Learning Portal',
  base: '/Asgardeo-docs/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

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
    sidebar: [
      ['/getting-started/asgardeo-overview','Home'],
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
          title: 'Guides',
          collapsable: true, // optional, defaults to true
          children: [
           {
            title: 'Set up a tenant',
            collapsable: true, // optional, defaults to true
            sidebarDepth: 3,
            children: [
              ['/concepts/user-mgt/users-groups-roles', 'Create a tenant'],
              ['/concepts/user-mgt/user-types', 'Onboard users'],
            ]
           },
           {
            title: 'Manage applications',
            collapsable: true, // optional, defaults to true
            children: [
              ['/concepts/authentication/authentication-protocols', 'Overview of authentication protocols'],
              ['/concepts/authentication/saml', 'SAML'],
              ['/concepts/authentication/oidc', 'OpenID Connect'],
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
      ['','APIs'],
      ['','Customizations'],
      ['','Community'],
      ['','FAQ']
   ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
