import React from "react";
import { Segment, Dimmer, Loader, Image } from "semantic-ui-react";

const LoadingComponent = props => (
  <Segment>
    <Dimmer active inverted>
      <Loader inverted>Loading</Loader>
    </Dimmer>
  </Segment>
);

export default LoadingComponent;
