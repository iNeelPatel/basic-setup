import React from "react";
import { Row, Col, Form, Icon, Input, Button } from "antd";

import styles from "./login.css";

const rules = {
  password: {
    rules: [{ required: true, message: "Please input your Password!" }]
  },
  username: {
    rules: [{ required: true, message: "Please input your username!" }]
  }
};

const hasErrors = fieldsError =>
  Object.keys(fieldsError).some(field => fieldsError[field]);

const LoginScreenComponent = props => {
  const usernameError =
    props.isFieldTouched("username") && props.getFieldError("username");
  const passwordError =
    props.isFieldTouched("password") && props.getFieldError("password");
  return (
    <Row align="middle" justify="space-around" type="flex">
      <Col span={10}>
        <Row align="middle" justify="space-around" type="flex">
          <Col span={10}>
            <div className={styles.logo}>
              <img src="/assets/dte.png" alt="logo" />
            </div>
          </Col>
        </Row>
        <Row align="middle" justify="space-around" type="flex">
          <Col span={10}>
            <Form onSubmit={props.handleLogin} className={styles.form}>
              <Form.Item
                className={styles.formItem}
                validateStatus={usernameError ? "error" : ""}
                help={usernameError || ""}
              >
                {props.getFieldDecorator("username", rules.username)(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Username"
                  />
                )}
              </Form.Item>
              <Form.Item
                className={styles.formItem}
                validateStatus={passwordError ? "error" : ""}
                help={passwordError || ""}
              >
                {props.getFieldDecorator("password", rules.password)(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="Password"
                  />
                )}
              </Form.Item>
              <Form.Item className={styles.formItem}>
                <Button
                  loading={props.loading}
                  type="primary"
                  htmlType="submit"
                  disabled={hasErrors(props.getFieldsError())}
                  className={styles.loginButton}
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default LoginScreenComponent;
