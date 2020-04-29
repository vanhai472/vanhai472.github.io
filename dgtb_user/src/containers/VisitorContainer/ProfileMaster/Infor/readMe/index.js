import React, { Component } from "react";
import { OptionMaster, Introduce } from "./styled";
import { optionMaster, introduce, introduceDuplicate } from "../data/data";
import _ from "lodash";

class index extends Component {
	state = {
		numberTextMarketting: 857,
	};
	render() {
		const { numberTextMarketting } = this.state;
		const text = introduce + introduceDuplicate;
		const contentMarketting = _.truncate(text, {
			length: numberTextMarketting,
		});
		return (
			<>
				<OptionMaster>
					{optionMaster.map((value, index) => (
						<div key={index} className="group-option">
							<div className="wraper-img-master">
								<img src={value.src} alt={value.src} />
							</div>
							<p className="title-master">{value.title} </p>
							<h3 className="detail-master"> {value.detail}</h3>
						</div>
					))}
				</OptionMaster>
				<Introduce>
					<h3 className="title-introduce">Giới thiệu</h3>
					<p className="content-introduce">{contentMarketting}</p>
					<div
						className="button-readmore"
						onClick={() => this.setState({ numberTextMarketting: 1712 })}
					>
						Mở rộng
					</div>
				</Introduce>
			</>
		);
	}
}

export default index;
