import React, { Component } from "react";
import { Upload, Modal, Icon, message } from "antd";

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

class UploadImageUser extends Component {
  state = {
    previewVisible: false,
    loading: false,
    previewImage: "",
    fileList: []
  };

  componentDidUpdate(prevProps, prevState) {
    const { listImages } = this.props;
    console.log(listImages);
    if (prevProps.listImages !== listImages) {
      this.setState({ fileList: this.createFileList(this.props.listImages) });
    }
  }

  createFileList = listImages => {
    return listImages ? [this.createFile(listImages)] : [];
  };

  createFile = url => ({
    uid: url,
    name: url,
    status: "done",
    url
  });

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    this.setState({
      previewImage: file.url,
      previewVisible: true
    });
  };

  handleRemoveImage = () => {
    this.setState({
      fileList: []
    });
  };

  uploadImage = ({ file }) => {
    const formData = new FormData();
    formData.append("file", file);
    const { uploadImageUser, token } = this.props;
    uploadImageUser(token, formData, (err, res) => {
      if (!err) {
        this.setState({ fileList: this.createFileList(res.data.url) });
        this.props.onChangeAvatar(res.data.imageName);
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
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div>
        <Upload
          listType="picture-card"
          fileList={fileList}
          customRequest={this.uploadImage}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
          beforeUpload={beforeUpload}
          multiple={false}
          onRemove={this.handleRemoveImage}
        >
          {fileList.length > 0 ? null : uploadButton}
        </Upload>
        <Modal
          visible={previewVisible}
          footer={null}
          onCancel={this.handleCancel}
          zIndex={10000}
        >
          <img alt="example" style={{ width: "100%" }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

export default UploadImageUser;
