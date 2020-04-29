import React, { Component } from "react";
import { Modal, Form, Input } from "antd";
import { connect } from "react-redux";
import _ from "lodash";
import {
  actCreateCategory,
  actUpdateCategory
} from "../../../redux/actions/category";

class ModalCategory extends Component {
  componentDidUpdate(prevProps, prevState) {
    const { selectedCategory, form } = this.props;
    if (prevProps.selectedCategory !== selectedCategory) {
      form.setFieldsValue({
        nameCategory: selectedCategory.name,
        nameType : selectedCategory.type
      });
    }
  }
  onSubmitForm = () => {
    const {
      form,
      actCreateCategory,
      actUpdateCategory,
      selectedCategory,
      onGetAllCategory,
      token,
      onHideModal,
      idUser
    } = this.props;

    form.validateFields((err, values) => {
      if (!err) {
        if (_.isEmpty(selectedCategory)) {
          actCreateCategory(
            token,
            { _id: idUser, name: values.nameCategory, type : values.nameType},
            (err, res) => {
              if (!err) {
                onHideModal();
                onGetAllCategory();
              }
            }
          );
        } else {
          actUpdateCategory(
            token,
            {
              _id: selectedCategory._id,
              name: values.nameCategory,
              type : values.nameType
            },
            (err, res) => {
              if (!err) {
                onHideModal();
                onGetAllCategory();
              }
            }
          );
        }
      }
    });
  };

  render() {
    const { isModalVisible, selectedCategory, onHideModal, form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Modal
        title={
          _.isEmpty(selectedCategory) ? "Thêm danh mục" : "Cập nhật danh mục"
        }
        visible={isModalVisible}
        onCancel={onHideModal}
        onOk={this.onSubmitForm}
        cancelText="Huỷ"
        okText={_.isEmpty(selectedCategory) ? "Tạo" : "Cập nhật"}
      >
        <Form layout="horizontal">
          <Form.Item label="Tên danh mục">
            {getFieldDecorator("nameCategory", {
              rules: [{ required: true, message: "Không được để trống" }]
            })(<Input placeholder="Nhập tên của danh mục" />)}
          </Form.Item>
          <Form.Item label="Tên thể loại">
            {getFieldDecorator("nameType", {
              rules: [{ required: true, message: "Không được để trống" }]
            })(<Input placeholder="Nhập tên của thể loại" />)}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

const CategoryForm = Form.create({
  name: "category_form"
})(ModalCategory);

export default connect(
  state => ({
    token: state.Auth.token,
    idUser: state.Auth.idUser
  }),
  { actCreateCategory, actUpdateCategory }
)(CategoryForm);
