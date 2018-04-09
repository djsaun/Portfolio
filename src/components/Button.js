import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/button.module.css';

const Button = (props) => {
  return(
    <div>
    {(props.type !== 'submit') ?
      <a href={props.link} target={(!props.target) ? '_self' : props.target } className={styles.button}>{props.text}</a> :
      <input type={props.type} className={styles.button} value={props.text} />
    }
    </div>

  )
}

Button.propTypes = {
  link: React.PropTypes.string,
  text: React.PropTypes.string,
  target: React.PropTypes.string
}

export default Button;
