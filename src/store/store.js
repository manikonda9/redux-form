import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import reduxThunk from "redux-thunk";

const logger = store => {
  return next => {
    return action => {
      //console.log("[Middleware dispatching", action);
      const result = next(action);
      //console.log("[middleware] next state", store.getState());
      return result;
    };
  };
};

export const store = createStore(
  rootReducer,
  {},
  applyMiddleware(logger, reduxThunk)
);
