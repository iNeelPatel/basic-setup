import React, { Component } from "react";
import { connect } from "dva";
import { routerRedux } from "dva/router";
import Parse from "parse";
import { message, Form } from "antd";
import PropTypes from "prop-types";

import LoginScreenComponent from "../components/screen";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = { loading: false };
  }

  componentDidMount() {
    this.props.form.validateFields();

    if (Parse.User.current()) {
      this.props.dispatch(routerRedux.push({ pathname: "/user/dashboard" }));
    }
  }

  handleLogin(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({ loading: true });
        Parse.User.logIn(values.username, values.password).then(
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
      <LoginScreenComponent
        getFieldsError={this.props.form.getFieldsError}
        isFieldTouched={this.props.form.isFieldTouched}
        getFieldError={this.props.form.getFieldError}
        loading={this.state.loading}
        getFieldDecorator={this.props.form.getFieldDecorator}
        handleLogin={this.handleLogin}
      />
    );
  }
}

LoginScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  form: PropTypes.shape({
    getFieldDecorator: PropTypes.func.isRequired,
    validateFields: PropTypes.func.isRequired,
    getFieldsError: PropTypes.func.isRequired,
    getFieldError: PropTypes.func.isRequired,
    isFieldTouched: PropTypes.func.isRequired
  }).isRequired
};

const LoginScreenWithForm = Form.create()(LoginScreen);
const mapStateToProps = () => ({});
const LoginScreenWithState = connect(mapStateToProps)(LoginScreenWithForm);

export default LoginScreenWithState;
