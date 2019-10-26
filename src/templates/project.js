import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Button from '../components/Button';
import styles from '../styles/project.module.css';

class ProjectTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <div className={styles.buttons}>
          {post.frontmatter.repo ? (
            <Button
              text="View Repo"
              link={post.frontmatter.repo}
              target="_blank"
            />
          ) : (
            ''
          )}
          <Button
            text="View Project"
            link={post.frontmatter.link}
            target="_blank"
          />
        </div>
      </div>
    );
  }
}

export default ProjectTemplate;

export const projectQuery = graphql`
  query ProjectByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        link
        repo
      }
    }
  }
`;
