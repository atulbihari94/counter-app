import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200"
  };
  render() {
    return (
      <div>
        <img>
          {" "}
          src = {this.state.imageUrl} alt ={"h"}
        </img>
        <span>{this.formatCount()}</span>
        <button>Increement</button>
      </div>
    );
  }
  formatCount() {
    const { count } = this.state;
    // return count === 0 ? <h1>Zero</h1> : count;
    // return this.state.count === 0 ? 'Zero' : this.state.count;

    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
