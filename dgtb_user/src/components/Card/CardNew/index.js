import React, { Component } from "react";
import CardNewContainer from "./styles";
import _ from "lodash";

class CardNew extends Component {
	createMarkup = (content) => {
		return { __html: content };
	};
	render() {
		const { value } = this.props;
		console.log(value);
		return (
			<CardNewContainer>
				<div className="news-header">
					<img src={`${value.thumbnail}`} alt={`${value.title}`} />
				</div>
				<div className="news-content">
					<div className="text-content">
						{_.truncate(value.title, { length: 36 })}
					</div>
					<div
						className="display"
						dangerouslySetInnerHTML={this.createMarkup(value.content)}
					/>
				</div>
			</CardNewContainer>
		);
	}
}

export default CardNew;
