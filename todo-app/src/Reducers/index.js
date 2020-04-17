import { combineReducers } from "redux";
import SpinnerReducer from "./spinner";

const roodReducer = combineReducers({
  showSpinner: SpinnerReducer,
});

export default roodReducer;
