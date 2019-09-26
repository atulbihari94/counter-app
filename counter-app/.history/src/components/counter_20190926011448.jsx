import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0
  };

  style = {
    fontSize : '50',
    fontWeight : 'bold',
  };
  render() {
    return (
      <div>
        <span style = {this.style} className ="badge badge-primary m-2">{this.formatCount()}</span>
        <button className = "btn btn-secondry btn-sm">Increement</button>
      </div>
    );
  }
  formatCount() {
    const { count } = this.state;
    // return count === 0 ? <h1>Zero</h1> : count;
    // return this.state.count === 0 ? 'Zero : count;

    return count === 0 ? 'Zero' : count;

  }
}

export default Counter;
