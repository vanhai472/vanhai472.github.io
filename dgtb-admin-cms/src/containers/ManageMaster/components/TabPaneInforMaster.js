import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Form, DatePicker, Button, Input, Radio, Col } from "antd";
import locale from "antd/es/date-picker/locale/vi_VN";
import {
  updateSingleMaster,
  uploadImageMaster,
  confirmUploadImageMaster
} from "../../../redux/actions/master";
import TreeSelects from "../../../components/TreeSelect";
import { degrees, skills } from "./option";
import { withRouter } from "react-router-dom";
import moment from "moment";
import UploadImageMaster from "./UploadImageMaster";

class TabPaneInforMaster extends Component {
  handleSubmitInfor = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const {
          token,
          updateSingleMaster,
          history,
          id,
          confirmUploadImageMaster
        } = this.props;
        for (let key in values) {
          if (values[key] === undefined) delete values[key];
        }
        if (values.avatar)
          confirmUploadImageMaster(
            token,
            {
              _id: id,
              imageName: values.avatar
            },
            (err, res) => {
              if (!err) history.push("/dashboard/masters/");
            }
          );
        else
          updateSingleMaster(token, { _id: id, ...values }, (err, res) => {
            if (!err) history.push("/dashboard/masters/");
          });
      }
    });
  };

  onChangeAvatar = value => {
    const { form } = this.props;
    form.setFieldsValue({ avatar: value });
  };

  render() {
    const {
      selectedSingleMaster,
      thumbnail,
      formItemLayout,
      certificateSkills,
      certificate,
      uploadImageMaster,
      token
    } = this.props;
    const { getFieldDecorator } = this.props.form;

    return (
      <Form layout="horizontal" {...formItemLayout}>
        <Form.Item label="Avatar">
          {getFieldDecorator("avatar")(
            <UploadImageMaster
              listImages={thumbnail}
              uploadImageMaster={uploadImageMaster}
              token={token}
              onChangeAvatar={this.onChangeAvatar}
            />
          )}
        </Form.Item>

        <Form.Item label="Họ Và Tên" hasFeedback>
          {getFieldDecorator("name", {
            initialValue: selectedSingleMaster ? selectedSingleMaster.name : "",
            rules: [
              { required: true, message: "Họ và tên không được để trống!" }
            ]
          })(<Input placeholder="Nhập họ và tên" />)}
        </Form.Item>

        <Form.Item label="Giới Thiệu" hasFeedback>
          {getFieldDecorator("introduction", {
            initialValue: selectedSingleMaster
              ? selectedSingleMaster.infor.introduction
              : ""
          })(<Input placeholder="Nhập giới thiệu" />)}
        </Form.Item>

        <Form.Item label="Tốt nghệp" hasFeedback>
          {getFieldDecorator("degrees")(
            <TreeSelects
              treeData={degrees}
              onChange={this.onChange}
              certificate={certificate}
            />
          )}
        </Form.Item>

        {/* <Form.Item label="Kĩ Năng" hasFeedback>
          {getFieldDecorator("skills")(
            <TreeSelects
              treeData={skills}
              onChange={this.onChange}
              certificateSkills={certificateSkills}
            />
          )}
        </Form.Item> */}

        <Form.Item label="Ngày Sinh">
          {getFieldDecorator("dateOfBirth", {
            initialValue: selectedSingleMaster
              ? moment(selectedSingleMaster.infor.dateOfBirth)
              : null
          })(
            <DatePicker
              locale={locale}
              format="DD-MM-YYYY"
              placeholder="Chọn thời gian"
            />
          )}
        </Form.Item>

        <Form.Item label="Giới Tính">
          {getFieldDecorator("gender", {
            initialValue: selectedSingleMaster
              ? selectedSingleMaster.infor.gender
              : null
          })(
            <Radio.Group>
              <Radio value={1}>Nam</Radio>
              <Radio value={0}>Nữ</Radio>
              <Radio value={2}>Khác</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        <Row type="flex">
          <Col span={4}></Col>
          <Col span={10}>
            <Button type="primary" onClick={this.handleSubmitInfor}>
              Cập nhật thông tin
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

const InforMaster = Form.create()(withRouter(TabPaneInforMaster));

export default connect(
  state => ({
    token: state.Auth.token,
    selectedSingleMaster: state.Master.selectedSingleMaster
  }),
  { updateSingleMaster, uploadImageMaster, confirmUploadImageMaster }
)(InforMaster);
