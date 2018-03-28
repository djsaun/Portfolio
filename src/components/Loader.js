import React from 'react';
import { RingLoader } from 'halogen';
import styles from '../styles/loader.module.css';
class Loader extends React.Component {
  render() {
    return(
      <div className={styles.loaderContainer}>
        <RingLoader color="#7A9B76" size="80px"/>
      </div>
    )
  }
}

export default Loader;
