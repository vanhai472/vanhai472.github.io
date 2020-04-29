import React, { Component } from "react";
import { Input, Select } from "antd";

const InputGroup = Input.Group;
const { Option } = Select;

class CustomInput extends Component {
  render() {
    const { skills } = this.props;
    return (
      <InputGroup compact style={{ width: "60%", marginRight: 8 }}>
        <Select defaultValue="Tử Vi">
          {skills.map((e, index) => (
            <Option key={index} value={e.value}>
              {e.value}
            </Option>
          ))}
        </Select>
        <Input style={{ width: "84%" }} placeholder="Nhập Giá" />
      </InputGroup>
    );
  }
}

export default CustomInput;
