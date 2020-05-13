import React, { Component } from "react";
import { Avatar } from "antd";
import CardBookingWrapper, {
	CardBookingContent,
	CardBookingInforWrapper,
	CardBookingInfor,
	InforLeft,
	InforRight,
	CardBookingImage,
} from "./styles";
class CardBooking extends Component {
	render() {
		const value = true;
		const { master } = this.props;
		return (
			<CardBookingWrapper>
				<CardBookingContent>
					<CardBookingInforWrapper>
						<CardBookingInfor>
							<InforLeft border>
								<div className="booking-header">
									<Avatar size={40} src="/icon/Service/avatar.png" />
									<h3>{master ? `Tú Anh` : `Thầy Nguyễn Văn A`} </h3>
								</div>
							</InforLeft>
							<InforRight>
								<div className="infor">
									<div>Mã số</div>
									<span>TB-42089/2020</span>
								</div>
							</InforRight>
						</CardBookingInfor>

						<CardBookingInfor>
							<InforLeft>
								{value ? null : (
									<div className="booking-header">
										<Avatar size={40} src="icon/service/avatar.png" />
										<h3>Thầy Nguyễn Văn A</h3>
									</div>
								)}
							</InforLeft>
							<InforRight>
								<div className="infor">
									<div>Thời gian xem</div>
									<span>16:30 Thứ 3, 24 tháng 2, 2020</span>
								</div>
							</InforRight>
						</CardBookingInfor>

						<CardBookingInfor>
							<InforLeft>
								{value ? null : (
									<div className="booking-header">
										<Avatar size={40} src="icon/service/avatar.png" />
										<h3>Thầy Nguyễn Văn A</h3>
									</div>
								)}
							</InforLeft>
							<InforRight>
								<div className="infor">
									<div>Hình thức</div>
									<span>Gặp mặt trực tiếp</span>
								</div>
							</InforRight>
						</CardBookingInfor>
					</CardBookingInforWrapper>

					<CardBookingImage>
						<img src="/icon/Service/3.png" alt="3" id="category" />
						<Avatar size={32} src="/icon/Service/4.png" className="service" />
					</CardBookingImage>
				</CardBookingContent>
			</CardBookingWrapper>
		);
	}
}

export default CardBooking;
