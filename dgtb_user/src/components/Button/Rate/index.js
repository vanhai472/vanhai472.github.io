import React, { Component } from "react";
import RateWrapper from "./styles";
class Rate extends Component {
	render() {
		const { rate, background } = this.props;
		return (
			<RateWrapper background={background}>
				<span>{Math.round(rate * 10) / 10}</span>
				<img src="/icon/Common/star.png" alt={`${rate} star`} />
			</RateWrapper>
		);
	}
}

export default Rate;
