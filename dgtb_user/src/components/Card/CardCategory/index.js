import React, { Component } from "react";
import { Avatar } from "antd";
import "./index.css";
class CardCategory extends Component {
	render() {
		const { value } = this.props;
		return (
			<div className="search-category-item">
				<div className="search-category-item-image">
					<Avatar size={64} src={value.thumbnail} alt={value.thumbnail} />
				</div>
				<div className="search-category-item-content">
					<div className="search-category-item-name">{value.name}</div>
					<div className="search-category-item-quantity">
						{`${value.total} thầy`}
					</div>
				</div>
			</div>
		);
	}
}

export default CardCategory;
