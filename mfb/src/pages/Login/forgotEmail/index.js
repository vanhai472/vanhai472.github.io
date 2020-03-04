import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { Form, Icon, Input, Button, Row, Col, Card } from "antd";
import * as authAction from "../../../actions/auth";

class ForgotEmail extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        const { authAction } = this.props;
        const { forGotEmail } = authAction;
        if (forGotEmail) {
          const { email } = values;
          forGotEmail(email);
        }
      }
    });
  };
  showResetPassword = () => {
    if (this.state.show_loading === true) {
      return <h1>hello</h1>;
    }
  };
  render() {
    const { show_loading } = this.props;
    const { getFieldDecorator } = this.props.form;

    return (
      <Row className="background">
        <Col span={15}>
          <div className="wraper-login"></div>
        </Col>
        <Col span={9}>
          <Card
            title="Resset Mật Khẩu"
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
              {this.showResetPassword}
              <Form.Item>
                {getFieldDecorator("email", {
                  rules: [
                    { required: true, message: "Please input your email!" }
                  ]
                })(
                  <Input
                    className="input-login"
                    prefix={
                      <Icon type="a" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Nhập địa chỉ Email"
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
                    // onClick={() => this.props.history.push("/resetPassword")}
                  >
                    Gửi yêu cầu
                  </Button>
                </div>
                <div className="wraper-create">
                  <span className="no-acount">Chưa có tài khoản</span>{" "}
                  <span
                    className="span-signup"
                    onClick={() => this.props.history.push("/login")}
                  >
                    Đăng Nhập?
                  </span>
                </div>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    );
  }
}
const WrappedNormalForgotEmail = Form.create({ name: "normal_login" })(
  ForgotEmail
);
const mapStateToProps = state => ({
  show_loading: state.ui.show_loading
});

const mapDispatchToProps = dispatch => ({
  authAction: bindActionCreators(authAction, dispatch)
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(withRouter(WrappedNormalForgotEmail));
