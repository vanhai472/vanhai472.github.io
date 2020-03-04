import React from "react";
import { Icon, Card, Row, Col, DatePicker, Statistic } from "antd";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import moment from "moment";
import { withRouter } from "react-router-dom";
import * as userAction from "../../../actions/user";
import { AUTHORIZATION_KEY } from "../../../constants";
import "./index.scss";
import ChartReactJS from "../chart";

const { RangePicker } = DatePicker;
const dateFormat = "YYYY/MM/DD";
class BodyPageReport extends React.Component {
  state = { token: localStorage.getItem(AUTHORIZATION_KEY) };
  componentDidMount() {
    const { userAction } = this.props;
    const { getBalance } = userAction;
    const { token } = this.state;
    if (getBalance) {
      const params = {
        api_token: token
      };
      getBalance(params);
    }
  }
  render() {
    const { dataBalance } = this.props;
    return (
      <Card
        hoverable
        bordered
        style={{
          borderRadius: 20,
          marginBottom: "20px",
          backgroundColor: "aliceblue"
        }}
        bodyStyle={{ paddingTop: "5px", padding: "20px" }}
      >
        <Row gutter={20} type="flex" justify="space-between">
          <Col sm={24} xl={8}>
            <Card
              bordered={false}
              style={{
                borderRadius: 20,
                marginBottom: "20px"
              }}
            >
              <Statistic
                title="Số dư"
                value={dataBalance?.balance}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix={<Icon type="credit-card" />}
                suffix="VND"
              />
            </Card>
          </Col>
          <Col sm={24} xl={8}>
            <Card
              bordered={false}
              style={{
                borderRadius: 20
              }}
            >
              <Statistic
                title="Tổng đã nạp"
                value={dataBalance?.total_deposit}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix={<Icon type="credit-card" />}
                suffix="VND"
              />
            </Card>
          </Col>
        </Row>

        <Row style={{ marginTop: 50 }}>
          <Col sm={24} xl={12}>
            <h2>THỐNG KÊ NẠP TIỀN VÀ CHI TIÊU</h2>
          </Col>
          <Col sm={24} xl={12}>
            <div className="wrapper-datepicker">
              <RangePicker
                defaultValue={[
                  moment("2015/01/01", dateFormat),
                  moment("2015/01/01", dateFormat)
                ]}
                format={dateFormat}
                size="large"
              />
            </div>
          </Col>
        </Row>
        <ChartReactJS />
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.ui.show_loading,
  datatTypeServices: state.user.datatTypeServices,
  dataBalance: state.user.dataBalance
});

const mapDispatchToProps = dispatch => ({
  userAction: bindActionCreators(userAction, dispatch)
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(withRouter(BodyPageReport));
