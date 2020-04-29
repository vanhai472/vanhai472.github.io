import React, { Component } from "react";
import Swiper from "react-id-swiper";
import {
	CommentHeader,
	TextTitle,
	ViewAll,
	FamousMasterContainer,
	MasterSlide,
} from "@Styles/home";
import Link from "next/link";
import CardMaster from "@Components/Card/CardMaster";
import _ from "lodash";

class MasterGoodContainer extends Component {
	render() {
		const params = {
			slidesPerView: "auto",
			spaceBetween: 20,
			navigation: {
				nextEl: ".swiper-button-next.custom-next",
				prevEl: ".swiper-button-prev.custom-prev",
			},
		};

		const { dataReviceTopMaster } = this.props;
		_.remove(dataReviceTopMaster.data.results, function (value) {
			return value.master.length === 0;
		});

		return (
			<FamousMasterContainer famous>
				<CommentHeader>
					<TextTitle maxLength={"true"}>
						<span className="text-title-content">
							Các Thầy được đánh giá tốt
						</span>
						<img src="/icon/Common/Frame.png" alt="Frame" />
					</TextTitle>
					<ViewAll>
						<Link href="/ViewAllRate">
							<a>Xem tất cả</a>
						</Link>
					</ViewAll>
				</CommentHeader>
				<MasterSlide>
					{dataReviceTopMaster.data.results.length > 0 ? (
						<Swiper {...params}>
							{dataReviceTopMaster.data.results.map((value, key) => (
								<div key={key}>
									<CardMaster value={value} />
								</div>
							))}
						</Swiper>
					) : null}
				</MasterSlide>
			</FamousMasterContainer>
		);
	}
}

export default MasterGoodContainer;
