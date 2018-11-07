import React, { Component } from 'react';
import Header from './header'
import {Animated} from "react-animated-css";



class AwesomeBody extends React.Component {
  render(){
    return(
      <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
    <div>
        <Header />
    </div>
</Animated>
    );
  }
 }
export default AwesomeBody;
