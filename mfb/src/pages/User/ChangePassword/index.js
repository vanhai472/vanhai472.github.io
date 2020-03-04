import React from "react";
import { Card, Button, Input, Form, Icon } from "antd";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { withRouter } from "react-router-dom";
import * as authAction from "../../../actions/auth";
import { AUTHORIZATION_KEY } from "../../../constants";

class ChangeAcount extends React.Component {
  constructor(props) {
    super(props);
    this.state = { token: localStorage.getItem(AUTHORIZATION_KEY) };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { form } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        const { token } = this.state;
        const { authAction } = this.props;
        const { changePassword } = authAction;
        if (changePassword) {
          const params = {
            api_token: token,
            old_password: form.getFieldValue("password_over"),
            new_password: form.getFieldValue("password")
          };
          changePassword(params);
        }
      }
    });
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

  render() {
    const { getFieldDecorator } = this.props.form;
    const { isLoading } = this.props;
    return (
      <>
        <Card
          style={{
            width: 500,
            height: "auto",
            margin: "0px auto",
            borderRadius: "20px"
          }}
        >
          <Form onSubmit={this.handleSubmit}>
            <h2 style={{ color: "#1890ff" }}>Đổi mật khẩu</h2>
            <Form.Item>
              {getFieldDecorator("password_over", {
                rules: [
                  { required: true, message: "Please input your Password!" }
                ]
              })(
                <Input
                  prefix={<Icon type="lock" />}
                  className="input-blue"
                  size="large"
                  type="password"
                  placeholder="Nhập mật khẩu cũ"
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
              })(
                <Input.Password
                  prefix={<Icon type="lock" />}
                  className="input-blue"
                  size="large"
                  placeholder="Nhập mật khẩu mới"
                />
              )}
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
                  prefix={<Icon type="lock" />}
                  className="input-blue"
                  size="large"
                  onBlur={this.handleConfirmBlur}
                  placeholder="Nhập lại mật khẩu mới"
                />
              )}
            </Form.Item>
            <Button
              size={"large"}
              type="primary"
              htmlType="submit"
              loading={isLoading}
              className="login-form-button "
            >
              Đổi mật khẩu
            </Button>
          </Form>
        </Card>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.ui.show_loading
});
const mapDispatchToProps = dispatch => ({
  authAction: bindActionCreators(authAction, dispatch)
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const WrappedHorizontalChangeAcount = Form.create({
  name: "horizontal_ChangeAcount"
})(ChangeAcount);

export default compose(withConnect)(withRouter(WrappedHorizontalChangeAcount));
