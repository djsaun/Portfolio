import React from 'react';
import styles from '../styles/menu.module.css';

class MobileMenuIcon extends React.Component {
  render() {
    return(
      <div className={this.props.menuOpen ? styles.menuIconOpen : styles.menuIconClosed} onClick={(e) => this.props.openMobileMenu(e)}>
        <div className='icon'>
          <div className={styles.topBar}></div>
          <div className={styles.middleBar}></div>
          <div className={styles.bottomBar}></div>
        </div>
      </div>
    )
  }
}

export default MobileMenuIcon;
