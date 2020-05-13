import React, { Component } from "react";
import { Avatar, Button } from "antd";

import CardDashboardWrapper, {
	CardDashboardTime,
	CardDashboardUser,
	CardDashboardService,
	CardDashboardTotal,
} from "./styles";

class CardDashboard extends Component {
	render() {
		return (
			<CardDashboardWrapper>
				<CardDashboardTime>
					<span className="text">vào</span>
					<span className="detail">15:23, 23 Tháng 3, 2020</span>
				</CardDashboardTime>

				<CardDashboardUser>
					<span className="text">với</span>
					<div className="user">
						<Avatar size={40} src="/icon/User/avatar.png" />
						<span className="detail">Tú Anh</span>
						<Button className="sign-white" style={{ width: 77 }}>
							Nhắn tin
						</Button>
					</div>
				</CardDashboardUser>

				<CardDashboardService>
					<div className="service">
						<div className="text">dịch vụ</div>
						<div className="detail name-service">Bói bài Tarrot</div>
					</div>

					<div className="service">
						<div className="text"></div>
						<div className="service-option">
							<img src="/icon/Common/online.png" alt="online" />
							<span>Xem online</span>
						</div>
					</div>
				</CardDashboardService>

				<CardDashboardTotal>
					<span className="text">Thu nhập:</span>
					<span className="detail">2.000.000đ</span>
				</CardDashboardTotal>
			</CardDashboardWrapper>
		);
	}
}

export default CardDashboard;
