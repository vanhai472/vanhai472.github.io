import React, { Component } from "react";
import { Input } from "antd";

class InputComponent extends Component {
  render() {
    const { field, ...rest } = this.props;
    const { disabled, maxLength, placeholder } = field;
    return (
      <Input
        {...rest}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
      />
    );
  }
}

export default InputComponent;
