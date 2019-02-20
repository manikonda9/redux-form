import { SubmissionError } from "redux-form";
const initialState = {
  usernames: ["manikonda", "malakondaiah", "mani12345", "mmk123456"],
  redirectUrl: "/",
  password: "1234567"
};

const loginReducer = (state = initialState, action) => {
  if (action.type == "LOGIN") {
    if (!state.usernames.includes(action.username)) {
      throw new SubmissionError({
        username: "User does not exist",
        _error: "Login failed!"
      });
    } else if (action.password !== "123456789") {
      throw new SubmissionError({
        password: "Wrong password",
        _error: "Login failed!"
      });
    } else {
      //this.props.history.push("/contact")
      return {
        ...state,
        redirectUrl: "/home"
      };
      //window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
    }
  } else {
    return state;
  }
};

export default loginReducer;
