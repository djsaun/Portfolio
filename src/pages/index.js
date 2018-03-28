import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import axios from 'axios';

import Bio from '../components/Bio';
import Repos from '../components/Repos';
import Loader from '../components/Loader';
import FeaturedProject from '../components/FeaturedProject';
class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      user: 'djsaun',
      repos: [],
      totalRepos: 0,
      events: [],
      repoLoading: true,
      eventsLoading: true,
      error: false
    }

    this.fetchRepoData = this.fetchRepoData.bind(this);
    this.fetchEvents = this.fetchEvents.bind(this);
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

  fetchEvents(name) {
    return axios.get(`https://api.github.com/users/${name}/events?per_page=20`);
  }

  componentDidMount() {

    const reposArr = [];
    const eventsArr = [];

    this.fetchRepoData(this.state.user)
      .then(res => {
        reposArr.push(res.data.data.repositoryOwner.repositories.edges)
        
        this.setState({
          repos: reposArr[0],
          totalRepos: res.data.data.repositoryOwner.repositories.totalCount,
          repoLoading: false
        })
      })
      .catch(error => {
        this.setState({
          error: true,
          error_message: error.message
        })
      })

    this.fetchEvents(this.state.user)
      .then(res => {
        eventsArr.push(res.data);
        
        this.setState({
          events: eventsArr[0],
          eventsLoading: false
        })
      })
      .catch(error => {
        this.setState({
          error: true,
          error_message: error.message
        })
      })
  }

  componentWillUnmount() {
    axios.CancelToken.source().cancel("Component Is Unmounting");
  }
  
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const featuredProject = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')}></Helmet>
        <Bio />
        {/* Make FeaturedProject half width -- align with recent post */}
        <FeaturedProject project={featuredProject[0].node} />
        {((this.state.repoLoading || this.state.eventsLoading) && <Loader /> )}
        {(!this.state.repoLoading && !this.state.eventsLoading && <Repos repos={this.state} />)}
      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
}

export const featuredProjectQuery = graphql`
  query FeaturedProjectQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          featured: {
            eq: true
          }
        }
        fileAbsolutePath: {regex: "/(projects)/.*\\.md$/"}
      }    
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            link
            date(formatString: "DD MMMM, YYYY")
            featured
            excerpt
            technologies
          }
        }
      }
    }
  }
`



export default Index
