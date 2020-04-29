import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Form, Button, Input, Select, Col } from "antd";
import { withRouter } from "react-router-dom";
import { updateMasterContact } from "../../../redux/actions/master";
import _ from "lodash";

class TabPaneInforMaster extends Component {
  state = {
    prefixPhone: "+84"
  };

  componentDidMount() {
    const { selectedSingleMaster } = this.props;
    this.setState({
      prefixPhone: selectedSingleMaster.contact.phone.slice(0, 3)
    });
  }

  handleSubmitContact = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { token, updateMasterContact, history, id } = this.props;
        const { prefixPhone } = this.state;
        let data = {
          media: {
            facebook: values.facebook,
            youtube: values.youtube,
            website: values.website
          },
          workAddress: {
            detail: values.workAddress
          },
          homeAddress: {
            detail: values.homeAddress
          },
          phone: `${prefixPhone}${values.phone.slice(1, -1)}`,
          email: values.email,
          _id: id
        };
        for (let key in data) {
          if (data[key] === undefined) delete data[key];
          else if (typeof data[key] === "object") {
            let data1 = data[key];
            for (let key1 in data1)
              if (data1[key1] === undefined) delete data1[key1];
          }
        }
        for (let key in data) {
          if (_.isEmpty(data[key])) delete data[key];
        }
        updateMasterContact(token, data, (err, res) => {
          if (!err) history.push("/dashboard/masters/");
        });
      }
    });
  };

  onChangePrefixPhone = value => {
    this.setState({
      prefixPhone: value
    });
  };

  render() {
    const { selectedSingleMaster, formItemLayout } = this.props;
    const { getFieldDecorator } = this.props.form;
    const { Option } = Select;
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: this.state.prefixPhone
    })(
      <Select style={{ width: 70 }} onChange={this.onChangePrefixPhone}>
        <Option value="+85">+85</Option>
        <Option value="+86">+86</Option>
      </Select>
    );
    return (
      <Form layout="horizontal" {...formItemLayout}>
        <Form.Item label="E-mail" hasFeedback>
          {getFieldDecorator("email", {
            initialValue: selectedSingleMaster
              ? selectedSingleMaster.email
              : "",
            rules: [
              { type: "email", message: "Email không đúng định dạng!" },
              { required: true, message: "Email không được để trống !" }
            ]
          })(<Input placeholder="Nhập email" />)}
        </Form.Item>

        <Form.Item label="Phone" hasFeedback>
          {getFieldDecorator("phone", {
            initialValue: selectedSingleMaster
              ? selectedSingleMaster.contact.phone.slice(3)
              : "",
            rules: [
              { required: true, message: "Số điện thoại không được để trống !" },
              {
                pattern: new RegExp("^[0-9]*$"),
                message : "Số điện thoại không hợp lệ !"
              }
            ]
          })(<Input addonBefore={prefixSelector} style={{ width: "100%" }} />)}
        </Form.Item>

        <Form.Item label="Địa Chỉ Làm Việc" hasFeedback>
          {getFieldDecorator("workAddress", {
            initialValue:
              selectedSingleMaster.contact.workAddress !== undefined
                ? selectedSingleMaster.contact.workAddress.detail
                : undefined
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Nơi Ở" hasFeedback>
          {getFieldDecorator("homeAddress", {
            initialValue: !_.isEmpty(selectedSingleMaster.contact.homeAddress)
              ? selectedSingleMaster.contact.homeAddress.detail
              : undefined
          })(<Input />)}
        </Form.Item>

        <Form.Item label="FaceBook" hasFeedback>
          {getFieldDecorator("facebook", {
            initialValue: !_.isEmpty(selectedSingleMaster.contact.media)
              ? selectedSingleMaster.contact.media.facebook
              : undefined
          })(<Input />)}
        </Form.Item>

        <Form.Item label="YouTube" hasFeedback>
          {getFieldDecorator("youtube", {
            initialValue: !_.isEmpty(selectedSingleMaster.contact.media)
              ? selectedSingleMaster.contact.media.youtube
              : undefined
          })(<Input />)}
        </Form.Item>

        <Form.Item label="WebSite" hasFeedback>
          {getFieldDecorator("website", {
            initialValue: !_.isEmpty(selectedSingleMaster.contact.media)
              ? selectedSingleMaster.contact.media.website
              : undefined
          })(<Input />)}
        </Form.Item>
        <Row type="flex">
          <Col span={4}></Col>
          <Col span={10}>
            <Button type="primary" onClick={this.handleSubmitContact}>
              Cập nhật liên hệ
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

const ContactMaster = Form.create()(withRouter(TabPaneInforMaster));

export default connect(
  state => ({
    token: state.Auth.token,
    selectedSingleMaster: state.Master.selectedSingleMaster
  }),
  { updateMasterContact }
)(ContactMaster);
