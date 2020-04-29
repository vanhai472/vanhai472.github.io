import React, { Component } from "react";
import Layout from "@Layout";
import HeaderSearchContainer from "@Container/VisitorContainer/Home/HeaderSearchContainer";
import CommentContainer from "@Container/VisitorContainer/Home/CommentsContainer";
import MasterTrendContainer from "@Container/VisitorContainer/Home/MasterTrendContainer";
import SearchCategoryContainer from "@Container/VisitorContainer/Home/SearchCategoryContainer";
import ServiceContainer from "@Container/VisitorContainer/Home/ServiceContainer";
import MasterHotContainer from "@Container/VisitorContainer/Home/MasterHotContainer";
import BannerContainer from "@Container/VisitorContainer/Home/BannerContainer";
import MasterGoodContainer from "@Container/VisitorContainer/Home/MasterGoodContainer";
import MasterNewContainer from "@Container/VisitorContainer/Home/MasterNewContainer";
import SearchLocationContainer from "@Container/VisitorContainer/Home/SearchLocationContainer";
import NewsContainer from "@Container/VisitorContainer/Home/NewsContainer";

import fetch from "node-fetch";

const quantity = 12;
const master = 5;
let page = 1;
let id = "rencent";
const type = ["best_master", "top_rate", "top_master", "new"];
class index extends Component {
	static async getInitialProps() {
		const rates = await fetch(
			`http://27.72.147.104:3000/api/v1/pages/toprate?page=${page}&quantity=${quantity}&type=${id}`
		);

		const bestMaster = await fetch(
			`http://27.72.147.104:3000/api/v1/pages/masters?page=${page}&quantity=${master}&type=${type[0]}`
		);

		const topRate = await fetch(
			`http://27.72.147.104:3000/api/v1/pages/masters?page=${page}&quantity=${master}&type=${type[1]}`
		);

		const topMaster = await fetch(
			`http://27.72.147.104:3000/api/v1/pages/masters?page=${page}&quantity=${master}&type=${type[2]}`
		);

		const masterNew = await fetch(
			`http://27.72.147.104:3000/api/v1/pages/masters?page=${page}&quantity=${master}&type=${type[3]}`
		);

		const dataRevice = await rates.json();
		const dataReviceBestMaster = await bestMaster.json();
		const dataReviceTopRate = await topRate.json();
		const dataReviceTopMaster = await topMaster.json();
		const dataReviceMasterNew = await masterNew.json();
		return {
			dataRevice,
			dataReviceBestMaster,
			dataReviceTopRate,
			dataReviceTopMaster,
			dataReviceMasterNew,
		};
	}

	render() {
		const {
			dataRevice,
			dataReviceBestMaster,
			dataReviceTopRate,
			dataReviceTopMaster,
			dataReviceMasterNew,
		} = this.props;
		return (
			<Layout>
				<div style={{ background: "#fff" }}>
					<HeaderSearchContainer />
				</div>
				<div className="container">
					<div className="main">
						<div className="main-page">
							<CommentContainer dataRevice={dataRevice} />
							<MasterTrendContainer
								dataReviceBestMaster={dataReviceBestMaster}
							/>
							<SearchCategoryContainer />
							<ServiceContainer />
							<MasterHotContainer dataReviceTopRate={dataReviceTopRate} />
							<BannerContainer />
							<MasterGoodContainer dataReviceTopMaster={dataReviceTopMaster} />
							<MasterNewContainer dataReviceMasterNew={dataReviceMasterNew} />
							<SearchLocationContainer />
							<NewsContainer />
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}

export default index;
