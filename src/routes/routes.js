import React from "react";
import { Switch, Route } from "react-router-dom";
import Hello from "../components/hello";
import ContactPage from "../components/reduxForm/contactPage";
import Login from "../components/login/loginReduxForm";
import Home from "../components/home";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/hello" component={Hello} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    );
  }
}

export default Routes;
