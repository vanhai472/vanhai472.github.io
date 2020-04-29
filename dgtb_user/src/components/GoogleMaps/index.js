import React, { useState } from "react";
import {
	GoogleMap,
	withScriptjs,
	withGoogleMap,
	Marker,
	InfoWindow,
} from "react-google-maps";
import { Data } from "./data";
import CoverProps from "./coverProps";

export function Map(props) {
	const [selectedPark, setSelectedPark] = useState(null);
	console.log("inforWindow", InfoWindow);
	return (
		<GoogleMap
			defaultZoom={15}
			defaultCenter={{
				lat: 21.03935,
				lng: 105.76707,
			}}
		>
			{Data.map((data, index) => (
				<>
					<Marker
						key={index}
						position={{ lat: data.lat, lng: data.lng }}
						title={data.name}
						onClick={() => setSelectedPark(data)}
						label={data.price}
						icon={{
							url: "/icon/googleMap/backgroundGooglemap.png",
							labelOrigin: { x: 63, y: 22 },
						}}
					/>
					{selectedPark ? (
						<InfoWindow
							position={{ lat: selectedPark.lat, lng: selectedPark.lng }}
							onCloseClick={() => setSelectedPark(null)}
						>
							<div>
								<CoverProps />
							</div>
						</InfoWindow>
					) : null}
				</>
			))}
		</GoogleMap>
	);
}
const WrapedMap = withScriptjs(withGoogleMap(Map));
export default function GoogleMaps() {
	return (
		<div style={{ width: "100%", height: "100%" }}>
			<WrapedMap
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCTdMIQsI9Dxkbll5OuBEnF4Y2BuTul8js`}
				loadingElement={<div style={{ height: "100%" }}></div>}
				containerElement={<div style={{ height: "100%" }}></div>}
				mapElement={<div style={{ height: "100%" }}></div>}
			></WrapedMap>
		</div>
	);
}
