import React, { Component } from "react";
import Layout from "@Layout";
import { Banner, TextTitle, OptionComment } from "@Styles/home";
import SearrchResultWrapper from "@Styles/search";
import Breadcrumb from "@Components/Breadcrumb";
import { Row, Col, Skeleton } from "antd";
import ItemComment from "@Components/Card/Comments/ItemComment";
import CustomPagination from "@Components/Pagination";
import _ from "lodash";
import Sidebar from "./Sidebar";
import routes from "@Src/routes";
const { Router } = routes;
import fetch from "node-fetch";

const quantity = 15;
let page = 1;
class ViewAllComment extends Component {
	state = {
		loading: false,
	};
	static async getInitialProps({ query }) {
		const { id } = query;
		const res = await fetch(
			`http://27.72.147.104:3000/api/v1/pages/toprate?page=${page}&quantity=${quantity}&type=${id}`
		);
		const dataRevice = await res.json();
		return { id, dataRevice };
	}

	componentDidMount() {
		this.onLoading();
	}

	onChangeCurrent = (id) => {
		Router.pushRoute("visitors/ViewAllComment/index", { id: id });
		this.onLoading();
	};

	onChangePagination = (pagePagination) => {
		const { id } = this.props;
		page = pagePagination;
		Router.pushRoute("visitors/ViewAllComment/index", { id: id });
		this.onLoading();
	};

	onLoading = () => {
		this.setState({
			loading: true,
		});
		setTimeout(() => this.setState({ loading: false }), 1000);
	};

	render() {
		const { dataRevice } = this.props;
		const item = [
			{
				key: "/",
				content: "Trang chủ",
			},
			{
				key: "/ViewAllComment",
				content: "Nhận xét",
			},
		];
		const select = [
			{ label: "Mới nhất", content: "rencent" },
			{ label: "Hot nhất tuần", content: "week" },
			{ label: "Hot nhất tháng", content: "month" },
		];

		const totalData = dataRevice.data.totalPage * quantity;
		_.remove(dataRevice.data.results, function (value) {
			return value.master.length === 0;
		});

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
						</SearrchResultWrapper>
					</div>
				</Banner>
				<div className="container">
					<div className="main">
						<Row gutter={20}>
							<Col sm={24} xs={24} md={12} lg={6}>
								<Sidebar />
							</Col>
							<Col lg={18} md={24} style={{ marginBottom: 20 }}>
								<OptionComment>
									<div id="SelectOptionComments">
										{select.map((value, index) => (
											<span
												key={index}
												className={`option-comment ${
													value.content === this.props.id ? `active` : ""
												}`}
												onClick={() => this.onChangeCurrent(value.content)}
											>
												{value.label}
											</span>
										))}
									</div>
								</OptionComment>
								<div style={{ marginTop: 32, textAlign: "center" }}>
									<Skeleton loading={loading} active={loading}></Skeleton>
									<Skeleton loading={loading} active={loading}>
										{dataRevice.data.results.length > 0 ? (
											<Row gutter={20}>
												{dataRevice.data.results.map((value, key) => (
													<Col
														xl={8}
														lg={12}
														md={12}
														sm={12}
														xs={24}
														key={key}
														style={{ marginBottom: 32 }}
													>
														<ItemComment value={value} />
													</Col>
												))}
												<div style={{ textAlign: "right", width: "100%" }}>
													<CustomPagination
														page={page}
														pageSize={quantity}
														total={totalData}
														onChangePagination={this.onChangePagination}
													/>
												</div>
											</Row>
										) : null}
									</Skeleton>
								</div>
							</Col>
						</Row>
					</div>
				</div>
			</Layout>
		);
	}
}

export default ViewAllComment;
