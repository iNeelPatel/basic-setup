import React, { Component } from "react";
import { connect } from "dva";
import { routerRedux } from "dva/router";
import PropTypes from "prop-types";
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
    } else {
      const roleQuery = new Parse.Query(Parse.Role);
      roleQuery.equalTo("users", this.currentUser);
      roleQuery
        .find()
        .then(roles => {
          if (roles.some(role => role.get("name") === "admin")) {
            this.props.dispatch({
              type: "user/addRoles",
              payload: { roles }
            });
          } else {
            message.error("User is not an admin.");
            Parse.User.logOut()
              .then(() => {
                console.log("here");
                this.props.dispatch(
                  routerRedux.push({
                    pathname: "/"
                  })
                );
              })
              .catch(error => message.error(error.message));
          }
        })
        .catch(error => {
          console.log(error);
          message.error(error.message);
          Parse.User.logOut()
            .then(() => {
              console.log("here");
              this.props.dispatch(
                routerRedux.push({
                  pathname: "/"
                })
              );
            })
            .catch(error => message.error(error.message));
        });
    }
  }

  logout(e) {
    e.preventDefault();
    Parse.User.logOut();
    this.props.dispatch(routerRedux.push({ pathname: "/" }));
  }

  render() {
    if (this.props.roles.length > 0) {
      return (
        <UserLayoutComponent
          logout={this.logout}
          match={this.props.match.path}
          username={this.currentUser ? this.currentUser.get("username") : ""}
        />
      );
    }

    return null;
  }
}

UserLayout.propTypes = {
  match: PropTypes.shape({ path: PropTypes.string.isRequired }).isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  roles: state.user.roles
});

const UserLayoutWithState = connect(mapStateToProps)(UserLayout);

export default UserLayoutWithState;
