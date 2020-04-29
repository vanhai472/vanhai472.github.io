import React, { Component } from "react";
import Layout from "@Layout";
import Nav from "@Layout/Nav";
import { UserPage } from "@Config/options";
import { Avatar, Skeleton } from "antd";
import Photos from "@Container/UserContainer/Profile/Photos";

import ProfileUserWrapper, {
	ProfileUserNav,
	ProfileUserContentWraper,
	ProfileUserContentSidebar,
	SidebarAvatar,
	OptionProfile,
	ProfileUserSidebarContent,
} from "./styles";
import { withRouter } from "next/router";
import routes from "@Src/routes";
const { Link } = routes;

class index extends Component {
	static async getInitialProps({ query, store }) {
		return { query, store };
	}
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
		console.log(this.props);
		const select = [
			{ label: "Thông tin", content: "/profile" },
			{ label: "Thư viện ảnh", content: "/photo" },
		];
		const { router } = this.props;
		const { loading } = this.state;
		return (
			<Layout>
				<div className="container">
					<div className="main">
						<div className="main-page">
							<ProfileUserWrapper>
								<ProfileUserNav>
									<Nav options={UserPage} />
								</ProfileUserNav>

								<ProfileUserContentWraper>
									<ProfileUserContentSidebar>
										<SidebarAvatar>
											<div className="sidebar-header">
												<Avatar size={64} src="/icon/User/avatar.png" />
												<h3>Tú Anh</h3>
											</div>
										</SidebarAvatar>

										<OptionProfile>
											<div id="SelectOptionProfile">
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
										</OptionProfile>
									</ProfileUserContentSidebar>
									<ProfileUserSidebarContent>
										<Skeleton loading={loading} active={loading}></Skeleton>
										<Skeleton loading={loading} active={loading}></Skeleton>
										<Skeleton loading={loading} active={loading}></Skeleton>
										<Skeleton loading={loading} active={loading}>
											<Photos />
										</Skeleton>
									</ProfileUserSidebarContent>
								</ProfileUserContentWraper>
							</ProfileUserWrapper>
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}

export default withRouter(index);
