import React, { Component } from "react";
import { Spin } from "antd";
import NewCommentWrapper, { NewCommentContainer } from "./styles/newComment";
import ItemComment from "@Components/Card/Comments/ItemComment";
import Swiper from "react-id-swiper";
import CommentContainer, {
	CommentHeader,
	TextTitle,
	OptionComment,
	ViewAll,
} from "@Styles/home";

import routes from "@Src/routes";
const { Link } = routes;

const params = {
	slidesPerView: "auto",
	slidesPerColumn: 1,
	spaceBetween: 18,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next.custom-next",
		prevEl: ".swiper-button-prev.custom-prev",
	},
	breakpoints: {
		767: {
			slidesPerColumn: 2,
			spaceBetween: 18,
		},
	},
};

class Comments extends Component {
	render() {
		const { dataRevice } = this.props;
		const select = ["Mới nhất", "Hot nhất tuần", "Hot nhất tháng"];
		return (
			<NewCommentWrapper>
				<CommentContainer comment>
					<CommentHeader>
						<TextTitle>
							<span className="text-title-content">Nhận xét</span>
							<img src="/icon/Common/Frame.png" alt="Frame" />
						</TextTitle>
						<OptionComment home>
							<div id="SelectOptionComments">
								{select.map((value, index) => (
									<span
										key={index}
										className={`option-comment ${index === 0 ? `active` : ""}`}
										onClick={() => this.onChangeCurrent(index)}
									>
										{value}
									</span>
								))}
							</div>
						</OptionComment>
					</CommentHeader>
					<ViewAll comment>
						<Link
							route="visitors/ViewAllComment/index"
							params={{ id: "rencent" }}
						>
							<a>Xem tất cả</a>
						</Link>
					</ViewAll>
					<Spin spinning={false} tip="Đang tải">
						<NewCommentContainer>
							{dataRevice.data.results.length > 0 ? (
								<Swiper {...params}>
									{dataRevice.data.results.map((value, key) => (
										<div className="item" key={key}>
											<ItemComment value={value} />
										</div>
									))}
								</Swiper>
							) : null}
						</NewCommentContainer>
					</Spin>
				</CommentContainer>
			</NewCommentWrapper>
		);
	}
}

export default Comments;
