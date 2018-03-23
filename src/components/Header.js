import React from 'react';
import Link from 'gatsby-link';

class Header extends React.Component{
  render() {
    return (
      <header>
        <div className="logo">
          <Link to="/">
            <div className="first">D<span>avid</span></div>
            <div className="last">S<span>aunders</span></div>
          </Link>
        </div>
        <div className="menu">
          <Link to="/about">About</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </header>
    )
  }
}

export default Header;
