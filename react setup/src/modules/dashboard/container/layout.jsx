import React, { Component } from "react";
import { connect } from "dva";
import PropTypes from "prop-types";

import LayoutComponent from "../components/layout";

class Layout extends Component {
  componentWillMount() {
    document.title = "PnM | Dashboard";
  }

  render() {
    return <LayoutComponent match={this.props.match.path} />;
  }
}

Layout.propTypes = {
  match: PropTypes.shape({ path: PropTypes.string.isRequired }).isRequired
};

const mapStateToProps = state => ({});

const LayoutWithState = connect(mapStateToProps)(Layout);

export default LayoutWithState;
