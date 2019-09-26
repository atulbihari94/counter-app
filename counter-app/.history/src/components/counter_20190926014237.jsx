import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 1,
    name : ['Atul','Vipul','Akhil'],
  };

  render() {
    return (
      <div>
        <span className ={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className = "btn btn-secondry btn-sm">Increement</button>
        <ol>
                {this.state.name.map(name => <li key = {name}>name</li>)}
        </ol>
      </div>
    );
  }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? 'warning' : 'primary';
        return classes;
    }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
