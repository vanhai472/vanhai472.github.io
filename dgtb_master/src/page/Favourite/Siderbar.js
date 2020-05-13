import React, { Component } from "react";
import { WraperSiderbar, RateMaster } from "./styles";
import { Rate } from "antd";
import { Radio } from "antd";
import {
  FilterContainer,
  FilterHeader,
  FilterText,
  FilterStar,
  FilterBooking,
} from "./styles";

class Siderbar extends Component {
  state = {
    value: 1,
    schedule: 1,
  };

  onChange = (e) => {
    let { target } = e;
    let { name, value } = target;
    this.setState({ [name]: value });
  };

  renderStar = (quantity) => {
    let html = [];
    for (let index = 1; index <= quantity; index++) {
      html.push(index);
    }
    return html.map((key) => (
      <img src="/icon/Common/star.png" alt="Star-full" key={key} />
    ));
  };
  render() {
    const { value, schedule } = this.state;
    return (
      <WraperSiderbar>
        <div className="header-siderbar">
          <RateMaster>
            <span>4.0</span>
            <span className="fiveRate">trên 5</span>
          </RateMaster>
          <Rate allowHalf defaultValue={4} />
        </div>
        <FilterContainer>
          <FilterHeader>
            <div className="filter-reset">
              <span>Bộ lọc</span>
              <span onClick={this.reSetFilter}>Đặt lại bộ lọc</span>
            </div>
            <div>Hiển thị kết quả phân loại theo:</div>
          </FilterHeader>

          <FilterStar>
            <FilterText>Theo số sao đánh giá</FilterText>
            <Radio.Group
              className="filter-star"
              name="value"
              onChange={this.onChange}
              value={value}
            >
              <Radio value={"1"}>{this.renderStar(1)}</Radio>
              <Radio value={"2"}>{this.renderStar(2)}</Radio>
              <Radio value={"3"}>{this.renderStar(3)}</Radio>
              <Radio value={"4"}>{this.renderStar(4)}</Radio>
              <Radio value={"5"}>{this.renderStar(5)}</Radio>
            </Radio.Group>
          </FilterStar>

          <FilterBooking>
            <FilterText>Loại đánh giá</FilterText>
            <Radio.Group
              className="filter-booking"
              name="schedule"
              onChange={this.onChange}
              value={schedule}
            >
              <Radio value={"0"} style={{ fontSize: 14 }}>
                <span className="booking"> Có đặt lịch</span>
              </Radio>
              <Radio value={"1"} style={{ fontSize: 14 }}>
                <span className="booking">Chưa đặt lịch</span>
              </Radio>
            </Radio.Group>
          </FilterBooking>
        </FilterContainer>
      </WraperSiderbar>
    );
  }
}

export default Siderbar;
