import React, { Component } from 'react';
import AwesomeBody from "./awesome-body";
import Home from "./home";

class Main extends Component {
  render() {
    return (
      <main>


        <section className="intro">
            <h3 align="center">Introducing with Peep The Place</h3>

             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel gravida nisi. Vestibulum ac consequat lorem. In in mi massa. Donec ut tellus sit amet sem ornare fermentum at et nunc. Pellentesque ac elementum metus. Praesent non venenatis lacus. In sagittis urna in nulla sagittis mattis.</p>

        </section>

        <Home />


          <section>
            <h2 align="center">How does the App work?</h2>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda voluptate velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda voluptate velit. </p>
                </div>
          <li>    galley of type and scrambled it to make a type</li>
          <li>  It is a long established fact   </li>
          <li>   It is a long established fact  </li>
          <li>   It is a long established fact  </li>
          <br />
          <a className="viewmore" href="#">Details</a>
        </section>


        <section>
            <h3 >Awesome Apps Features</h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae</p>

            <a className="viewmore" href="#">My Place</a>
            <a className="viewmore" href="#">Open Place</a>
            <a className="viewmore" href="#">Events</a>



            <AwesomeBody/>


        </section>


      </main>
    );
  }
}

export default Main;
