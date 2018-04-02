import React from 'react';
import Link from 'gatsby-link';
import profilePic from '../images/david_saunders.jpeg';

const Bio = (props) => {
  return (
    <div>
      {/* <img
        src={profilePic}
        alt={`David Saunders`}
      /> */}
      <p>Hey! I'm <strong>David Saunders</strong>.</p>
      <p>I currently work as a Front End Web Developer at <a href="https://monkee-boy.com" target="_blank">Monkee-Boy Web Design</a> in Austin, TX.</p>
      <p>Want to start working together? <Link to="/contact">Let me know the details of your project</Link> and I'll be in touch soon.</p>
    </div>
  )
}

export default Bio
