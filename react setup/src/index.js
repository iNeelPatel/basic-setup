import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import Routepath from "./route/route";
import DvaConfig from "./config/DvaConfig";

import registerServiceWorker from "./registerServiceWorker";
import Parse from "parse";
require("dotenv").config();

Parse.initialize(
  process.env.REACT_APP_PARSE_APP,
  process.env.REACT_APP_PARSE_JAVASCRIPT_KEY,
  process.env.REACT_APP_PARSE_MASTER_KEY
);
Parse.serverURL = process.env.REACT_APP_PARSE_SERVER;

DvaConfig.start("#root");
registerServiceWorker();
