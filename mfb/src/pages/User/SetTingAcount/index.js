import React from "react";
import {
  Row,
  Col,
  Card,
  Button,
  Input,
  Form,
  Tabs,
  Select,
  InputNumber
} from "antd";
import NavbarUser from "./NavbarUser";
// import "./index.scss";
import * as authAction from "../../../actions/auth";
import * as userAction from "../../../actions/user";
import { withRouter } from "react-router-dom";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import RechargePage from "../RechargeUser";
import { AUTHORIZATION_KEY } from "../../../constants";
import axiosService from "../../../services/axiosService";
import ChangeAcount from "../ChangePassword";
const { TabPane } = Tabs;
const { Option } = Select;
const children = [];
const width = window.innerWidth;
for (let i = 178; i < 1000; i++) {
  children.push(<Option key={++i}>{++i}</Option>);
}

class SetTingAcount extends React.Component {
  state = {
    visible: false,
    confirmDirty: false,
    autoCompleteResult: [],
    token: localStorage.getItem(AUTHORIZATION_KEY)
  };

  componentDidMount() {
    const { userAction } = this.props;
    const { getInfo } = userAction;
    const { token } = this.state;
    if (getInfo) {
      const params = {
        token
      };
      getInfo(params);
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { token } = this.state;
        const { authAction } = this.props;
        const { changeInfo } = authAction;
        if (changeInfo) {
          values.api_token = token;
          changeInfo(values);
        }
      }
    });
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  handleLogout = () => {
    localStorage.removeItem(AUTHORIZATION_KEY);
    axiosService.removeHeader("Authorization");
    const { history } = this.props;
    if (history) {
      history.push("/login");
    }
  };

  render() {
    const { dataInfo, isLoading } = this.props;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    return (
      <Tabs tabPosition={width <= 768 ? "top" : "left"} animated>
        <TabPane
          tab={<h4 className="title-pane">Cài đặt tài Khoản</h4>}
          key="1"
        >
          <Card
            title={<h3>Cài đặt tài Khoản</h3>}
            hoverable
            bordered
            style={{ borderRadius: 20, marginBottom: "20px" }}
            bodyStyle={{ paddingTop: "5px" }}
            extra={
              <Button type="danger" onClick={() => this.handleLogout()}>
                Đăng xuất
              </Button>
            }
          >
            <Tabs defaultActiveKey="1" onChange={this.callback}>
              <TabPane tab={<p className="tag-title">Thông tin</p>} key="1">
                <Row gutter={20}>
                  <Col xl={16} md={24}>
                    <Card
                      hoverable
                      bordered
                      bodyStyle={{ paddingTop: "20px" }}
                      style={{ borderRadius: 20, marginBottom: "20px" }}
                    >
                      <Form
                        {...formItemLayout}
                        labelAlign="left"
                        onSubmit={this.handleSubmit}
                      >
                        <Form.Item
                          label={
                            <span className="txtLabel">Tên tài khoản:</span>
                          }
                        >
                          {getFieldDecorator("username", {
                            rules: [
                              {
                                required: true,
                                message: "Please enter link or ID content!"
                              }
                            ],
                            initialValue: dataInfo?.username
                          })(
                            <Input
                              type="text"
                              className="input-blue"
                              size="large"
                              disabled
                            />
                          )}
                        </Form.Item>
                        <Form.Item
                          label={
                            <span className="txtLabel">Địa chỉ Email:</span>
                          }
                        >
                          {getFieldDecorator("email", {
                            rule: [
                              {
                                type: "email",
                                message: "The input is not valid E-mail!"
                              }
                            ],
                            initialValue: dataInfo?.email
                          })(
                            <Input
                              type="text"
                              className="input-blue"
                              size="large"
                            />
                          )}
                        </Form.Item>
                        <Form.Item
                          label={<span className="txtLabel">Facebook ID:</span>}
                        >
                          {getFieldDecorator("facebook_id", {
                            initialValue: dataInfo?.facebook_id
                          })(
                            <Input
                              type="text"
                              className="input-blue"
                              size="large"
                            />
                          )}
                        </Form.Item>
                        <Form.Item
                          label={<span className="txtLabel">Họ và tên:</span>}
                        >
                          {getFieldDecorator("name", {
                            initialValue: dataInfo?.name
                          })(
                            <Input
                              type="text"
                              className="input-blue"
                              size="large"
                            />
                          )}
                        </Form.Item>
                        <Form.Item
                          label={
                            <span className="txtLabel">Số điện thoại:</span>
                          }
                        >
                          {getFieldDecorator("phone_number", {
                            rules: [
                              {
                                required: false,
                                type: "number"
                              }
                            ],
                            initialValue: dataInfo?.phone_number
                          })(
                            <InputNumber
                              type="number"
                              style={{ width: "100%" }}
                              className="input-blue"
                              size="large"
                            />
                          )}
                        </Form.Item>

                        <Button
                          type="primary"
                          htmlType="submit"
                          loading={isLoading}
                          block
                          size="large"
                          className="btn-tientrinh"
                        >
                          Tạo tiến trình
                        </Button>
                      </Form>
                    </Card>
                  </Col>
                  <Col xl={8} md={24}>
                    <NavbarUser />
                  </Col>
                </Row>
                {/* </Card> */}
              </TabPane>
              <TabPane tab={<p className="tag-title">Đổi mật khẩu</p>} key="2">
                <ChangeAcount />
              </TabPane>
            </Tabs>
          </Card>
        </TabPane>
        <TabPane tab={<h4 className="title-pane">Nạp tiền</h4>} key="3">
          <RechargePage />
        </TabPane>
      </Tabs>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.ui.show_loading,
  dataInfo: state.user.dataInfo
});
const mapDispatchToProps = dispatch => ({
  authAction: bindActionCreators(authAction, dispatch),
  userAction: bindActionCreators(userAction, dispatch)
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const WrappedHorizontalSetTingAcount = Form.create({
  name: "horizontal_SetTingAcount"
})(SetTingAcount);

export default compose(withConnect)(withRouter(WrappedHorizontalSetTingAcount));
