import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import normalize from 'normalize.css';
import '../styles/global.css';
import styles from '../styles/loader.module.css';
import layoutStyles from '../styles/layout.module.css';
import Container from '../components/Container';
import Header from '../components/Header';
import MobileMenu from '../components/MobileMenu';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

class Template extends React.Component {  
  constructor() {
    super();
    this.state = {
      siteLoading: true,
      mobileMenuOpen: false
    }

    this.handleMobileMenu = this.handleMobileMenu.bind(this);
  }

  handleMobileMenu(e) {
    e.preventDefault();
    this.setState({
      mobileMenuOpen: !this.state.mobileMenuOpen
    })
  }

  componentDidMount() {
    setTimeout(function () { this.setState({ siteLoading: false }); }.bind(this), 500);
  }

  render() {
    const { location, children } = this.props

    const loaderStyles = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} >
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#ffc40d" />
          <meta name="theme-color" content="#fcfff5" />
        </Helmet>
        {(this.state.siteLoading) ? 
          <div style={loaderStyles}><Loader /></div> : 
          <div>
            <MobileMenu menuOpen={this.state.mobileMenuOpen} />   
            <div className={this.state.mobileMenuOpen ? layoutStyles.mobileMenuOpen : layoutStyles.mobileMenuClosed}>
              <Header openMobileMenu={this.handleMobileMenu} menuOpen={this.state.mobileMenuOpen} />
              <Container>
                {children()}
              </Container>
              <Footer />
            </div>        
          </div>
        }
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template

export const siteQuery = graphql`
  query siteQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`
