import React, { Component } from "react";
import Swiper from "react-id-swiper";
import Link from "next/link";
import CardNew from "@Components/Card/CardNew";
import {
	CommentHeader,
	TextTitle,
	ViewAll,
	NewsContainer,
	FamousMasterContainer,
} from "@Styles/home";
import { connect } from "react-redux";
import { getAllNews } from "@Actions/news";

const quantity = 9;
class NewsContainers extends Component {
	state = {
		page: 1,
	};
	componentDidMount() {
		this.getAllNews();
	}

	getAllNews = () => {
		const { getAllNews } = this.props;
		const { page } = this.state;
		getAllNews(page, quantity);
	};

	render() {
		const params = {
			slidesPerView: "auto",
			spaceBetween: 20,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".swiper-button-next.custom-next",
				prevEl: ".swiper-button-prev.custom-prev",
			},
		};

		const { allNews } = this.props;

		return (
			<NewsContainer>
				<FamousMasterContainer>
					<CommentHeader>
						<TextTitle>
							<div className="text-title-content">Tin tức</div>
							<img src="/icon/Common/Frame.png" alt="Frame" />
						</TextTitle>
						<ViewAll>
							<Link href="/ViewAllNews">
								<a>Xem tất cả</a>
							</Link>
						</ViewAll>
					</CommentHeader>
					{allNews.length > 0 ? (
						<Swiper {...params}>
							{allNews.map((value, key) => (
								<div key={key}>
									<CardNew value={value} />
								</div>
							))}
						</Swiper>
					) : null}
				</FamousMasterContainer>
			</NewsContainer>
		);
	}
}

export default connect(
	(state) => ({
		allNews: state.News.allNews,
	}),
	{ getAllNews }
)(NewsContainers);
