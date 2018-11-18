import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import axios from 'axios';

import Bio from '../components/Bio';
import Repos from '../components/Repos';
import Loader from '../components/Loader';
import Project from '../components/Project';
import BlogPreview from '../components/BlogPreview';

import styles from '../styles/homepage.module.css';
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
    const auth = { Authorization: `bearer ${process.env.GATSBY_GITHUB_API_KEY}`};
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
    return axios.get(`https://api.github.com/users/${name}/events?per_page=15`);
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
    const project = get(this, 'props.data.project.edges')
    const recentPosts = get(this, 'props.data.posts.edges')
    
    return (
      <div>
        <Bio />
        <div className={styles.featuredSection}>
          <div>
            <div className={styles.header}>
              <h2 className={styles.sectionHeader}>Featured Project</h2>
            </div>
            <Project project={project[0].node} />
          </div>
          <div>
            <div className={styles.header}>
              <h2 className={styles.sectionHeader}>Recent Posts</h2>
            </div>
            {recentPosts.map((post, i) => {
              return (
                <BlogPreview key={i} content={post.node} />
              )
            })}
          </div>
        </div>
        {((this.state.repoLoading || this.state.eventsLoading) && <Loader /> )}
        {(!this.state.repoLoading && !this.state.eventsLoading && <Repos repos={this.state} />)}
      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
}

export const featuredSectionQuery = graphql`
  query featuredSectionQuery {
    project: allMarkdownRemark(
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
            repo
          }
        }
      }
    }

    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date]},
      limit: 2,
      filter: {fileAbsolutePath: {regex: "/(posts)/.*\\.md$/"}}
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default Index
