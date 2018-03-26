import React from 'react'
import Link from 'gatsby-link'
import normalize from 'normalize.css'
import '../styles/global.css'
import Container from '../components/Container'
import Header from '../components/Header'
import Footer from '../components/Footer'

class Template extends React.Component {
  render() {
    const { location, children } = this.props

    return (
      <div>
        <Header />
        <Container>
          {children()}
        </Container>
        <Footer />
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
