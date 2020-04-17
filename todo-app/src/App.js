import React from "react";
import "./App.css";
import FirstComponent from "./components/learning-examples/FirstComponent";
import SecondComponent, {
  Thirdomponent,
} from "./components/learning-examples/SecondComponent";
import TodoApp from "./components/todo/TodoApp";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // const dispatch = useDispatch();
  return (
    <div className="App">
      {/*<button onClick={() => dispatch(showSpinner())}>Show</button>
      <button onClick={() => dispatch(hideSpinner())}>Hide</button>
  <SpinnerComponent />*/}
      <TodoApp />
    </div>
  );
}

export function LearningComponent() {
  return (
    <div className="LearningComponent">
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <Thirdomponent></Thirdomponent>
    </div>
  );
}

export default App;
