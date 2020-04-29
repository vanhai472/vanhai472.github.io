import React, { Component } from "react";
import { connect } from "react-redux";
import { Breadcrumb, Icon, List, Input, Form, Button, Avatar } from "antd";

import {
  actGetComplaintsWithId,
  actAnswerComplaintsUser
} from "../../../redux/actions/complaints";
import classNames from "classnames";
import "./answer.scss";

const { TextArea } = Input;

class AnswerComplaint extends Component {
  TextAreaInput = null;
  state = {
    data: []
  };

  componentDidMount() {
    this.onGetComplaintsId();
    this.TextAreaInput.focus();
  }

  onGetComplaintsId = () => {
    let { id } = this.props.match.params;
    if (id) {
      const { token, actGetComplaintsWithId } = this.props;
      const nameUser = this.props.location.state;
      actGetComplaintsWithId(token, id, (err, res) => {
        if (!err) {
          this.setState({
            data: res.data.conversation.map((value, index) => ({
              author: value.role === 0 ? "Admin" : nameUser,
              avatar:
                value.role === 0
                  ? " https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
                  : "https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",
              content: value.content,
              role: value.role
            }))
          });
        }
      });
    }
  };

  onSubmit = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { actAnswerComplaintsUser, token } = this.props;
        let { id } = this.props.match.params;
        actAnswerComplaintsUser(
          token,
          {
            _id: id,
            content: values.content,
            role: 0
          },
          (err, res) => {
            if (!err) {
              this.onGetComplaintsId();
              this.props.form.setFieldsValue({ content: "" });
              this.TextAreaInput.focus();
            }
          }
        );
      }
    });
  };

  render() {
    const { data } = this.state;
    const { selectedSingleComplaints } = this.props;
    let { id } = this.props.match.params;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="grid-content">
        <Breadcrumb separator=">" className="breadcrumbs">
          <Breadcrumb.Item href="/dashboard/complaints">
            <Icon type="home" className="icon-home" />
          </Breadcrumb.Item>
          <Breadcrumb.Item>Khiếu Nại</Breadcrumb.Item>
          {id && selectedSingleComplaints ? (
            <Breadcrumb.Item>
              {selectedSingleComplaints.content}
            </Breadcrumb.Item>
          ) : null}
        </Breadcrumb>
        <div className="details">
          <List
            className="comment-list"
            itemLayout="horizontal"
            dataSource={data}
            // pagination={{ total: 20 }}
            renderItem={item => (
              <List.Item
                style={{ borderBottom: "none" }}
                className={classNames({
                  checkRole: item.role === 0 ? true : false
                })}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={item.author}
                  description={item.content}
                />
              </List.Item>
            )}
          />
        </div>
        <div>
          <Form.Item>
            {getFieldDecorator("content", {
              rules: [{ required: true, message: "Không được để trống!" }]
            })(
              <TextArea
                placeholder="Nhập câu trả lời"
                ref={input => {
                  this.TextAreaInput = input;
                }}
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" onClick={this.onSubmit} type="primary">
              Trả Lời
            </Button>
          </Form.Item>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    token: state.Auth.token,
    selectedSingleComplaints: state.Complaint.selectedSingleComplaints
  }),
  { actGetComplaintsWithId, actAnswerComplaintsUser }
)(Form.create({})(AnswerComplaint));
