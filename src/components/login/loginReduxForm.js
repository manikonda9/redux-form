import React from "react";
import { reduxForm, Field, SubmissionError } from "redux-form";
import { connect } from "react-redux";
//import submit from "../submit"

//const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

class LoginReduxForm extends React.Component {
  submit = values => {
    //return sleep(1000).then(() => {
    // simulate server latency
    /*if (!['manikonda', 'malakondaiah', 'mani12345', 'mmk123456'].includes(values.username)) {
        throw new SubmissionError({
            username: 'User does not exist',
            _error: 'Login failed!'
        })
    } else if (values.password !== '123456789') {
        throw new SubmissionError({
            password: 'Wrong password',
            _error: 'Login failed!'
        })
    } else {
        this.props.history.push("/contact")
    }*/
    //})
    this.props.login(values.username, values.password);
    setTimeout(() => {
      this.props.history.push(this.props.loginData.redirectUrl);
    }, 10);
  };
  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <form
        onSubmit={handleSubmit(this.submit)}
        className="container col-12 col-sm-8 col-md-3 col-lg-3"
      >
        <h2>Login Form :</h2>
        <div className="form-group">
          <label htmlFor="username" className="control-label">
            User Name :
          </label>
          <Field
            name="username"
            className="form-control"
            component={renderField}
            placeholder="Enter User Name"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="control-label">
            Password :
          </label>
          <Field
            name="password"
            className="form-control"
            component={renderField}
            placeholder="Enter Password"
            type="password"
          />
        </div>
        <div className="form-group">
          <button
            type="submit"
            disabled={pristine || submitting}
            className="btn btn-success float-right"
          >
            Login
          </button>
        </div>
      </form>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = "User Name is Required";
  } else if (values.username.length < 8) {
    errors.username = "User Name length should be 8 characters";
  }
  if (!values.password) {
    errors.password = "Password is Required";
  } else if (values.password.length < 8) {
    errors.password = "Password length should be 8 characters";
  }
  return errors;
};

const warn = values => {
  const warnings = {};
  if (values.username && values.username.length < 8) {
    warnings.username = "User Name length should be 8 characters";
  }
  if (values.password && values.password.length < 8) {
    warnings.password = "User Name length should be 8 characters";
  }
  return warnings;
};

const renderField = ({
  input,
  placeholder,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <div>
      <input
        {...input}
        className="form-control"
        placeholder={placeholder}
        type={type}
      />
      {touched &&
        ((error && <span className="text-danger">{error}</span>) ||
          (warning && <span className="text-warning">{warning}</span>))}
    </div>
  </div>
);
const mapStateToProps = state => {
  return {
    loginData: state.login
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) =>
      dispatch({ type: "LOGIN", username: username, password: password })
  };
};

const LoginForm = reduxForm({
  form: "login", // a unique identifier for this form
  validate,
  warn
})(LoginReduxForm);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
