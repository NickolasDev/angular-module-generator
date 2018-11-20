import React, { Component } from "react";
import SplitPane from "react-split-pane";
import { Controlled as CodeMirror } from "react-codemirror2";
let json2ts = require("json2ts");
require("codemirror/lib/codemirror.css");
require("codemirror/theme/material.css");
require("codemirror/theme/neat.css");
require("codemirror/mode/xml/xml.js");
require("codemirror/mode/javascript/javascript.js");

class JsonToTs extends Component {
  constructor(props) {
    super(props);
    this.state = this.getState();
  }

  isValidJSONString = str => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };

  saveState = () => {
    localStorage.setItem("_jsonToTs", JSON.stringify(this.state));
  };

  getState = () => {
    let data = localStorage.getItem("_jsonToTs");
    if (data) {
      data = JSON.parse(data);
    } else {
      data = {
        value: "{}",
        typescript: ""
      };
    }
    return data;
  };

  updateValue = (editor, data, value) => {
    this.setState({ value }, () => {
      let data = this.state.value;
      let typescript = "";
      if (this.isValidJSONString(data)) {
        typescript = json2ts.convert(data);
      }
      this.setState({ typescript }, () => this.saveState());
    });
  };

  render() {
    return (
      <SplitPane
        split="vertical"
        minSize={400}
        defaultSize={400}
        style={{ position: "relative", minHeight: "100vh" }}
      >
        <CodeMirror
          value={this.state.value}
          options={{
            mode: "application/ld+json",
            theme: "material",
            lineNumbers: true
          }}
          onBeforeChange={this.updateValue}
        />
        <CodeMirror
          value={this.state.typescript}
          options={{
            mode: "application/ld+json",
            theme: "material",
            lineNumbers: true
          }}
        />
      </SplitPane>
    );
  }
}

export default JsonToTs;
