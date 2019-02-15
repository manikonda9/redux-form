import React from "react";
import { Field, reduxForm } from "redux-form";

const contactForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
      <div className="form-group row">
        <label className="control-label col-lg-2">First Name :</label>
        <div className="col-lg-4">
          <Field
            name="firstName"
            className="form-control"
            component={renderField}
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="control-label col-lg-2">Last Name :</label>
        <div className="col-lg-4">
          <Field
            name="lastName"
            className="form-control"
            component={renderField}
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="control-label col-lg-2">Email :</label>
        <div className="col-lg-4">
          <Field
            name="email"
            className="form-control"
            component={renderField}
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="control-label col-lg-2">Sex :</label>
        <div className="col-lg-4">
          <label className="col-lg-6">
            <Field name="sex" component="input" type="radio" value="male" />{" "}
            Male
          </label>
          <label className="col-lg-6">
            <Field name="sex" component="input" type="radio" value="female" />{" "}
            Female
          </label>
        </div>
      </div>
      <div className="form-group row">
        <label className="control-label col-lg-2">Favorite Color :</label>
        <div className="col-lg-4">
          <Field
            name="favoriteColor"
            component="select"
            className="form-control"
          >
            <option />
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Field>
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="employed" className="control-label col-lg-2">
          Employed :
        </label>
        <div className="col-lg-4">
          <Field
            name="employed"
            id="employed"
            component="input"
            type="checkbox"
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="control-label col-lg-2">Notes :</label>
        <div className="col-lg-4">
          <Field name="notes" component="textarea" className="form-control" />
        </div>
      </div>
      <div className="form-group row">
        <button
          type="submit"
          className="btn btn-success col-lg-1 m-2"
          disabled={pristine || submitting}
        >
          Submit
        </button>
        <button
          type="reset"
          className="btn btn-secondary col-lg-1 m-2"
          disabled={pristine || submitting}
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </form>
  );
};

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "First Name is Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }
  if (!values.lastName) {
    errors.lastName = "Last Name is Required";
  } else if (values.lastName.length > 15) {
    errors.lastName = "Must be 15 characters or less";
  }
  if (!values.email) {
    errors.email = "Email Id is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.sex) {
    errors.sex = "Please select sex";
  }
  return errors;
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
        className={input.name === "sex" ? "" : "form-control"}
        placeholder={placeholder}
        type={type}
      />
      {touched &&
        ((error && <span className="text-danger">{error}</span>) ||
          (warning && <span className="text-danger">{warning}</span>))}
    </div>
  </div>
);

export default reduxForm({
  form: "simple", // a unique identifier for this form
  validate
})(contactForm);
