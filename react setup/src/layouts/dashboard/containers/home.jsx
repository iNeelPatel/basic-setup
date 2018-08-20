import React, { Component } from "react";
import { connect } from "dva";
import Parse from "parse";

import DashboardHomeComponent from "../components/home";

class DashboardHomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleButton() {
    Parse.Cloud.run("test");
  }

  render() {
    return (
      <DashboardHomeComponent handleButton={this.handleButton.bind(this)} />
    );
  }
}

DashboardHomeContainer.propTypes = {};

const mapStateToProps = () => ({});

const DashboardHomeContainerWithState = connect(mapStateToProps)(
  DashboardHomeContainer
);

export default DashboardHomeContainerWithState;
