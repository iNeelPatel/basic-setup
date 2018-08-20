import React from "react";
import PropTypes from "prop-types";
import { Layout } from "antd";

import AuthRouterConfig from "../../modules/login/routes";

import styles from "./style.css";

const AuthLayoutComponent = props => (
  <Layout className={styles.layout}>
    <Layout.Content className={styles.content}>
      <AuthRouterConfig match={props.match} />
    </Layout.Content>
  </Layout>
);

AuthLayoutComponent.propTypes = {
  match: PropTypes.string.isRequired
};

export default AuthLayoutComponent;
