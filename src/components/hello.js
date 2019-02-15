import React from "react";
import { connect } from "react-redux";

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { myObj } = this.props;
    console.log(myObj);
    return <div>{myObj.name}</div>;
  }
}

const mapStateToProps = state => {
  return {
    myObj: state.myReducer
  };
};

export default connect(
  mapStateToProps,
  null
)(Hello);
