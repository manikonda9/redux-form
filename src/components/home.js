import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/homeAction";
import Spinner from "./spinner/spinner";
import View from "./view";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.props.getPosts();
  }
  render() {
    const data = this.props.data.json;
    const loading = this.props.data.loading;
    if (!loading) {
      return <View data={data} />;
    } else {
      return <Spinner />;
    }
  }
}

const mapStateToProps = state => {
  return {
    data: state.home
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
