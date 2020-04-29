import React, { Component } from "react";
import {
	WraperComment,
	ContentCommentHeader,
	WriteContentComment,
	ContentCommentMaster,
	CommentFooter,
	MasterRepComment,
	LikeAndRep,
	ChatOnline,
	ContentComment,
} from "./styled";
import { Rate, Skeleton } from "antd";
import call_api_comment from "@Redux/api/commentMaster";
import { withRouter } from "next/router";
import { optionCommentRate, postComment } from "./dataComment";
import Router from "next/router";

class index extends Component {
	state = {
		contentComments: "",
		dataStore: [],
		showFormRepComments: null,
		loading: false,
	};
	onChangePagination = () => {};
	componentDidMount = () => {
		this.showLoading();
		call_api_comment("user", "get").then((res) =>
			this.setState({ dataStore: res.data })
		);
	};
	handleSelectOptionServicesMaster = () => {
		this.showLoading();
	};
	showLoading = () => {
		this.setState({ loading: true });
		setTimeout(() => this.setState({ loading: false }), 1000);
	};
	handleDeleteComment = (id) => {
		const { dataStore } = this.state;
		call_api_comment(`user/${id}`, "delete").then((res) => {
			if (res.status === 200) {
				let index = this.findIndex(dataStore, id);
				if (index != -1) {
					dataStore.splice(index, 1);
					this.setState({ dataStore: dataStore });
				}
			}
		});
	};
	findIndex = (dataStore, id) => {
		let result = -1;
		dataStore.forEach((value, index) => {
			if (value.id === id) {
				result = index;
			}
		});
		return result;
	};
	handleSubmitComment = () => {
		const { contentComments } = this.state;
		call_api_comment("user", "post", { content: contentComments }).then((res) =>
			console.log(res)
		);
		call_api_comment("user", "get").then((res) =>
			this.setState({ dataStore: res.data })
		);
		this.setState({ contentComments: "" });
	};
	handleForm = (event) => {
		let { target } = event;
		let { name, value } = target;
		this.setState({
			[name]: value,
		});
	};
	render() {
		const {
			contentComments,
			dataStore,
			showFormRepComments,
			loading,
		} = this.state;
		const { router } = this.props;
		const { query } = router;

		const repComment = (
			<WriteContentComment>
				<img src="/icon/Master/avatar2.png" alt="writeContentComment" />
				<div style={{ width: "100%" }}>
					<textarea
						placeholder="Viết trả lời của bạn vào đây..."
						rows="4"
						className="writeTextComment"
						name="contentComments"
						value={contentComments}
						onChange={this.handleForm}
					></textarea>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<div style={{ width: 1 }}></div>
						<div
							className="clickHnadleSubmit"
							onClick={this.handleSubmitComment}
						>
							Gưởi phản hồi
						</div>
					</div>
				</div>
			</WriteContentComment>
		);
		return (
			<WraperComment>
				{optionCommentRate.map((value, index) => (
					<div
						key={index}
						className={`itemOptionServices ${
							query.type === value.content ? "itemOptionServicesActive" : ""
						}`}
						onClick={() => this.handleSelectOptionServicesMaster(value.content)}
					>
						{" "}
						{value.label}
					</div>
				))}
				<Skeleton loading={loading}>
					{postComment.map((data, i) => (
						<ChatOnline key={i}>
							<ContentComment>
								<ContentCommentHeader>
									<div style={{ display: "flex" }}>
										<img
											className="avataMaster"
											src={data.src}
											alt="avata master"
										/>
										<div>
											<div className="nameMaster">{data.name}</div>
											<Rate defaultValue={4} style={{ fontSize: 14 }} />
										</div>
									</div>
									<div className="wraperBuffed">
										<div style={{ padding: "3px 11px" }}>
											<img
												className="img-buffed"
												src="/icon/Master/buffed.png"
											/>
											<span className="buffed">Có đặt lịch</span>
										</div>
									</div>
								</ContentCommentHeader>
								<ContentCommentMaster>
									<p className="textContentComment">{data.content}</p>
								</ContentCommentMaster>
								<CommentFooter>
									<div style={{ display: "flex" }}>
										<span>
											<img
												src="/icon/Master/likeBlue.png"
												alt="like"
												style={{ marginRight: 3, cursor: "pointer" }}
											/>
										</span>
										<span className="numberLike">435 Thích </span>
										<div className="dotCom"></div>
										<p
											className="triggerRepComment"
											onClick={() => this.setState({ showFormRepComments: i })}
										>
											Trả lời
										</p>
									</div>
									<div className="dateComment">03/01/2020</div>
								</CommentFooter>
								{dataStore.length != null
									? dataStore.map((value, index) => (
											<div key={index}>
												<MasterRepComment>
													<img
														style={{ marginRight: 12 }}
														src="/icon/Master/avatar2.png"
														alt="avata master"
													/>
													<span className="wraperBackground">
														<span className="nameMasterComment"> Thầy A</span>
														<span style={{ display: "flex" }}>
															<span className="nameUser">@Minh nguyễn</span>
															<span className="repComment">
																{value.content}
															</span>
														</span>
													</span>
												</MasterRepComment>
												<LikeAndRep>
													<div style={{ display: "flex" }}>
														<span>
															<img src="/icon/Master/likeBlue.png" alt="like" />
														</span>
														<span className="click-like">thích</span>
														<div className="dotCom"></div>
														<span
															style={{ color: "red" }}
															className="repIb"
															onClick={() => this.handleDeleteComment(value.id)}
														>
															Xóa
														</span>
													</div>
													<div className="dateComment">03/01/2020</div>
												</LikeAndRep>
											</div>
									  ))
									: null}
								{showFormRepComments === i ? repComment : null}
							</ContentComment>
						</ChatOnline>
					))}
				</Skeleton>
			</WraperComment>
		);
	}
}

export default withRouter(index);
