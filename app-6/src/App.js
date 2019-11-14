import React, { Component } from "react";
import "./App.css";
import ToDo from './ToDo'

class App extends Component {
  constructor(){
    super();

    this.state = {
      list: [],
      input: ""
    };
    //why is just this bound
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleInputChange(value){
    this.setState({ input: value});
  }

  handleAddTask(){
    this.setState({
      list: [...this.state.list, this.state.input]
    });
  }

  
  render() {
    let list = this.state.list.map((element, index) => {
      return <ToDo key={index} task={element} />;
    });

    return (
      <div className="App">
        <h1>MY TO-DO LIST</h1>

        <div>
          <input 
          value={this.state.input}
          placeholder="Get it done bro"
          onChange={e => this.handleInputChange(e.target.value)}
          />

          <button onClick={this.handleAddTask}>BOOM</button>
        </div>

        <br/>

        <h1>{list}</h1>
      </div>
    );
  }
}
//what does the last list do?
export default App;
