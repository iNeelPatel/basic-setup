import React, { Component } from "react";
import Parse from "parse";
import { routerRedux } from "dva/router";
import { message, Form } from "antd";
import { connect } from "dva";

import LoginFormComponent from "../component/login";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = { loading: false };
  }
  componentDidMount() {
    console.log("HERE");
    this.props.form.validateFields();

    if (Parse.User.current()) {
      this.props.dispatch(routerRedux.push({ pathname: "/user/dashboard" }));
    }
  }

  handleLogin(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log(values);
      if (!err) {
        this.setState({ loading: true });
        Parse.User.logIn(String(values.username), values.password).then(
          () => {
            this.setState({ loading: false });
            this.props.dispatch(routerRedux.push("/user/dashboard"));
          },
          error => {
            this.setState({ loading: false });
            message.error(error.message);
          }
        );
      }
    });
  }

  render() {
    return (
      <LoginFormComponent
        handleLogin={this.handleLogin}
        getFieldsError={this.props.form.getFieldsError}
        isFieldTouched={this.props.form.isFieldTouched}
        getFieldError={this.props.form.getFieldError}
        loading={this.state.loading}
        getFieldDecorator={this.props.form.getFieldDecorator}
      />
    );
  }
}

const LoginScreenWithForm = Form.create()(LoginForm);
const mapStateToProps = () => ({});
const LoginScreenWithState = connect(mapStateToProps)(LoginScreenWithForm);

export default LoginScreenWithState;
