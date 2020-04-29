import React, { Component } from "react";
import { Rate } from "antd";
import { WraperWriteComment } from "./styled";

class WriteComments extends Component {
	state = {
		valueTexteare: "",
	};
	render() {
		const { valueTexteare } = this.state;
		return (
			<WraperWriteComment>
				<h3>Nhận xét</h3>
				<Rate style={{ fontSize: 35, marginBottom: 16 }} defaultValue={0} />
				<textarea
					value={valueTexteare}
					rows={6}
					className="formTextarea"
					placeholder="Viết nhận xét của bạn vào đây..."
					name="textCommentTop"
					onChange={() => this.setState({ valueTexteare: event.target.value })}
				></textarea>
				<div
					className="submitComment"
					onClick={() => this.setState({ valueTexteare: " " })}
				>
					Gưởi nhận xét
				</div>
			</WraperWriteComment>
		);
	}
}

export default WriteComments;
