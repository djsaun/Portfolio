import React from 'react';
const Recaptcha = require('react-recaptcha');
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faUserAlt, faPhone, faEnvelope, faMicrophone,  } from '@fortawesome/fontawesome-pro-regular';
import styles from '../styles/contactForm.module.css';

class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);    
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div className={styles.field}>
          <FontAwesomeIcon className={styles.icon} icon={faUserAlt} />
          <label htmlFor="name">Name*</label>
          <input type="text" name="name" id="name" onChange={this.handleChange} required />
        </div>

        <div className={styles.field}>
          <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
          <label htmlFor="email">Email*</label>
          <input type="email" name="email" id="email" onChange={this.handleChange} required />
        </div>

        <div className={styles.field}>
          <FontAwesomeIcon className={styles.icon} icon={faPhone} />
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" name="phone" id="phone" onChange={this.handleChange} />
        </div>

        <div className={styles.field}>
          <FontAwesomeIcon className={styles.icon} icon={faMicrophone} />
          <label htmlFor="message">Message*</label>
          <textarea name="message" id="message" onChange={this.handleChange}></textarea>
        </div>

        <Recaptcha
          sitekey={process.env.GATSBY_CAPTCHA_KEY}
        />

        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default ContactForm;
