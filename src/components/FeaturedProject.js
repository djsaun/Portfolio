import React from 'react';
import Link from 'gatsby-link';
import Button from './Button';
import styles from '../styles/featuredProject.module.css';

const FeaturedProject = (props) => {
  const project = props.project.frontmatter;
  
  return(
    <div>
      <h2>Featured Project</h2>

      <div className={styles.project}>
        <div className={styles.header}>
          <h3 className={styles.title}>{project.title}</h3>
          <div className={styles.techs}>
            {project.technologies.map((tech, i) => {
              return (
                <div key={i} className={styles.tech}>{tech}</div>
              )
            })}
          </div>
        </div>
        <p>{project.excerpt}</p>
        <div className={styles.buttons}>
          <Link className={styles.button} to={project.path}>Learn More</Link>
          <Button text="View Project" link={project.link} target="_blank" />
        </div>
      </div>
    </div>
  )
}

export default FeaturedProject;
