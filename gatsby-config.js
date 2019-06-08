/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

console.log(process.env.CONTENTFUL_SPACE_ID)
console.log(process.env.CONTENTFUL_ACCESS_TOKEN)
console.log(process.env.NODE_ENV)

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Luiz Carneiro",
    author: "Luiz Carneiro"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linksImagesToOriginal: false
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
  ]
}
