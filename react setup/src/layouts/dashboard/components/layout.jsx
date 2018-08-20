import React from "react";
import PropTypes from "prop-types";
import { Layout, Row, Col } from "antd";

import RouterConfig from "../router";

const LayoutComponent = props => (
  <Layout>
    <Layout.Content>
      <Row gutter={20}>
        <Col span={24}>
          <RouterConfig />
        </Col>
      </Row>
    </Layout.Content>
  </Layout>
);

LayoutComponent.propTypes = {
  match: PropTypes.string.isRequired
};

export default LayoutComponent;
