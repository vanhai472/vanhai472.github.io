import React, { Component } from "react";
import { Modal, Form, Input } from "antd";
import { connect } from "react-redux";
import { actChangePasswordUser } from "../../../redux/actions/user";
class ModalUpdatePassUser extends Component {
  onSubmitForm = () => {
    const {
      token,
      onHideModal,
      form,
      actChangePasswordUser,
      userId
    } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        actChangePasswordUser(
          token,
          { _id: userId, password: values.password },
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
              rules: [{ required: true, message: "Không được để trống" },
              {
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
})(ModalUpdatePassUser);

export default connect(
  state => ({
    token: state.Auth.token
  }),
  { actChangePasswordUser }
)(ChangePassForm);
