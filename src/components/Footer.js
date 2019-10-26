import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/fontawesome-free-brands';

import styles from '../styles/footer.module.css';

const Footer = props => (
    <footer>
      <div className={styles.container}>
        <div className="social">
          <a href="https://github.com/djsaun" target="_blank"><FontAwesomeIcon icon={faGithub} className={styles.icon} /></a>
          <a href="https://www.linkedin.com/in/davidjsaunders/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} /></a>
        </div>
      </div>
    </footer>
  );

export default Footer;
