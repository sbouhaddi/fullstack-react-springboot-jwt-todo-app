import React, { Component } from "react";
import CounterButton from "./CounterButton";
import ResetButton from "./ResetButton";
import "./Counter.css";

class Counter extends Component {
  constructor() {
    super(); // Shoud use super before this in consctructor
    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this); // binding the method (not mandatory with arrow functions
  }

  render() {
    const style = { fontSize: "50px", padding: "10px 30px" };
    return (
      <div className="Counter">
        <CounterButton
          by={1}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          by={5}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          by={10}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <span className="count" style={style}>
          {this.state.counter}
        </span>
        <ResetButton resetMethod={this.reset}></ResetButton>
      </div>
    );
  }

  increment(by) {
    //increment = () => {
    // update counter ++
    // this.state.counter ++ Bad Practice
    this.setState((previousState) => {
      return { counter: previousState.counter + by };
    });
    //console.log(`incremented from parent - ${by}`);
  }

  decrement(by) {
    //increment = () => {
    // update counter ++
    // this.state.counter ++ Bad Practice
    this.setState((previousState) => {
      return { counter: previousState.counter - by };
    });
    //console.log(`incremented from parent - ${by}`);
  }

  reset() {
    this.setState(() => {
      return { counter: 0 };
    });
  }
}

export default Counter;
