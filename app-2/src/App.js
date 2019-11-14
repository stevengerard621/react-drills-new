import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super();

    this.state = {

      list: ["Hat", "Shoes", "Pants", "Shirt"] 
    };

  }

  render() {
    let outfit = this.state.list.map((element, index) => {
    return <h2 key={index}>{element}</h2>
    });
    return (
      <div className="App">
        {outfit}
      </div>
    );
  }
}

export default App;
