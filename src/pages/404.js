import React from 'react';
import Link from 'gatsby-link';

const notFound = (props) => {
  return (
    <div>
      <h1>404!</h1>
      <h3>Looks like you've stumbled across a broken link!</h3>
      <p>No worries. Just <Link to="/">click here</Link> to return to the homepage.</p>
      <p>You may also <a href="mailto:djsaun@gmail.com">click here</a> to contact me.</p>
    </div>
  )
}

export default notFound;
