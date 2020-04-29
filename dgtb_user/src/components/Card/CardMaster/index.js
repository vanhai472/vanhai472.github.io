import React, { Component } from "react";
import "./styles/index.css";
import Category from "@Components/Button/Category";
import Location from "@Components/Button/Location";
import Rate from "@Components/Button/Rate";
import { connect } from "react-redux";
import { toggleLogin } from "@Actions/app";
import _ from "lodash";
import classNames from "classnames";
class MasterFamous extends Component {
	state = {
		image: false,
		activeBufflist: false,
	};

	handleImage = () => {
		this.setState({
			image: true,
		});
	};
	handleBooking = () => {
		const { token, toggleLogin } = this.props;
		if (_.isEmpty(token)) {
			toggleLogin();
		}
	};
	render() {
		const { image, activeBufflist } = this.state;
		const { value, marginGoogle, widthComponent, newMaster } = this.props;
		console.log("value card master", value);
		return (
			<div className="card-main" style={{ width: widthComponent }}>
				<div className="card-main-header">
					<img
						src={`${value.master.thumbnail}`}
						alt={`${value.master.thumbnail}`}
					/>
					<div className="card-main-header-infor">
						{newMaster ? <span>Thầy mới</span> : null}
						<div className="wraper-heart" onClick={this.handleImage}>
							{image === false ? (
								<img src="/icon/Common/heart.png" alt="heart" />
							) : (
								<img src="/icon/Common/heartRed.png" alt="heartRed" />
							)}
						</div>
						<div className="card-mian-header-skill">
							<div onClick={this.handleBackgroundTuvi}>
								<Category name={"Tử Vi"} />
							</div>
							<div onClick={this.handleBackgroundBoiToan}>
								<Category name={"Bói Toán"} />
							</div>
						</div>
					</div>
				</div>
				<div className="card-main-content">
					<span className="card-main-name">{`Thầy ${value.master.name}`}</span>
					<div className="card-main-detail">
						<div className="detail-rate">
							<Location
								name={
									value.master.workAddress
										? value.master.workAddress.province
										: null
								}
							/>
							<Rate rate={value.master.averageStar} />
						</div>
						<div
							className={classNames("sign-white", {
								activeSingWhite: activeBufflist === true,
							})}
							style={{ width: 96, margin: marginGoogle }}
							onClick={
								(this.handleBooking,
								() =>
									this.setState({ activeBufflist: !this.state.activeBufflist }))
							}
						>
							Đặt lịch
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(
	(state) => ({
		token: state.Auth.token,
	}),
	{ toggleLogin }
)(MasterFamous);
