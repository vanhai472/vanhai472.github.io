import React from "react";
import { Card, Icon } from "antd";
import "./index.scss";

class ScrewMoney extends React.Component {
 

  render() {
    return (
      <>
      <div className="wrraper-ScrewMoney">
        <Card className="noteDeal1">
        <div>
          <Icon style={{ fontSize: 20,display:'inline-block' }} type="credit-card" />{" "}
          <p className="noteDeal-item">Số tiền hiện có</p><span className="number-ScrewMoney">0</span>
          </div>
        </Card>
        <Card className="noteDeal2">
        <div>
          <Icon style={{ fontSize: 20,display:'inline-block' }} type="import" />{" "}
          <p className="noteDeal-item">Số tiền đã nạp</p><span className="number-ScrewMoney ml">0</span>
          </div>
        </Card>
        <Card style={{borderRadius:20, marginTop:30, background:'#FEE9B2'}}>
        <div>
         <h4>Chú ý:</h4>
         <p>- Buổi tối 18-24h Vietcombank thường tổng kết các giao dịch trong ngày nên thường chậm và lag.
- Do đó chuyển khoản vào thời gian này có thể bị auto nạp chậm, sau vài tiếng mới nhận được tiền.
- Các bạn nên ưu tiên chuyển vào ban ngày để nhận tiền nhanh nhất nhé.</p>
          </div>
        </Card>
        </div>
      </>
    );
  }
}

export default ScrewMoney;
