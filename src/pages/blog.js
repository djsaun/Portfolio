import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import BlogPreview from '../components/BlogPreview'

class Blog extends React.Component{
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    
    return(
      <div>
        <h1>Blog</h1>
        {posts.map((post, i) => {
          if (post.node.path !== '/404/') {
            const title = get(post, 'node.frontmatter.title') || post.node.path
            return (
              <BlogPreview key={i} content={post.node} />
            )
          }
        })}
      </div>
    )
  }
}

export default Blog;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date]},
      filter: {fileAbsolutePath: {regex: "/(posts)/.*\\.md$/"}}
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
