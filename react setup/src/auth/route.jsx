// import React from "react";

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Login from "../auth/container/login";
// const Routepath = () => (
//   <Router>
//     <div>
//       <Route exact path="/" component={Login} />
//     </div>
//   </Router>
// );

// export default Routepath;

import React from "react";
import { Route, Switch } from "dva/router";

import LoginForm from "./container/login";

const AuthenticatedRouterConfig = props => {
  return (
    <main>
      {console.log(props)}
      <Route path={`${props.match}`} component={LoginForm} />
    </main>
  );
};

export default AuthenticatedRouterConfig;
