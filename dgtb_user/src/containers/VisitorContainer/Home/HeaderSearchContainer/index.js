import React, { Component } from "react";
import Nav from "@Layout/Nav";
import { Form, AutoComplete, Button } from "antd";
import { HomePage } from "@Config/options";
import SearchBoxWrapper, {
	SearchBoxContainer,
	SearchBoxNav,
	SearchBoxContent,
	SearchBoxContentText,
	SearchBoxForm,
} from "./styles";
import Router from "next/router";
class SearchBox extends Component {
	handleSubmit = () => {
		Router.push({
			pathname: "/SearchResult",
			query: { type: "master", location: "hanoi", sort: "asc" },
		});
	};
	render() {
		return (
			<SearchBoxWrapper>
				<SearchBoxContainer>
					<SearchBoxNav>
						<Nav options={HomePage} />
					</SearchBoxNav>
					<SearchBoxContent>
						<SearchBoxContentText>
							<h3>Tìm kiếm Thầy</h3>
							<span>Tìm thầy phù hợp với nhu cầu của bạn!</span>
						</SearchBoxContentText>

						<SearchBoxForm>
							<Form className="search-box" onFinish={this.handleSubmit}>
								<Form.Item name="master-service" className="master-service">
									<div>
										<img src="/icon/SearchBox/search.svg" alt="search" />
										<AutoComplete placeholder="Tìm kiếm dịch vụ, Thầy"></AutoComplete>
									</div>
								</Form.Item>

								<Form.Item
									name="search-box-location"
									className="search-box-location"
								>
									<div>
										<img src="/icon/SearchBox/address.svg" alt="address" />
										<AutoComplete placeholder="Khu vực"></AutoComplete>
									</div>
								</Form.Item>

								<Form.Item
									name="search-box-category"
									className="search-box-category"
								>
									<div>
										<img src="/icon/SearchBox/category.svg" alt="category" />
										<AutoComplete placeholder="Dịch vụ"></AutoComplete>
									</div>
								</Form.Item>

								<Form.Item
									name="search-box-filter"
									className="search-box-filter"
								>
									<div>
										<img src="/icon/SearchBox/filter.svg" alt="filter" />
										<AutoComplete placeholder="Sắp xếp theo"></AutoComplete>
									</div>
								</Form.Item>
								<Form.Item
									name="search-box-search"
									className="search-box-search"
								>
									<Button htmlType="submit">Tìm kiếm</Button>
								</Form.Item>
							</Form>
						</SearchBoxForm>

						<div id="scrollbottom" title="Bottom">
							<div className="arrows">
								<img src="/icon/Rate/arrow.png" alt="arrow" />
							</div>
						</div>
					</SearchBoxContent>
				</SearchBoxContainer>
			</SearchBoxWrapper>
		);
	}
}

export default SearchBox;
