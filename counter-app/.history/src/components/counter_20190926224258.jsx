import React, { Component } from "react";
class Counter extends Component {
    // constructor() {
    //     super();
    //     this.handleIncreement = this.handleIncreement.bind(this);
    //   }
  state = {
    count: 1
  };

  
  handleIncreement = product => {
    console.log(product);
    this.setState({count:this.state.count + 1})
  }
//   doHandleIncreement = () => {
//     this.handleIncreement({id : 1});
//   }
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={ () => this.handleIncreement(product)}
          className="btn btn-secondry btn-sm"
        >
          Increement
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
