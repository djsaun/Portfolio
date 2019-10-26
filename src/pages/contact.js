import React from 'react';
import ContactForm from '../components/ContactForm';
import Button from '../components/Button';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <h1>Get In Touch</h1>
        <h2>Let's start a conversation!</h2>
        <p>
          I'm interested in learning more about your project! Please fill out
          the form below and include your project details and requirements. I'll
          get back to you in a day or so.
        </p>

        <p>
          If you'd like to connect on social media, you can find me on{' '}
          <a href="https://github.com/djsaun" target="_blank">
            GitHub
          </a>{' '}
          and{' '}
          <a href="https://www.linkedin.com/in/davidjsaunders/" target="_blank">
            LinkedIn
          </a>
          .
        </p>

        <ContactForm />
        {/* <Button link="mailto:djsaun@gmail.com?subject=Project Inquiry for David Saunders" text="Send Email" /> */}
      </div>
    );
  }
}

export default Contact;
