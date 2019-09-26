import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 1
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
        <ul>
                {this.state.name.map(name => <li key = {name}>name</li>)}
        </ul>
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
}

export default Counter;


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
          onClick={ () => this.handleIncreement()}
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
