import React, { Component } from 'react';
import Nav from "./components/nav";
import Header from "./components/header";
import Main from "./components/main";
import AwesomeBody from "./components/awesome-body";
import Background from "./components/background";

class App extends Component {
  render() {
    return (
      <div className="container">
      <Background />
          <Nav/>
        <AwesomeBody />
        <Main />


      </div>
    );
  }
}

export default App;
