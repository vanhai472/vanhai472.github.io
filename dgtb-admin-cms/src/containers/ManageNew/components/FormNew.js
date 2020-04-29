import React, { Component } from "react";
import { connect } from "react-redux";
import Breadcrumb from "../../../components/BreadBreadcrumb";
import Editor from "../../../components/Editor";
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Upload,
  Icon,
  message,
  Avatar
} from "antd";
import {
  createSingleNew,
  updateSingleNew,
  uploadImageNew,
  actGetNewWithId
} from "../../../redux/actions/news";
import ModalUpdateBannerNew from "./ModalUpdateBannerNew";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

class FormNew extends Component {
  state = {
    loading: false,
    isModalVisible: false,
    selectedUserUpload: {}
  };
  componentDidMount() {
    this.onGetNewId();
  }

  onGetNewId = () => {
    let { id } = this.props.match.params;
    if (id) {
      const { token, actGetNewWithId } = this.props;
      actGetNewWithId(token, id);
    }
  };

  handleSubmit = () => {
    this.props.form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        const {
          token,
          createSingleNew,
          updateSingleNew,
          idUser,
          history,
          uploadImage,
          selectedSingleNews
        } = this.props;
        let { id } = this.props.match.params;
        if (id) {
          const { _id } = selectedSingleNews;
          updateSingleNew(
            token,
            {
              _id,
              title: values.title,
              thumbnail: selectedSingleNews.thumbnail,
              content: values.content
            },
            (err, res) => {
              if (!err) history.push("/dashboard/news");
            }
          );
        } else {
          createSingleNew(
            token,
            {
              admin: idUser,
              thumbnail: uploadImage,
              title: values.title,
              content: values.content
            },
            (err, res) => {
              if (!err) history.push("/dashboard/news");
            }
          );
        }
      }
    });
  };

  uploadBanner = fileImage => {
    const formData = new FormData();
    formData.append("file", fileImage.file);
    const { uploadImageNew, token } = this.props;
    uploadImageNew(token, formData, (err, res) => {
      if (!err) {
        getBase64(fileImage.file, imageUrl =>
          this.setState({
            imageUrl,
            loading: false
          })
        );
      }
    });
  };

  handleChange = info => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return true;
    }
  };

  getCustomPropsEditor = () => {
    const { selectedSingleNews, form } = this.props;
    let { id } = this.props.match.params;
    return {
      init: {
        min_height: 500,
        value: id && selectedSingleNews ? selectedSingleNews.content : "",
        onChange: e => {
          form.setFieldsValue({ content: e.target.getContent() });
        }
      }
    };
  };

  onShowModalUpload = () => {
    const { selectedSingleUser } = this.props;
    this.setState({
      isModalVisible: true,
      selectedUserUpload: selectedSingleUser
    });
  };

  onHideModal = () => {
    this.setState({
      isModalVisible: false,
      selectedUserUpload: {}
    });
  };

  render() {
    const { selectedSingleNews, form } = this.props;
    const { isModalVisible } = this.state;
    const { getFieldDecorator } = form;
    let { id } = this.props.match.params;
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? "loading" : "plus"} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;
    return (
      <div>
        <Breadcrumb title={id ? "Cập nhật bài viết" : "Thêm bài viết"} />
        <div className=" hasTable">
          {id && selectedSingleNews ? (
            <div className="add-button">
              <Button
                type="primary"
                shape="round"
                icon="plus"
                onClick={this.onShowModalUpload}
              >
                Cập nhật Banner
              </Button>
            </div>
          ) : null}
          <div className="page-header-wrap-children-content">
            <Row type="flex" justify="center" align="middle">
              <Col span={16} style={{ paddingTop: 24 }}>
                <Form layout="vertical">
                  <Form.Item label="Tiêu đề" hasFeedback>
                    {getFieldDecorator("title", {
                      rules: [
                        { required: true, message: "Không được để trống" }
                      ],
                      initialValue:
                        id && selectedSingleNews ? selectedSingleNews.title : ""
                    })(<Input placeholder="Nhập tên tiêu đề" />)}
                  </Form.Item>

                  {id && selectedSingleNews ? (
                    <Form.Item label="Banner">
                      {getFieldDecorator("banner", {
                        valuePropName: "filelist"
                      })(
                        <Avatar
                          shape="square"
                          size={96}
                          src={selectedSingleNews.thumbnail}
                        />
                      )}
                    </Form.Item>
                  ) : (
                    <Form.Item label="Banner">
                      {getFieldDecorator("banner", {
                        valuePropName: "filelist"
                      })(
                        <Upload
                          name="banner"
                          listType="picture-card"
                          showUploadList={false}
                          beforeUpload={beforeUpload}
                          onChange={this.handleChange}
                          customRequest={this.uploadBanner}
                        >
                          {imageUrl ? (
                            <img
                              src={imageUrl}
                              alt="banner"
                              style={{ width: "100%" }}
                            />
                          ) : (
                            uploadButton
                          )}
                        </Upload>
                      )}
                    </Form.Item>
                  )}

                  <Form.Item label="Nội dung">
                    {getFieldDecorator("content", {
                      initialValue:
                        id && selectedSingleNews
                          ? selectedSingleNews.content
                          : "",
                      rules: [
                        { required: true, message: "Không được để trống" }
                      ],
                      getValueFromEvent: e => e.target && e.target.getContent()
                    })(<Editor customProps={this.getCustomPropsEditor()} />)}
                  </Form.Item>
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
        <ModalUpdateBannerNew
          onHideModal={this.onHideModal}
          isModalVisible={isModalVisible}
          onGetNewId={this.onGetNewId}
        />
      </div>
    );
  }
}

const NewForm = Form.create({ name: "new_form" })(FormNew);

export default connect(
  state => ({
    selectedSingleNews: state.news.selectedSingleNews,
    token: state.Auth.token,
    idUser: state.Auth.idUser,
    uploadImage: state.news.uploadImage
  }),
  {
    createSingleNew,
    updateSingleNew,
    uploadImageNew,
    actGetNewWithId
  }
)(NewForm);
