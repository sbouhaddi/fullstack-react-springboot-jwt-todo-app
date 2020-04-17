import React, { Component } from "react";
import { Link } from "react-router-dom";
import HelloWorldService from "../../api/todo/HelloWorldService";


class WelcomeComponent extends Component {
  constructor(props) {
    super(props);
    // Don't do this!
    this.state = { name: props.match.params.name, welcomeMessage: "" };
    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
    this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (prevProps.match.params.name !== this.state.name) {
      this.setState({
        name: this.state.name,
      });
    }
  }
  render() {
    return (
      <>
        <h1>Welcome !</h1>
        <div className="container">
          Welcome {this.state.name}. You can manage your todo list{" "}
          <Link to="/todos">Here</Link>!
        </div>
        <div className="container">
          Click here to get a customized welcome message !
          <button
            className="btn btn-success"
            onClick={this.retrieveWelcomeMessage}
          >
            Message
          </button>
        </div>
        <div className="container">{this.state.welcomeMessage}</div>
      </>
    );
  }

  // retrieveWelcomeMessage() {
  //   HelloWorldService.executeHelloWorldService().then((res) => {
  //     const message = res.data;
  //     this.setState({
  //       welcomeMessage: message,
  //     });
  //   });
  // }

  //

  retrieveWelcomeMessage() {
    HelloWorldService.executeHelloWorldPathService(this.state.name)
      .then((res) => {
        this.handleSuccessfulResponse(res);
      })
      .catch((error) => {
        this.handleError(error);
      });
  }

  handleError(error) {
    let msg = "";
    if (error.message) {
      msg += error.message;
    }
    if (error.response && error.response.data.message) {
      msg += error.response.data.message;
    }
    this.setState({
      welcomeMessage: msg,
    });
  }

  handleSuccessfulResponse(response) {
    const msg = response.data.message;
    this.setState({
      welcomeMessage: msg,
    });
  }
}

export default WelcomeComponent;
