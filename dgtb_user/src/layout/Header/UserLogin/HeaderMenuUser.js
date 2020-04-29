import React, { Component } from "react";
import { Menu } from "antd";
import Link from "next/link";
import "./styles/index.css";
import { connect } from "react-redux";
import { logout } from "@Actions/auth";
class HeaderMenuUser extends Component {
	Logout = () => {
		const { logout, token } = this.props;
		logout(token);
	};

	render() {
		return (
			<Menu className="header-user-option">
				<Menu.Item key="profile-user">
					<Link href={{ pathname: "/Profile", query: { type: "infor" } }}>
						<a>
							<img src="/icon/Common/Profile.png" alt="Profile" />
							<span>Trang cá nhân</span>
						</a>
					</Link>
				</Menu.Item>
				<Menu.Item key="favourite-user">
					<Link href="/user/favourite-list">
						<a>
							<img src="/icon/Common/1.png" alt="Heart" />
							<span>Yêu thích</span>
						</a>
					</Link>
				</Menu.Item>
				<Menu.Item key="logout">
					<div onClick={this.Logout}>
						<img src="/icon/Common/Log_out.png" alt="Log_out" />
						<span>Đăng xuất</span>
					</div>
				</Menu.Item>
			</Menu>
		);
	}
}

export default connect(null, { logout })(HeaderMenuUser);
