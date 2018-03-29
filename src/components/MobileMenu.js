import React from 'react';
import Link from 'gatsby-link';
import styles from '../styles/menu.module.css';

class MobileMenu extends React.Component {
  render() {
    return(
      <div className={this.props.menuOpen ? styles.mobileMenuOpen : styles.mobileMenuClosed}>
        <div>
          <Link className={styles.menuLink} activeStyle={{ color: '#7A9B76'}} to="/about">About</Link>
          <Link className={styles.menuLink} activeStyle={{ color: '#7A9B76'}} to="/portfolio">Portfolio</Link>
          <Link className={styles.menuLink} activeStyle={{ color: '#7A9B76'}} to="/blog">Blog</Link>
          <Link className={styles.menuLink} activeStyle={{ color: '#7A9B76'}} to="/contact">Contact</Link>
        </div>
      </div>
    )
  }
}

export default MobileMenu;
