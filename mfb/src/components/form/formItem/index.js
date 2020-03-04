import React from "react";
import { Form } from "antd";
import InputComponent from "./input";

class FormItem extends React.Component {
  render() {
    const { form, field } = this.props;
    const { getFieldDecorator } = form;
    const { label, name, initialValue = "", rules = [] } = field;
    return (
      <Form.Item label={label} colon={field.colon} required={field.required}>
        {getFieldDecorator(name, {
          initialValue: initialValue,
          rules
        })(<InputComponent field={field} />)}
      </Form.Item>
    );
  }
}

export default FormItem;
