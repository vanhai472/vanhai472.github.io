import React, { Component } from "react";
import { optionServicesMaster } from "../data/data";
import MyServicesMaster, { OptionServicesMaster } from "./styled";
import Router from "next/router";
import { withRouter } from "next/router";
import SearchResultService from "@Components/Search/SearchResultService";
import { Skeleton } from "antd";

class Services extends Component {
	state = {
		loading: false,
	};
	componentDidMount = () => {
		this.showLoading();
	};
	handleSelectOptionServicesMaster = (type) => {
		this.showLoading();
	};
	showLoading = () => {
		this.setState({ loading: true });
		setTimeout(() => this.setState({ loading: false }), 1000);
	};
	render() {
		const { router } = this.props;
		const { query } = router;
		const { loading } = this.state;
		return (
			<>
				<OptionServicesMaster>
					{optionServicesMaster.map((value, index) => (
						<div
							key={index}
							className={`itemOptionServices ${
								query.type === value.content ? "itemOptionServicesActive" : ""
							}`}
							onClick={() =>
								this.handleSelectOptionServicesMaster(value.content)
							}
						>
							{" "}
							{value.label}
						</div>
					))}
				</OptionServicesMaster>
				<MyServicesMaster>
					<Skeleton loading={loading}>
						<SearchResultService displayComponent="none" />
						<SearchResultService displayComponent="none" />
						<SearchResultService displayComponent="none" />
						<SearchResultService displayComponent="none" />
					</Skeleton>
				</MyServicesMaster>
			</>
		);
	}
}

export default withRouter(Services);
