import React, { Component } from "react";
import PropTypes from "prop-types";

import AuthLayoutComponent from "./component";

class AuthLayout extends Component {
  componentWillMount() {
    document.title = "Authentication";
  }

  render() {
    return <AuthLayoutComponent match={this.props.match.url} />;
  }
}

AuthLayout.propTypes = {
  match: PropTypes.shape({ url: PropTypes.string.isRequired }).isRequired
};

export default AuthLayout;
