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
            component="input"
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
            component="input"
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
            component="input"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="control-label col-lg-2">Sex :</label>
        <div className="col-lg-4">
          <label className="col-lg-2">
            <Field name="sex" component="input" type="radio" value="male" />{" "}
            Male
          </label>
          <label className="col-lg-2">
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

const input = ({ input, type, placeholder, id, meta: { touched, error } }) => {
  return (
    <div>
      <input {...input} placeholder={placeholder} type={type} id={id} />
      {touched && error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default reduxForm({
  form: "simple" // a unique identifier for this form
})(contactForm);
