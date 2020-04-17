import React, { Component } from "react";
import AuthenticationSevice from "./AuthenticationService.js";
import { Link, withRouter } from "react-router-dom";

class HeaderComponent extends Component {
  render() {
    const userLogged = AuthenticationSevice.isUserLoggedIn();
    const username = AuthenticationSevice.getLoggedInUserName();
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a className="navbar-brand" href="https://github.com/sbouhaddi">
              Sbouhaddi
            </a>
          </div>
          <ul className="navbar-nav">
            {userLogged && userLogged === true && (
              <li>
                <Link className="nav-link" to={"/welcome/" + username}>
                  Home
                </Link>
              </li>
            )}
            {userLogged && userLogged === true && (
              <li>
                <Link className="nav-link" to="/todos">
                  Todos
                </Link>
              </li>
            )}
          </ul>
          <ul className="navbar-nav navbar-collapse justify-content-end">
            {!userLogged && (
              <li>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
            {userLogged && userLogged === true && (
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

export default withRouter(HeaderComponent);
