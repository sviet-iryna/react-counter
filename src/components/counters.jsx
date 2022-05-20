import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };
  handeleAdd = (index, valueToAdd) => {
    let newCounters = this.state.counters.map(function (elem) {
      if (index === elem.id) {
        elem.value = elem.value + valueToAdd;
      }
      return elem;
    });
    return newCounters;
  };

  handleIncrement = (index) => {
    let newCounters = this.handeleAdd(index, 1);
    this.setState({counters : newCounters});
  };

  handleDecrement = (index) => {
    let newCounters = this.handeleAdd(index, -1);
    this.setState({counters : newCounters});
  };

  render() {
    console.log(this.state);
    return (
      <>
        {this.state.counters.map((counter) => {
          return (
            <Counter
              handleIncrement={this.handleIncrement}
              handleDecrement={this.handleDecrement}
              value={counter.value}
              id={counter.id}
              key={counter.id}
            ></Counter>
          );
        })}
      </>
    );
  }

  // render() {
  //   return (
  //     <div>
  //       {this.state.counters.map((counter) => (
  //         <Counter key={counter.id} value={counter.value} id={counter.id}>
  //           {/* <h4>Counter #{counter.id}</h4> */}
  //         </Counter>
  //       ))}
  //     </div>
  //   );
  // }
}

export default Counters;
