import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 1
  };
  render() {
    return (
      <div>
        <span>{this.state.count + 1}</span>
        <button>Increement</button>
      </div>
    );
  }
}

export default Counter;
