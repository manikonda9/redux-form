import React from "react";
import ContactForm from "./contactForm";

class ContactPage extends React.Component {
  submit = values => {
    // print the form values to the console
    console.log(values);
  };
  render() {
    return (
      <section className="container">
        <h2>SIgn up form:</h2>
        <ContactForm onSubmit={this.submit} />
      </section>
    );
  }
}

export default ContactPage;
