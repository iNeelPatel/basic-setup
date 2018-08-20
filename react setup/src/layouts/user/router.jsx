import React from "react";
import { Route, Switch } from "dva/router";
import PropTypes from "prop-types";

import DashboardLayout from "../dashboard/containers/layout";

const UserRouterConfig = props => (
  <Switch>
    <Route
      exact
      path={`${props.match}/dashboard/`}
      component={DashboardLayout}
    />
  </Switch>
);

UserRouterConfig.propTypes = {
  match: PropTypes.string.isRequired
};

export default UserRouterConfig;
