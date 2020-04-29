import React, { Component } from "react";
import { Dropdown, Menu, Empty } from "antd";
import "./styles/index.css";
class Notification extends Component {
	render() {
		const menu = (
			<Menu className="message notification">
				<div className="message-header">
					<span>Thông báo</span>
					<div className="notification-option">
						<Dropdown
							placement="bottomRight"
							overlay={
								<Menu className="notification-option-select">
									<Menu.Item>
										<img src="/icon/Common/check.png" alt="check" />
										<span>Đánh dấu tất cả là đã đọc</span>
									</Menu.Item>
								</Menu>
							}
							trigger={["click"]}
						>
							<img src="/icon/Common/Menu.png" alt="menu" />
						</Dropdown>
					</div>
				</div>
				<div className="message-content">
					<Empty description="Hiện bạn chưa có thong báo nào" />
				</div>
			</Menu>
		);
		return (
			<Dropdown overlay={menu} trigger={["click"]} placement="bottomLeft">
				<div className="header-notification">
					<img src="/icon/Common/notification.svg" alt="" />
				</div>
			</Dropdown>
		);
	}
}

export default Notification;
