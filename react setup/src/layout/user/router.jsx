import React from "react";
import { Route, Switch } from "dva/router";

import DashboardLayout from "../../modules/dashboard/container/layout";

const UserRouterConfig = props => (
  <Switch>
    <Route
      exact
      path={`${props.match}/dashboard/`}
      component={DashboardLayout}
    />
  </Switch>
);

export default UserRouterConfig;
