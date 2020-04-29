import React, { Component } from "react";
import SearchContent, { Search } from "@Styles/Home/_search_location";
import { SearchLocationContainer } from "@Styles/home";
import CardAddress from "@Components/Card/CardAddress";
import Swiper from "react-id-swiper";
import Link from "next/link";
import { connect } from "react-redux";
import { getAllMasterLocation } from "@Actions/master";
class SearchLocation extends Component {
	componentDidMount() {
		const { getAllMasterLocation } = this.props;
		getAllMasterLocation();
	}

	render() {
		const params = {
			containerClass: "swiper-container search-location",
			slidesPerView: "auto",
			spaceBetween: 20,
			navigation: {
				nextEl: ".swiper-button-next.custom-next",
				prevEl: ".swiper-button-prev.custom-prev",
			},
		};
		const { masterLocation } = this.props;
		return (
			<SearchLocationContainer>
				<Search>
					Tìm kiếm theo <br /> Khu vực
				</Search>
				<SearchContent>
					{masterLocation.length > 0 ? (
						<Swiper {...params}>
							{masterLocation.map((value, key) => (
								<div key={key}>
									<CardAddress value={value} />
								</div>
							))}
						</Swiper>
					) : null}
				</SearchContent>
			</SearchLocationContainer>
		);
	}
}

export default connect(
	(state) => ({
		masterLocation: state.Master.masterLocation,
	}),
	{ getAllMasterLocation }
)(SearchLocation);
