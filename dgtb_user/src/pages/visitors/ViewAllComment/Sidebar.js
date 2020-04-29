import React, { Component } from "react";
import { Radio } from "antd";
import FilterContainer, {
	FilterHeader,
	FilterText,
	FilterStar,
	FilterBooking,
} from "./styles";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import { getAllRateOption } from "@Actions/rates";
class Sidebar extends Component {
	state = {
		star: null,
		booking: null,
		filters: {},
	};

	renderStar = (quantity) => {
		let html = [];
		for (let index = 1; index <= quantity; index++) {
			html.push(index);
		}
		return html.map((key) => (
			<img src="/icon/Common/star.png" alt="Star-full" key={key} />
		));
	};

	onChange = (e) => {
		if (e.target.name === "filter-star") {
			this.setState({
				star: e.target.value,
			});
		} else {
			this.setState({
				booking: e.target.value,
			});
		}
	};

	reSetFilter = () => {
		this.setState({
			star: null,
			booking: null,
		});
	};

	render() {
		const { star, booking } = this.state;
		return (
			<FilterContainer>
				<FilterHeader>
					<div className="filter-reset">
						<span>Bộ lọc</span>
						<span onClick={this.reSetFilter}>Đặt lại bộ lọc</span>
					</div>
					<div>Hiển thị kết quả phân loại theo:</div>
				</FilterHeader>

				<FilterStar>
					<FilterText>Theo số sao đánh giá</FilterText>
					<Radio.Group
						className="filter-star"
						name="filter-star"
						onChange={this.onChange}
						value={star}
					>
						<Radio value={1}>{this.renderStar(1)}</Radio>
						<Radio value={2}>{this.renderStar(2)}</Radio>
						<Radio value={3}>{this.renderStar(3)}</Radio>
						<Radio value={4}>{this.renderStar(4)}</Radio>
						<Radio value={5}>{this.renderStar(5)}</Radio>
					</Radio.Group>
				</FilterStar>

				<FilterBooking>
					<FilterText>Loại đánh giá</FilterText>
					<Radio.Group
						className="filter-booking"
						name="filter-booking"
						onChange={this.onChange}
						value={booking}
					>
						<Radio value={1} style={{ fontSize: 14 }}>
							<span className="booking"> Có đặt lịch</span>
						</Radio>
						<Radio value={2} style={{ fontSize: 14 }}>
							<span className="booking">Chưa đặt lịch</span>
						</Radio>
					</Radio.Group>
				</FilterBooking>
			</FilterContainer>
		);
	}
}

export default connect(null, { getAllRateOption })(withRouter(Sidebar));
