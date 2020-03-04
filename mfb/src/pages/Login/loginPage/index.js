import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { Form, Icon, Input, Button, Checkbox, Row, Col, Card } from "antd";
import "./index.scss";
import * as authAction from "../../../actions/auth";

class LoginPage extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        const { authAction } = this.props;
        const { login } = authAction;
        if (login) {
          const { username, password } = values;
          login(username, password);
        }
      }
    });
  };

  render() {
    const { show_loading } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <Row className="background">
        <Col md={24} xl={15}>
          <div className="wraper-login"></div>
        </Col>
        <Col md={24} xl={9}>
          <Card
            title="Đăng Nhập"
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
                {getFieldDecorator("username", {
                  rules: [
                    { required: true, message: "Please input your username!" }
                  ]
                })(
                  <Input
                    className="input-login"
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Username"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("password", {
                  rules: [
                    { required: true, message: "Please input your Password!" }
                  ]
                })(
                  <Input
                    className="input-login"
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="Password"
                  />
                )}
              </Form.Item>
              <Form.Item>
                <div>
                  {getFieldDecorator("remember", {
                    valuePropName: "checked",
                    initialValue: true
                  })(
                    <span className="remember">
                      <Checkbox>Nhớ mật khẩu</Checkbox>
                    </span>
                  )}
                  <span
                    className="span-signup"
                    onClick={() => this.props.history.push("/forgot")}
                  >
                    Quên mật khẩu
                  </span>
                </div>
                <div style={{ marginTop: 15 }}>
                  <Button
                    size={"large"}
                    type="primary"
                    loading={show_loading}
                    htmlType="submit"
                    className="login-form-button "
                  >
                    Đăng nhập
                  </Button>
                </div>
                <div className="wraper-create">
                  <span className="no-acount">Chưa có tài khoản</span>{" "}
                  <span
                    className="span-signup"
                    onClick={() => this.props.history.push("/signUp")}
                  >
                    Đăng ký tài khoản
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
const WrappedNormalLoginPage = Form.create({ name: "normal_login" })(LoginPage);
const mapStateToProps = state => ({
  show_loading: state.ui.show_loading
});

const mapDispatchToProps = dispatch => ({
  authAction: bindActionCreators(authAction, dispatch)
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(withRouter(WrappedNormalLoginPage));
