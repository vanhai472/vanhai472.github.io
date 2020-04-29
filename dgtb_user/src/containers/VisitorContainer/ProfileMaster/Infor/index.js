import React, { Component } from "react";
import SlideMaster from "./slider/SlideMaster";
import ReadMe from "./readMe";
import GoogleMapMaster from "./googleMapMaster";
import Services from "./services";
import WriteComments from "./writeComments";
import RepComment from "./repComment";
import ImageMarketting from "./MarKetting";
import Interested from "./interested";
import CustomPagination from "../../../../components/Pagination";

class ProfileMasterContainer extends Component {
	render() {
		return (
			<div>
				<SlideMaster />
				<ReadMe />
				<GoogleMapMaster />
				<WriteComments />
				<Services />
				{/* form comment online */}
				<RepComment />
				<div
					style={{ display: "flex", marginTop: 44, justifyContent: "flex-end" }}
				>
					<div>
						<CustomPagination total={50} pageSize={10} page={1} />
					</div>
				</div>
				<ImageMarketting />
				<Interested />
			</div>
		);
	}
}

export default ProfileMasterContainer;
