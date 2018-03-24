import React from 'react';

const Repo = (props) => {
  return (
    <div className="repo">
      <h1>{props.details.name}</h1>
      <a href={props.details.url} target="_blank">View</a>
    </div>
  )
}

export default Repo;
