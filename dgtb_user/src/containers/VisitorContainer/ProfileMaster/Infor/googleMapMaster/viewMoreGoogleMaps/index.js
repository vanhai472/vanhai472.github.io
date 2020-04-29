import React, { Component } from "react";
import { Layout, Menu } from "antd";
const { Sider, Content } = Layout;
import { ViewMore } from "./styled";
import SearchResultMasters from "@Components/Search/SearchResultMaster";
import GoogleMaps from "@Components/GoogleMaps";
import { connect } from "react-redux";

class ViewMoreGoogleMaps extends Component {
	state = {
		collapsed: false,
		right: false,
		changeImage: false,
		comments: [],
	};
	onChange = (a, b, c) => {
		console.log(a, b, c);
	};

	handleChange = (e) => {
		this.setState({
			value: e.target.value,
		});
	};

	render() {
		const { right, changeImage } = this.state;
		const { masterAll } = this.props;
		const src1 = "icon/Master/prev.png";
		const src2 = "icon/Master/next.png";

		return (
			<ViewMore right={right}>
				<Layout>
					<Sider
						trigger={null}
						collapsible
						collapsed={this.state.collapsed}
						width={608}
						collapsedWidth={0}
						className="slider"
					>
						<Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
							<h3 className="titleMoreMap"> Các thầy tương tự</h3>

							{masterAll.map((value, key) => (
								<SearchResultMasters value={value} key={key} display />
							))}
						</Menu>
						<img
							src={changeImage === false ? src1 : src2}
							alt="close"
							className="clickSlider"
							onClick={() =>
								this.setState({
									collapsed: !this.state.collapsed,
									right: !right,
									changeImage: !changeImage,
								})
							}
						/>
					</Sider>
					<Layout className="site-layout">
						<Content>
							<GoogleMaps googleMapMaster />
						</Content>
					</Layout>
				</Layout>
			</ViewMore>
		);
	}
}

export default connect((state) => ({
	masterAll: state.masterReducer.masterAll,
}))(ViewMoreGoogleMaps);
