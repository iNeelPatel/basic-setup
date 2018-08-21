import React, { Component } from "react";
import { connect } from "dva";
import { routerRedux } from "dva/router";
import Parse from "parse";
import { message } from "antd";

import UserLayoutComponent from "./component";

class UserLayout extends Component {
  constructor(props) {
    super(props);
    this.currentUser = Parse.User.current();
    this.logout = this.logout.bind(this);
  }

  componentWillMount() {
    if (!this.currentUser) {
      this.props.dispatch(routerRedux.push({ pathname: "/" }));
    }
  }
  logout(e) {
    e.preventDefault();
    Parse.User.logOut();
    this.props.dispatch(routerRedux.push({ pathname: "/" }));
  }

  render() {
    return (
      <UserLayoutComponent
        logout={this.logout}
        match={this.props.match.path}
        username={this.currentUser ? this.currentUser.get("username") : ""}
      />
    );
  }
}

const mapStateToProps = state => ({});

const UserLayoutWithState = connect(mapStateToProps)(UserLayout);

export default UserLayoutWithState;
