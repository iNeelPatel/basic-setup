import React from "react";
import { Route, Switch } from "dva/router";

import AuthLayout from "../../auth/container/layout";
import UserLayout from "../user/container";

const RootRouterConfig = () => (
  <Switch>
    <Route exact path="/" component={AuthLayout} />
    <Route path="/user" component={UserLayout} />
  </Switch>
);

export default RootRouterConfig;
