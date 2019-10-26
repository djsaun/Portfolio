import React from 'react';
import Link from 'gatsby-link';
import profilePic from '../images/david_saunders.jpeg';
import styles from '../styles/bio.module.css';

const Bio = props => (
  <div className={styles.bioSection}>
    <img className={styles.profileImg} src={profilePic} alt="David Saunders" />
    <div className={styles.bioDetails}>
      <h3>Hey! I'm David Saunders.</h3>
      <p>
        I live in New Haven, CT, &nbsp;and I'm a Front End Developer at{' '}
        <a href="https://prosek.com" target="_blank">
          Prosek Partners
        </a>
        .
      </p>
      <p>
        Want to start working together?{' '}
        <Link to="/contact">Let me know the details of your project</Link> and
        I'll be in touch soon.
      </p>
    </div>
  </div>
);

export default Bio;
