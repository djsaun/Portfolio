import React from 'react';
import profilePic from '../images/david_saunders.jpeg';

const Bio = (props) => {
  return (
    <p>
      {/* <img
        src={profilePic}
        alt={`David Saunders`}
      /> */}
      Written by <strong>Kyle Mathews</strong> who lives and works in San
      Francisco building useful things.{' '}
      <a href="https://twitter.com/kylemathews">
        You should follow him on Twitter
      </a>
    </p>
  )
}

export default Bio
