import React, { Component } from "react";

import AuthLayoutComponent from "../component/layout";

class AuthLayout extends Component {
  componentWillMount() {
    document.title = "Authentication";
  }

  render() {
    return <AuthLayoutComponent match={this.props.match.url} />;
  }
}

export default AuthLayout;
