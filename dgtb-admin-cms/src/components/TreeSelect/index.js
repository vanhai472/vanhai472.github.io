import React, { Component } from "react";
import { TreeSelect } from "antd";
const { SHOW_PARENT } = TreeSelect;
class TreeSelects extends Component {
  state = {
    value: undefined
  };

  componentDidUpdate(prevProps, prevState) {
    const { certificate, certificateSkills } = this.props;
    if (
      prevProps.certificate !== certificate ||
      prevProps.certificateSkills !== certificateSkills
    ) {
      this.setState({
        value: certificate ? certificate : certificateSkills
      });
    }
  }
  onChange = value => {
    this.setState({ value });
    this.props.onChange(value);
  };

  render() {
    const { treeData } = this.props;
    return (
      <TreeSelect
        treeData={treeData}
        value={this.state.value}
        treeCheckable={true}
        showCheckedStrategy={SHOW_PARENT}
        searchPlaceholder="Chọn Loại"
        onChange={this.onChange}
      />
    );
  }
}

export default TreeSelects;

// const tProps = {
//   treeData: this.props.treeData,
//   value: this.props.value,
//   onChange: this.onChange,
//   treeCheckable: true,
//   showCheckedStrategy: SHOW_PARENT,
//   searchPlaceholder: "Chọn Loại",
//   style: {
//     width: "100%"
//   }
// };
