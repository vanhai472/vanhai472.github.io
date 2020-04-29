import React, { Component } from "react";
import Swiper from "react-id-swiper";
import CardMaster from "@Components/Card/CardMaster";
import { connect } from "react-redux";
import { FamousMasterContainer, MasterSlide } from "./styled";
import { getAllMasterTrend } from "@Actions/master";

const quantity = 50;
class Interested extends Component {
	state = {
		page: 1,
		type: "best_master",
	};
	componentDidMount() {
		this.getAllMasterTrend();
	}

	getAllMasterTrend = () => {
		const { getAllMasterTrend } = this.props;
		const { page, type } = this.state;
		getAllMasterTrend(page, quantity, type);
	};

	render() {
		const { masterTrend } = this.props;
		const params = {
			slidesPerView: 3,
			spaceBetween: 20,
			navigation: {
				nextEl: ".swiper-button-next.custom-next",
				prevEl: ".swiper-button-prev.custom-prev",
			},
		};
		const style = {
			color: "#0E0841",
			lineHeight: "28px",
			fontSize: 24,
			marginBottom: 24,
		};
		return (
			<div>
				<h3 style={style}>Có thể bạn quan tâm</h3>
				<FamousMasterContainer comment>
					<MasterSlide>
						{masterTrend.length > 0 ? (
							<Swiper {...params}>
								{masterTrend.map((value, key) => (
									<div key={key}>
										<CardMaster value={value} />
									</div>
								))}
							</Swiper>
						) : null}
					</MasterSlide>
				</FamousMasterContainer>
			</div>
		);
	}
}

export default connect(
	(state) => ({
		masterTrend: state.Master.masterTrend,
	}),
	{ getAllMasterTrend }
)(Interested);
