import React from "react";
import PropTypes from "prop-types";
import { Layout } from "antd";

import UserRouterConfig from "./router";

import HeaderContainer from "../../modules/header/container";

import styles from "./style.css";

const UserLayoutComponent = props => (
  <Layout className={styles.userLayout}>
    <HeaderContainer />
    <Layout.Content className={styles.screen}>
      <UserRouterConfig match={props.match} />
    </Layout.Content>
  </Layout>
);

UserLayoutComponent.propTypes = {
  match: PropTypes.string.isRequired
};

export default UserLayoutComponent;
