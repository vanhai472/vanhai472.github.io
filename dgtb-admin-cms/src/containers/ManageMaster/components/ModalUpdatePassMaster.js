import React, { Component } from "react";
import { Modal, Form, Input } from "antd";
import { connect } from "react-redux";
import { actChangePasswordMaster } from "../../../redux/actions/master";
class ModalUpdatePassMaster extends Component {
  onSubmitForm = () => {
    const {
      token,
      onHideModal,
      form,
      actChangePasswordMaster,
      masterId
    } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        actChangePasswordMaster(
          token,
          { _id: masterId, password: values.password },
          (err, res) => {
            if (!err) onHideModal();
          }
        );
      }
    });
  };

  render() {
    const { isModalVisible, onHideModal, form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Modal
        title="Thay đổi mật khẩu"
        visible={isModalVisible}
        onCancel={onHideModal}
        onOk={this.onSubmitForm}
        cancelText="Huỷ"
        okText="Cập nhật"
      >
        <Form layout="horizontal">
          <Form.Item label="Password">
            {getFieldDecorator("password", {
              rules: [{ required: true, message: "Không được để trống" },              {
                pattern: new RegExp("(?=^.{8,}$).*$"),
                message : "Mật khẩu phải gồm ít nhất 8 ký tự !"
              }
            ]
            })(<Input placeholder="Nhập password" />)}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

const ChangePassForm = Form.create({
  name: "changePassword_form"
})(ModalUpdatePassMaster);

export default connect(
  state => ({
    token: state.Auth.token
  }),
  { actChangePasswordMaster }
)(ChangePassForm);
