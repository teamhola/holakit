module.exports = {
  title: 'Holakit',
  description: 'Another set of components and utils for building websites and apps.',
  themeConfig: {
    sidebar: {
      '/guides/': [
        'migrating-from-0-x'
      ],
      '/components/': require('../componentSidebar.js')
    },
    nav: [
      { text: 'Guides', link: '/guides/' },
      { text: 'Components', link: '/components/' }
    ]
  }
}
