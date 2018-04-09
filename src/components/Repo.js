import React from 'react';
import moment from 'moment';
import styles from '../styles/repo.module.css';
import Button from './Button';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/fontawesome-free-regular';

const Repo = (props) => {

  return (
    <div className={styles.repo}>
      <h3 className={styles.header}>{props.details.name}</h3>
      <p className={styles.updated}>Last updated: {moment(props.details.updatedAt).fromNow()}</p>
      <p className={styles.description}>{props.details.shortDescriptionHTML}</p>
      <div className={styles.details}>
        {/* <div className={styles.languages}>          
          {props.details.languages.edges.map((language, i) => {
            
            const bottomBorder = {
              borderBottom: `2px solid ${language.node.color}`
            }
            
            return (
              <p className={styles.language} key={i}><span style={bottomBorder}>{language.node.name}</span></p>
            )
          })}
        </div> */}
        <div className={styles.metadata}>
          <div className="watchers">
            <FontAwesomeIcon  /> 
            <span>{props.details.watchers.totalCount}</span>
          </div>
          <div className="stars">
            <FontAwesomeIcon  /> 
            <span>{props.details.stargazers.totalCount}</span>
          </div>
          <div className="issues">
            <FontAwesomeIcon/> 
            <span>{props.details.issues.totalCount}</span>
          </div>
        </div>
        <div className={styles.button}>
          <Button link={props.details.url} text="View" target="_blank" />
        </div>
      </div>
    </div>
  )
}

export default Repo;
