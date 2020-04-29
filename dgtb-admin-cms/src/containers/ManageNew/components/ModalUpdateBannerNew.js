import React, { Component } from "react";
import { Modal, Upload, message, Icon } from "antd";
import {
  confirmUploadImageBannerNew,
  uploadImageNew
} from "../../../redux/actions/news";
import { connect } from "react-redux";

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

class ModalUpdateBannerNew extends Component {
  state = {
    loading: false,
    imageName: ""
  };
  onSubmitForm = () => {
    const {
      token,
      selectedSingleNews,
      onHideModal,
      onGetNewId,
      confirmUploadImageBannerNew
    } = this.props;
    const { _id } = selectedSingleNews;
    const { imageName } = this.state;
    confirmUploadImageBannerNew(
      token,
      { _id, thumbnail: imageName },
      (err, res) => {
        if (!err) {
          onHideModal();
          onGetNewId();
        }
      }
    );
  };

  updateBanner = ({ file }) => {
    const formData = new FormData();
    formData.append("file", file);
    const { uploadImageNew, token } = this.props;
    uploadImageNew(token, formData, (err, res) => {
      if (!err) {
        getBase64(file, imageUrl =>
          this.setState({
            imageUrl,
            loading: false
          })
        );
        this.setState({
          imageName: res.data
        });
      }
    });
  };

  handleChange = info => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return true;
    }
  };

  render() {
    const { isModalVisible, onHideModal } = this.props;
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? "loading" : "plus"} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;
    return (
      <Modal
        title="Cập nhật Banner"
        visible={isModalVisible}
        onCancel={onHideModal}
        onOk={this.onSubmitForm}
        cancelText="Huỷ"
        okText="Cập nhật"
      >
        <Upload
          name="avatar"
          listType="picture-card"
          showUploadList={false}
          beforeUpload={beforeUpload}
          onChange={this.handleChange}
          customRequest={this.updateBanner}
        >
          {imageUrl ? (
            <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
          ) : (
            uploadButton
          )}
        </Upload>
      </Modal>
    );
  }
}

export default connect(
  state => ({
    token: state.Auth.token,
    selectedSingleNews: state.news.selectedSingleNews
  }),
  { confirmUploadImageBannerNew, uploadImageNew }
)(ModalUpdateBannerNew);
