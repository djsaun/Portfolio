import React from 'react';
import moment from 'moment';
import styles from '../styles/repo.module.css';
import Button from './Button';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/fontawesome-free-solid'

const Repo = (props) => {

  return (
    <div className={styles.repo}>
      <h3 className={styles.header}>{props.details.name}</h3>
      <p className={styles.updated}>Last updated: {moment(props.details.updatedAt).fromNow()}</p>
      <p>{props.details.shortDescriptionHTML}</p>
      <div className={styles.details}>
        <div className={styles.languages}>
          <p>Primary Languages Used:</p>
          
          {props.details.languages.edges.map((language, i) => {
            
            const bottomBorder = {
              borderBottom: `2px solid ${language.node.color}`
            }
            
            return (
              <p className={styles.language} key={i}><span style={bottomBorder}>{language.node.name}</span></p>
            )
          })}
        </div>
        <div className="metadata">
          <div className="watchers">
            <FontAwesomeIcon icon={faStar} />
            Watchers: {props.details.watchers.totalCount}
          </div>
          <div className="stars">
            Stars: {props.details.stargazers.totalCount}
          </div>
          <div className="issues">
            Issues: {props.details.issues.totalCount}
          </div>
        </div>
      </div>
      <Button link={props.details.url} text="View" target="_blank" />
    </div>
  )
}

export default Repo;
