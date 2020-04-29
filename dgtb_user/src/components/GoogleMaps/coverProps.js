import React, { Component } from "react";
import { connect } from "react-redux";
import MasterFamous from "@Components/Card/CardMaster";

class CoverProps extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { contentCardMaster } = this.props;
		console.log("props cover", this.props);
		return (
			<div>
				{contentCardMaster.map((value, index) => (
					<MasterFamous
						value={value}
						key={index}
						marginGoogle={"10px 0px 0px 0px"}
						widthComponent={250}
					/>
				))}
			</div>
		);
	}
}

export default connect((state) => ({
	contentCardMaster: state.masterReducer.contentCardMaster,
}))(CoverProps);
