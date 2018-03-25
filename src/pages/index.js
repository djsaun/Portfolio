import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import axios from 'axios';

import Bio from '../components/Bio'
import Repos from '../components/Repos';

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      github: {
        user: 'djsaun',
        repos: [],
        totalRepos: 0,
        loading: true,
        error: false
      }
    }

    this.fetchRepoData = this.fetchRepoData.bind(this);
  }

  fetchRepoData(name) {
    const auth = { Authorization: `bearer ${process.env.GATSBY_GITHUB_API}`};
    const githubURL = `https://api.github.com/graphql`;

    let CancelToken = axios.CancelToken;
    let source = CancelToken.source();

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
                stargazers(first:50) {
                  totalCount
                }
                issues(first: 50) {
                  totalCount
                }
                watchers(first:50) {
                  totalCount
                }
                languages(first: 3) {
                  edges {
                    node {
                      color
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
      `
    };

    return axios.post(githubURL, {
      cancelToken: source.token,
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
            totalRepos: res.data.data.repositoryOwner.repositories.totalCount,
            loading: false
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

  componentWillUnmount() {
    source.cancel("Component Is Unmounting");
  }
  
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')}>
        </Helmet>
        {/* <Bio /> */}
        <i className="fas fa-address-book"></i>
        {(!this.state.github.loading && <Repos repos={this.state.github} />)}
      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
}

export default Index
