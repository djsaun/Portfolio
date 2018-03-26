import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedinIn } from '@fortawesome/fontawesome-free-brands';

import styles from '../styles/footer.module.css';

const Footer = (props) => {
  return(
    <footer>
      <div className={styles.container}>
        <div className="social">
          <a href="https://github.com/djsaun" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.linkedin.com/in/davidjsaunders/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          <a href="https://twitter.com/djsaun01" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
