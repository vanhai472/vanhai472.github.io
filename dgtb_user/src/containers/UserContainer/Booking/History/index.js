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
    const a = [
      { denied: true },
      { denied: false },
      { denied: false },
      { denied: false },
      { denied: false },
    ];
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
                {value.denied ? (
                  <div id="denied">
                    <h3>Phí hủy đặt lịch</h3>
                    <div>100.000 VND</div>
                    <span>Do bạn hủy đặt lịch sau khi Thầy đã xác nhận.</span>
                  </div>
                ) : (
                  <div>
                    <h3>Đánh giá của bạn giúp chúng tôi cải thiện dịch vụ</h3>
                    <Button className="sign-blue" style={{ width: 180 }}>
                      Đánh giá Thầy
                    </Button>
                  </div>
                )}
              </CardBookingFooterRight>
            </CardBookingFooter>
          </CardBookingWrapper>
        ))}
      </div>
    );
  }
}

export default Comming;
