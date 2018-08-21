import React, { Component } from "react";
import { connect } from "dva";
import Parse from "parse";

import DashboardHomeComponent from "../components/home";

class DashboardHomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log("here");
    return <DashboardHomeComponent />;
  }
}

DashboardHomeContainer.propTypes = {};

const mapStateToProps = () => ({});

const DashboardHomeContainerWithState = connect(mapStateToProps)(
  DashboardHomeContainer
);

export default DashboardHomeContainerWithState;
