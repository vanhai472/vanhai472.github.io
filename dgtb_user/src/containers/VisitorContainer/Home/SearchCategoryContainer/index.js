import React, { Component } from "react";
import SearchCategoryContainer, {
	SearchContentCategory,
	ButtonMore,
} from "@Styles/Home/_search_category";
import { Search } from "@Styles/Home/_search_location";
import CardCategory from "@Components/Card/CardCategory";
import { Row, Col, Button } from "antd";
import Link from "next/link";
import { connect } from "react-redux";
import { getAllMasterCategory } from "@Actions/master";
class SearchCategory extends Component {
	componentDidMount() {
		const { getAllMasterCategory } = this.props;
		getAllMasterCategory();
	}

	render() {
		const { view, masterCategory } = this.props;
		let key;
		if (view === "MobileView") key = 3;
		else if (view === "TabView") key = 4;
		else key = 6;
		let clonedata = [];
		if (masterCategory.length > 0) {
			for (let index = 0; index < key; index++) {
				clonedata.push(masterCategory[index]);
			}
		}

		return (
			<SearchCategoryContainer>
				<Search>
					Tìm kiếm theo <br /> Danh mục của thầy
				</Search>
				<SearchContentCategory>
					<Row gutter={20}>
						{clonedata.length > 0
							? clonedata.map((value, key) => (
									<Col
										xs={24}
										md={12}
										lg={8}
										style={{ marginBottom: 16 }}
										key={key}
									>
										<CardCategory value={value} />
									</Col>
							  ))
							: null}
					</Row>
					<Link href="/ViewAllCategory">
						<a>
							<ButtonMore>
								<Button className=" sign-white" style={{ width: 96 }}>
									Xem thêm
								</Button>
							</ButtonMore>
						</a>
					</Link>
				</SearchContentCategory>
			</SearchCategoryContainer>
		);
	}
}

export default connect(
	(state) => ({
		masterCategory: state.Master.masterCategory,
	}),
	{ getAllMasterCategory }
)(SearchCategory);
