import React, { Component } from "react";
import moment from "moment";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TodoJpaService from "../../api/todo/TodoJpaService";
import AuthenticationService from "./AuthenticationService";

class TodoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      description: "",
      targetDate: moment(new Date()).format("YYYY-MM-DD"),
      isDone: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  onSubmit(values) {
    let username = AuthenticationService.getLoggedInUserName();
    if (!this.state.id) {
      TodoJpaService.executeSaveTodo(username, {
        description: values.description,
        targetDate: values.targetDate,
        done: values.isDone,
      })
        .then(() => this.props.history.push("/todos"))
        .catch((error) => console.log(error));
    } else {
      TodoJpaService.executeUpdateTodo(username, this.state.id, {
        id: this.state.id,
        description: values.description,
        targetDate: values.targetDate,
        done: values.isDone,
      }).then(() => this.props.history.push("/todos"));
    }
  }

  componentDidMount() {
    let username = AuthenticationService.getLoggedInUserName();
    if (!this.state.id) {
      return;
    }
    TodoJpaService.executeGetTodo(username, this.state.id).then((response) => {
      let data = response.data;
      this.setState({
        description: data.description,
        targetDate: moment(data.targetDate).format("YYYY-MM-DD"),
        isDone: data.done,
      });
    });
  }

  validate(values) {
    console.log(values);
    let errors = {};
    if (!values.description) {
      errors.description = "Enter a Description !";
    } else if (values.description.length < 5) {
      errors.description = "Description should be at least 5 characters !";
    }

    if (!moment(values.targetDate).isValid()) {
      errors.targetDate = "Enter a valid Target Date !";
    }
    return errors;
  }

  render() {
    let { description, targetDate, isDone } = this.state;
    return (
      <div>
        <h1>TODO</h1>
        <div className="container">
          <Formik
            initialValues={{ description, targetDate, isDone }}
            onSubmit={this.onSubmit}
            validate={this.validate}
            validateOnBlur={false}
            validateOnChange={false}
            validateOnMount={false}
            enableReinitialize={true}
          >
            {(props) => (
              <Form>
                <ErrorMessage
                  name="description"
                  component="div"
                  className="alert alert-warning"
                />
                <fieldset className="form-group">
                  <label>Description</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="description"
                  />
                </fieldset>
                <ErrorMessage
                  name="targetDate"
                  component="div"
                  className="alert alert-warning"
                />
                <fieldset className="form-group">
                  <label>Target Date</label>
                  <Field
                    className="form-control"
                    type="date"
                    name="targetDate"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <Field
                    className="form-check-input"
                    type="checkbox"
                    name="isDone"
                    checked={!!props.values.isDone}
                    onChange={() =>
                      this.setState({
                        isDone: !props.values.isDone,
                        description: props.values.description,
                        targetDate: props.values.targetDate,
                      })
                    }
                  />
                  <label className="form-check-label">Is Completed ?</label>
                </fieldset>
                <button className="btn btn-success" type="submit">
                  Save
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default TodoComponent;
