import React, { Component } from "react";
import { Pagination } from "antd";
import "./styles/index.css";
class CustomPagination extends Component {
	onChange = (page) => {
		// const { onChangePagination } = this.props;
		// onChangePagination(page);
		console.log("pagination");
	};

	render() {
		const { total, pageSize, page } = this.props;
		return (
			<div className="custom-pagination">
				<Pagination
					defaultCurrent={page}
					defaultPageSize={pageSize}
					total={total}
					onChange={this.onChange}
					showSizeChanger={false}
				/>
			</div>
		);
	}
}

export default CustomPagination;
