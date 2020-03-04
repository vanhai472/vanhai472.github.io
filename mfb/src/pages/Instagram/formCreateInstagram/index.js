import React from "react";
import {
  Row,
  Col,
  Card,
  Button,
  Input,
  DatePicker,
  Form,
  Tabs,
  Select,
  InputNumber,
  Typography
} from "antd";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import moment from "moment";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import ActivityPage from "../../activatePage";
import NavbarFacebook from "../../Facebook/NavbarFacebook";
import * as userAction from "../../../actions/user";
import { AUTHORIZATION_KEY, DATEFORMAT } from "../../../constants";
import { findInsPID } from "../../../utils";
import "./index.scss";

const { Text } = Typography;
const { RangePicker } = DatePicker;
const { TabPane } = Tabs;
const { Option } = Select;

class FormCreateInstagram extends React.Component {
  state = {
    visible: false,
    urlLink: "",
    token: localStorage.getItem(AUTHORIZATION_KEY),
    time_expired: moment(new Date(), DATEFORMAT)
  };

  componentDidMount() {
    const { token } = this.state;
    const { userAction } = this.props;
    const { getTypeServices } = userAction;
    if (getTypeServices) {
      const params = {
        token
      };
      getTypeServices(params);
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("value instagram", values);
        const { token, urlLink, time_expired } = this.state;
        const { userAction, form } = this.props;
        const { advertisingCreateInstagram } = userAction;
        values.api_token = token;
        values.link = urlLink;
        values.provider = "instagram";
        values.time_expired = time_expired;
        values.prices =
          form.getFieldValue("pricesOfInteractive") *
          form.getFieldValue("quantity");
        if (advertisingCreateInstagram) {
          advertisingCreateInstagram(values);
        }
      }
    });
  };

  handleChangeLink = async e => {
    const { form } = this.props;
    const object_id = await findInsPID(e.target.value);
    const url = `https://www.instagram.com/${object_id}`;
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

  getMinPricesOfInteractive = type => {
    let tmpType = type;
    let minPrice = 0;
    const { datatTypeServices } = this.props;
    if (tmpType) {
      if (datatTypeServices && datatTypeServices.length > 0) {
        minPrice = datatTypeServices.filter(el => el.type === tmpType)[1]
          .min_price;
      }
    }

    return minPrice;
  };

  handleChangeDate = date => {
    this.setState({
      time_expired: moment(date[1]).format(DATEFORMAT)
    });
  };
  render() {
    const { form, isLoading } = this.props;
    const { getFieldDecorator } = form;
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
    const paramUrl = queryString.parse(this.props.location.search);
    const prices =
      form.getFieldValue("pricesOfInteractive") *
      form.getFieldValue("quantity");
    return (
      <Card
        title={<h3>Buff Like Instagram</h3>}
        hoverable
        bordered
        style={{ borderRadius: 20, marginBottom: "20px" }}
        bodyStyle={{ paddingTop: "5px" }}
      >
        <Tabs defaultActiveKey="1" onChange={this.callback}>
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
                          // autoFocus
                          type="text"
                          className="input-blue"
                          size="large"
                        />
                      )}
                    </Form.Item>
                    {getFieldDecorator("object_id")}
                    <Form.Item
                      label={
                        <span className="txtLabel">Loại Seeding cần tăng</span>
                      }
                    >
                      {getFieldDecorator("type", {
                        rules: [
                          {
                            required: true
                          }
                        ],
                        initialValue:
                          paramUrl &&
                          paramUrl?.seeding ===
                            "buff-seeding-like-instagram-order"
                            ? "like"
                            : "follow"
                      })(
                        <Select
                          placeholder="Tăng Sub - Theo dõi trang cá nhân Instagram"
                          className="input-blue"
                          size="large"
                        >
                          <Option
                            value={
                              paramUrl &&
                              paramUrl?.seeding ===
                                "buff-seeding-like-instagram-order"
                                ? "like"
                                : "follow"
                            }
                          >
                            {paramUrl &&
                            paramUrl?.seeding ===
                              "buff-seeding-like-instagram-order"
                              ? "Like bài viết Instagram"
                              : "Tăng Sub - Theo dõi trang cá nhân Instagram"}
                          </Option>
                        </Select>
                      )}
                    </Form.Item>
                    <Form.Item
                      label={<span className="txtLabel">Chế độ bảo hành</span>}
                    >
                      {getFieldDecorator("is_warranty", {
                        rules: [
                          {
                            required: false,
                            type: "boolean"
                          }
                        ],
                        initialValue: true
                      })(
                        <Select className="input-blue" size="large">
                          <Option value={true}>
                            Bảo hành (Bảo hành nếu tụt quá 10%)
                          </Option>
                        </Select>
                      )}
                    </Form.Item>
                    <Form.Item
                      label={<span className="txtLabel">Chọn ngày </span>}
                    >
                      {getFieldDecorator("time_expired", {
                        rules: [
                          {
                            required: true,
                            message: "chọn ngày bảo hành"
                          }
                        ],
                        initialValue: [
                          moment(new Date(), DATEFORMAT),
                          moment(new Date(), DATEFORMAT)
                        ],
                        onChange: this.handleChangeDate
                      })(
                        <RangePicker
                          style={{ width: "100%", borderRadius: "20px" }}
                          size="large"
                          format={DATEFORMAT}
                        />
                      )}
                    </Form.Item>
                    <Form.Item
                      label={
                        <span className="txtLabel">Số lượng cần tăng</span>
                      }
                    >
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
                    <Form.Item label={<span className="txtLabel">Lưu ý</span>}>
                      {getFieldDecorator("note", {
                        rules: [{}]
                      })(
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
                            Giá thấp nhất:{" "}
                            {this.getMinPricesOfInteractive(
                              form.getFieldValue("type")
                            )}{" "}
                            mCoin- Giá trung bình: 52 mCoin/1
                            {form.getFieldValue("type")}.
                          </Text>
                        </Card>
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
                            nên nếu bạn.
                          </Text>
                        </Card>
                      }
                    >
                      {getFieldDecorator("pricesOfInteractive", {
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

                    <Form.Item
                      label={<span className="txtLabel">Ghi chú</span>}
                    >
                      {getFieldDecorator("notes", {
                        rules: [{}]
                      })(
                        <Input.TextArea
                          type="text"
                          placeholder="Nhập nội dung ghi chú về tiến trình của bạn"
                          autoSize={{ minRows: 3, maxRows: 5 }}
                          className="input-blue"
                        />
                      )}
                    </Form.Item>
                    <div className="wraper-coin background-color-notes">
                      <h3 className="colorWhite">Tổng: {prices} </h3>
                      <p>
                        Bạn sẽ buff {form.getFieldValue("quantity")}{" "}
                        {form.getFieldValue("type")} với giá{" "}
                        {form.getFieldValue("pricesOfInteractive")} mCoin /
                        {form.getFieldValue("type")}
                      </p>
                    </div>
                    <Button
                      type="primary"
                      htmlType="submit"
                      block
                      size="large"
                      className="btn-tientrinh"
                      loading={isLoading}
                    >
                      Tạo tiến trình
                    </Button>
                  </Form>
                </Card>
              </Col>
              <Col md={24} xl={8}>
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
  isLoading: state.ui.show_loading,
  datatTypeServices: state.user.datatTypeServices
});

const mapDispatchToProps = dispatch => ({
  userAction: bindActionCreators(userAction, dispatch)
});

const WrappeFormCreateInstagram = Form.create({ name: "FormCreateInstagram" })(
  FormCreateInstagram
);
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(withRouter(WrappeFormCreateInstagram));
