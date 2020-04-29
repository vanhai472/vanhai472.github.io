import React, { Component } from "react";
import Swiper from "react-id-swiper";
import CardService from "@Components/Card/CardService";
import {
	CommentHeader,
	TextTitle,
	ViewAll,
	FamousMasterContainer,
	MasterSlide,
} from "@Styles/home";
import Link from "next/link";
import { connect } from "react-redux";
import { getAllMasterService } from "@Actions/master";

const quantity = 20;
class Service extends Component {
	state = {
		page: 1,
	};
	componentDidMount() {
		const { getAllMasterService } = this.props;
		const { page } = this.state;
		getAllMasterService(page, quantity);
	}

	render() {
		const params = {
			slidesPerView: "auto",
			spaceBetween: 20,
			navigation: {
				nextEl: ".swiper-button-next.custom-next",
				prevEl: ".swiper-button-prev.custom-prev",
			},
		};

		const { masterService } = this.props;
		return (
			<FamousMasterContainer>
				<CommentHeader>
					<TextTitle>
						<div className="text-title-content">Dịch vụ</div>
						<img src="/icon/Common/Frame.png" alt="Frame" />
					</TextTitle>
					<ViewAll>
						<Link href="/ViewAllRate">
							<a>Xem tất cả</a>
						</Link>
					</ViewAll>
				</CommentHeader>
				<MasterSlide>
					{masterService.length > 0 ? (
						<Swiper {...params}>
							{masterService.map((value, key) => (
								<div key={key}>
									<CardService value={value} />
								</div>
							))}
						</Swiper>
					) : null}
				</MasterSlide>
			</FamousMasterContainer>
		);
	}
}

export default connect(
	(state) => ({
		masterService: state.Master.masterService,
	}),
	{ getAllMasterService }
)(Service);
