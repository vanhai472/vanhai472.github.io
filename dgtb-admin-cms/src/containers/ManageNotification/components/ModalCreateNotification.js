import React, { Component } from "react";
import { Modal, Input, Form, Select } from "antd";
import {
  actCreateNotification,
  actUpdateNotification
} from "../../../redux/actions/notification";
import { connect } from "react-redux";
import _ from "lodash";
class ModalCreateNotification extends Component {
  componentDidUpdate(prevProps, prevState) {
    const { selectedNotification, form } = this.props;

    if (prevProps.selectedNotification !== selectedNotification) {
      form.setFieldsValue({
        titleNotification: selectedNotification
          ? selectedNotification.title
          : "",
        contentNotification: selectedNotification
          ? selectedNotification.content
          : "",
        type:
          selectedNotification && selectedNotification.type
            ? selectedNotification.type.toString()
            : "0"
      });
    }
  }

  onSubmitForm = () => {
    const {
      form,
      actCreateNotification,
      actUpdateNotification,
      token,
      idUser,
      onHideModal,
      onGetAllNotification,
      selectedNotification
    } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        if (_.isEmpty(selectedNotification)) {
          actCreateNotification(
            token,
            {
              sender: idUser,
              title: values.titleNotification,
              content: values.contentNotification,
              types: values.type
            },
            (err, res) => {
              if (!err) {
                onHideModal();
                onGetAllNotification();
              }
            }
          );
        } else {
          actUpdateNotification(
            token,
            {
              _id: selectedNotification._id,
              title: values.titleNotification,
              content: values.contentNotification,
              types: values.type
            },
            (err, res) => {
              if (!err) {
                onHideModal();
                onGetAllNotification();
              }
            }
          );
        }
      }
    });
  };

  render() {
    const {
      isModalVisible,
      onHideModal,
      form,
      selectedNotification
    } = this.props;
    const { getFieldDecorator } = form;
    const { Option } = Select;
    return (
      <Modal
        title={
          _.isEmpty(selectedNotification)
            ? "Tạo thông báo"
            : "Cập nhật thông báo"
        }
        visible={isModalVisible}
        onCancel={onHideModal}
        onOk={this.onSubmitForm}
        cancelText="Hủy"
        okText={_.isEmpty(selectedNotification) ? "Tạo Mới" : "Cập Nhật"}
      >
        <Form layout="horizontal">
          <Form.Item label="Tiêu đề" hasFeedback>
            {getFieldDecorator("titleNotification", {
              rules: [{ required: true, message: "Không được để trống" }]
            })(<Input placeholder="Nhập tiêu đề" />)}
          </Form.Item>
          <Form.Item label="Nội dung" hasFeedback>
            {getFieldDecorator("contentNotification", {
              rules: [{ required: true, message: "Không được để trống" }]
            })(<Input placeholder="Nhập nội dung" />)}
          </Form.Item>
          <Form.Item label="Loại">
            {getFieldDecorator("type", { initialValue: "0" })(
              <Select>
                <Option value="0">Tất cả User</Option>
                {/* <Option value="1">User Master</Option>
                <Option value="2">Master User</Option> */}
                <Option value="3">Group Master</Option>
                <Option value="4">Group User</Option>
                <Option value="5">Tất cả Master</Option>
              </Select>
            )}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

const CreateNotification = Form.create({
  name: "createNotification"
})(ModalCreateNotification);

export default connect(
  state => ({
    token: state.Auth.token,
    idUser: state.Auth.idUser
  }),
  { actCreateNotification, actUpdateNotification }
)(CreateNotification);
