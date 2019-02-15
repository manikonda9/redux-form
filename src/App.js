import React from "react";
import "./App.css";
import Routing from "./routes/routes";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Routing />
      </React.Fragment>
    );
  }
}

export default App;
