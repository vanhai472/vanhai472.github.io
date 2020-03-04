import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { Form, Icon, Input, Button, Row, Col, Card } from "antd";
import * as authAction from "../../../actions/auth";

class SignUpPage extends React.Component {
  constructor() {
    super();
    this.state = {
      showLoading: false,
      confirmDirty: false,
      autoCompleteResult: []
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        const { authAction } = this.props;
        const { register } = authAction;
        if (register) {
          const { username, password, email } = values;
          register(username, password, email);
        }
      }
    });
  };
  setTimeDisable = () => {
    setTimeout(
      () => this.setState({ showLoading: !this.state.showLoading }),
      20
    );
  };
  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };
  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = [".com", ".org", ".net"].map(
        domain => `${value}${domain}`
      );
    }
    this.setState({ autoCompleteResult });
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
            title="Đăng Ký"
            bordered={false}
            style={{
              width: 380,
              background: "rgb(242,242,242)",
              borderRadius: 15,
              marginTop: 100,
              marginLeft: 80
            }}
          >
            <Form onSubmit={this.handleSubmit}>
              <Form.Item>
                {getFieldDecorator("username", {
                  rules: [
                    { required: true, message: "Please input your username!" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Tên tài khoản"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("email", {
                  rules: [
                    { required: true, message: "Please input your email!" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="email"
                    placeholder="nhập Email"
                  />
                )}
              </Form.Item>
              <Form.Item hasFeedback>
                {getFieldDecorator("password", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your password!"
                    },
                    {
                      validator: this.validateToNextPassword
                    }
                  ]
                })(<Input.Password placeholder="Nhập mật khẩu" />)}
              </Form.Item>
              <Form.Item hasFeedback>
                {getFieldDecorator("confirm", {
                  rules: [
                    {
                      required: true,
                      message: "Please confirm your password!"
                    },
                    {
                      validator: this.compareToFirstPassword
                    }
                  ]
                })(
                  <Input.Password
                    onBlur={this.handleConfirmBlur}
                    placeholder="Nhập lại mật khẩu"
                  />
                )}
              </Form.Item>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })}
              <div style={{ marginTop: 15 }}>
                <Button
                  size={"large"}
                  type="primary"
                  htmlType="submit"
                  className="login-form-button "
                  // disabled={this.state.showLoading}
                  isLoading={this.state.showLoading}
                  onClick={this.setTimeDisable}
                >
                  Đăng Ký
                </Button>
              </div>
              <div className="wraper-create">
                <span className="no-acount">Đã có tài khoản</span>{" "}
                <span
                  className="span-signup"
                  onClick={() => this.props.history.push("/login")}
                >
                  Đăng nhập?
                </span>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    );
  }
}
const WrappedNormalSignUpPage = Form.create({ name: "normal_login" })(
  SignUpPage
);
const mapStateToProps = state => ({
  isLoading: state.ui.show_loading
});

const mapDispatchToProps = dispatch => ({
  authAction: bindActionCreators(authAction, dispatch)
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(withRouter(WrappedNormalSignUpPage));
