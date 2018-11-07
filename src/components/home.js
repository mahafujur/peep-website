import React, { Component } from 'react';
import {Animated} from "react-animated-css";



class Home extends React.Component {
  render(){
    return(

<Animated animationIn="fadeInUp" animationOut="flipOutY" isVisible={true}>
    <div>
  <main>


  <div>
      <div className="services">

          <div className="service-one">
            <p className="service-title">Easy to use</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.</p>
          </div>

          <div className="service-two">
            <p className="service-title">Awesome Interface</p>
            <p>Nulla eu metus faucibus, vehicula tortor quis, venenatis odio. Nullam purus mauris, feugiat in odio vitae, posuere volutpat libero. Sed et convallis libero.</p>
          </div>

          <div className="service-three">
            <p className="service-title">Great Support</p>
            <p>Ut ornare vitae enim a rhoncus. Nullam aliquet tristique scelerisque. Sed volutpat dictum risus ac laoreet. Suspendisse id lorem in enim sollicitudin varius.</p>
          </div>

        </div>
    </div>

   </main>

  </div>
</Animated>

    );
  }
 }
export default Home;
