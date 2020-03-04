import React from "react";
import { Icon, Card } from "antd";
import "./index.scss";

class HeaderPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Card style={{ width: "100%" }}>
          <div className="money">
            <Icon
              style={{ fontSize: 30 }}
              type="credit-card"
              className="icon-reportPage"
            />
            <div className="reportMoney">
              <p className="title-reportMoney firstChild">Số dư</p>
              <p className="title-reportMoney number">0</p>
            </div>
          </div>
          <div className="money">
            <Icon
              style={{ fontSize: 30 }}
              type="schedule"
              className="icon-reportPage"
            />
            <div className="reportMoney">
              <p className="title-reportMoney">Ngày sử dụng</p>
              <p className="title-reportMoney number">0</p>
            </div>
          </div>
          <div className="money lastChild">
            <Icon
              style={{ fontSize: 30 }}
              type="euro"
              className="icon-reportPage"
            />
            <div className="reportMoney">
              <p className="title-reportMoney ">Tổng Đã Nạp</p>
              <p className="title-reportMoney number">0</p>
            </div>
          </div>
        </Card>
      </>
    );
  }
}

export default HeaderPage;
