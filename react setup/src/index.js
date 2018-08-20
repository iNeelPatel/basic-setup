import Parse from "parse";

import {
  appId,
  javascriptKey,
  serverUrl,
  masterKey
} from "./config/ParseServerConfig";
import DvaConfig from "./config/DvaConfig";

import registerServiceWorker from "./registerServiceWorker";

Parse.initialize(appId, javascriptKey, masterKey);

Parse.serverURL = serverUrl;

DvaConfig.start("#react");
registerServiceWorker();
