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
            <Button onClick={props.handleButton}> Test </Button>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
};

export default OrderFactoryComponent;
