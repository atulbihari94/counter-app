import React, { Component } from "react";
class Counter extends Component {

  state = {
    value: this.props.value,
  };
  handleIncreement = product => {
    this.setState({count:this.state.value + 1})
  }
  render() {
    console.log('props',this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={ () => this.handleIncreement()}
          className="btn btn-secondry btn-sm"
        >
          Increements
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
