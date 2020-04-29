import React, { Component } from "react";
import { Form, Modal, Select, InputNumber } from "antd";
import { actGetAllCategory } from "../../../redux/actions/category";
import {
  actCreateServiceMaster,
  actUpdateServiceMaster
} from "../../../redux/actions/master";
import { connect } from "react-redux";
import _ from "lodash";

const quantity = 10;
class ModalService extends Component {
  state = { page: 1, idFirstCategory: "" };
  componentDidMount() {
    this.onGetAllCategory();
  }

  componentDidUpdate(prevProps, prevState) {
    const { selectedFees, form } = this.props;
    const { idFirstCategory } = this.state;
    if (prevProps.selectedFees !== selectedFees) {
      form.setFieldsValue({
        type:
          selectedFees && selectedFees.service
            ? selectedFees.service[0]._id
            : idFirstCategory,
        feeService: selectedFees ? selectedFees.price : ""
      });
    }
  }

  onGetAllCategory = () => {
    const { token, actGetAllCategory } = this.props;
    const { page } = this.state;
    actGetAllCategory(token, page, quantity, (er, res) => {
      if (!er) {
        const idFirstCategory = _.first(res.data.results);
        this.setState({
          idFirstCategory: idFirstCategory._id
        });
      }
    });
  };

  renderOption = () => {
    const { Option } = Select;
    const { allCategory } = this.props;
    return (
      <Select placeholder="Chọn Loại">
        {allCategory.map((value, index) => (
          <Option value={value._id} key={index}>
            {value.name}
          </Option>
        ))}
      </Select>
    );
  };

  onSubmitForm = () => {
    const {
      form,
      token,
      actCreateServiceMaster,
      id,
      onHideModal,
      onGetMasterId,
      selectedFees,
      actUpdateServiceMaster
    } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        if (_.isEmpty(selectedFees)) {
          actCreateServiceMaster(
            token,
            {
              _id: id,
              service: values.type,
              price: values.feeService
            },
            (err, res) => {
              if (!err) {
                onHideModal();
                onGetMasterId();
              }
            }
          );
        } else {
          actUpdateServiceMaster(
            token,
            {
              _id: id,
              service: values.type,
              price: values.feeService
            },
            (err, res) => {
              if (!err) {
                onHideModal();
                onGetMasterId();
              }
            }
          );
        }
      }
    });
  };

  render() {
    const { isModalVisible, onHideModal, form, selectedFees } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Modal
        title={_.isEmpty(selectedFees) ? "Tạo dịch vụ" : "Cập nhật dịch vụ"}
        visible={isModalVisible}
        onCancel={onHideModal}
        onOk={this.onSubmitForm}
        cancelText="Hủy"
        okText={_.isEmpty(selectedFees) ? "Tạo" : "Cập Nhật"}
      >
        <Form layout="horizontal">
          <Form.Item label="Tên Dịch Vụ">
            {getFieldDecorator("type", {
              rules: [{ required: true, message: "Không được để trống" }]
            })(this.renderOption())}
          </Form.Item>

          <Form.Item label="Giá dịch vụ">
            {getFieldDecorator("feeService", {
              rules: [{ required: true, message: "Không được để trống" }]
            })(
              <InputNumber
                placeholder="Nhập giá dịch vụ"
                style={{ width: 150 }}
              />
            )}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

const ServiceModal = Form.create({
  name: "serviceModal"
})(ModalService);

export default connect(
  state => ({
    token: state.Auth.token,
    allCategory: state.Category.allCategory,
    totalPage: state.Category.totalPage,
    totalData: state.Category.totalData
  }),
  { actGetAllCategory, actCreateServiceMaster, actUpdateServiceMaster }
)(ServiceModal);
