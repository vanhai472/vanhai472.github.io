import React, { Component } from "react";
import ViewMoreGoogleMaps from "@Container/VisitorContainer/ProfileMaster/Infor/googleMapMaster/viewMoreGoogleMaps";
import Layout from "@Layout";

class index extends Component {
	render() {
		return (
			<Layout>
				<div style={{ marginTop: 64 }}>
					<ViewMoreGoogleMaps />
				</div>
			</Layout>
		);
	}
}

export default index;
