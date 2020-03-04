import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { Form, Icon, Input, Button,  Row, Col, Card } from "antd";
import * as authAction from "../../../actions/auth";
// import Password from "antd/lib/input/Password";

class ResetPassword extends React.Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
         const { authAction } = this.props;
         const { resetPassword } = authAction;
         if (resetPassword) {
           const { email,reset_code,new_password } = values;
           resetPassword(email,reset_code,new_password);
         }
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Row className="background">
        <Col span={15}>
          <div className="wraper-login"></div>
        </Col>
        <Col span={9}>
          <Card
            title="Tạo mật khẩu mới"
            bordered={false}
            style={{
              width: 380,
              background: "rgb(242,242,242)",
              borderRadius: 15,
              marginTop: 100,
              marginLeft: 80
            }}
            className="wraper-form"
          >
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator("email", {
                  rules: [
                    { required: true, message: "Please input your email!" }
                  ]
                })(
                  <Input
                    className="input-login"
                    prefix={<Icon type="a" style={{ color: "rgba(0,0,0,.25)" }} />}
                    placeholder="Nhập địa chỉ Email"
                    type="email"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("reset_code", {
                  rules: [
                    { required: true, message: "Please input your Code!" }
                  ]
                })(
                  <Input
                    className="input-login"
                    prefix={<Icon type="a" style={{ color: "rgba(0,0,0,.25)" }} />}
                    placeholder="Nhập mã xác nhận từ địa chỉ email"
                    type="number"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("new_password", {
                  rules: [
                    { required: true, message: "Please input your new password!" }
                  ]
                })(
                  <Input
                    className="input-login"
                    prefix={<Icon type="a" style={{ color: "rgba(0,0,0,.25)" }} />}
                    placeholder="Nhập mật khẩu mới"
                    type="password"
                  />
                )}
              </Form.Item>
              <Form.Item>
                <div style={{ marginTop: 15 }}>
                  <Button
                    size={"large"}
                    type="primary"
                    htmlType="submit"
                    className="login-form-button "
                  >
                   Gửi yêu cầu
                  </Button>
                </div>
                <div className="wraper-create">
                  <span className="no-acount">Chưa có tài khoản</span>{" "}
                  <a
                    href="#a"
                    onClick={() => this.props.history.push("/login")}
                  >
                    Đăng Nhập?
                  </a>
                </div>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    );
  }
}
const WrappedNormalResetpassword = Form.create({ name: "normal_resetPassword" })(
    ResetPassword
);
const mapStateToProps = state => ({
  isLoading: state.ui.show_loading
});

const mapDispatchToProps = dispatch => ({
  authAction: bindActionCreators(authAction, dispatch)
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(withRouter(WrappedNormalResetpassword));
