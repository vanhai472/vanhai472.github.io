import React from "react";
import { Card } from "antd";
import "./index.scss";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card
        title={<h2 className="title-notification">THÔNG BÁO</h2>}
        hoverable
        bordered
        style={{
          borderRadius: 20,
          marginBottom: "20px",
          backgroundColor: "aliceblue"
        }}
        bodyStyle={{ paddingTop: "5px", padding: "20px" }}
      >
        <Card className="notification" style={{ borderRadius: 20, margin: 20 }}>
          <p className="styleTextNavbar">Đổi SĐT Momo</p>
          <p className="styleTextNavbar">
            Đổi số điện thoại nạp tiền momo, mn chú ý nạp theo số mới để hệ
            thống tự động cộng tiền nhanh nhất nhé
          </p>
        </Card>
        <Card className="notification" style={{ borderRadius: 20, margin: 20 }}>
          <p className="styleTextNavbar">Đổi SĐT Momo</p>
          <p className="styleTextNavbar">
            Đổi số điện thoại nạp tiền momo, mn chú ý nạp theo số mới để hệ
            thống tự động cộng tiền nhanh nhất nhé
          </p>
        </Card>
      </Card>
    );
  }
}

export default Navbar;
