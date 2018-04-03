import React from 'react';
import Link from 'gatsby-link';

const About = (props) => {
  return(
    <div>
      <h1>About David</h1>
      <p>I've been developing professionally for five years, and am currently a Front End Web Developer at <a href="https://monkee-boy.com" target="_blank">Monkee-Boy Web Design</a> in Austin, TX.</p>

      <p>I pride myself on creating user-friendly, accessible, and responsive websites. My current techology stack includes HTML, CSS, JS (ES6, Node, and React), and PHP, but I love learning about different libraries and frameworks that can improve my work and create better experiences for my clients. <Link to="/portfolio">Check out my portfolio</Link> to see what I've been working on professionally and in my free time.</p>

      <p><Link to="/blog">Check out my blog</Link> if you'd like to hear my thoughts on development topics.</p> 

      <p>And please <Link to="/contact">let me know</Link> if there are any topics you'd like me to blog about or if you're interested in working together on a project.</p>

      <p>Outside of coding, I really enjoy hiking/backpacking, biking, running, and reading, and hanging out with my cat, Abby.</p>
    </div>
  )
}

export default About;
