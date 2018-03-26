import React from 'react';
import profilePic from '../images/david_saunders.jpeg';

const Bio = (props) => {
  return (
    <div>
      {/* <img
        src={profilePic}
        alt={`David Saunders`}
      /> */}
      <p>Hey! I'm <strong>David Saunders</strong>. I'm a Front-End Web Developer in Austin, TX. </p>
      {/* Written by <strong>Kyle Mathews</strong> who lives and works in San
      Francisco building useful things.{' '}
      <a href="https://twitter.com/kylemathews">
        You should follow him on Twitter
      </a> */}
    </div>
  )
}

export default Bio
