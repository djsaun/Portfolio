import React from 'react';
import styles from '../styles/menu.module.css';

class MobileMenu extends React.Component {
  render() {
    console.log(this.props.menuOpen)
    const menuStatus = (this.props.menuOpen === false) ? styles.menuClosed : styles.menuOpen;

    return(
      <div className={this.props.menuOpen ? styles.menuClosed : styles.menuOpen} onClick={(e) => this.props.openMobileMenu(e)}>
        <div className='icon'>
          <div className={styles.topBar}></div>
          <div className={styles.middleBar}></div>
          <div className={styles.bottomBar}></div>
        </div>
      </div>
    )
  }
}

export default MobileMenu;
