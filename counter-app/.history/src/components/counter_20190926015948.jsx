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
          <li key={name}>{name}</li>
        ))}{" "}
      </ul>
    );
  }
  render() {
      return(
    <div>
      {this.state.name.length === 0 && "Please create a new tag"},
      {this.renderTags()};
    </div>);
}

export default Counter;
