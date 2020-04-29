import React, { Component } from "react";
import { connect } from "react-redux";
import Breadcrumb from "../../../components/BreadBreadcrumb";
import { Form, Input, Row, Col, Select, Button } from "antd";
import { createSingleMaster } from "../../../redux/actions/master";

class ManageMaster extends Component {
  state = {
    prefixPhone: "+84"
  };
  handleSubmit = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { token, createSingleMaster, history } = this.props;
        const { prefixPhone } = this.state;

        let phone = `${prefixPhone}${values.phone}`;
        createSingleMaster(
          token,
          {
            name: values.name,
            email: values.email,
            phone,
            password: values.password
          },
          (er, res) => {
            if (!er) history.push("/dashboard/masters");
          }
        );
      }
    });
  };

  onChangePrefixPhone = value => {
    this.setState({
      prefixPhone: value
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { Option } = Select;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 }
      }
    };
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: this.state.prefixPhone
    })(
      <Select style={{ width: 70 }} onChange={this.onChangePrefixPhone}>
        <Option value="+85">+85</Option>
        <Option value="+86">+86</Option>
      </Select>
    );
    return (
      <div>
        <Breadcrumb title={"Thêm thầy bói"} />
        <div className=" hasTable">
          <div className="page-header-wrap-children-content">
            <Row type="flex" justify="center" align="middle">
              <Col span={16} style={{ paddingTop: 24 }}>
                <Form layout="horizontal" {...formItemLayout}>
                  <Form.Item label="Họ Và Tên" hasFeedback>
                    {getFieldDecorator("name", {
                      rules: [
                        {
                          required: true,
                          message: "Họ và tên không được để trống!"
                        }
                      ]
                    })(<Input placeholder="Nhập họ và tên" />)}
                  </Form.Item>

                  <Form.Item label="E-mail" hasFeedback>
                    {getFieldDecorator("email", {
                      rules: [
                        {
                          type: "email",
                          message: "Email không đúng định dạng!"
                        },
                        {
                          required: true,
                          message: "Email không được để trống !"
                        }
                      ]
                    })(<Input placeholder="Nhập email" />)}
                  </Form.Item>

                  <Form.Item label="Password" hasFeedback>
                    {getFieldDecorator("password", {
                      rules: [
                        {
                          required: true,
                          message: "Mật khẩu không được để trống !"
                        },
                        {
                          pattern: new RegExp("(?=^.{8,}$).*$"),
                          message : "Mật khẩu phải gồm ít nhất 8 ký tự !"
                        }
                      ]
                    })(<Input.Password placeholder="Nhập password" />)}
                  </Form.Item>

                  <Form.Item label="Phone" hasFeedback>
                    {getFieldDecorator("phone", {
                      rules: [
                        {
                          required: true,
                          message: "Số điện thoại không được để trống !"
                        },
                        {
                          pattern: new RegExp("^[0-9]*$"),
                          message : "Số điện thoại không hợp lệ !"
                        }
                      ]
                    })(
                      <Input
                        addonBefore={prefixSelector}
                        style={{ width: "100%" }}
                      />
                    )}
                  </Form.Item>
                </Form>
                <Row type="flex" justify="end">
                  <Button type="primary" onClick={this.handleSubmit}>
                    {"Thêm mới"}
                  </Button>
                </Row>
              </Col>
            </Row>
            ;
          </div>
        </div>
      </div>
    );
  }
}

const MasterForm = Form.create({ name: "master_form" })(ManageMaster);

export default connect(
  state => ({
    token: state.Auth.token
  }),
  { createSingleMaster }
)(MasterForm);
