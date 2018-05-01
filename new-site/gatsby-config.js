module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-remove-trailing-slashes',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'jgaehring.com',
        short_name: 'jgaehring',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'src/assets/favicon.png'
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/blog`,
        name: 'blog'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: []
      }
    },
  ],
};
