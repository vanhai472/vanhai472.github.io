import React from "react";
import {
  Typography,
  InputNumber,
  Card,
  Button,
  Input,
  Form,
  Row,
  Col,
  Tabs
} from "antd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import queryString from "query-string";
import { bindActionCreators, compose } from "redux";
import NavbarFacebook from "../NavbarFacebook";
import ActivityPage from "../../activatePage";
import { AUTHORIZATION_KEY } from "../../../constants";
import * as userAction from "../../../actions/user";
import { findPostsId } from "../../../utils";

const { Text } = Typography;
const { TabPane } = Tabs;
class BuffViewVideo extends React.Component {
  state = { visible: false, token: localStorage.getItem(AUTHORIZATION_KEY) };

  handleSubmit = e => {
    e.preventDefault();
    const { token } = this.state;
    this.props.form.validateFieldsAndScroll(
      ["link", "price_per", "amount", "uid"],
      (err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          const paramUrl = queryString.parse(this.props.location.search);
          values.api_token = token;
          const { userAction, form } = this.props;
          const { buffFollowV2, buffVideoV2 } = userAction;
          if (
            buffFollowV2 &&
            paramUrl &&
            paramUrl?.seeding === "buff-seeding-subv2"
          ) {
            buffFollowV2(values);
          }
          if (
            buffVideoV2 &&
            paramUrl &&
            paramUrl?.seeding === "buff-seeding-view-video"
          ) {
            values.url = form.getFieldValue("link");
            buffVideoV2(values);
          }
        }
      }
    );
  };

  handleChangeLink = async e => {
    const { form } = this.props;
    const uid = await findPostsId(e.target.value);
    const url = `https://www.facebook.com/${uid}`;
    await this.setState(
      {
        urlLink: url
      },
      async () => {
        await form.setFieldsValue({
          link: uid,
          uid
        });
      }
    );
  };

  getMinPricesOfInteractive = type => {
    const paramUrl = queryString.parse(this.props.location.search);
    let tmpType = type;
    let minPrice = 0;
    const { datatTypeServices } = this.props;
    if (paramUrl && paramUrl?.seeding === "buff-seeding-subv2") {
      tmpType = "follow_v2";
    }
    if (paramUrl && paramUrl?.seeding === "buff-seeding-view-video") {
      tmpType = "buff_view";
    }
    if (tmpType) {
      if (datatTypeServices && datatTypeServices.length > 0) {
        minPrice = datatTypeServices.filter(el => el.type === tmpType)[0]
          .min_price;
      }
    }
    return minPrice;
  };

  renderTitle = () => {
    let title = "";
    const paramUrl = queryString.parse(this.props.location.search);
    if (paramUrl && paramUrl?.seeding === "buff-seeding-subv2") {
      title = "Buff Sub V2";
    }
    if (paramUrl && paramUrl?.seeding === "buff-seeding-view-video") {
      title = "Buff View Video V2";
    }
    return title;
  };
  render() {
    const { form, show_loading } = this.props;
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
    const price =
      form.getFieldValue("amount") * form.getFieldValue("price_per");
    const paramUrl = queryString.parse(this.props.location.search);
    return (
      <Card
        title={<h3>{this.renderTitle()}</h3>}
        hoverable
        bordered
        style={{ borderRadius: 20, marginBottom: "20px" }}
        bodyStyle={{ paddingTop: "5px" }}
      >
        <Tabs defaultActiveKey="1">
          <TabPane tab={<p className="tag-title">Tạo tiến trình</p>} key="1">
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
                      label={<span className="txtLabel">Link hoặc ID</span>}
                    >
                      {getFieldDecorator("link", {
                        rules: [
                          {
                            required: true,
                            message:
                              "Bạn chưa điền Link hoặc ID bài viết (Phải là 1 số)!"
                          }
                        ],
                        onChange:
                          paramUrl &&
                          paramUrl?.seeding === "buff-seeding-view-video"
                            ? null
                            : this.handleChangeLink
                      })(
                        <Input
                          autoFocus
                          type="text"
                          className="input-blue"
                          size="large"
                        />
                      )}
                    </Form.Item>
                    {getFieldDecorator("uid")}
                    <Form.Item
                      label={
                        <span className="txtLabel">Số lượng cần tăng</span>
                      }
                    >
                      {getFieldDecorator("amount", {
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
                          type="text"
                          className="input-blue"
                          size="large"
                          min={1}
                          style={{ width: "100%" }}
                        />
                      )}
                    </Form.Item>
                    <Form.Item
                      label={
                        <span className="txtLabel">Giá tiền mỗi tương tác</span>
                      }
                      validateStatus="success"
                      help={
                        <Card
                          hoverable
                          bodyStyle={{
                            backgroundColor: "#3578e5",
                            borderRadius: "20px",
                            color: "white"
                          }}
                          className="cardFacebook"
                        >
                          <Text type="warning" strong>
                            {" "}
                            Mẹo nhỏ: Hệ thống ưu tiên chạy các job giá cao trước
                            nên nếu bạn cần gấp bạn có thể set giá job của mình
                            cao hơn 1 vài đồng để chạy nhanh nhất có thể nhé.
                          </Text>
                        </Card>
                      }
                    >
                      {getFieldDecorator("price_per", {
                        rules: [
                          {
                            required: true,
                            message: "Bạn chưa điền giá!",
                            type: "number",
                            min: this.getMinPricesOfInteractive(
                              form.getFieldValue("type")
                            ),
                            max:
                              this.getMinPricesOfInteractive(
                                form.getFieldValue("type")
                              ) * 10
                          }
                        ],
                        initialValue: this.getMinPricesOfInteractive(
                          form.getFieldValue("type")
                        )
                      })(
                        <InputNumber
                          {...this.props}
                          type="text"
                          className="input-blue"
                          size="large"
                          style={{ width: "100%" }}
                          min={this.getMinPricesOfInteractive(
                            form.getFieldValue("type")
                          )}
                          max={
                            this.getMinPricesOfInteractive(
                              form.getFieldValue("type")
                            ) * 10
                          }
                        />
                      )}
                    </Form.Item>

                    <div className="wraper-coin background-color-notes">
                      <h3 className="colorWhite">Tổng: {price} mCoin</h3>
                      <p>
                        Bạn sẽ buff {form.getFieldValue("amount")} (Sub/View)
                        với giá {form.getFieldValue("price_per")} mCoin /
                        (Sub/View)
                      </p>
                    </div>
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
          </TabPane>
          <TabPane tab={<p className="tag-title">Nhật ký Order</p>} key="2">
            <ActivityPage />
          </TabPane>
        </Tabs>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  show_loading: state.ui.show_loading
});

const mapDispatchToProps = dispatch => ({
  userAction: bindActionCreators(userAction, dispatch)
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(withRouter(BuffViewVideo));
