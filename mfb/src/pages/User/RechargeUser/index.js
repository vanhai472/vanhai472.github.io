import React from "react";
import { Row, Col, Card, Alert } from "antd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import ScrewMoney from "../../Home/ScrewMoney";
import * as userAction from "../../../actions/user";
import { AUTHORIZATION_KEY } from "../../../constants";

class RechargeUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem(AUTHORIZATION_KEY)
    };
  }
  componentDidMount() {
    const { token } = this.state;
    const { userAction } = this.props;
    const { getPaymentMethod } = userAction;
    if (getPaymentMethod) {
      const params = {
        token
      };
      getPaymentMethod(params);
    }
  }
  render() {
    const { dataPayment } = this.props;
    console.log("111", dataPayment);
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
                      <p className="txt-bold">
                        {dataPayment[1]?.number_account ||
                          "Không tìm thấy thông tin"}
                      </p>
                      <p className="txt-bold">
                        {dataPayment[1]?.name || "Không tìm thấy thông tin"}
                      </p>
                      <p className="txt-bold">
                        {dataPayment[1]?.method || "Không tìm thấy thông tin"}
                      </p>
                      <p className="txt-bold">
                        {dataPayment[1]?.branch || "Không tìm thấy thông tin"}
                      </p>
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
                      <p className="inbl">Số điện thoại:</p>
                      <p className="inbl">Tên tài khoản:</p>
                    </Col>
                    <Col className="right">
                      {" "}
                      <p className="txt-bold">
                        {" "}
                        {dataPayment[0]?.number_phone ||
                          "Không tìm thấy thông tin"}
                      </p>
                      <p className="txt-bold">
                        {" "}
                        {dataPayment[0]?.name || "Không tìm thấy thông tin"}
                      </p>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
            <Alert
              message={
                <h3 className="contentTransfer">Nội dung chuyển khoản</h3>
              }
              description={null}
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

const mapStateToProps = state => ({
  show_loading: state.ui.show_loading,
  dataPayment: state.user.dataPayment
});

const mapDispatchToProps = dispatch => ({
  userAction: bindActionCreators(userAction, dispatch)
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(withRouter(RechargeUser));
