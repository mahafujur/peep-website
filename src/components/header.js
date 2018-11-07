import React, { Component } from 'react';
import {Animated} from "react-animated-css";





class Header extends Component {
  render() {
    return (

      <header>

        <div className="head">
            <h2>Awesome apps for your <br /> Modern Lifestyle</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt
              dolorum nulla magnam veniam sapiente, fugiat!</p>
          </div>
              <div>
              <a className="viewmore-button" href="#">View More</a> 

            <a className="download-button" href="#">Download App</a>
            </div>


      </header>


    );
  }
}

export default Header;
