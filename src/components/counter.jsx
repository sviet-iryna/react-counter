import React, { Component, StrictMode } from "react";
import { ListGroup } from "react-bootstrap";

class Counter extends Component {
  // state = {
  //   count: 0,
  // };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

 
  render() {
    console.log("props", this.props);
    // console.log(this.props);

    return (
      <div>
        {/* <h4>{this.props.id}</h4> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.props.handleIncrement}
          // onClick={() => this.handleIncrement(this.state.count)}
          //   onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const count = this.props.value;
    return count === 0 ? "Zero" : count;
  }
}
export default Counter;
