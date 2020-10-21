import React, { Component, useState } from "react";
import { paragraph } from "./paragraph";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { str: [] };
  }
  addPara = (para) => {
    const copyStr = this.state.str.append(para);
    this.setState({ str: copyStr });
  };

  render() {
    return (
      <div id="main">
        {/* Do not remove this main div!! */}
        <button
          id="click"
          onClick={this.addPara(
            "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
          )}
        >
          renderPara
        </button>
        {this.state.str.map((string) => (
          <paragraph id="para" para={string} />
        ))}
      </div>
    );
  }
}

export default App;
