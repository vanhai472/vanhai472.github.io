import React, { Component } from "react";
import { Button, Avatar } from "antd";
import { connect } from "react-redux";

import SidebarMasterWapper, {
	SidebarMasterAvatar,
	SidebarMasterInforWrapper,
	SidebarMasterInforStatus,
	SidebarMasterMessenger,
} from "./styles/_Sidebar";
class SidebarMaster extends Component {
	state = {
		image: false,
	};

	render() {
		const { image } = this.state;
		const { view } = this.props;
		return (
			<SidebarMasterWapper>
				<SidebarMasterAvatar>
					<Avatar src="/icon/Master/Master.png" size={160} />
				</SidebarMasterAvatar>
				<SidebarMasterInforWrapper>
					<SidebarMasterInforStatus>
						<h3>Thầy A</h3>
						<div className="status">
							<span></span>
							<span>Trực tuyến</span>
						</div>
					</SidebarMasterInforStatus>
					<SidebarMasterMessenger>
						<Button
							className="sign-blue"
							style={{
								width: view === "DesktopView" || view === "TabView" ? 246 : 175,
							}}
						>
							<img src="/icon/Common/message.svg" alt="message" />
							Nhắn tin
						</Button>
					</SidebarMasterMessenger>
				</SidebarMasterInforWrapper>
				<img src="/icon/Common/heart.png" alt="heart" />
			</SidebarMasterWapper>
		);
	}
}

export default connect((state) => ({
	view: state.App.view,
}))(SidebarMaster);
