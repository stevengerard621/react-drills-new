import React, { Component } from "react";
import Image from './Image';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://cdn.getyourguide.com/img/tour_img-1079457-146.jpg"}/>
      </div>
    );
  }
}

export default App;
