import React from 'react';
import Link from 'gatsby-link';
import profilePic from '../images/david_saunders.jpeg';
import styles from '../styles/bio.module.css';

const Bio = (props) => {
  return (
    <div className={styles.bioSection}>
      <img
        className={styles.profileImg}
        src={profilePic}
        alt={`David Saunders`}
      />
      <div className={styles.bioDetails}>
        <h3>Hey! I'm David Saunders.</h3>
        <p>I'm a Front End Web Developer at <a href="https://monkee-boy.com" target="_blank">Monkee-Boy Web Design</a> in Austin, TX.</p>
        <p>Want to start working together? <Link to="/contact">Let me know the details of your project</Link> and I'll be in touch soon.</p>
      </div>
    </div>
  )
}

export default Bio
