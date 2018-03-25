import React from 'react';
import Repo from './Repo';
import styles from '../styles/repos.module.css'

class Repos extends React.Component {
  
  render() {
    const { repos } = this.props.repos;
    
    return(
      <div className={styles.repos}>
        <div className="recent">
          <h2 className={styles.header}>Projects</h2>

          {repos && Object.keys(repos).map((key, i) => {
          return (
            <Repo key={i} details={repos[key].node} />
          )
          })}
        </div>
        <div className="activity-feed">
          <h2 className={styles.header}>Recent Activity</h2>
        </div>
      </div>
    )
  }
}

export default Repos;
