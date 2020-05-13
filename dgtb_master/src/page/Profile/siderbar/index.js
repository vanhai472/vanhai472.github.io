import React, { Component } from "react";
import {
  DashboardMasterContentSidebar,
  WraperMaster,
  BorderBottom,
} from "./styles";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link, withRouter } from "react-router-dom";

class index extends Component {
  state = {
    statusMaster: "Trực tuyến",
    status0: "Trực tuyến",
    status1: "Ngoại tuyến",
    status2: "Đi vắng",
  };
  render() {
    const { location } = this.props;
    console.log("location", location.pathname);
    const { status0, status1, status2, statusMaster } = this.state;
    const options = [
      { label: "Thông tin", content: "/profile" },
      { label: "Thư viện ảnh", content: "/photo-library" },
      { label: "Sắp xếp lịch hẹn", content: "/meeting-scheduling" },
    ];
    const styleDot = {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "#009CA9",
    };
    const menu = (
      <Menu>
        <Menu.Item
          key="0"
          onClick={() => this.setState({ statusMaster: status0 })}
        >
          <span style={styleDot}></span>{" "}
          <span style={{ color: "#009CA9" }}>{status0}</span>
        </Menu.Item>
        <Menu.Item
          key="1"
          onClick={() => this.setState({ statusMaster: status1 })}
        >
          <span style={styleDot}></span>{" "}
          <span style={{ color: "#EB5757" }}>{status1}</span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item
          key="3"
          onClick={() => this.setState({ statusMaster: status2 })}
        >
          <span style={styleDot}></span>{" "}
          <span style={{ color: "#6E6C7E" }}>{status2}</span>
        </Menu.Item>
      </Menu>
    );
    return (
      <DashboardMasterContentSidebar>
        <WraperMaster>
          <img
            className="avatar"
            src="/icon/Master/Master.png"
            alt="avatar master"
          />
          <h3 className="nameMaster">Thầy A</h3>
        </WraperMaster>
        <Dropdown overlay={menu} trigger={["click"]}>
          <a className="ant-dropdown-link">
            <p className="showStatus"> {statusMaster}</p> <DownOutlined />
          </a>
        </Dropdown>
        <BorderBottom />
        <div id="optionProfile">
          {options.map((option, i) => (
            <Link
              key={i}
              to={option.content}
              className={option.content === location.pathname ? "active" : ""}
            >
              {option.label}
            </Link>
          ))}
        </div>
      </DashboardMasterContentSidebar>
    );
  }
}

export default withRouter(index);
