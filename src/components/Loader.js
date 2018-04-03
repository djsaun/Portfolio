import React from 'react';
import styles from '../styles/loader.module.css';
class Loader extends React.Component {
  render() {
    return(
      <div className={styles.loaderContainer}>
        <div className={styles.loader}></div>
      </div>
    )
  }
}

export default Loader;
