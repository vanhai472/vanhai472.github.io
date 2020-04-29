import React, { Component } from "react";
import ItemComment from "./styles/itemComment";
import { Avatar, Rate } from "antd";
import moment from "moment";
import _ from "lodash";
class ItemComments extends Component {
	render() {
		const { value } = this.props;
		return (
			<ItemComment>
				<div className="list-comment-header">
					<Avatar
						size={64}
						src={`${value.user[0].infor.thumbnail}`}
						alt={`${value.user[0].infor.thumbnail}`}
					/>
					{value.booked === 1 ? (
						<div className="schedule-rate">
							<img src="/image/comment/Check.png" alt="" />
							<div className="content-schedule">Có đặt lịch</div>
						</div>
					) : null}
				</div>
				<div className="user-rate">
					<div className="user-name-rate">
						{_.truncate(value.user[0].name, { length: 16 })}
					</div>
					<Rate
						disabled
						defaultValue={value.details.star}
						style={{ fontSize: 16 }}
					/>
				</div>
				<div className="content-rate">
					{/* {_.truncate(value.content, { length: 130 })} */}
					{value.content}
				</div>
				<div className="rate-master">
					<div className="master-schedule">
						<div className="master-content">
							<Avatar
								style={{ marginRight: 8 }}
								size={40}
								src={`${value.master[0].infor.thumbnail}`}
								alt={`${value.master[0].infor.thumbnail}`}
							/>
							<span>{value.master[0].name}</span>
						</div>
					</div>
				</div>
				<div className="card-feedback">
					<div className="schedule-time">
						{moment(value.createdAt).format("DD/MM/YYYY")}
					</div>
					<div className="feedback-rate">
						<div className="schedule-time">435 thích</div>
						<img src="/icon/Rate/Like.png" alt="" />
						{/* <img src="/image/comment/Dislike.png" alt="" /> */}
					</div>
				</div>
			</ItemComment>
		);
	}
}

export default ItemComments;
