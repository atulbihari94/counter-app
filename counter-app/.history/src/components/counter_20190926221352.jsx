import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 1,
    counter: 0
  };
  renderTags() {
    if (this.state.name.length === 0) return <p>There are no tags!</p>;
    return <div></div>;
  }
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondry btn-sm">Increement</button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
