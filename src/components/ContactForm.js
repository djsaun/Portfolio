import React from 'react';
import axios from 'axios';
import { Formik } from 'formik';
const Recaptcha = require('react-recaptcha');
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/fontawesome-free-regular';
import { faMicrophone, faPhone, faDesktop } from '@fortawesome/fontawesome-free-solid';
import Button from '../components/Button';
import styles from '../styles/contactForm.module.css';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

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

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {

    // const self = this;

    // const encode = data =>
    //   Object.keys(data)
    //     .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    //     .join('&')

    return (

      <div>
        <h1>Contact</h1>
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <p>
            <label>
              Your name:<br />
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your email:<br />
              <input type="email" name="email" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Message:<br />
              <textarea name="message" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    )
  }
}

export default ContactForm;
