import React from "react";
import { Card, Icon, Statistic } from "antd";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as userAction from "../../actions/user";
import { AUTHORIZATION_KEY } from "../../constants";
import "./index.scss";

class ScrewMoney extends React.Component {
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
      <>
        <div className="wrraper-ScrewMoney">
          <Card className="noteDeal1">
            <Statistic
              title={<p className="noteDeal-item">Số tiền hiện có</p>}
              value={dataBalance?.balance}
              suffix="VND"
            />
          </Card>
          <Card className="noteDeal2">
            <Statistic
              title={<p className="noteDeal-item">Số tiền đã nạp</p>}
              value={dataBalance?.total_deposit}
              suffix="VND"
            />
          </Card>
          <Card
            style={{ borderRadius: 20, marginTop: 30, background: "#FEE9B2" }}
          >
            <div>
              <h4>Chú ý:</h4>
              <p>
                - Buổi tối 18-24h Vietcombank thường tổng kết các giao dịch
                trong ngày nên thường chậm và lag. - Do đó chuyển khoản vào thời
                gian này có thể bị auto nạp chậm, sau vài tiếng mới nhận được
                tiền. - Các bạn nên ưu tiên chuyển vào ban ngày để nhận tiền
                nhanh nhất nhé.
              </p>
            </div>
          </Card>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.ui.show_loading,
  dataBalance: state.user.dataBalance
});

const mapDispatchToProps = dispatch => ({
  userAction: bindActionCreators(userAction, dispatch)
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(withRouter(ScrewMoney));
