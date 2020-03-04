import React, { Component } from "react";
import {
  Button,
  Input,
  Form,
  InputNumber,
  Card,
  Row,Col
} from "antd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import queryString from "query-string";
import * as userAction from "../../../actions/user";
import { findPostsId } from "../../../utils";
import NavbarFacebook from "../NavbarFacebook";

class FormVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { form } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
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
  handleChangeLink = async e => {
    const { form } = this.props;
    const object_id = await findPostsId(e.target.value);
    const url = `https://www.facebook.com/${object_id}`;
    await this.setState(
      {
        urlLink: url
      },
      async () => {
        await form.setFieldsValue({
          link: object_id,
          object_id
        });
      }
    );
  };

  render() {
    const { form, show_loading } = this.props;
    const { getFieldDecorator } = form;
    const paramUrl = queryString.parse(this.props.location.search);

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
        <Row gutter={20}>
        <Col xl={16} md={24}>
        <Card
        hoverable
        bordered
        bodyStyle={{ paddingTop: "20px" }}
        style={{ borderRadius: 20, marginBottom: "20px" }}
      >
          <Form {...formItemLayout} labelAlign="left" onSubmit={this.handleSubmit}>
          <Form.Item 
                      label={<span className="txtLabel">Link hoặc ID</span>}
                       hasFeedback
                      help={
                        paramUrl &&
                        paramUrl?.seeding ===
                          "buff-seeding-like-fanpage-order" ? (
                          <span className="txt-help">
                            Vui lòng kiểm tra Fanpage có thể tăng Like được
                            không theo Video hướng dẫn dưới đây trước khi Order{" "}
                            <a
                              className="link-help"
                              href="https://www.youtube.com/watch?v=QQKPrJry9md"
                              target={"_blank"}
                            >
                              Cick Tại Đây Để Xem Video Hướng Dẫn
                            </a>
                          </span>
                        ) : (
                          ""
                        )
                      }
                    >
                      {getFieldDecorator("link", {
                        rules: [
                          {
                            required: true,
                            message:
                              "Bạn chưa điền Link hoặc ID bài viết (Phải là 1 số)!"
                          }
                        ],
                        onChange: this.handleChangeLink
                      })(
                        <Input
                          autoFocus
                          type="text"
                          className="input-blue"
                          size="large"
                        />
                      )}
                    </Form.Item>
        <Form.Item label={<span className="txtLabel">Số lượng cần tăng</span>}>
          {getFieldDecorator("quantity", {
            rules: [
              {
                required: true,
                type: "number",
                min: 1,
                message: "Bạn chưa nhập số lượng cần tăng !"
              }
            ],
            initialValue: 1
          })(
            <InputNumber
              type="number"
              className="input-blue"
              size="large"
              style={{ width: "100%" }}
            />
          )}
        </Form.Item>
        <Form.Item label={<span className="txtLabel">Giá tiền mỗi tương tác</span>}>
          {getFieldDecorator("pricesOfInteractive", {
            rules: [
              {
                required: true,
                type: "number",
                min: 1,
                message: "Bạn chưa nhập số lượng cần tăng !"
              }
            ],
            initialValue: 1
          })(
            <InputNumber
              type="number"
              className="input-blue"
              size="large"
              style={{ width: "100%" }}
            />
          )}
        </Form.Item>
       
        <Button
          type="primary"
          htmlType="submit"
          block
          size="large"
          className="btn-tientrinh"
          loading={show_loading}
        >
          Tạo tiến trình
        </Button>
      </Form>
      </Card>
      </Col>
      <Col xl={8} md={24}>
        <NavbarFacebook />
      </Col>
    </Row>
    );
  }
}
const WrappedNormalFormVideo = Form.create({ name: "normal_login" })(FormVideo);
const mapStateToProps = state => ({
  show_loading: state.ui.show_loading,
  datatTypeServices: state.user.datatTypeServices,
});

const mapDispatchToProps = dispatch => ({
  userAction: bindActionCreators(userAction, dispatch)
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(withRouter(WrappedNormalFormVideo));
