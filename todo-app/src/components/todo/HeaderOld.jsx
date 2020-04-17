import React, { Component } from "react";
import AuthenticationSevice from "./AuthenticationService.js";
import { Link } from "react-router-dom";

class HeaderComponent extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isUserLoggedIn: AuthenticationSevice.isUserLoggedIn(),
  //   };
  //   //  this.handleState = this.handleState.bind(this);
  // }

  componentDidMount() {
    console.log("did mount " +this.props.isUserLoggedIn);
  }

  //   handleState = () => {
  //     this.setState(() => {
  //         return { isUserLoggedIn: AuthenticationSevice.isUserLoggedIn() };
  //       });
  //       console.log(this.state.isUserLoggedIn);
  //   }

  render() {
    // const isUserLoggedIn = AuthenticationSevice.isUserLoggedIn();
    console.log(this.props.isUserLoggedIn);
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a className="navbar-brand" href="https://github.com/sbouhaddi">
              Sbouhaddi
            </a>
          </div>
          <ul className="navbar-nav">
            {this.props.isUserLoggedIn && (
              <li>
                <Link className="nav-link" to="/welcome/Sbouhaddi">
                  Home
                </Link>
              </li>
            )}
            {this.props.isUserLoggedIn && (
              <li>
                <Link className="nav-link" to="/todos">
                  Todos
                </Link>
              </li>
            )}
          </ul>
          <ul className="navbar-nav navbar-collapse justify-content-end">
            {!this.props.isUserLoggedIn && (
              <li>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
            {this.props.isUserLoggedIn && (
              <li>
                <Link
                  className="nav-link"
                  onClick={AuthenticationSevice.logout}
                  to="/logout"
                >
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    );
  }
}

export default HeaderComponent;
