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

class MasterNewContainer extends Component {
	render() {
		const params = {
			slidesPerView: "auto",
			spaceBetween: 20,
			navigation: {
				nextEl: ".swiper-button-next.custom-next",
				prevEl: ".swiper-button-prev.custom-prev",
			},
		};

		const { dataReviceMasterNew } = this.props;
		_.remove(dataReviceMasterNew.data.results, function (value) {
			return value.master.length === 0;
		});

		return (
			<FamousMasterContainer famous>
				<CommentHeader>
					<TextTitle maxLength={"true"}>
						<span className="text-title-content">Các Thầy mới</span>
						<img src="/icon/Common/Frame.png" alt="Frame" />
					</TextTitle>
					<ViewAll>
						<Link href="/ViewAllRate">
							<a>Xem tất cả</a>
						</Link>
					</ViewAll>
				</CommentHeader>
				<MasterSlide>
					{dataReviceMasterNew.data.results.length > 0 ? (
						<Swiper {...params}>
							{dataReviceMasterNew.data.results.map((value, key) => (
								<div key={key}>
									<CardMaster value={value} newMaster />
								</div>
							))}
						</Swiper>
					) : null}
				</MasterSlide>
			</FamousMasterContainer>
		);
	}
}

export default MasterNewContainer;
