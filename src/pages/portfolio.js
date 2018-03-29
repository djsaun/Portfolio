import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Project from '../components/Project';
import styles from '../styles/portfolio.module.css';

class Portfolio extends React.Component {
  render() {
    const projects = get(this, 'props.data.projects.edges')

    return (
      <div>
        <h1>Portfolio</h1>
        <div className={styles.portfolio}>
          {projects.map((project, i) => {
            if (project.node.path !== '/404/') {
              return (
                <Project key={i} project={project.node} />
              )
            }
          })}
        </div>
      </div>
    )
  }
}

export default Portfolio;

export const projectQuery = graphql`
  query PorfolioQuery {
    projects: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {regex: "/(projects)/.*\\.md$/"}
      }
      sort: { order: DESC, fields: [frontmatter___date]},
    ) {
      edges {
        node {
          frontmatter {
          title
          path
          link
          date(formatString: "DD MMMM, YYYY")
          featured
          excerpt
          technologies
          repo
          type
          }
        }
      }
    }
  }
`
