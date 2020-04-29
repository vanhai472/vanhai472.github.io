import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout } from "antd";
import "antd/dist/antd.css";
import WindowResize from "react-window-size-listener";
import Topbar from "../Topbar/Topbar";
import Sidebar from "../Sidebar/Sidebar";
import "./index.scss";
import { toggleAll } from "../../redux/actions/app";
import classNames from "classnames";

const { Content } = Layout;
class App extends Component {
  render() {
    const { height, children, toggleAll, collapsed } = this.props;
    const url = "/dashboard";
    const { view } = this.props;
    return (
      <Layout style={{ height: height }}>
        <WindowResize
          onResize={windowSize =>
            toggleAll(windowSize.windowWidth, windowSize.windowHeight)
          }
        />
        <Sidebar url={url} />
        <Layout
          className={classNames({
            isomorphicLayout: view !== "MobileView" ? true : false,
            isomorphicLayout: collapsed ? false : true,
            isomorphicLayoutCol: collapsed ? true : false
            // isomorphicLayoutCol: view === "MobileView" ? false : null
          })}
        >
          <Topbar url={url} />
          <Content>{children}</Content>
        </Layout>
      </Layout>
    );
  }
}

export default connect(
  state => ({
    view: state.App.view,
    collapsed: state.App.collapsed
  }),
  { toggleAll }
)(App);
