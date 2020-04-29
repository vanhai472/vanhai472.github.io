import React, { Component } from "react";
import CardBooking from "@Components/Card/CardBooking";
import { Button } from "antd";
import CardBookingWrapper, {
  CardBookingFooter,
  CardBookingFooterLeft,
  CardBookingFooterRight,
} from "./styles";
class Comming extends Component {
  render() {
    const a = [1, 2, 3, 4, 5];
    return (
      <div>
        {a.map((value, key) => (
          <CardBookingWrapper key={key}>
            <CardBooking />
            <CardBookingFooter>
              <CardBookingFooterLeft>
                <span>Giá</span>
                <span>2.000.000 VND</span>
                <span>
                  Thanh toán trước 24:00 ngày 20 tháng 2, 2020. Lịch đặt sẽ bị
                  hủy nếu không thanh toán trước.
                </span>
              </CardBookingFooterLeft>

              <CardBookingFooterRight>
                <Button className="sign-blue" style={{ width: 180 }}>
                  Đánh giá Thầy
                </Button>
              </CardBookingFooterRight>
            </CardBookingFooter>
          </CardBookingWrapper>
        ))}
      </div>
    );
  }
}

export default Comming;
