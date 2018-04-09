import React from 'react';
import axios from 'axios';
import { Formik } from 'formik';
const Recaptcha = require('react-recaptcha');
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/fontawesome-free-regular';
import { faMicrophone, faPhone, faDesktop } from '@fortawesome/fontawesome-free-solid';
import Button from '../components/Button';
import styles from '../styles/contactForm.module.css';

class ContactForm extends React.Component {
  constructor() {
    super();

    this.state = {
      submitted: false,
      error: null
    }
  }

  // componentDidMount() {
  //   const script = document.createElement("script");
  //   script.src =
  //     "https://www.google.com/recaptcha/api.js";
  //   script.async = true;
  //   script.defer = true;
  //   document.body.appendChild(script);
  // }

  // executeCaptcha = function () {
  //   recaptchaInstance.execute();
  // };

  render() {

    const self = this;

    const encode = data =>
      Object.keys(data)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&')

    return (
      <div>
        {this.state.error ? <p className={styles.error}>An error occurred while submitting the form. Please try again. If the problem persists, please email me at <a href="mailto:djsaun@gmail.com">djsaun@gmail.com</a></p> : ''}
        {(this.state.submitted === true && !this.state.error) ? 
        
        <p className={styles.confirmationMessage}>Thank you for contacting me!<br/><br/>I'm reviewing your submission and should get back to you in the next 24 hours.</p> : 
        
        <Formik
          initialValues={{
            name: '',
            email: '',
            phone: '',
            website: '',
            message: '',
            captcha: ''
          }}
          validate={values => {

            let errors = {};
            if (!values.name) {
              errors.name = 'Required';
            }

            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }

            if (!/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i.test(values.phone)) {
              errors.phone = 'Invalid phone number'
            }

            if (!values.message) {
              errors.message = 'Required';
            }

            // if (!values.captcha) {
            //   errors.captcha = 'Required';
            // }

            return errors;
          }}
          onSubmit={(
            values,
            errors
          ) => {
            console.log(values)
          }}
          render={({
            values,
            errors,
            touched,
            setFieldValue,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            isValid
          }) => (
              <form name="contact" action="https://formspree.io/djsaun@gmail.com" method="POST" className={styles.form}>
                <div className={styles.field}>
                  <label htmlFor="name"><FontAwesomeIcon className={styles.icon} icon={faUser} /> Name<span>*</span></label>
                  <input
                    type="text"
                    name="name"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    className={(touched.name && errors.name) ? styles.hasError : ''}
                  />
                  {touched.name && errors.name && <div className={styles.errorText}>{errors.name}</div>}
                </div>

                <div className={styles.field}>
                  <label htmlFor="email"><FontAwesomeIcon className={styles.icon} icon={faEnvelope} /> Email<span>*</span></label>
                  <input
                    type="email"
                    name="email"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className={(touched.email && errors.email) ? styles.hasError : ''}
                  />
                  {touched.email && errors.email && <div className={styles.errorText}>{errors.email}</div>}
                </div>

                <div className={styles.field}>
                  <label htmlFor="phone"><FontAwesomeIcon className={styles.icon} icon={faPhone} /> Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                    className={(touched.phone && errors.phone) ? styles.hasError : ''}
                  />
                  {touched.phone && errors.phone && <div className={styles.errorText}>{errors.phone}</div>}
                </div>

                <div className={styles.field}>
                  <label htmlFor="website"><FontAwesomeIcon className={styles.icon} icon={faDesktop} /> Website</label>
                  <input
                    type="text"
                    name="website"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.website}
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="message"><FontAwesomeIcon className={styles.icon} icon={faMicrophone} /> How Can I Help?<span>*</span></label>
                  <textarea
                    name="message"
                    rows='5'
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    className={(touched.message && errors.message) ? styles.hasError : ''}
                  ></textarea>
                  {touched.message && errors.message && <div className={styles.errorText}>{errors.message}</div>}
                </div>

                {/* <div className={styles.captcha}>
                  <Recaptcha
                    sitekey={process.env.GATSBY_CAPTCHA_KEY}
                    render="explicit"
                    verifyCallback={(response) => { setFieldValue("captcha", response) }}
                    onloadCallback={() => { console.log("captcha loaded"); }}
                  />
                  {touched.captcha && errors.captcha && <div className={styles.errorText}>{errors.captcha}</div>}
                </div> */}

                <div className={styles.formButton}>
                  <input type="submit" value="Submit" className={styles.button} disabled={isSubmitting || !isValid} />
                </div>
              </form>
            )}
        />
      }
      </div>
    )
  }
}

export default ContactForm;
