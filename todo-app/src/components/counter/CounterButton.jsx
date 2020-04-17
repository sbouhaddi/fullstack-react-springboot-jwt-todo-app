import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CounterButton.css";

class CounterButton extends Component {
  //Define the initial state in a constructor
  //State counter =0
  //  constructor() {
  //   super(); // Shoud use super before this in consctructor
  /*  this.state = {
      counter: 0,
    }; */
  //this.increment = this.increment.bind(this); // binding the method (not mandatory with arrow functions
  //this.decrement = this.decrement.bind(this);
  //}

  render() {
    //render = () => {
    //const style = { fontSize: "50px", padding: "10px 30px" }; // different approach of styling

    return (
      <div className="CounterButton">
        <button onClick={() => this.props.incrementMethod(this.props.by)}>
          +{this.props.by}
        </button>
        <button onClick={() => this.props.decrementMethod(this.props.by)}>
          -{this.props.by}
        </button>
        {/*  <span className="count" style={style}>
          {this.state.counter}
        </span> */}
      </div>
    );
  }
  //increment() {
  //increment = () => {
  // update counter ++
  // this.state.counter ++ Bad Practice
  /*  this.setState({
      counter: this.state.counter + this.props.by,
    }); */
  //this.props.incrementMethod(this.props.by);
  //}

  //decrement() {
  //increment = () => {
  // update counter ++
  // this.state.counter ++ Bad Practice
  /*  this.setState({
      counter: this.state.counter + this.props.by,
    }); */
  //this.props.decrementMethod(this.props.by);
  //}
}

CounterButton.defaultProps = {
  by: 1,
};

CounterButton.propTypes = {
  by: PropTypes.number,
};

export default CounterButton;
