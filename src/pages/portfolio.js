import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

class Portfolio extends React.Component {
  render() {
    const posts = get(this, 'props.data.personal.edges')

    return (
      <div>
        {posts.map(post => {
          if (post.node.path !== '/404/') {
            const title = get(post, 'node.frontmatter.title') || post.node.path
            return (
              <div key={post.node.frontmatter.path}>
                <h3>
                  <Link to={post.node.frontmatter.path} >
                    {post.node.frontmatter.title}
                  </Link>
                </h3>
                <small>{post.node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
              </div>
            )
          }
        })}
      </div>
    )
  }
}

export default Portfolio;

export const projectQuery = graphql`
  query PorfolioQuery {
    personal: allMarkdownRemark(
      filter: {
        frontmatter: {
          type: {
            eq: "Personal"
          }
        }
        fileAbsolutePath: {regex: "/(projects)/.*\\.md$/"}
      }
      sort: { order: DESC, fields: [frontmatter___date]},
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
    professional: allMarkdownRemark(
      filter: {
        frontmatter: {
          type: {
            eq: "Professional"
          }
        }
        fileAbsolutePath: {regex: "/(projects)/.*\\.md$/"}
      }
      sort: { order: DESC, fields: [frontmatter___date]},
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
