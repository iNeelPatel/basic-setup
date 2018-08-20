import React, { Component } from "react";
import { connect } from "dva";
import { routerRedux } from "dva/router";
import Parse from "parse";
import PropTypes from "prop-types";
import { message } from "antd";
import HeaderComponent from "./component";

import * as commonUtils from "../../utils";

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.routes = ["packaging", "goal", "view", "batch", "simulate", "search"];
    const route = commonUtils.findRoute(this.routes, this.props.match);
    this.state = {
      route
    };
    this.handleNavigate = this.handleNavigate.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match !== prevProps.match) {
      this.changeRoute(this.props.match);
    }
  }

  changeRoute(match) {
    const route = commonUtils.findRoute(this.routes, match);
    this.setState({ route });
  }

  handleNavigate({ key }) {
    if (key === "logout") {
      Parse.User.logOut()
        .then(() => {
          this.props.dispatch(routerRedux.push({ pathname: "/" }));
        })
        .catch(error => message.error(error.message));
    } else {
      this.props.dispatch(routerRedux.push({ pathname: key }));
      this.setState({ route: key });
    }
  }

  render() {
    return (
      <HeaderComponent
        handleNavigate={this.handleNavigate}
        selectedRoute={this.state.route}
        roles={this.props.roles}
      />
    );
  }
}

HeaderContainer.propTypes = {
  match: PropTypes.string.isRequired,
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  rolesFetched: state.user.rolesFetched,
  roles: state.user.roles,
  match: state.routing.location.pathname
});

const HeaderContainerWithState = connect(mapStateToProps)(HeaderContainer);

export default HeaderContainerWithState;
