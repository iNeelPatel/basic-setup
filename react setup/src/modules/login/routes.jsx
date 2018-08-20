import React from "react";
import { Route } from "dva/router";
import PropTypes from "prop-types";

import LoginScreen from "./containers/screen";

const AuthenticatedRouterConfig = props => (
  <main>
    <Route exact path={`${props.match}/`} component={LoginScreen} />
  </main>
);

AuthenticatedRouterConfig.propTypes = {
  match: PropTypes.string.isRequired
};

export default AuthenticatedRouterConfig;
