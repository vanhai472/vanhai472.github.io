import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon, Drawer } from "antd";
import { connect } from "react-redux";
import { toggleCollapsed, actCloseSideBar } from "../../redux/actions/app";
import options from "./options";
import "./Sidebar.scss";
import Logo from "../../components/utility/logo";
import { siteIcon, siteConfig } from "../../settings";

const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: siteIcon
});
const { Sider } = Layout;
const { SubMenu } = Menu;

const stripTrailingSlash = str => {
  if (str.substr(-1) === "/") {
    return str.substr(0, str.length - 1);
  }
  return str;
};

class Sidebar extends Component {
  getMenuItem = Option => {
    const { key, label, icon, children } = Option;
    const url = stripTrailingSlash(this.props.url);
    if (children) {
      return (
        <SubMenu
          key={key}
          title={
            <span className="isMenuHoder">
              <MyIcon type={icon} className="isMenuIcon" />
              <span className="textMenu">{label}</span>
            </span>
          }
        >
          {children.map(child => {
            return (
              <Menu.Item key={child.key}>
                <Link to={child.key}>
                  <span className="textMenu">{child.label}</span>
                </Link>
              </Menu.Item>
            );
          })}
        </SubMenu>
      );
    } else {
      return (
        <Menu.Item key={key}>
          <Link to={`${url}/${key}`}>
            <span>
              <MyIcon type={icon} className="isMenuIcon" />
              <span className="textMenu">{label}</span>
            </span>
          </Link>
        </Menu.Item>
      );
    }
  };
  render() {
    const { collapsed, view, visibleSideBar, actCloseSideBar } = this.props;
    const mode = collapsed === true ? "vertical" : "inline";
    return (
      <div>
        {view !== "MobileView" ? (
          <Sider
            trigger={siteConfig.footerText}
            collapsible={true}
            collapsed={collapsed}
            className="isomorphicSidebar"
          >
            <Logo collapsed={collapsed} />
            <Menu theme="dark" mode={mode} className="dashboardMenu">
              {options.map(Option => this.getMenuItem(Option))}
            </Menu>
          </Sider>
        ) : (
          <Drawer
            visible={visibleSideBar}
            onClose={actCloseSideBar}
            placement="left"
            closable={false}
            bodyStyle={{ padding: 0, background: "#001529" }}
            drawerStyle={{ background: "#001529" }}
          >
            <Logo collapsed={false} />
            <Menu theme="dark" mode={mode} className="dashboardMenu">
              {options.map(Option => this.getMenuItem(Option))}
            </Menu>
          </Drawer>
        )}
      </div>
    );
  }
}

export default connect(
  state => ({
    collapsed: state.App.collapsed,
    view: state.App.view,
    visibleSideBar: state.App.visibleSideBar
  }),
  { toggleCollapsed, actCloseSideBar }
)(Sidebar);
