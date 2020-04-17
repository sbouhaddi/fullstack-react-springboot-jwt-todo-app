import React from "react";
import { BrowserRouter as Router, Route, Switch , withRouter } from "react-router-dom";
import LoginComponent from "./Login";
import HeaderComponent from "./Header";
import AuthenticatedRoute from "./AuthenticatedRoute";
import ListTodosComponent from "./ListTodos";
import WelcomeComponent from "./Welcome";
import LogoutComponent from "./Logout";
import ErrorComponent from "./Error";
import FooterComponent from "./Footer";
import AuthenticationService from "./AuthenticationService";
import TodoComponent from "./Todo";

function TodoApp() {
  return (
      <Router>
        <>
          <HeaderComponent
            isUserLoggedIn={AuthenticationService.isUserLoggedIn()}
          />
          <Switch>
            <Route path="/" exact component={withRouter(LoginComponent)} />
            <Route path="/login" exact component={withRouter(LoginComponent)} />
            <AuthenticatedRoute
              path="/welcome/:name"
              component={WelcomeComponent}
            />
            <AuthenticatedRoute path="/todos" exact component={withRouter(ListTodosComponent)} />
            <AuthenticatedRoute path="/logout" exact component={withRouter(LogoutComponent)} />
            <AuthenticatedRoute path="/todo/:id" exact component={withRouter(TodoComponent)}/>
            <AuthenticatedRoute path="/todo" exact component={withRouter(TodoComponent)}/>
            <Route component={withRouter(ErrorComponent)} />
          </Switch>
          <FooterComponent />
        </>
      </Router>
  );
}
export default TodoApp;
