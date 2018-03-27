import React from 'react';
import ContactForm from '../components/ContactForm';

class Contact extends React.Component{
  render() {
    return(
      <div>
        <h1>Contact</h1>
        <p>If you're interested in working together, please email me at <a href="mailto:djsaun@gmail.com">djsaun@gmail.com</a> or fill out the contact form below.</p>
        <ContactForm />
      </div>
    )
  }
}

export default Contact;
