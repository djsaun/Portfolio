import React from 'react';
import ContactForm from '../components/ContactForm';

class Contact extends React.Component{
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <h1>Get In Touch</h1>
        <h3>Let's start a conversation!</h3>
        <p>I'm interested in learning more about your project. Please provide as much detail as you can below. You should expect to hear from me in a day or so.</p>
        <ContactForm />
      </div>
    )
  }
}

export default Contact;
