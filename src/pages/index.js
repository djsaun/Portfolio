import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import axios from 'axios';

import Bio from '../components/Bio'
import Github_Projects from '../components/Github_Projects';

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      repos: []
    }
  }

  componentDidMount() {
    const reposUrl = `https://api.github.com/users/djsaun/repos`;
    const reposArr = [];
    axios.get(reposUrl)
      .then(res => {
        res.data.map((project) => {
          reposArr.push(project.name);
        })
        this.setState({
          repos: reposArr
        })
      })
  }
  
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <Bio />
        <Github_Projects repos={this.state.repos} />
      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
}

export default Index
