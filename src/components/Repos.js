import React from 'react';
import Repo from './Repo';
import styles from '../styles/repos.module.css'

class Repos extends React.Component {
  
  render() {
    const { repos } = this.props.repos;
    
    return(
      <div className={styles.repos}>
        <div className="recent">
          {repos && Object.keys(repos).map((key, i) => {
          return (
            <Repo key={i} details={repos[key].node} />
          )
          })}
        </div>
        <div className="activity-feed">
          activity
        </div>
      </div>
    )
  }
}

export default Repos;
