import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout, Icon } from "antd";
import RightContent from "../../components/GlobalHeader/RightContent";
import "./Topbar.scss";
import { toggleCollapsed, actOpenSideBar } from "../../redux/actions/app";

const { Header } = Layout;
class Topbar extends Component {
  render() {
    const { toggleCollapsed, actOpenSideBar, view } = this.props;
    return (
      <Header className="isomorphicTopbar">
        <div className="ant-pro-global-header">
          <Icon
            type="menu"
            className="trigger"
            onClick={view !== "MobileView" ? toggleCollapsed : actOpenSideBar}
          />
          <RightContent />
        </div>
      </Header>
    );
  }
}

export default connect(
  state => ({
    view: state.App.view
  }),
  { toggleCollapsed, actOpenSideBar }
)(Topbar);
