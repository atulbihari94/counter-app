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
  formatCount() {
    const { count } = this.state;
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter;
