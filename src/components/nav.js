import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav>
          <ul>

              <a className="nav-logo" href="/peeptheplace.com" img src="./images/logo.png" alt=" " ></a>
          </ul>
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Work</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
          </ul>
      </nav>
    );
  }
}

export default Nav;
