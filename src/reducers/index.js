import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import reducer from "./reducer";
import loginReducer from "./loginReducer"

export default combineReducers({
  myReducer: reducer,
  form: formReducer,
  login: loginReducer
});
