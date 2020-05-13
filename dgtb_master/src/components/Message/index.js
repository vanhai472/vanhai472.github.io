import React, { Component } from "react";
import { Dropdown, Menu, Empty } from "antd";
import "./styles/index.css";
class Message extends Component {
	render() {
		const menu = (
			<Menu className="message">
				<div className="message-header">
					<span>Tin nhắn</span>
					<div className="message-option">
						<img src="/icon/Common/Write.png" alt="write" />
						<img src="/icon/Common/Menu.png" alt="menu" />
					</div>
				</div>
				<div className="message-content">
					<Empty description="Hiện bạn chưa có tin nhắn nào" />
				</div>
			</Menu>
		);
		return (
			<Dropdown overlay={menu} trigger={["click"]} placement="bottomLeft">
				<div className="header-notification">
					<img src="/icon/Common/message.svg" alt="Message" />
				</div>
			</Dropdown>
		);
	}
}

export default Message;
