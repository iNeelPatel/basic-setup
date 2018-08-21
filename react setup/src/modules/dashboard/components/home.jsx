import React from "react";
import PropTypes from "prop-types";
import { Layout, Row, Col, Button } from "antd";

const OrderFactoryComponent = props => {
  return (
    <Layout>
      <Layout.Content>
        <Row gutter={20}>
          <Col span={6}>
            <p>Dashboard</p>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
};

export default OrderFactoryComponent;
