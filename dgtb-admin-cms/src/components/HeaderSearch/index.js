import React, { Component } from "react";
import { AutoComplete, Input, Icon } from "antd";
import { connect } from "react-redux";
import classNames from "classnames";
import "./index.scss";
import { actionSearch } from "../../redux/actions/app";
class HeaderSearch extends Component {
  render() {
    const { smooth, actionSearch } = this.props;
    const inputClass = classNames("input", {
      show: smooth
    });
    return (
      <div className="headerSearch">
        <Icon type="search" key="Icon" onClick={actionSearch} />
        <AutoComplete key="AutoComplete" className={inputClass}>
          <Input placeholder="Tìm Kiếm" />
        </AutoComplete>
      </div>
    );
  }
}

export default connect(
  state => ({
    smooth: state.App.smooth
  }),
  { actionSearch }
)(HeaderSearch);
