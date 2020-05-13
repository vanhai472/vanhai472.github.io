import React, { Component } from "react";
import CardWithdrawalWrapper, { CardWithdrawalItem } from "./styles";
class CardWithdrawal extends Component {
	render() {
		return (
			<CardWithdrawalWrapper>
				<CardWithdrawalItem>
					<div className="text">Tài khoản thụ hưởng</div>
					<div className="infor-user">
						<span>BIDV-40285092580927</span>
						<span>TRUONG NGOC ANH</span>
					</div>
				</CardWithdrawalItem>

				<CardWithdrawalItem>
					<div className="text">T15:23, 23 Tháng 3, 2020</div>
				</CardWithdrawalItem>

				<CardWithdrawalItem>
					<div className="text">Số tiền:</div>
					<div className="current">20.000.000 VND</div>
				</CardWithdrawalItem>
			</CardWithdrawalWrapper>
		);
	}
}

export default CardWithdrawal;
