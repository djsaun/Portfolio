import React from 'react'
import Link from 'gatsby-link'
import normalize from 'normalize.css'
import '../styles/global.css'
import styles from '../styles/loader.module.css'
import Container from '../components/Container'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Loader from '../components/Loader'

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
        {(this.state.siteLoading) ? 
          <div style={loaderStyles}><Loader /></div> : 
          <div>
          <Header openMobileMenu={this.handleMobileMenu} menuOpen={this.state.mobileMenuOpen} />
          <Container>
            {children()}
          </Container>
          <Footer />
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
