import React from 'react';
import Link from 'gatsby-link';
import styles from "../styles/header.module.css";
import MobileMenuIcon from './MobileMenuIcon';

class Header extends React.Component{
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div>
            <Link className={styles.logo} to="/">
              <div className={styles.name}>D
                <div className={styles.hiddenName}>
                  <span className={styles.hiddenNameSpan}>avid</span>
                </div>
              </div>
              <div className={styles.name}>S
                <div className={styles.hiddenName}>
                  <span className={styles.hiddenNameSpan}>aunders</span>
                </div>
              </div>
            </Link>
          </div>
          <MobileMenuIcon openMobileMenu={this.props.openMobileMenu} menuOpen={this.props.menuOpen} />
          <div className={styles.menu}>
            <Link className={styles.menuLink} activeStyle={{ color: '#7A9B76'}} to="/about">About</Link>
            <Link className={styles.menuLink} activeStyle={{ color: '#7A9B76'}} to="/portfolio">Portfolio</Link>
            <Link className={styles.menuLink} activeStyle={{ color: '#7A9B76'}} to="/blog">Blog</Link>
            <Link className={styles.menuLink} activeStyle={{ color: '#7A9B76'}} to="/contact">Contact</Link>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
