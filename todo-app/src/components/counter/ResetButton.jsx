import React, { Component } from "react";
import "./ResetButton.css";

class ResetButton extends Component {
  // constructor() {
  //   super();
  //   this.reset = this.reset.bind(this);
  // }
  render() {
    //render = () => {
    //const style = { fontSize: "50px", padding: "10px 30px" }; // different approach of styling

    return (
      <div className="ResetButton">
        <button className="reset" onClick={()=> this.props.resetMethod()} >Reset</button>
      </div>
    );
  }

  // reset() {
  //   this.props.resetMethod();
  // }
}

export default ResetButton;
