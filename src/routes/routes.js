import React from "react";
import { Switch, Route } from "react-router-dom";
import Hello from "../components/hello";
import ContactPage from "../components/reduxForm/contactPage";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Hello} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    );
  }
}

export default Routes;
