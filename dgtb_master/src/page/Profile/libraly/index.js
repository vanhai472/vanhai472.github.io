import React, { Component } from "react";
import Siderbar from "../siderbar";

class index extends Component {
  render() {
    return (
      <div className="container">
        <div className="main">
          <div className="main-page">
            <div style={{ marginTop: 64 }}>
              <Siderbar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
