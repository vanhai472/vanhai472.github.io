import React, { Component } from "react";
import ProfileMasterCalenderWrapper, {
  WraperContent,
  Status,
  SelectDate,
  Radios,
} from "./styles";
import InfiniteCalendar from "react-infinite-calendar";
import "react-infinite-calendar/styles.css";
import {
  Calendar,
  defaultMultipleDateInterpolation,
  withMultipleDates,
} from "react-infinite-calendar";
import { Radio } from "antd";
import moment from "moment";
const MultipleDatesCalendar = withMultipleDates(Calendar);

class CalenderMaster extends Component {
  state = { dates: [], status: true, value: 1 };

  onChange = (e) => {
    console.log("radio checked", e.target.value);

    this.setState({
      value: e.target.value,
    });
  };
  render() {
    let { dates, value } = this.state;
    let data = [];

    // state  let dates = [];
    //const {calender} = this.props;
    //calendar [] sau khi select action push value vao redux => calender ["1"]
    // dates =
    // let selectedD = [String(moment().format("MM-DD-YYYY"))];
    let selectedD = [];
    data = [...selectedD];
    return (
      <ProfileMasterCalenderWrapper>
        <h2>Tạo ngày bạn không thể nhận lịch</h2>
        <SelectDate>
          <WraperContent backgroundState={value}>
            <InfiniteCalendar
              className="show-date"
              width={440}
              height={220}
              Component={withMultipleDates(Calendar)}
              selected={selectedD}
              interpolateSelection={defaultMultipleDateInterpolation}
              onSelect={(date) => {
                if (!data.includes(String(moment(date).format("MM-DD-YYYY")))) {
                  data.push(String(moment(date).format("MM-DD-YYYY")));
                  console.log("1", data);
                } else {
                  var result = arrayRemove(
                    data,
                    String(moment(date).format("MM-DD-YYYY"))
                  );
                  data = result;
                  console.log("2", data);
                }
              }}
            />
          </WraperContent>

          <Status>
            <h3>Trạng thái</h3>
            <Radios>
              <Radio.Group onChange={this.onChange} value={value}>
                <Radio className="radio-item" value={1}>
                  Có thể nhận lịch
                  <img
                    className="img-item"
                    src="/icon/profile/lightDra.png"
                    alt="lightGreen"
                  />
                </Radio>
                <Radio className="radio-item" value={2}>
                  Không thể nhận lịch
                  <img
                    className="img-item"
                    src="/icon/profile/lightGreen.png"
                    alt="lightGreen"
                  />
                </Radio>
              </Radio.Group>
            </Radios>
            <div className="resetAll">Đặt lại toàn bộ</div>
          </Status>
        </SelectDate>
      </ProfileMasterCalenderWrapper>
    );
  }
}
function arrayRemove(arr, value) {
  return arr.filter(function (ele) {
    return ele != value;
  });
}

export default CalenderMaster;
