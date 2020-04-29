import React, { Component } from "react";
import "./index.css";
class CardAddress extends Component {
	render() {
		const { value } = this.props;
		return (
			<div className="card-address">
				<img src={`${value.thumbnail}`} alt={`${value.thumbnail}`} />
				<div className="card-address-wrapper">
					<div className="card-address-location">
						<div className="card-address-location-name">{value.name}</div>
						<div className="card-address-location-quantity">
							{`${value.total} Thầy`}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CardAddress;
