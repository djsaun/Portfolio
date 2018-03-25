import React from 'react';
import moment from 'moment';
import styles from '../styles/repo.module.css'

const Repo = (props) => {
  return (
    <div className={styles.repo}>
      <h3>{props.details.name}</h3>
      <p>Last updated: {moment(props.details.updatedAt).fromNow()}</p>
      <p>{props.details.shortDescriptionHTML}</p>
      <a href={props.details.url} target="_blank">View</a>
    </div>
  )
}

export default Repo;
