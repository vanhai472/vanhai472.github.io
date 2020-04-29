import React, { Component } from "react";
import { Dropdown, Avatar } from "antd";
import HeaderMenuUser from "./HeaderMenuUser";
import { connect } from "react-redux";
import "./styles/index.css";
class UserHeader extends Component {
	render() {
		const { user } = this.props;
		return (
			<Dropdown
				overlay={<HeaderMenuUser />}
				trigger={["click"]}
				placement="bottomLeft"
			>
				<div className="header-user-login">
					<span className="header-name-user">{user.name}</span>
					<Avatar
						size={40}
						src={`${user.thumbnail}`}
						alt={`${user.thumbnail}`}
					/>
				</div>
			</Dropdown>
		);
	}
}

export default connect((state) => ({
	user: state.Auth.user,
}))(UserHeader);
