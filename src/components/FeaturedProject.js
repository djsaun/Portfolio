import React from 'react';
import Button from './Button';
import styles from '../styles/featuredProject.module.css';

const FeaturedProject = (props) => {
  const project = props.project.frontmatter;
  
  return(
    <div className={styles.project}>
      <h3 className={styles.title}>{project.title}</h3>
      <div>
        {project.technologies.map((tech, i) => {
          return (
            <div key={i} className={styles.tech}>{tech}</div>
          )
        })}
      </div>
      <p>{project.excerpt}</p>
      <div className={styles.buttons}>
        <Button text="Learn More" link={project.path} />
        <Button text="View Project" link={project.link} target="_blank" />
      </div>
    </div>
  )
}

export default FeaturedProject;
