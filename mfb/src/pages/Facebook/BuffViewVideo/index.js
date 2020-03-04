import React from "react";
import {
  Typography,
  Select,
  InputNumber,
  Card,
  Button,
  Input,
  Form,
  Tabs
} from "antd";

const { TabPane } = Tabs;
const { Text } = Typography;
const { Option } = Select;
class BuffViewVideo extends React.Component {
  state = { visible: false };

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
  render() {
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
      <Card
        title={<h3>Buff View Video V2</h3>}
        hoverable
        bordered
        style={{ borderRadius: 20 }}
        bodyStyle={{ paddingTop: "5px" }}
      >
        <Tabs defaultActiveKey="1" onChange={this.callback}>
          <TabPane tab={<p className="tag-title">Tạo tiến trình</p>} key="1">
            <Form
              {...formItemLayout}
              labelAlign="left"
              onSubmit={this.handleSubmit}
            >
              <Form.Item
                label={
                  <span className="txtLabel">Link video cần tăng View</span>
                }
              >
                {getFieldDecorator("id", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your username!"
                    }
                  ]
                })(<Input type="text" className="input-blue" size="large" />)}
              </Form.Item>
              <Form.Item
                label={
                  <span className="txtLabel">
                    Số lượng cần tăng <p>Tối thiểu 500</p>
                  </span>
                }
              >
                {getFieldDecorator("id", {
                  rules: [
                    {
                      required: true
                    }
                  ]
                })(
                  <Select
                    placeholder="Tăng Sub - Theo dõi trang cá nhân Facebook"
                    className="input-blue"
                    size="large"
                  >
                    <Option value="china">China</Option>
                    <Option value="usa">U.S.A</Option>
                  </Select>
                )}
              </Form.Item>
              <Form.Item
                label={<span className="txtLabel">Chọn loại View</span>}
              >
                {getFieldDecorator("aaa", {
                  rules: [
                    {
                      required: true,
                      message: "aaa"
                    }
                  ]
                })(
                  <Select className="input-blue" size="large">
                    <Option value="china">China</Option>
                    <Option value="usa">U.S.A</Option>
                  </Select>
                )}
              </Form.Item>
              <Form.Item label={<span className="txtLabel">Lọc nâng cao</span>}>
                {getFieldDecorator("id", {
                  rules: [{}]
                })(
                  <Tabs>
                    <TabPane tab="Bật" key="5">
                      <p>Content of Tab Pane 1</p>
                      <p>Content of Tab Pane 1</p>
                      <p>Content of Tab Pane 1</p>
                    </TabPane>
                    <TabPane tab="Tắt" key="6" />
                  </Tabs>
                )}
              </Form.Item>
              <Form.Item
                label={<span className="txtLabel">Số lượng cần tăng</span>}
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
                    <p>
                      Giá thấp nhất: 200 mCoin- Giá trung bình: 102 mCoin/1
                      follow
                    </p>
                    <p>Giá bảo hành: 150 mCoin/1 follow</p>
                    <Text type="warning" strong>
                      {" "}
                      Lưu ý: Nên buff dư thêm 30 - 50% trên tổng số lượng để
                      tránh tụt.
                    </Text>
                  </Card>
                }
              >
                {getFieldDecorator("id", {
                  rules: [
                    {
                      required: true
                    }
                  ]
                })(
                  <InputNumber
                    type="text"
                    className="input-blue"
                    size="large"
                    style={{ width: "100%" }}
                  />
                )}
              </Form.Item>
              <Form.Item
                label={<span className="txtLabel">Giá tiền mỗi tương tác</span>}
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
                      Mẹo nhỏ: Hệ thống ưu tiên chạy các job giá cao trước nên
                      nếu bạn cần gấp bạn có thể set giá job của mình cao hơn 1
                      vài đồng để chạy nhanh nhất có thể nhé.
                    </Text>
                  </Card>
                }
              >
                {getFieldDecorator("id", {
                  rules: [{}]
                })(
                  <InputNumber
                    type="text"
                    className="input-blue"
                    size="large"
                    style={{ width: "100%" }}
                  />
                )}
              </Form.Item>
              <Form.Item label={<span className="txtLabel">Ghi chú</span>}>
                {getFieldDecorator("id", {
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
              <div className="wraper-coin">
                <h3>Tổng: 112 mCoin</h3>
                <p>Bạn sẽ buff 1 follow với giá 112 mCoin / like</p>
              </div>
              <Button
                type="primary"
                htmlType="submit"
                block
                size="large"
                className="btn-tientrinh"
              >
                Tạo tiến trình
              </Button>
            </Form>
          </TabPane>
          <TabPane tab={<p className="tag-title">Nhật ký</p>} key="2">
            ...
          </TabPane>
        </Tabs>
      </Card>
    );
  }
}

const WrappedHorizontalBuffViewVideo = Form.create({
  name: "horizontal_BuffViewVideo"
})(BuffViewVideo);

export default WrappedHorizontalBuffViewVideo;
