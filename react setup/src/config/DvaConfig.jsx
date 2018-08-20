import dva from "dva";
import React from "react";
import { routerRedux } from "dva/router";
import createHistory from "history/createBrowserHistory";
import dynamic from "dva/dynamic";
import { createLogger } from "redux-logger";

import user from "../layouts/user/model";
import RootLayout from "../layouts/root/container";

const { ConnectedRouter } = routerRedux;

const app = dva({
  history: createHistory(),
  onAction: createLogger({
    predicate: () => process.env.NODE_ENV
  })
});

app.router(({ history }) => {
  const RootLayoutWrapper = dynamic({
    app,
    models: () => [user],
    component: () => RootLayout
  });

  return (
    <ConnectedRouter history={history}>
      <RootLayoutWrapper />
    </ConnectedRouter>
  );
});

export default app;
