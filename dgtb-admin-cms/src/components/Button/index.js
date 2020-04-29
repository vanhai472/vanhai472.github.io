import React, { Component } from "react";
import { Button } from "antd";
import "./index.scss";
class BaseButton extends Component {
  render() {
    return (
      <div className="add-button">
        <Button type="primary" shape="round" icon="plus">
          {this.props.name}
        </Button>
      </div>
    );
  }
}

export default BaseButton;
