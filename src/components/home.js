import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/homeAction";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.props.getPosts();
  }
  render() {
    const data = this.props.data;
    console.log(data);
    return <div>Real Data from Json placeholder</div>;
  }
}

const mapStateToProps = state => {
  return {
    data: state.home.json
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(fetchPosts())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
