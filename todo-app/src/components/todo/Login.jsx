import React, { Component } from "react";
import AuthenticationSevice from "./AuthenticationService";
import { Button, Spinner } from "react-bootstrap";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "root",
      password: "",
      isLoginFailed: false,
      isLoginSuccesful: false,
      loading: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <div className="container">
          {this.state.isLoginFailed && (
            <div className="alert alert-warning">Invalid Credentials</div>
          )}
          {this.state.isLoginSuccesful && <div>Login successful</div>}
          User Name :{" "}
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          Password :{" "}
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          {/*<button className="btn btn-success" onClick={this.loginClicked}>
            {loading && <i className="fa fa-refresh fa-spin" />}
            Login
          </button>*/}
          <Button variant="primary" onClick={() => this.loginClicked()}>
            {loading && (
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            )}
            Login
          </Button>
        </div>
      </div>
    );
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  loginClicked() {
    // AuthenticationSevice.executeBasicAuthenticationService(
    //   this.state.username,
    //   this.state.password
    // )
    //   .then(() => {
    //     AuthenticationSevice.registerSuccessfulLogin(
    //       this.state.username,
    //       this.state.password
    //     );
    //     this.setState({
    //       loading: true,
    //     });
    //     setTimeout(() => {
    //       this.setState({ loading: false });
    //       this.props.history.push(`/welcome/${this.state.username}`);
    //     }, 1000);
    //   })
    //   .catch(() => {
    //     this.setState({
    //       isLoginFailed: true,
    //       isLoginSuccesful: false,
    //     });
    //   });

    AuthenticationSevice.executeJwtAuthenticationService(
      this.state.username,
      this.state.password
    )
      .then((response) => {
        AuthenticationSevice.registerSuccessfulLoginForJwt(
          this.state.username,
          response.data.token
        );
        this.setState({
          loading: true,
        });
        setTimeout(() => {
          this.setState({ loading: false });
          this.props.history.push(`/welcome/${this.state.username}`);
        }, 1000);
      })
      .catch(() => {
        this.setState({
          isLoginFailed: true,
          isLoginSuccesful: false,
        });
      });

    // if (this.state.username === "root" && this.state.password === "root") {
    //   AuthenticationSevice.registerSuccessfulLogin(
    //     this.state.username,
    //     this.state.password
    //   );
    //   this.setState({
    //     loading: true,
    //   });
    //   setTimeout(() => {
    //     this.setState({ loading: false });
    //     this.props.history.push(`/welcome/${this.state.username}`);
    //   }, 1000);
    // } else {
    //   this.setState({
    //     isLoginFailed: true,
    //     isLoginSuccesful: false,
    //   });
    // }

    //console.log(this.state.loading);
  }
}

export default LoginComponent;
