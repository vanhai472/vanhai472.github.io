import React from "react";
import { Row, Col, Card, Alert } from "antd";
import ScrewMoney from "../../Home/ScrewMoney";

class RechargeUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Row>
        <Col md={24} xl={18}>
          <Card
            title="Nạp tiền"
            bordered
            style={{ width: "100%", borderRadius: 20 }}
          >
            <Card
              hoverable
              bordered
              style={{ borderRadius: 20, marginBottom: "20px" }}
              bodyStyle={{ paddingTop: "5px", margin: "10px" }}
            >
              <p>Tỷ giá: 1 VND = 1 mCoin</p>
              <p>
                Bạn vui lòng chuyển khoản chính xác nội dung chuyển khoản bên
                dưới hệ thống sẽ tự động cộng tiền cho bạn sau 1 phút sau khi
                nhận được tiền. Nếu chuyển khác ngân hàng sẽ mất thời gian lâu
                hơn, tùy thời gian xử lý của mỗi ngân hàng Nếu sau 10 phút từ
                khi tiền trong tài khoản của bạn bị trừ mà bạn vẫn chưa được
                cộng tiền vui lòng nhấn vào đây để liên hệ hỗ trợ.
              </p>
            </Card>
            <Row style={{ textAlign: "center" }} gutter={20}>
              <Col md={24} xl={12}>
                <Card
                  title={<h3>Nạp qua ngân hàng</h3>}
                  hoverable
                  bordered
                  style={{ borderRadius: 20, marginBottom: "20px" }}
                  bodyStyle={{ paddingTop: "5px" }}
                >
                  <Row type="flex" justify="space-between">
                    <Col className="left">
                      {" "}
                      <p className="inbl">Số tài khoản:</p>
                      <p className="inbl">Tên tài khoản:</p>
                      <p className="inbl">Ngân hàng:</p>
                      <p className="inbl">Chi Nhánh:</p>
                    </Col>
                    <Col className="right">
                      {" "}
                      <p className=" ">0531002584992</p>
                      <p className=" ">Phan Le Chi</p>
                      <p className=" ">Vietcombank</p>
                      <p className=" ">Bình Thạnh TPHCM</p>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md={24} xl={12}>
                <Card
                  title={<h3>Nạp qua MOMO</h3>}
                  hoverable
                  bordered
                  style={{ borderRadius: 20, marginBottom: "20px" }}
                  bodyStyle={{ paddingTop: "5px" }}
                >
                  <Row type="flex" justify="space-between">
                    <Col className="left">
                      {" "}
                      <p className="inbl">Số tài khoản:</p>
                      <p className="inbl">Tên tài khoản:</p>
                      <p className="inbl">Ngân hàng:</p>
                      <p className="inbl">Chi Nhánh:</p>
                    </Col>
                    <Col className="right">
                      {" "}
                      <p className=" ">0531002584992</p>
                      <p className=" ">Phan Le Chi</p>
                      <p className=" ">Vietcombank</p>
                      <p className=" ">Bình Thạnh TPHCM</p>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
            <Alert
              message={
                <h3 className="contentTransfer">Nội dung chuyển khoản</h3>
              }
              description={<h3 className="userName">mfb userName</h3>}
              type="info"
            />
          </Card>
        </Col>
        <Col md={24} xl={6}>
          <ScrewMoney />
        </Col>
      </Row>
    );
  }
}

export default RechargeUser;
