import React from 'react';

const notFound = (props) => {
  return (
    <div>
      <h1>404!</h1>
      <p>Looks like you've stumbled across a broken link!</p>
      <p>No worries. Just <a href="/">click here</a> to return to the homepage.</p>
    </div>
  )
}

export default notFound;
