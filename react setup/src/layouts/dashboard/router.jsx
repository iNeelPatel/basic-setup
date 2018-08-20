import React from "react";
import { Route, Switch } from "dva/router";

import HomeContainer from "./containers/home";

const OrderRouterConfig = () => (
  <Switch>
    <Route exact path="/user/dashboard/" component={HomeContainer} />
  </Switch>
);

export default OrderRouterConfig;
