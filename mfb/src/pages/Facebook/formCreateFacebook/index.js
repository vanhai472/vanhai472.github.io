import React from "react";
import {
  Row,
  Col,
  Card,
  Button,
  Input,
  Form,
  Tabs,
  Radio,
  Icon,
  Select,
  InputNumber,
  Typography,
  Alert,
  Tag
} from "antd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import queryString from "query-string";
import NavbarFacebook from "../NavbarFacebook";
import * as userAction from "../../../actions/user";
import ActivityPage from "../../activatePage";
import FormAdvenced from "../formAdvence";
import { SPLIT_SPACE, AUTHORIZATION_KEY } from "../../../constants";
import { findPostsId } from "../../../utils";
import "./index.scss";

const { Text } = Typography;
const { Option } = Select;
const { TabPane } = Tabs;
const { TextArea } = Input;
class FormCreateFacebook extends React.Component {
  state = {
    visible: false,
    token: localStorage.getItem(AUTHORIZATION_KEY),
    urlLink: "",
    urlId: "",
    quantity: 1,
    typeSelectText: "like"
  };

  handleSubmit = e => {
    e.preventDefault();
    const { form } = this.props;
    const { token, urlLink, quantity } = this.state;
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const paramUrl = queryString.parse(this.props.location.search);
        if (form.getFieldValue("typeSelect") === "comment") {
          values.type = "comment";
          values.quantity = quantity;
        }
        if (form.getFieldValue("typeSelect") === "share") {
          values.type = "share";
        }
        if (paramUrl && paramUrl?.seeding === "buff-seeding-sub-order") {
          values.type = "follow";
        }
        if (
          paramUrl &&
          paramUrl?.seeding === "buff-seeding-like-fanpage-order"
        ) {
          values.type = "lige_page";
        }
        values.api_token = token;
        values.time_expired = 0;
        values.link = urlLink;
        values.prices = form.getFieldValue("quantity")
          ? form.getFieldValue("pricesOfInteractive") *
            form.getFieldValue("quantity")
          : form.getFieldValue("pricesOfInteractive") * quantity;
        const { userAction } = this.props;
        const { advertisingCreateFacebook } = userAction;
        if (advertisingCreateFacebook) {
          advertisingCreateFacebook(values);
        }
      }
    });
  };

  onPressEnter = async e => {
    const { form } = this.props;
    await form.setFieldsValue(
      {
        list_messages: e.target.value.split(SPLIT_SPACE)
      },
      () => {
        this.setState({
          quantity: form.getFieldValue("list_messages")?.length
        });
      }
    );
  };

  handleSelectChange = async value => {
    await this.props.form.setFieldsValue(
      {
        typeSelect: value
      },
      () => {
        this.setState({ typeSelectText: value });
      }
    );
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

  getMinPricesOfInteractive = type => {
    const { form } = this.props;
    const paramUrl = queryString.parse(this.props.location.search);
    let tmpType = type;
    let minPrice = 0;
    const { datatTypeServices } = this.props;
    if (form.getFieldValue("typeSelect") === "comment") {
      tmpType = "comment";
    }
    if (form.getFieldValue("typeSelect") === "share") {
      tmpType = "share";
    }
    if (paramUrl && paramUrl?.seeding === "buff-seeding-sub-order") {
      tmpType = "follow";
    }
    if (paramUrl && paramUrl?.seeding === "buff-seeding-like-fanpage-order") {
      tmpType = "like_page";
    }
    if (tmpType) {
      if (datatTypeServices && datatTypeServices.length > 0) {
        minPrice = datatTypeServices.filter(el => el.type === tmpType)[0]
          .min_price;
      }
    }

    return minPrice;
  };

  renderTypeSelect = () => {
    const paramUrl = queryString.parse(this.props.location.search);
    if (paramUrl && paramUrl?.seeding === "buff-seeding-like-fanpage-order") {
      return (
        <Select className="input-blue" size="large">
          <Option value="like_page">Tăng like Fanpage</Option>
        </Select>
      );
    } else if (paramUrl && paramUrl?.seeding === "buff-seeding-sub-order") {
      return (
        <Select className="input-blue" size="large">
          <Option value="follow">
            Tăng Sub - Theo dõi trang cá nhân Facebookk
          </Option>
        </Select>
      );
    } else {
      return (
        <Select className="input-blue" size="large">
          <Option value="share">Chia sẻ bài viết Facebook</Option>
          <Option value="like">Like bài viết Facebook</Option>
          <Option value="comment">Bình luận bài viết Facebook</Option>
        </Select>
      );
    }
  };

  renderTitle = () => {
    let title = "";
    const paramUrl = queryString.parse(this.props.location.search);
    if (paramUrl && paramUrl?.seeding === "buff-facebook") {
      title = "Buff Like, Comment, Share Post";
    }
    if (paramUrl && paramUrl?.seeding === "buff-seeding-sub-order") {
      title = "Buff Sub (Tăng Theo Dõi) Profile";
    }
    if (paramUrl && paramUrl?.seeding === "buff-seeding-like-fanpage-order") {
      title = "Buff Like Fanpage Order";
    }
    return title;
  };

  render() {
    const { quantity, typeSelectText } = this.state;
    const { form, show_loading } = this.props;
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
    const prices =
      form.getFieldValue("typeSelect") === "comment"
        ? form.getFieldValue("pricesOfInteractive") * quantity
        : form.getFieldValue("quantity") *
          form.getFieldValue("pricesOfInteractive");
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
                    {getFieldDecorator("object_id")}
                    <Form.Item
                      label={
                        <span className="txtLabel">Loại Seeding cần tăng</span>
                      }
                    >
                      {getFieldDecorator("typeSelect", {
                        rules: [{}],
                        onChange: this.handleSelectChange,
                        initialValue:
                          paramUrl &&
                          paramUrl?.seeding ===
                            "buff-seeding-like-fanpage-order"
                            ? "like_page"
                            : paramUrl &&
                              paramUrl?.seeding === "buff-seeding-sub-order"
                            ? "follow"
                            : "like"
                      })(this.renderTypeSelect())}
                    </Form.Item>
                    {paramUrl && paramUrl?.seeding === "buff-facebook" ? (
                      form.getFieldValue("typeSelect") === "like" ? (
                        <Form.Item
                          label={<span className="txtLabel">Chọn cảm xúc</span>}
                        >
                          {getFieldDecorator("type", {
                            initialValue: "like"
                          })(
                            <Radio.Group size="large" buttonStyle="solid">
                              <Radio.Button value="like">
                                <span className="iconSelect">
                                  <Icon type="like" />
                                </span>
                              </Radio.Button>
                              <Radio.Button value="love">
                                <span className="iconSelect">
                                  {" "}
                                  <Icon
                                    type="heart"
                                    theme="twoTone"
                                    twoToneColor="#FF0000"
                                  />
                                </span>
                              </Radio.Button>
                              <Radio.Button value="haha">
                                <span className="iconSelect">😆</span>
                              </Radio.Button>
                              <Radio.Button value="wow">
                                <span className="iconSelect">😮</span>
                              </Radio.Button>
                              <Radio.Button value="sad">
                                <span className="iconSelect">😢</span>
                              </Radio.Button>
                              <Radio.Button value="angry">
                                <span className="iconSelect">😡</span>
                              </Radio.Button>
                            </Radio.Group>
                          )}
                        </Form.Item>
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}

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
                        initialValue: false
                      })(
                        <Select className="input-blue" size="large" disabled>
                          <Option value={false}>
                            Không bảo hành (Bảo hành nếu tụt quá 70%)
                          </Option>
                          <Option value={true}>
                            Bảo hành (Bảo hành nếu tụt quá 10%)
                          </Option>
                        </Select>
                      )}
                    </Form.Item>
                    <Form.Item
                      label={<span className="txtLabel">Lọc nâng cao</span>}
                      help={
                        form.getFieldValue("typeSelect") === "comment" ? (
                          <Card
                            hoverable
                            bodyStyle={{
                              backgroundColor: "#3578e5",
                              borderRadius: "20px",
                              color: "white"
                            }}
                            className="cardFacebook"
                          >
                            <p>
                              Giá thấp nhất: 100 mCoin- Giá trung bình: 52
                              mCoin/1 {typeSelectText}
                            </p>
                            <p>Giá bảo hành: 72 mCoin/1 {typeSelectText}</p>
                            <Text type="warning" strong>
                              {" "}
                              Lưu ý: Nên buff dư thêm 30 - 50% trên tổng số
                              lượng để tránh tụt.
                            </Text>
                          </Card>
                        ) : (
                          ""
                        )
                      }
                    >
                      <Tabs defaultActiveKey="off">
                        <TabPane tab="Bật" key="on">
                          <FormAdvenced
                            form={form}
                            formItemLayout={formItemLayout}
                          />
                        </TabPane>
                        <TabPane tab="Tắt" key="off">
                          <p>Tắt chức năng lọc nâng cao</p>
                        </TabPane>
                      </Tabs>
                    </Form.Item>
                    {form.getFieldValue("typeSelect") === "comment" ? (
                      ""
                    ) : (
                      <Form.Item
                        label={
                          <span className="txtLabel">Số lượng cần tăng</span>
                        }
                        hasFeedback
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
                            <p>
                              Giá thấp nhất:{" "}
                              {form.getFieldValue("typeSelect") === "comment"
                                ? this.getMinPricesOfInteractive(
                                    form.getFieldValue("comment")
                                  )
                                : this.getMinPricesOfInteractive(
                                    form.getFieldValue("type")
                                  )}{" "}
                              mCoin- Giá trung bình: 52 mCoin/1 {typeSelectText}
                            </p>
                            <p>Giá bảo hành: 72 mCoin/1 {typeSelectText}</p>
                            <Text type="warning" strong>
                              {" "}
                              Lưu ý: Nên buff dư thêm 30 - 50% trên tổng số
                              lượng để tránh tụt.
                            </Text>
                          </Card>
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
                            type="text"
                            className="input-blue"
                            size="large"
                            style={{ width: "100%" }}
                          />
                        )}
                      </Form.Item>
                    )}

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
                            Hệ thống ưu tiên chạy các job giá cao trước nên nếu
                            bạn cần gấp bạn có thể set giá job của mình cao hơn
                            1 vài đồng để chạy nhanh nhất có thể nhé.
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
                    {form.getFieldValue("type") === "comment" ? (
                      ""
                    ) : (
                      <Form.Item
                        label={<span className="txtLabel">Ghi chú</span>}
                      >
                        {getFieldDecorator("notes", {
                          rules: [{}]
                        })(
                          <TextArea
                            type="text"
                            placeholder="Nhập nội dung ghi chú về tiến trình của bạn"
                            autoSize={{ minRows: 3, maxRows: 5 }}
                            className="input-blue"
                          />
                        )}
                      </Form.Item>
                    )}
                    {form.getFieldValue("typeSelect") === "comment" ? (
                      <>
                        {" "}
                        <Alert
                          message="Chú ý"
                          type="warning"
                          showIcon
                          description={
                            <>
                              <p>
                                Nghiêm cấm bình luận những nội có cử chỉ, lời
                                nói thô bạo, khiêu khích, trêu ghẹo, xúc phạm
                                nhân phẩm, danh dự của Cá nhân hoặc Tổ chức.
                              </p>{" "}
                              <p>
                                Nếu cố tình buff bạn sẽ bị trừ hết tiền và band
                                khỏi hệ thống mfb vĩnh viễn, và phải chịu hoàn
                                toàn trách nhiệm trước pháp luật.
                              </p>
                            </>
                          }
                        />
                        <Form.Item wrapperCol={{ xl: 24 }}>
                          {getFieldDecorator("list_messages", {
                            rules: [
                              {
                                required: false
                              }
                            ],
                            initialValue: []
                          })(
                            <>
                              <span className="txtLabel">
                                Nhập nội dung Comment (Mỗi dòng tương đương với
                                1 Comment):{" "}
                                <Tag color="geekblue">Số lượng {quantity} </Tag>
                              </span>
                              <TextArea
                                rows={4}
                                onPressEnter={this.onPressEnter}
                              />
                            </>
                          )}
                        </Form.Item>
                      </>
                    ) : (
                      ""
                    )}

                    <div className="wraper-coin background-color-notes">
                      <h3 className="colorWhite">Tổng: {prices} mCoin</h3>
                      <p>
                        Bạn sẽ buff{" "}
                        {form.getFieldValue("quantity")
                          ? form.getFieldValue("quantity")
                          : quantity}{" "}
                        {typeSelectText} với giá{" "}
                        {form.getFieldValue("pricesOfInteractive")} mCoin /
                        {typeSelectText}
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
export default compose(withConnect)(withRouter(FormCreateFacebook));
