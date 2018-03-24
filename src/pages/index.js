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
      github: {
        user: 'djsaun',
        repos: [],
        totalRepos: 0,
        error: false
      }
    }

    this.fetchRepoData = this.fetchRepoData.bind(this);
  }

  fetchRepoData(name) {
    const auth = { Authorization: `bearer ${process.env.GATSBY_GITHUB_API}`};
    const githubURL = `https://api.github.com/graphql`;

    function repoQuery(name) {
      return `
      {
        repositoryOwner(login: "${name}") {
          repositories(first:5, affiliations: OWNER, orderBy:{field:UPDATED_AT, direction: DESC}) {
            totalCount
            pageInfo {
              hasNextPage
              endCursor
            }
            edges {
              node {
                name
                url
                updatedAt
                shortDescriptionHTML
              }
            }
          }
        }
      }
      `
    };

    return axios.post(githubURL, {
      query: repoQuery(name)
    }, {headers: auth})
  }

  componentDidMount() {

    const reposArr = [];

    this.fetchRepoData(this.state.github.user)
      .then(res => {
        reposArr.push(res.data.data.repositoryOwner.repositories.edges)
        
        this.setState({
          github: {
            repos: reposArr[0],
            totalRepos: res.data.data.repositoryOwner.repositories.totalCount
          }
        })
      })
      .catch(error => {
        this.setState({
          github: {
            error: true,
            error_message: error.message
          }
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
