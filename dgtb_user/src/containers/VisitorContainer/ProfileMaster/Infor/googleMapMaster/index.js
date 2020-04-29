import React, { Component } from "react";
import ContainerStyleGoogleMap, { WraperGoogleMapMaster } from "./styled";
import GoogleMaps from "@Components/GoogleMaps";
import routes from "@Src/routes";
const { Link } = routes;
import { Button } from "antd";

class GoogleMapProfieMaster extends Component {
	render() {
		return (
			<ContainerStyleGoogleMap>
				<h3>Thông tin địa điểm</h3>
				<div style={{ display: "flex" }}>
					<img
						className="location-googleMap"
						src="/icon/Master/location-small-master.png"
						alt="location"
					/>
					<p className="addres-googleMap-master">
						69 Trần Duy Hưng, Phường Trung Hòa, Quận Cầu Giấy, Hà Nội
					</p>
				</div>
				<WraperGoogleMapMaster>
					<div className="positionButtonSeeMap">
						<Link route="visitors/viewMoreGoogleMaps/index">
							<a>
								<Button className="seeMoreMap">
									<img src="/icon/Common/Maps-pin.svg" alt="Maps-pin" />
									<span>Xem bản đồ</span>
								</Button>
							</a>
						</Link>
					</div>
					<GoogleMaps />
				</WraperGoogleMapMaster>
			</ContainerStyleGoogleMap>
		);
	}
}

export default GoogleMapProfieMaster;
