import React, { Component } from "react";
import Breadcrumb from "../../components/BreadBreadcrumb";
import ModalCreateNotification from "./components/ModalCreateNotification";
import { Table, Button, Popconfirm } from "antd";
import {
  actGetAllNotification,
  actDellNotification
} from "../../redux/actions/notification";
import { connect } from "react-redux";
import moment from "moment";

const quantity = 10;
const renderColumns = (onDeleteNotification, onShowModal) => [
  {
    title: "STT",
    dataIndex: "STT"
  },
  {
    title: "Người Tạo",
    dataIndex: "name",
    render: (text, record) => record.sender[0].admin[0].name
  },
  {
    title: "Tiêu Đề",
    dataIndex: "title",
    render: (text, record) => (
      <div style={{ color: "#40a9ff", textTransform: "capitalize" }}>
        {record.title}
      </div>
    )
  },
  {
    title: "Nội Dung",
    dataIndex: "content"
  },
  {
    title: "Loại Thông Báo",
    dataIndex: "type",
    render: (text, record) => {
      if (record.type === 0) return "Tất cả User";
      else if (record.type === 1) return "User đến Master";
      else if (record.type === 2) return "Master đến User";
      else if (record.type === 3) return "Group Master";
      else if (record.type === 4) return "Group User";
      else return "Tất cả Master";
    }
  },
  {
    title: "Ngày Tạo",
    dataIndex: "createdAt",
    filters: [
      { text: "Tăng", value: "1" },
      { text: "Giảm", value: "-1" }
    ],
    filterMultiple: false,
    render: (text, record) =>
      moment(record.createdAt).format("DD-MM-YYYY-h:mm:ss a")
  },
  {
    title: "Thao Tác",
    dataIndex: "action",
    render: (text, record) => (
      <span>
        <Button
          type="primary"
          ghost
          style={{ marginRight: 10 }}
          onClick={() => onShowModal(record)}
        >
          Sửa
        </Button>
        <Popconfirm
          placement="bottomLeft"
          title="Bạn có chắc chắn muốn xóa"
          onConfirm={() => onDeleteNotification(record._id)}
          okText="Có"
          cancelText="Không"
        >
          <Button type="danger" ghost>
            Xóa
          </Button>
        </Popconfirm>
      </span>
    )
  }
];

class ManageNotification extends Component {
  state = {
    page: 1,
    isTableLoading: false,
    isModalVisible: false,
    selectedNotification: {}
  };

  componentDidMount() {
    this.onGetAllNotification();
  }

  onGetAllNotification = () => {
    const { token, actGetAllNotification } = this.props;
    const { page } = this.state;
    this.setState({
      isTableLoading: true
    });
    actGetAllNotification(token, page, quantity, (er, res) => {
      res &&
        this.setState({
          isTableLoading: false
        });
    });
  };

  onTableChange = (pagination, filters, sorter) => {
    this.setState(
      {
        page: pagination.current,
        filters
      },
      () => {
        this.onGetAllNotification();
      }
    );
  };

  onDeleteNotification = notificationId => {
    const { token, actDellNotification } = this.props;
    this.setState({
      isTableLoading: true
    });
    actDellNotification(token, notificationId, (er, res) => {
      res &&
        this.setState({
          isTableLoading: false
        });
      this.onGetAllNotification();
    });
  };

  onShowModal = record => {
    this.setState({
      isModalVisible: true,
      selectedNotification: record
    });
  };

  onHideModal = record => {
    this.setState({
      isModalVisible: false,
      selectedNotification: record
    });
  };

  onShowModalCreate = () => {
    this.setState({
      isModalVisible: true,
      selectedNotification: {}
    });
  };

  render() {
    const { isModalVisible, isTableLoading, selectedNotification } = this.state;
    const { allNotification, totalData } = this.props;
    const NotificationData = [];
    allNotification &&
      allNotification.length > 0 &&
      allNotification.forEach((infor, index) => {
        NotificationData.push({
          ...infor,
          STT: index + 1
        });
      });

    return (
      <div>
        <Breadcrumb title={"Danh sách thông báo"} />
        <div className=" hasTable">
          <div className="add-button">
            <Button
              type="primary"
              shape="round"
              icon="plus"
              onClick={this.onShowModalCreate}
            >
              Tạo mới
            </Button>
          </div>
          <div className="page-header-wrap-children-content">
            <Table
              rowKey={record => record._id}
              columns={renderColumns(
                this.onDeleteNotification,
                this.onShowModal
              )}
              dataSource={NotificationData}
              pagination={{
                total: totalData,
                pageSize: quantity
              }}
              scroll={{ x: true }}
              onChange={this.onTableChange}
              loading={isTableLoading}
            />
          </div>
        </div>
        <ModalCreateNotification
          onHideModal={this.onHideModal}
          isModalVisible={isModalVisible}
          onGetAllNotification={this.onGetAllNotification}
          selectedNotification={selectedNotification}
        />
      </div>
    );
  }
}

export default connect(
  state => ({
    token: state.Auth.token,
    allNotification: state.Notification.allNotification,
    totalPage: state.Notification.totalPage,
    totalData: state.Notification.totalData
  }),
  { actGetAllNotification, actDellNotification }
)(ManageNotification);
