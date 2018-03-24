import React from 'react';
import Repo from './Repo';

class Github_Projects extends React.Component {
  
  render() {
    const { repos } = this.props.repos;
    
    return(
      <div>
        {repos && Object.keys(repos).map((key, i) => {
        return (
          <Repo key={i} details={repos[key].node} />
        )
        })}
      </div>
    )
  }
}

export default Github_Projects;
