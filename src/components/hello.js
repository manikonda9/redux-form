import React from "react";
import { connect } from "react-redux";

class Hello extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  onIncrement = () =>{
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  }

  onDecrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  }

  render() {
    const { counter } = this.state;
    return (
      <div className="container">
        <h1>My Counter</h1>
        {
          counter ?
            <p className="mmk">MMK</p>:<div><p className="mani">Mani</p><p className="mani">Mani</p></div>
        }

        { this.props.isAuthenticated ? <div className="mmk">MMK</div>:<div>MANI</div>}
        <button
          type="button"
          className="btn btn-success"
          onClick={this.onIncrement}
        >
          Increment
        </button>

        <button
          type="button"
          className="btn btn-warning m-2"
          onClick={this.onDecrement}
        >
          Decrement
        </button>
      </div>
    );
  }
}

/*const mapStateToProps = state => {
  return {
    myObj: state.myReducer
  };
};

export default connect(
  mapStateToProps,
  null
)(Hello);*/

export default Hello;
