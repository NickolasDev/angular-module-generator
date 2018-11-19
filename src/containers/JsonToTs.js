import React, { Component } from 'react';
import SplitPane from "react-split-pane";

class JsonToTs extends Component {
  render() {
    return <SplitPane split="vertical" minSize={400} defaultSize={400} style={{position:"relative", minHeight:'100vh'}}>
            <div></div>
            <div></div>
        </SplitPane>;
  }
}

export default JsonToTs;
