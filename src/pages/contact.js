import React from 'react';
import ContactForm from '../components/ContactForm';
import Button from '../components/Button';

class Contact extends React.Component{
  render() {

    const socialStyle = {
      marginTop: '40px'
    }

    return(
      <div>
        <h1>Get In Touch</h1>
        <h2>Let's start a conversation!</h2>
        <p>I'm interested in learning more about your project. Please provide as much detail as you can in your email. You should expect to hear from me in a day or so.</p>
        {/* <ContactForm /> */}
        <Button link="mailto:djsaun@gmail.com?subject=Project Inquiry for David Saunders" text="Send Email" />

        <p style={socialStyle}>If you'd like to connect on social media, you can find me on <a href="https://github.com/djsaun" target="_blank">GitHub</a>, <a href="https://www.linkedin.com/in/davidjsaunders/" target="_blank">LinkedIn</a>, and <a href="https://twitter.com/djsaun01" target="_blank">Twitter</a>.</p>
      </div>
    )
  }
}

export default Contact;
