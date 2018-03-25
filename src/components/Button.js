import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return(
    <a href={props.link} target={(!props.target) ? '_self' : props.target }>{props.text}</a>
  )
}

Button.propTypes = {
  link: React.PropTypes.string,
  text: React.PropTypes.string,
  target: React.PropTypes.string
}

export default Button;