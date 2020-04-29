import React, { Component } from "react";
import { Radio, Checkbox, Slider, Row, Col } from "antd";
import GoogleMapWrapper, {
	SortWrapper,
	FilterWrapper,
	FilterOption,
} from "./styles";

class SideBar extends Component {
	renderStar = (quantity) => {
		let html = [];
		for (let index = 1; index <= quantity; index++) {
			html.push(index);
		}
		return html.map((key) => (
			<img
				style={{ marginRight: 8 }}
				src="/icon/star.png"
				alt="Star-full"
				key={key}
			/>
		));
	};

	render() {
		return (
			<div>
				<SortWrapper>
					<div className="sidebar-header">
						<h3>Sắp xếp kết quả</h3>
						<span>Sắp xếp kết quả theo lựa chọn</span>
					</div>
					<FilterOption>
						<Radio.Group value={1}>
							<Row>
								<Col span={12} className="gutter-row">
									<Radio value={1}>Nổi bật</Radio>
								</Col>
								<Col span={12} className="gutter-row">
									<Radio value={2}>Giá cao nhất</Radio>
								</Col>
								<Col span={12} className="gutter-row">
									<Radio value={3}>Giá thấp nhất</Radio>
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
								<p>50.000.000</p>
								<p className="VND">VND</p>
							</div>
							<div className="rectance"></div>
							<div className="wraper-price">
								<p>100.000.000</p>
								<p className="VND">VND</p>
							</div>
						</div>
						<Slider
							range
							step={100000}
							min={1000000}
							max={10000000}
							defaultValue={[5000000, 10000000]}
							onChange={this.onchangeValueSlider}
						/>
					</FilterOption>

					<FilterOption>
						<h3>Danh mục</h3>
						<Checkbox.Group>
							<Row>
								<Col span={12} className="gutter-row">
									<Checkbox value="TuVi">Tử Vi</Checkbox>
								</Col>
								<Col span={12} className="gutter-row">
									<Checkbox value="PhongThuy">Phong Thủy</Checkbox>
								</Col>
								<Col span={12} className="gutter-row">
									<Checkbox value="BoiToan">Bói Toán</Checkbox>
								</Col>
								<Col span={12} className="gutter-row">
									<Checkbox value="TuongSo">Tướng Số</Checkbox>
								</Col>
								<Col span={12} className="gutter-row">
									<Checkbox value="VanMenh">Vận Mệnh</Checkbox>
								</Col>
								<Col span={12} className="gutter-row">
									<Checkbox value="TinhDuyen">Tình Duyên</Checkbox>
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
