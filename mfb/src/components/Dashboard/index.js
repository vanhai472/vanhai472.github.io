import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Menu, Icon } from "antd";
import "./index.scss";
class Dashboard extends Component {
  state = {
    current: this.props.match.path
      ? this.props.match.path.replace("/", "")
      : "dashboard"
  };
  handleClick = e => {
    const { key } = e;
    if (key === "dashboard") {
      this.props.history.push("/dashboard");
    }
    if (key === "dashboard-report") {
      this.props.history.push("/dashboard-report");
    }
    if (key === "buff-facebook") {
      this.props.history.push("/buff-facebook");
    }
    if (key === "buff-like-instagram") {
      this.props.history.push("/buff-like-instagram");
    }
    if (key === "set-ting-acount") {
      this.props.history.push("/set-ting-acount");
    }
    this.setState({
      current: key
    });
  };
  render() {
    const { current } = this.state;
    return (
      <section className="wrraper-page">
        <Menu
          onClick={this.handleClick}
          selectedKeys={[current]}
          mode="horizontal"
          theme="dark"
          style={{
            textAlign: "center",
            marginBottom: "50px",
            position: "fixed",
            zIndex: 50,
            width: "100%"
          }}
        >
          <Menu.Item key="dashboard">
            <Icon type="bank" className="icon-menu" />
            <span className="txt-menu">Home</span>
          </Menu.Item>
          <Menu.Item key="dashboard-report">
            <Icon type="issues-close" className="icon-menu" />
            <span className="txt-menu">Report</span>
          </Menu.Item>
          <Menu.Item key="buff-facebook">
            <Icon type="facebook" className="icon-menu" />
            <span className="txt-menu">Facebook</span>
          </Menu.Item>
          <Menu.Item key="buff-like-instagram">
            <Icon type="instagram" className="icon-menu" />
            <span className="txt-menu">Instagram</span>
          </Menu.Item>
          <Menu.Item key="set-ting-acount">
            <Icon type="user" className="icon-menu" />
            <span className="txt-menu">User</span>
          </Menu.Item>
        </Menu>
        <section className="wrapper-body">{this.props.children}</section>
      </section>
    );
  }
}

export default withRouter(Dashboard);
