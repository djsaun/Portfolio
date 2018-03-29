import React from 'react';
import styles from '../styles/menu.module.css';

class MobileMenu extends React.Component {
  render() {
    return(
      <div className={styles.mobileIcon} onClick={(e) => this.props.openMobileMenu(e)}>
        <div className='icon'>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    )
  }
}

export default MobileMenu;
