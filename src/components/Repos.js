import React from 'react';
import Repo from './Repo';
import styles from '../styles/repos.module.css'
import Activity from './Activity';

class Repos extends React.Component {

  render() {
    const { repos } = this.props.repos;
    const { events } = this.props.repos;
    
    return(
      <div className={styles.repos}>
        <div className="recent">
          <div className={styles.header}>
            <h2 className={styles.sectionHeader}>Recent Projects</h2>
          </div>

          {repos && Object.keys(repos).map((key, i) => {
          return (
            <Repo key={i} details={repos[key].node} />
          )
          })}
        </div>
        <div className="activity-feed">
          <div className={styles.header}>
            <h2 className={styles.sectionHeader}>Recent Activity</h2>
          </div>
           <Activity events={events} />
        </div>
      </div>
    )
  }
}

export default Repos;
