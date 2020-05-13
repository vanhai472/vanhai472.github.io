import React, { Component } from "react";
import CardBooking from "@Components/Card/CardBooking";
import { Button } from "antd";
import CardBookingWrapper, {
	CardBookingFooter,
	CardBookingFooterLeft,
	CardBookingFooterRight,
} from "./styles";
class History extends Component {
	render() {
		const a = [
			{ denied: false },
			{ denied: true },
			{ denied: false },
			{ denied: false },
			{ denied: false },
		];
		return (
			<div>
				{a.map((value, key) => (
					<CardBookingWrapper key={key}>
						<CardBooking master />
						<CardBookingFooter>
							<CardBookingFooterLeft>
								<span>Giá</span>
								<span>2.000.000 VND</span>
								<span>Thanh toán online</span>
							</CardBookingFooterLeft>

							<CardBookingFooterLeft>
								<span>Giá</span>
								<span>1.800.000 VND</span>
							</CardBookingFooterLeft>

							<CardBookingFooterRight>
								{value.denied ? (
									<div id="denied">
										<h3>Phí hủy đặt lịch</h3>
										<div>100.000 VND</div>
										<span>Khách đã hủy đặt lịch</span>
									</div>
								) : (
									<div>
										<Button className="sign-blue" style={{ width: 180 }}>
											Xem khách đánh giá
										</Button>
									</div>
								)}
							</CardBookingFooterRight>
						</CardBookingFooter>
					</CardBookingWrapper>
				))}
			</div>
		);
	}
}

export default History;
