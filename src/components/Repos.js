import React from 'react';
import Repo from './Repo';
import styles from '../styles/repos.module.css';
import Activity from './Activity';

class Repos extends React.Component {

  render() {
    const { repos } = this.props.repos;
    const { events } = this.props.repos;
    
    return(
      <div>
        <div className={styles.header}>
          <h2 className={styles.sectionHeader}>Recent Activity</h2>
        </div>
        <div className={styles.repos}>
          <div className="activity-feed">
             <Activity events={events} />
          </div>
          
          <div className="recent">
            {repos && Object.keys(repos).map((key, i) => {
            return (
              <Repo key={i} details={repos[key].node} />
            )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Repos;
