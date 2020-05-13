import React, { Component } from "react";
import CardBooking from "@Components/Card/CardBooking";
import CardBookingWrapper, {
	CardBookingFooter,
	CardBookingFooterLeft,
} from "./styles";
class Comming extends Component {
	render() {
		const a = [1, 2, 3, 4, 5];
		return (
			<div>
				{a.map((value, key) => (
					<CardBookingWrapper key={key}>
						<CardBooking master />
						<CardBookingFooter>
							<CardBookingFooterLeft>
								<span>Giá</span>
								<span>2.000.000 VND</span>
								<span>Đang chờ khách thanh toán</span>
							</CardBookingFooterLeft>
						</CardBookingFooter>
					</CardBookingWrapper>
				))}
			</div>
		);
	}
}

export default Comming;
