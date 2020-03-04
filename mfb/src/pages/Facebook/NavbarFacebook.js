import React from "react";
import { Card, Avatar } from "antd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as userAction from "../../actions/user";
import { USERNAME, EMAIL } from "../../constants";

const { Meta } = Card;
class NavbarFacebook extends React.Component {
  render() {
    return (
      <>
        <div className="wrraperNavbarFaceebook">
          <Card style={{ borderRadius: "20px" }}>
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={localStorage.getItem(USERNAME) || "Tên khách hàng"}
              description={localStorage.getItem(EMAIL) || "Email khách hàng"}
            />
          </Card>
          <Card
            style={{
              borderRadius: 20,
              marginTop: 30,
              background: "rgb(53, 120, 229)",
              color: "#fff"
            }}
          >
            <h4 className="title">Hướng dẫn:</h4>
            <p className="styleText-NavbarFacebook">
              - Để sử dụng hệ thống bên mình bạn cần đăng ký 1 tài khoản ở MFB
              .VN - Chú ý trỏ Domain về IP: 66.42.49.26 - Đăng ký miễn phí,
              không tốn bất cứ 1 chi phí nào, ko phí duy trì - Bạn xài bao nhiêu
              thì mua bấy nhiêu, không yêu cầu nạp tiền trước - Bạn chỉ cần trỏ
              IP tên miền của bạn về địa chỉ IP: 66.42.49.26 hệ thống sẽ tự động
              nhận tên miền và tạo site ctv riêng cho bạn, không cần hosting -
              Bạn vào site riêng bằng tên miền của bạn, chỉnh sửa các thông tin
              liên hệ và ngân hàng để khách của bạn chuyển khoản - Hàng tháng
              mfb sẽ có các đợt KM nạp tiền, thường vào đầu tháng, đại lý canh
              nạp lúc đó để đc ưu đãi nhiều nhất nhé - Cách làm việc giữa mfb và
              site đại lý (xem kỹ):{" "}
              <a
                href="https://www.youtube.com/watch?v=zEg7Qwk-wwo"
                className="link-help"
              >
                https://www.youtube.com/watch?v=zEg7Qwk-wwo
              </a>
            </p>
          </Card>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => ({
  show_loading: state.ui.show_loading,
  dataLogin: state.auth.dataLogin
});

const mapDispatchToProps = dispatch => ({
  userAction: bindActionCreators(userAction, dispatch)
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(withRouter(NavbarFacebook));
