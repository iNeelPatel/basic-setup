import React from "react";

import RootRouterConfig from "./router";
import styles from "./style.css";

const RootLayoutComponent = () => (
  <div className={styles.rootLayout}>
    <RootRouterConfig />
  </div>
);

export default RootLayoutComponent;
