module.exports = {
  plugins: [
    {
      resolve: 'smooth-doc',
      options: {
        name: 'Loadable Components',
        slug: 'loadable-components',
        author: 'Greg Bergé',
        description: 'The recommended Code Splitting library for React.',
        siteUrl: 'https://loadable-components.com',
        github: 'https://github.com/gregberge/loadable-components',
        menu: ['Introduction', 'Guides', 'API'],
        nav: [{ title: 'Docs', url: '/docs/' }],
        codeFundProperty: 268,
        googleAnalytics: 'UA-154156493-1',
        algoliaDocSearch: {
          apiKey: 'e6a731577a7b94aefdbb1fb7dcc71e68',
          indexName: 'smooth-code-loadable-components',
        },
      },
    },
    {
      resolve: '@bundle-analyzer/gatsby-plugin',
      options: {
        token: '385aa427a43b4e840d763a07f672131a57decf45',
      },
    },
  ],
}
