import React, { Component } from "react";
import Layout from "@Layout";
import { Row, Col, Skeleton } from "antd";
import Breadcrumb from "@Components/Breadcrumb";
import { Banner, TextTitle } from "@Styles/home";
import SearchTabMaster_Service from "./styles";
import SearrchResultWrapper, { SearrchResultContainer } from "@Styles/search";
import SearchResultMaster from "@Container/VisitorContainer/Search/Master";
import SideBar from "@Container/VisitorContainer/Search/Master/SideBar";

import { withRouter } from "next/router";
import routes from "@Src/routes";
const { Link } = routes;

class Search extends Component {
	state = {
		loading: false,
	};

	componentDidMount() {
		this.onLoading();
	}

	onLoading = () => {
		this.setState({
			loading: true,
		});
		setTimeout(() => this.setState({ loading: false }), 1000);
	};
	render() {
		const item = [
			{
				key: "/",
				content: "Trang chủ",
			},
			{
				key: "/ViewAllComment",
				content: "Hà Nội",
			},
			{
				key: "/ViewAllComment",
				content: "Tử Vi",
			},
			{
				key: "/ViewAllComment",
				content: "Kết quả tìm kiếm",
			},
		];
		const select = [
			{ label: "Thầy bói", content: "/search/master" },
			{ label: "Dịch vụ", content: "/search/service" },
		];
		const { router } = this.props;
		const { loading } = this.state;
		return (
			<Layout>
				<Banner>
					<div className="main">
						<Breadcrumb item={item} />
						<SearrchResultWrapper>
							<TextTitle>
								<span className="text-title-content">Kết quả tìm kiếm</span>
								<img src="/icon/Common/Frame.png" alt="Frame" />
							</TextTitle>
							<SearrchResultContainer>
								<div className="count-result">
									<h3>Tìm thấy 378 kết quả phù hợp với bạn</h3>
								</div>
							</SearrchResultContainer>
						</SearrchResultWrapper>
					</div>
				</Banner>
				<div className="container">
					<div className="main">
						<div className="main-page">
							<Row gutter={20} style={{ paddingTop: 26 }}>
								<Col lg={8}>
									<SideBar />
								</Col>
								<Col lg={16}>
									<SearchTabMaster_Service>
										<div id="SelectOptionSearch">
											{select.map((value, index) => (
												<Link route={value.content} key={index}>
													<a
														className={`${
															value.content === router.asPath ? "active" : ""
														}`}
													>
														{value.label}
													</a>
												</Link>
											))}
										</div>
									</SearchTabMaster_Service>
									<Skeleton loading={loading} active={loading}></Skeleton>
									<Skeleton loading={loading} active={loading}>
										<SearchResultMaster />
									</Skeleton>
								</Col>
							</Row>
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}

export default withRouter(Search);
