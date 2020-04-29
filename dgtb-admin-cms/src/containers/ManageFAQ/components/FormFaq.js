import React, { Component } from "react";
import { connect } from "react-redux";
import Breadcrumb from "../../../components/BreadBreadcrumb";
import Editor from "../../../components/Editor";
import { Row, Col, Form, Input, Button } from "antd";
import {
  createSingleFaq,
  updateSingleFaq,
  actGetFaqWithId
} from "../../../redux/actions/faqs";
class FormFAQ extends Component {
  componentDidMount() {
    this.onGetFAQId();
  }

  onGetFAQId = () => {
    let { id } = this.props.match.params;
    if (id) {
      const { token, actGetFaqWithId } = this.props;
      actGetFaqWithId(token, id);
    }
  };

  handleSubmit = () => {
    this.props.form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        const {
          token,
          createSingleFaq,
          updateSingleFaq,
          idUser,
          history,
          selectedSingleFaq
        } = this.props;

        let { id } = this.props.match.params;
        if (id) {
          const { _id } = selectedSingleFaq;
          updateSingleFaq(
            token,
            { question: values.question, answer: values.answer, _id },
            (er, res) => {
              if (!er) history.push("/dashboard/faq");
            }
          );
        } else
          createSingleFaq(
            token,
            { admin: idUser, question: values.question, answer: values.answer },
            (er, res) => {
              if (!er) history.push("/dashboard/faq");
            }
          );
      }
    });
  };

  getCustomPropsEditor = () => {
    const { selectedSingleFaq, form } = this.props;
    let { id } = this.props.match.params;
    return {
      init: {
        min_height: 500,
        value: id && selectedSingleFaq ? selectedSingleFaq.answer : "",
        onChange: e => {
          form.setFieldsValue({ answer: e.target.getContent() });
        }
      }
    };
  };
  render() {
    const { selectedSingleFaq, form } = this.props;
    const { getFieldDecorator } = form;
    let { id } = this.props.match.params;
    return (
      <Row type="flex" justify="center" align="middle">
        <Breadcrumb title={id ? "Cập nhật bài viết" : "Thêm bài viết"} />
        <Col span={16} style={{ paddingTop: 24 }}>
          <Form layout="vertical">
            <Form.Item label="Tên Câu Hỏi" hasFeedback>
              {getFieldDecorator("question", {
                rules: [{ required: true, message: "Không được để trống" }],
                initialValue:
                  id && selectedSingleFaq ? selectedSingleFaq.question : ""
              })(<Input placeholder="Nhập tên câu hỏi" />)}
            </Form.Item>

            <Form.Item label="Câu Trả Lời">
              {getFieldDecorator("answer", {
                initialValue:
                  id && selectedSingleFaq ? selectedSingleFaq.answer : "",
                rules: [
                  {
                    required: true,
                    whitespace: true,
                    message: "Câu trả lời không được để trống"
                  }
                ],
                getValueFromEvent: e => e.target && e.target.getContent()
              })(<Editor customProps={this.getCustomPropsEditor()} />)}
            </Form.Item>
          </Form>
          <Row type="flex" justify="end">
            <Button type="primary" onClick={() => this.handleSubmit()}>
              {id ? "Cập nhật" : "Thêm mới"}
            </Button>
          </Row>
        </Col>
      </Row>
    );
  }
}

const FAQForm = Form.create({ name: "faq_form" })(FormFAQ);

export default connect(
  state => ({
    selectedSingleFaq: state.FAQ.selectedSingleFaq,
    token: state.Auth.token,
    idUser: state.Auth.idUser
  }),
  { createSingleFaq, updateSingleFaq, actGetFaqWithId }
)(FAQForm);
