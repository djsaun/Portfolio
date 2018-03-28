import React from 'react';
import Link from 'gatsby-link';
import moment from 'moment';
import styles from '../styles/BlogPreview.module.css';

const BlogPreview = (props) => {
  return(
    <div key={props.content.frontmatter.path}>
      <h3 className={styles.title}>
        <Link to={props.content.frontmatter.path} >
          {props.content.frontmatter.title}
        </Link>
      </h3>
      <p className={styles.date}>{moment(props.content.frontmatter.date).format('MMM DD, YYYY')}</p>
      <p dangerouslySetInnerHTML={{ __html: props.content.excerpt }} />
    </div>
  )
}

export default BlogPreview;
