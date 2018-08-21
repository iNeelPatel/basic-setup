import React from "react";
import { Layout } from "antd";

import AuthRouterConfig from "../route";

import styles from "./style.css";

const AuthLayoutComponent = props => (
  <Layout className={styles.layout}>
    <Layout.Content className={styles.content}>
      <AuthRouterConfig match={props.match} />
    </Layout.Content>
  </Layout>
);

export default AuthLayoutComponent;
