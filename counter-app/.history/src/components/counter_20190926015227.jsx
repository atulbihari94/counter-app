import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 1,
    name: ["Atul", "Vipul", "Akhil"]
  };
  renderTags() {
    if (this.state.name.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.name.map(name => (
          <li key={name}>name</li>
        ))}
      </ul>
    );
  }
  render() {
    return <div> {this.renderTags}</div>;
  }
  //   getBadgeClasses() {
  //     let classes = "badge m-2 badge-";
  //     classes += this.state.count === 0 ? "warning" : "primary";
  //     return classes;
  //   }

  //   formatCount() {
  //     const { count } = this.state;
  //     return count === 0 ? "Zero" : count;
  //   }
}

export default Counter;
