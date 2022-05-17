import React, { Component, StrictMode } from "react";
import { ListGroup } from "react-bootstrap";

class Counter extends Component {
  state = {
    count: this.props.value,
    // test
  };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
    // console.log("Increment Clicked", this);
    // obj.method();
    // funtion();
  };

  render() {
    console.log("props", this.props);
    // console.log(this.props);

    return (
      <div>
        {/* <h4>{this.props.id}</h4> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
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
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const count = this.state.count;
    return count === 0 ? "Zero" : count;
  }
}
export default Counter;
