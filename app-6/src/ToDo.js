import React, { Component } from 'react';

//why is this component even necassary?

class ToDo extends Component {
  render() {
    //where does props.task come from?
  return <p>{this.props.task}</p>
  }
}

export default ToDo;