import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0
  };

//   style = {
//     fontSize : '30px',
//     fontWeight : 'bold',
//   };
  render() {
    //   let classes = this.getBadgeClasses();
    return (
      <div>
        {/* <span style = {{fontSize : '20px'}} className ="badge m-2 badge-warning ">{this.formatCount()}</span> */}
        {/* <span style = {this.style} className ="badge badge-primary m-2">{this.formatCount()}</span> */}
        <span className ={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className = "btn btn-secondry btn-sm">Increement</button>
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
    // return count === 0 ? <h1>Zero</h1> : count;
    // return this.state.count === 0 ? 'Zero : count;

    return count === 0 ? 'Zero' : count;

  }
}

export default Counter;
