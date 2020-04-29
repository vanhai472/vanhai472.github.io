import React, { Component } from "react";
import CardBooking from "@Components/Card/CardBooking";
import { Button } from "antd";
import CardBookingWrapper, {
  CardBookingFooter,
  CardBookingFooterLeft,
  CardBookingFooterRight,
  Group,
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
                <span>Thanh toán online</span>
              </CardBookingFooterLeft>

              <CardBookingFooterRight>
                <h3>
                  Phí hủy đặt lịch là <br /> 100.000 VND
                </h3>
                <Group>
                  <Button className="sign-blue" style={{ width: 180 }}>
                    Đổi thời gian xem
                  </Button>
                  <Button className="sign-white" style={{ width: 180 }}>
                    Hủy đặt lịch
                  </Button>
                </Group>
              </CardBookingFooterRight>
            </CardBookingFooter>
          </CardBookingWrapper>
        ))}
      </div>
    );
  }
}

export default Comming;
