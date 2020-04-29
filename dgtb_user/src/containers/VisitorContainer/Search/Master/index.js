import React, { Component } from "react";
import { connect } from "react-redux";
import SearchResultMasters from "@Components/Search/SearchResultMaster";

class SearchResultMaster extends Component {
	render() {
		const { masterAll } = this.props;
		return (
			<div>
				{masterAll.map((value, key) => (
					<SearchResultMasters value={value} key={key} />
				))}
			</div>
		);
	}
}

export default connect((state) => ({
	masterAll: state.masterReducer.masterAll,
}))(SearchResultMaster);
