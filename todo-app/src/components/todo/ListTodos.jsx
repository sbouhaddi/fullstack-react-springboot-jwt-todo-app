import React, { Component } from "react";
import TodosJpaService from "../../api/todo/TodoJpaService"
import AuthenticationService from "./AuthenticationService";
import { Modal } from "react-bootstrap";
import moment from "moment";

class ListTodosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      message: "",
      show: false,
    };
    this.deleteTodo = this.deleteTodo.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.refreshTodos = this.refreshTodos.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  componentDidMount() {
    this.refreshTodos();
  }

  refreshTodos() {
    let username = AuthenticationService.getLoggedInUserName();
    TodosJpaService.executeGetAllTodos(username).then((response) =>
      this.setState({
        todos: response.data,
      })
    );
  }

  render() {
    return (
      <div className="ListTodosComponent">
        <h1>List Todos</h1>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Is Completed ?</th>
                <th>Target Date</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{moment(todo.targetDate).format("DD-MM-YYYY")}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => this.updateTodo(todo.id)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => this.deleteTodo(todo.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row">
            <button className="btn btn-primary" onClick={() => this.addTodo()}>
              Add
            </button>
          </div>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton />
          <Modal.Body>{this.state.message}</Modal.Body>
        </Modal>
      </div>
    );
  }

  handleClose() {
    this.setState({
      show: false,
    });
  }

  deleteTodo(id) {
    let username = AuthenticationService.getLoggedInUserName();
    TodosJpaService.executeDeleteTodo(username, id)
      .then(() => {
        this.setState({
          message: `Todo ${id} deleted successfuly !`,
          show: true,
        });
        this.refreshTodos();
      })
      .catch((error) => {
        this.setState({
          message: error.toString(),
          show: true,
        });
        this.refreshTodos();
      });
  }

  updateTodo(id) {
    // let username = AuthenticationService.getLoggedInUserName();
    // TodosService.executeDeleteTodo(username, id)
    //   .then(() => {
    //     this.setState({
    //       message: `Todo ${id} deleted successfuly !`,
    //       show: true,
    //     });
    //     this.refreshTodos();
    //   })
    //   .catch((error) => {
    //     this.setState({
    //       message: error.toString(),
    //       show: true,
    //     });
    //     this.refreshTodos();
    //   });
    this.props.history.push(`/todo/${id}`);
  }

  addTodo() {
    this.props.history.push("/todo");
  }
}

export default ListTodosComponent;
