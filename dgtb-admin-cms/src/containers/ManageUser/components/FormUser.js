import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import Breadcrumb from "../../../components/BreadBreadcrumb";
import locale from "antd/es/date-picker/locale/vi_VN";
import { Form, Input, DatePicker, Row, Col, Select, Radio, Button } from "antd";
import {
  createSingleUser,
  updateSingleUser,
  actGetUserWithId,
  uploadImageUser,
  confirmUploadImageUser
} from "../../../redux/actions/user";

import UploadImageUser from "./UploadImageUser";

class FormUser extends Component {
  state = {
    isModalVisible: false,
    selectedUserUpload: {},
    thumbnail: "",
    prefixPhone: "+84"
  };

  componentDidMount() {
    this.onGetUserId();
  }

  onGetUserId = () => {
    let { id } = this.props.match.params;
    if (id) {
      const { token, actGetUserWithId } = this.props;
      actGetUserWithId(token, id, (err, res) => {
        if (!err)
          this.setState({
            thumbnail: res.data.infor.thumbnail,
            prefixPhone: res.data.infor.phone
          });
      });
    }
  };

  handleSubmit = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const {
          token,
          createSingleUser,
          updateSingleUser,
          selectedSingleUser,
          history,
          confirmUploadImageUser
        } = this.props;

        const { prefixPhone } = this.state;

        for (let key in values) {
          if (values[key] === undefined) delete values[key];
        }

        let phone =
          values.phone.slice(0) === 0
            ? `${prefixPhone}${values.phone.slice(1, -1)}`
            : `${prefixPhone}${values.phone}`;

        let { id } = this.props.match.params;

        if (id) {
          const { _id } = selectedSingleUser;
          if (values.avatar)
            confirmUploadImageUser(
              token,
              { _id, imageName: values.avatar },
              (err, res) => {
                if (!err) {
                  if (!err) history.push("/dashboard/users/");
                }
              }
            );
          else
            updateSingleUser(
              token,
              {
                _id,
                name: values.name,
                email: values.email,
                phone,
                dateOfBirth: values.dateOfBirth,
                gender: values.gender,
                homeAddress: { detail: values.detail }
                // thumbnail
              },
              (er, res) => {
                if (!er) history.push("/dashboard/users");
              }
            );
        } else
          createSingleUser(
            token,
            {
              name: values.name,
              email: values.email,
              phone,
              password: values.password
            },
            (er, res) => {
              if (!er) history.push("/dashboard/users");
            }
          );
      }
    });
  };

  onChangeAvatar = value => {
    const { form } = this.props;
    form.setFieldsValue({ avatar: value });
  };

  onChangePrefixPhone = value => {
    this.setState({
      prefixPhone: value
    });
  };
  render() {
    let { id } = this.props.match.params;
    const { getFieldDecorator } = this.props.form;
    const { selectedSingleUser, token, uploadImageUser } = this.props;
    const { Option } = Select;
    const { thumbnail } = this.state;
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
        <Breadcrumb title={id ? "Cập nhật người dùng" : "Thêm người dùng"} />
        <div className=" hasTable">
          <div className="page-header-wrap-children-content">
            <Row type="flex" justify="center" align="middle">
              <Col span={16} style={{ paddingTop: 24 }}>
                <Form layout="horizontal" {...formItemLayout}>
                  <Form.Item label="Họ Và Tên" hasFeedback>
                    {getFieldDecorator("name", {
                      initialValue:
                        id && selectedSingleUser ? selectedSingleUser.name : "",
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
                      initialValue:
                        id && selectedSingleUser
                          ? selectedSingleUser.email
                          : "",
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

                  {id && selectedSingleUser ? null : (
                    <Form.Item label="Password" hasFeedback>
                      {getFieldDecorator("password", {
                        rules: [
                          {
                            required: true,
                            message: "Mật khẩu không được để trống !"
                          },
                          {
                            pattern: new RegExp("(?=^.{8,}$).*$"),
                            message: "Mật khẩu phải gồm ít nhất 8 ký tự !"
                          }
                        ]
                      })(<Input.Password placeholder="Nhập password" />)}
                    </Form.Item>
                  )}

                  <Form.Item label="Phone" hasFeedback>
                    {getFieldDecorator("phone", {
                      initialValue:
                        id && selectedSingleUser
                          ? selectedSingleUser.infor.phone.slice(3)
                          : "",
                      rules: [
                        {
                          required: true,
                          message: "Số điện thoại không được để trống !"
                        },
                        {
                          pattern: new RegExp("^[0-9]*$"),
                          message: "Số điện thoại không hợp lệ !"
                        }
                      ]
                    })(
                      <Input
                        addonBefore={prefixSelector}
                        style={{ width: "100%" }}
                      />
                    )}
                  </Form.Item>

                  {id && selectedSingleUser ? (
                    <Form.Item label="Địa Chỉ" hasFeedback>
                      {getFieldDecorator("detail", {
                        initialValue:
                          id && selectedSingleUser.infor.homeAddress
                            ? selectedSingleUser.infor.homeAddress.detail
                            : "",
                        rules: [
                          {
                            required: true,
                            message: "Địa chỉ không được để trống !"
                          }
                        ]
                      })(<Input />)}
                    </Form.Item>
                  ) : null}

                  {id && selectedSingleUser ? (
                    <Form.Item label="Ngày Sinh">
                      {getFieldDecorator("dateOfBirth", {
                        initialValue:
                          id && selectedSingleUser.infor.dateOfBirth
                            ? moment(selectedSingleUser.infor.dateOfBirth)
                            : null,
                        rules: [
                          {
                            required: true,
                            message: "Ngày sinh không được để trống !"
                          }
                        ]
                      })(
                        <DatePicker
                          locale={locale}
                          format="DD-MM-YYYY"
                          placeholder="Chọn thời gian"
                        />
                      )}
                    </Form.Item>
                  ) : null}

                  {id && selectedSingleUser ? (
                    <Form.Item label="Giới Tính">
                      {getFieldDecorator("gender", {
                        initialValue:
                          id && selectedSingleUser.infor.gender
                            ? selectedSingleUser.infor.gender
                            : 1,
                        rules: [{ required: true }]
                      })(
                        <Radio.Group>
                          <Radio value={1}>Nam</Radio>
                          <Radio value={0}>Nữ</Radio>
                          <Radio value={2}>Khác</Radio>
                        </Radio.Group>
                      )}
                    </Form.Item>
                  ) : null}

                  {id && selectedSingleUser ? (
                    <Form.Item label="Avatar">
                      {getFieldDecorator("avatar")(
                        <UploadImageUser
                          listImages={thumbnail}
                          uploadImageUser={uploadImageUser}
                          token={token}
                          onChangeAvatar={this.onChangeAvatar}
                        />
                      )}
                    </Form.Item>
                  ) : null}
                </Form>
                <Row type="flex" justify="end">
                  <Button type="primary" onClick={this.handleSubmit}>
                    {id ? "Cập nhật" : "Thêm mới"}
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

const UserForm = Form.create({ name: "user_form" })(FormUser);

export default connect(
  state => ({
    selectedSingleUser: state.User.selectedSingleUser,
    token: state.Auth.token
  }),
  {
    createSingleUser,
    updateSingleUser,
    actGetUserWithId,
    uploadImageUser,
    confirmUploadImageUser
  }
)(UserForm);
