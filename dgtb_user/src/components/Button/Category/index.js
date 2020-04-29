import React, { Component } from "react";
import "./index.css";
class Category extends Component {
	render() {
		const { name, color, background } = this.props;
		return (
			<div className="Atom-Category">
				<span
					className="category"
					style={{ color: color, background: background }}
				>
					{name}
				</span>
			</div>
		);
	}
}

export default Category;
