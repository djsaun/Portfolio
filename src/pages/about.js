import React from 'react';
import Link from 'gatsby-link';

const About = (props) => {
  return(
    <div>
      <h1>About David</h1>
      <p>I've been developing professionally for five years and I pride myself on creating  most recently as a Front End Web Developer at <a href="https://monkee-boy.com" target="_blank">Monkee-Boy Web Design</a> in Austin, TX. </p>

      <p>I pride myself on creating user-friendly, accessible, and responsive websites. My current techology stack includes HTML, CSS, JS (ES6, Node, and React), and PHP, but I love learning about different libraries and frameworks that can improve my work. <Link to="/portfolio">Check out my portfolio</Link> to see what I've been working on professionally and in my free time.</p>

      <p>In my free time, I really enjoy hiking, biking, running, and reading.</p>

      <div className="current-section">
        <div className="spotify">
          <p>At the moment, I'm currently listening to: </p>
          {/* Add Spotify currently listening */}
        </div>
        
        <div className="book">
          <p>At the moment, I'm currently reading: </p>
          {/* Add currently reading book section */}
        </div>
      </div>  
    </div>
  )
}

export default About;
