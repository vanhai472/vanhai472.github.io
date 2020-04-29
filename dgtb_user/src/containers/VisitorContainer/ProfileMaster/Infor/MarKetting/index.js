import React, { Component } from "react";

class index extends Component {
	render() {
		const marketting = {
			margin: "30px 0px",
		};
		return (
			<div style={marketting}>
				<img
					style={{ width: "100%", marginBottom: 80 }}
					src="/icon/Master/quangCao.png"
					alt="quangCao"
				/>
			</div>
		);
	}
}

export default index;
