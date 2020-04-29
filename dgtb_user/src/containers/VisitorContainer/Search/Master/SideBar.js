import React, { Component } from "react";
import { Button, Radio, Checkbox, Slider, Row, Col } from "antd";
import GoogleMapWrapper, {
	SortWrapper,
	FilterWrapper,
	FilterOption,
} from "./styles";

import routes from "@Src/routes";
const { Link } = routes;

class SideBar extends Component {
	state = {
		minPrice: 5000000,
		maxPrice: 100000000,
	};
	renderStar = (quantity) => {
		let html = [];
		for (let index = 1; index <= quantity; index++) {
			html.push(index);
		}
		return html.map((key) => (
			<img
				style={{ marginRight: 8 }}
				src="/icon/Common/star.png"
				alt="Star-full"
				key={key}
			/>
		));
	};

	onchangeValueSlider = (value) => {
		this.setState({
			minPrice: value[0],
			maxPrice: value[1],
		});
	};

	format_current = (price) => {
		return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
	};

	render() {
		const { minPrice, maxPrice } = this.state;

		return (
			<div>
				<GoogleMapWrapper>
					<Link route="/google-map-master">
						<a>
							<Button id="SeeMap">
								<img src="/icon/Common/Maps-pin.svg" alt="Maps-pin" />
								<span>Xem bản đồ</span>
							</Button>
						</a>
					</Link>
				</GoogleMapWrapper>
				<SortWrapper>
					<div className="sidebar-header">
						<h3>Sắp xếp kết quả</h3>
						<span>Sắp xếp kết quả theo lựa chọn</span>
					</div>
					<FilterOption>
						<Radio.Group>
							<Row>
								<Col span={12} className="gutter-row">
									<Radio value={1}>Nổi bật</Radio>
								</Col>
								<Col span={12} className="gutter-row">
									<Radio value={2}>Được đánh giá nhiều</Radio>
								</Col>
								<Col span={12} className="gutter-row">
									<Radio value={3}>Được đánh giá tốt</Radio>
								</Col>
								<Col span={12} className="gutter-row">
									<Radio value={4}>Giá cao nhất</Radio>
								</Col>
								<Col span={12} className="gutter-row">
									<Radio value={5}>Giá thấp nhất</Radio>
								</Col>
								<Col span={12} className="gutter-row">
									<Radio value={6}>Lựa chọn đề xuất</Radio>
								</Col>
							</Row>
						</Radio.Group>
					</FilterOption>
				</SortWrapper>

				<FilterWrapper>
					<div className="sidebar-header">
						<div className="reset-filter">
							<h3>Lọc kết quả</h3>
							<span>Đặt lại bộ lọc</span>
						</div>
						<span>Hiển thị kết quả phân loại theo:</span>
					</div>

					<FilterOption>
						<h3>Khoảng giá</h3>
						<div className="wraper-price-vnd">
							<div className="wraper-price">
								<p>{this.format_current(minPrice)}</p>
								<p className="VND">VND</p>
							</div>
							<div className="rectance"></div>
							<div className="wraper-price">
								<p>{this.format_current(maxPrice)}</p>
								<p className="VND">VND</p>
							</div>
						</div>
						<Slider
							range
							step={100000}
							min={1000000}
							max={10000000}
							value={[minPrice, maxPrice]}
							onChange={this.onchangeValueSlider}
						/>
					</FilterOption>

					<FilterOption>
						<h3>Mức sao người dùng đánh giá</h3>
						<Radio.Group onChange={this.onChangeStar} className="filter-star">
							<Radio value={1}>{this.renderStar(1)}</Radio>
							<Radio value={2}>{this.renderStar(2)}</Radio>
							<Radio value={3}>{this.renderStar(3)}</Radio>
							<Radio value={4}>{this.renderStar(4)}</Radio>
							<Radio value={5}>{this.renderStar(5)}</Radio>
						</Radio.Group>
					</FilterOption>

					<FilterOption>
						<h3>Xem online</h3>
						<Checkbox.Group>
							<Row>
								<Col span={24} className="gutter-row">
									<Checkbox value="1">Có xem online</Checkbox>
								</Col>
								<Col span={24} className="gutter-row">
									<Checkbox value="0">Chỉ xem gặp mặt trực tiếp</Checkbox>
								</Col>
							</Row>
						</Checkbox.Group>
					</FilterOption>

					<FilterOption>
						<h3>Khu vực</h3>
						<Checkbox.Group>
							<Row>
								<Col span={12} className="gutter-row">
									<Checkbox value="HN">Hà Nội</Checkbox>
								</Col>
								<Col span={12} className="gutter-row">
									<Checkbox value="HCM">TP.HCM</Checkbox>
								</Col>
								<Col span={12} className="gutter-row">
									<Checkbox value="DN">Đà Nẵng</Checkbox>
								</Col>
							</Row>
						</Checkbox.Group>
					</FilterOption>
				</FilterWrapper>
			</div>
		);
	}
}

export default SideBar;
