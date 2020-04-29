import React, { Component } from "react";
import Layout from "@Layout";
import { Skeleton } from "antd";
import Breadcrumb from "@Components/Breadcrumb";
import SidebarMaster from "@Container/VisitorContainer/ProfileMaster/Infor/Sidebar";
import Infor from "@Container/VisitorContainer/ProfileMaster/Infor";

import ProfileMasterWrapper, {
	ProfileMasterNav,
	ProfileMasterContentWrapper,
	ProfileMasterContentSidebar,
	ProfileMasterContent,
} from "./styles";

import { withRouter } from "next/router";
import routes from "@Src/routes";
const { Link } = routes;

class ProfileMaster extends Component {
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
			{ key: "/", content: "Trang chủ" },
			{ key: "/ProfileMaster", content: "Hà Nội" },
			{ key: "/ProfileMaster", content: "Thầy A" },
		];
		const { loading } = this.state;
		return (
			<Layout>
				<div className="container">
					<div className="main">
						<div className="main-page">
							<ProfileMasterWrapper>
								<ProfileMasterNav>
									<Breadcrumb item={item} />
								</ProfileMasterNav>

								<ProfileMasterContentWrapper>
									<ProfileMasterContentSidebar>
										<SidebarMaster />
									</ProfileMasterContentSidebar>

									<ProfileMasterContent>
										<Skeleton loading={loading} active={loading}></Skeleton>
										<Skeleton loading={loading} active={loading}></Skeleton>
										<Skeleton loading={loading} active={loading}></Skeleton>
										<Skeleton loading={loading} active={loading}>
											<Infor />
										</Skeleton>
									</ProfileMasterContent>
								</ProfileMasterContentWrapper>
							</ProfileMasterWrapper>
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}

export default ProfileMaster;
