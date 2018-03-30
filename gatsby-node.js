const _ = require("lodash")
const Promise = require("bluebird")
const path = require("path")
const select = require(`unist-util-select`)
const fs = require(`fs-extra`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const pages = []
    const blogPost = path.resolve("./src/templates/blog-post.js");
    const project = path.resolve("./src/templates/project.js");
    resolve(
      graphql(
        `
      {
        posts: allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
          edges {
            node {
              fileAbsolutePath
              frontmatter {
                path
                title
              }
            }
          }
        }
      }
    `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create posts and projects pages.
        _.each(result.data.posts.edges, edge => {
          // If file's absolute path contains 'posts' then use the blogPost template. Otherwise, use the projects template
          const postRegex = RegExp('\/(posts)\/.*\.md$');
          const template = (postRegex.test(edge.node.fileAbsolutePath) ? blogPost : project);
          createPage({
            path: edge.node.frontmatter.path,
            component: template,
            context: {
              path: edge.node.frontmatter.path,
            },
          })
        })
      })
    )
  })
}
