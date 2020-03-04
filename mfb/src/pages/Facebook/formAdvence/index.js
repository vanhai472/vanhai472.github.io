import React from "react";
import { Card, Form, InputNumber, Radio } from "antd";

const FormAdvenced = props => {
  const { form, formItemLayout } = props;
  const { getFieldDecorator } = form;
  return (
    <Card
      hoverable
      bordered
      bodyStyle={{ paddingTop: "20px" }}
      style={{
        borderRadius: 20,
        marginBottom: "20px",
        backgroundColor: "#d4d6ffbf"
      }}
    >
      <Form.Item
        {...formItemLayout}
        label={<span className="txtLabel">Giới tính</span>}
        labelAlign="left"
      >
        {getFieldDecorator("gender")(
          <Radio.Group>
            <Radio value="male">Nam</Radio>
            <Radio value="female">Nữ</Radio>
            <Radio value="">Tất cả</Radio>
          </Radio.Group>
        )}
      </Form.Item>
      <Form.Item
        labelAlign="left"
        {...formItemLayout}
        label={<span className="txtLabel">Độ tuổi</span>}
        style={{ marginBottom: 0 }}
      >
        <Form.Item
          style={{
            display: "inline-block"
          }}
        >
          {getFieldDecorator("age_min", {
            rules: [
              {
                required: false,
                type: "number",
                min: 13,
                max: 65,
                message: "Bạn chưa nhập tuổi min!"
              }
            ],
            initialValue: 13
          })(<InputNumber min={13} max={65} />)}
        </Form.Item>
        <span
          style={{
            display: "inline-block",
            width: "80px",
            textAlign: "center"
          }}
        >
          Đến
        </span>
        <Form.Item
          style={{
            display: "inline-block",
            width: "calc(50% - 12px)"
          }}
        >
          {getFieldDecorator("age_max", {
            rules: [
              {
                required: false,
                type: "number",
                min: form.getFieldValue("age_min") + 1,
                max: 65,
                message: "Số tuổi bắt đầu phải nhỏ hơn số tuổi kết thúc !"
              }
            ]
          })(<InputNumber min={13} max={65} />)}
        </Form.Item>
      </Form.Item>
      <Form.Item
        labelAlign="left"
        {...formItemLayout}
        label={<span className="txtLabel">Số bạn bè</span>}
        style={{ marginBottom: 0 }}
      >
        <Form.Item
          style={{
            display: "inline-block"
          }}
        >
          {getFieldDecorator("friend_min", {
            rules: [
              {
                required: false,
                type: "number",
                min: 100,
                max: 5000,
                message: "Bạn chưa nhập số bạn min!"
              }
            ],
            initialValue: 100
          })(<InputNumber min={100} max={5000} />)}
        </Form.Item>
        <span
          style={{
            display: "inline-block",
            width: "80px",
            textAlign: "center"
          }}
        >
          Đến
        </span>
        <Form.Item
          style={{
            display: "inline-block",
            width: "calc(50% - 12px)"
          }}
        >
          {getFieldDecorator("friend_max", {
            rules: [
              {
                required: false,
                type: "number",
                min: form.getFieldValue("friend_min") + 1,
                max: 5000,
                message: "Số bạn bè bắt đầu phải nhỏ hơn số bạn bè kết thúc"
              }
            ]
          })(<InputNumber min={100} max={5000} />)}
        </Form.Item>
      </Form.Item>
    </Card>
  );
};

export default FormAdvenced;
