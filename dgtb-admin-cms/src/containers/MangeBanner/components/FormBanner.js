import React, { Component } from "react";
import moment from "moment";
import Breadcrumb from "../../../components/BreadBreadcrumb";
import locale from "antd/es/date-picker/locale/vi_VN";
import { Form, Input, DatePicker, Row, Col, Select, Radio, Button } from "antd";
import UploadImageBanner from "./UploadImageBanner";

class FormBanner extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;

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
    return (
      <div>
        <Breadcrumb title="Thêm Mới Banner" />
        <div className=" hasTable">
          <div className="page-header-wrap-children-content">
            <Row type="flex" justify="center" align="middle">
              <Col span={16} style={{ paddingTop: 24 }}>
                <Form layout="horizontal" {...formItemLayout}>
                  <Form.Item label="Nhập Tên Banner" hasFeedback>
                    {getFieldDecorator("name", {
                      rules: [
                        {
                          required: true,
                          message: "Tên banner không được để trống!"
                        }
                      ]
                    })(<Input placeholder="Nhập Tên Banner" />)}
                  </Form.Item>
                  <Form.Item label="Nhập Link Bài Viết" hasFeedback>
                    {getFieldDecorator("link", {
                      rules: [
                        {
                          required: true,
                          message: "Link Bài Viết không được để trống!"
                        }
                      ]
                    })(<Input placeholder="Nhập Link Bài Viết" />)}
                  </Form.Item>

                  <Form.Item label="Banner">
                  {getFieldDecorator("ảnh")(
                        <UploadImageBanner
                        />
                      )}
                  </Form.Item>
                </Form>
                <Row type="flex" justify="end">
                  <Button type="primary">{"Thêm mới"}</Button>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
const BannerForm = Form.create({ name: "banner_form" })(FormBanner);

export default BannerForm;
