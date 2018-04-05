const autoprefixer = require('autoprefixer');
const postcssNested = require('postcss-nested');

module.exports = {
  siteMetadata: {
    title: "David Saunders' Portfolio",
    author: "David Saunders"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              showCaptions: true
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-116988542-1`,
        head: true
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      }
    },
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [
          autoprefixer({
            browsers: ['last 2 versions']
          }),
          postcssNested
        ],
        precision: 8
      }
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*": [
            "Access-Control-Allow-Credentials:true",
            "Access-Control-Allow-Headers: authorization, accept, content-type, x-auth-token",
            "Access-Control-Allow-Methods:GET, HEAD, POST, PUT, DELETE, TRACE, OPTIONS",
            "Access-Control-Allow-Origin:*"
          ],
        },
      }
    },
  ],
}
