import React, { Component } from "react";
import { Avatar, Icon, Menu } from "antd";
import HeaderDropdown from "../HeaderDropdown";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/auth";

class AvatarDropdown extends Component {
  Logout = () => {
    const { logout, token } = this.props;
    logout(token);
  };
  render() {
    const { username } = this.props;
    const menuHeaderDropdown = (
      <Menu className="menu">
        <Menu.Item key="logout">
          <Icon type="logout" />
          <span className="menuText" onClick={() => this.Logout()}>
            logout
          </span>
        </Menu.Item>
      </Menu>
    );

    return (
      <HeaderDropdown overlay={menuHeaderDropdown}>
        <span className="account action">
          <Avatar
            size="small"
            src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
            alt="avatar"
            className="avatar"
          />
          <span>{username}</span>
        </span>
      </HeaderDropdown>
    );
  }
}

export default connect(
  state => ({
    username: state.Auth.user,
    token: state.Auth.token
  }),
  { logout }
)(AvatarDropdown);
