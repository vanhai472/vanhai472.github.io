import React, { Component } from "react";
import { Avatar, Rate } from "antd";
import Swiper from "react-id-swiper";
import Rates from "@Components/Button/Rate";
import Location from "@Components/Button/Location";
import classNames from "classnames";
import CardSearchMasterWrapper, {
	WrapperSwiper,
	CardSearchMasterContent,
	ContentHeader,
	ContentCategory,
	ContentInfor,
	ContentFooter,
} from "./styles";

const params = {
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
};
class SearchResultMaster extends Component {
	constructor() {
		super();
		this.state = {
			image: false,
			boitoan: false,
			tuvi: false,
			ActiveDetailButton: false,
		};
	}
	render() {
		const number = [1, 2, 3];
		const { value, display } = this.props;
		const { image, boitoan, tuvi, ActiveDetailButton } = this.state;
		console.log("display", display);
		return (
			<CardSearchMasterWrapper>
				<WrapperSwiper>
					<Swiper {...params}>
						{number.map((e) => (
							<div key={e}>
								<Avatar
									size={32}
									src={`/icon/Service/4.png`}
									className="iconSevices"
								/>
								<img
									style={{ borderRadius: 8 }}
									className="image-viewResultServices"
									src={value.tellerFloat[0].src}
									alt="boi"
								/>
							</div>
						))}
					</Swiper>
				</WrapperSwiper>
				<CardSearchMasterContent>
					<ContentHeader>
						<Avatar size={40} src="/icon/Service/avatar.png" />
						<h3>{value.tellerFloat[0].name}</h3>
						<Rates rate={value.tellerFloat[0].star} />
						<div
							className="heartMaser"
							onClick={() => this.setState({ image: !image })}
						>
							{image === false ? (
								<img src="/icon/Common/heart.png" alt="heart" />
							) : (
								<img src="/icon/Common/heartRed.png" alt="heartRed" />
							)}
						</div>
					</ContentHeader>

					<ContentCategory>
						<span
							onClick={() => this.setState({ tuvi: !tuvi })}
							className={classNames("tuviBoitoan", {
								activeTuviBoitoan: tuvi === true,
							})}
						>
							Tử Vi
						</span>
						<span
							onClick={() => this.setState({ boitoan: !boitoan })}
							className={classNames("tuviBoitoan", {
								activeTuviBoitoan: boitoan === true,
							})}
						>
							Bói Toán
						</span>
					</ContentCategory>

					<ContentInfor>
						<Location name={value.tellerFloat[0].adress} cardSearch />
						<div className="direct">
							<img src="/icon/Service/km.png" alt="km" />
							<span> {value.tellerFloat[0].range} km</span>
						</div>
					</ContentInfor>

					<ContentFooter display={display}>
						<div className="rate-admin">
							<Rate disabled defaultValue={value.tellerFloat[0].rate} />
							<span>Đánh giá từ quản trị viên</span>
						</div>
						<div
							className={classNames("DetailButton", {
								DetailButtonActive: ActiveDetailButton === true,
							})}
							onClick={() =>
								this.setState({
									ActiveDetailButton: !this.state.ActiveDetailButton,
								})
							}
						>
							Chi tiết
						</div>
					</ContentFooter>
				</CardSearchMasterContent>
			</CardSearchMasterWrapper>
		);
	}
}

export default SearchResultMaster;
