import React from "react";
import { Form, Button, Card } from "antd";
import FormItem from "./formItem";

const FormComponent = Form.create()(
  class extends React.Component {
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          this.props.onSubmit(values);
        }
      });
    };

    render() {
      const { form, fields } = this.props;
      return (
        <Card hoverable bordered style={{ margin: "20px 0" }}>
          <Form layout="inline" onSubmit={this.handleSubmit}>
            {fields.map(field => (
              <FormItem key={field.name} form={form} field={field} />
            ))}
            <Form.Item>
              <Button type="primary" htmlType="submit" icon="search">
                Tìm kiếm
              </Button>
            </Form.Item>
          </Form>
        </Card>
      );
    }
  }
);
export default FormComponent;
